/**
 * Daily entrypoint run by .github/workflows/daily-insights.yml.
 *
 * Contract: this script either (a) writes zero files and exits non-zero,
 * or (b) writes a fully-validated article + updated index + sitemap and
 * exits zero. There is no partial-write state — every failure path below
 * returns before touching disk.
 */
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { TECH_SOURCES } from "./config/tech-sources";
import { fetchFeed, FeedItem } from "./lib/rss";
import { isDuplicate, ExistingArticle } from "./lib/dedupe";
import { generateArticle, MissingApiKeyError, GeminiRateLimitError, GeminiRequestError, MalformedResponseError, GeneratedArticle } from "./lib/gemini";
import { validateArticle } from "./lib/validate-article";
import { buildSitemap } from "./generate-sitemap";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const CONTENT_DIR = path.join(ROOT, "content/insights");
const INDEX_PATH = path.join(CONTENT_DIR, "index.json");
const SITEMAP_PATH = path.join(ROOT, "public/sitemap.xml");

const AUTO_PUBLISH = process.env.AUTO_PUBLISH !== "false"; // default true, per spec.
const WORDS_PER_MINUTE = 200;

interface IndexEntry {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  sourceName: string;
  sourceUrl: string;
  publishedAt: string;
  modifiedAt: string;
  readingTimeMinutes: number;
}

function fail(message: string): never {
  console.error(`::error::${message}`);
  process.exit(1);
}

function loadIndex(): IndexEntry[] {
  if (!existsSync(INDEX_PATH)) return [];
  try {
    return JSON.parse(readFileSync(INDEX_PATH, "utf-8"));
  } catch {
    fail("content/insights/index.json exists but is not valid JSON — refusing to proceed to avoid overwriting an unreadable index.");
  }
}

function todayISO(): string {
  return new Date().toISOString();
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60)
    .replace(/-$/, "");
}

function uniqueSlug(base: string, existing: IndexEntry[]): string {
  const taken = new Set(existing.map((e) => e.slug));
  if (!taken.has(base)) return base;
  let i = 2;
  while (taken.has(`${base}-${i}`)) i++;
  return `${base}-${i}`;
}

function wordsIn(...sections: string[]): number {
  return sections.join(" ").split(/\s+/).filter(Boolean).length;
}

async function pickTopic(existing: ExistingArticle[]): Promise<(FeedItem & { tag: string }) | null> {
  const results = await Promise.allSettled(
    TECH_SOURCES.map(async (src) => (await fetchFeed(src.url, src.name)).map((item) => ({ ...item, tag: src.tag }))),
  );

  const allItems = results.flatMap((r) => (r.status === "fulfilled" ? r.value : []));
  if (allItems.length === 0) return null; // caller decides: this is the "all RSS sources failed" case.

  const candidates = allItems.filter((item) => !isDuplicate(item.title, item.link, existing));
  if (candidates.length === 0) return "no-fresh-topic" as never; // sentinel handled by caller.

  candidates.sort((a, b) => (b.pubDate ? Date.parse(b.pubDate) : 0) - (a.pubDate ? Date.parse(a.pubDate) : 0));
  return candidates[0];
}

const ALLOWED_CTA_LINKS = [
  { text: "Talk to Celertus about a project", href: "/contact" },
  { text: "Celertus's services (growth & technology)", href: "/services" },
  { text: "Case studies of work Celertus has shipped", href: "/work" },
];

async function main() {
  mkdirSync(CONTENT_DIR, { recursive: true });
  const index = loadIndex();

  const today = todayISO().slice(0, 10);
  if (index.some((e) => e.publishedAt.slice(0, 10) === today)) {
    console.log(`[insights] already published an article today (${today}) — nothing to do.`);
    return;
  }

  if (!process.env.GEMINI_API_KEY) {
    fail("GEMINI_API_KEY is not set. Add it as a GitHub Actions secret — see content/insights/README.md. No request was made.");
  }

  console.log("[insights] fetching RSS sources for topic discovery...");
  const topic = await pickTopic(index);

  if (topic === null) {
    fail("Every configured RSS source failed to respond — nothing to write, previous content is untouched. Check scripts/config/tech-sources.ts for dead feed URLs.");
  }
  if ((topic as unknown) === "no-fresh-topic") {
    console.log("[insights] every candidate headline duplicates an already-published article — skipping today without error.");
    return;
  }

  console.log(`[insights] topic: "${topic.title}" (${topic.sourceName})`);

  let generated: GeneratedArticle;
  try {
    generated = await generateArticle(
      { sourceTitle: topic.title, sourceUrl: topic.link, sourceName: topic.sourceName, suggestedTag: topic.tag },
      ALLOWED_CTA_LINKS,
    );
  } catch (err) {
    if (err instanceof MissingApiKeyError) fail(err.message);
    if (err instanceof GeminiRateLimitError) fail(err.message);
    if (err instanceof GeminiRequestError) fail(err.message);
    if (err instanceof MalformedResponseError) fail(err.message);
    fail(`Unexpected error calling Gemini: ${(err as Error).message}`);
  }

  const validation = validateArticle(generated, ALLOWED_CTA_LINKS.map((l) => l.href), process.env.GEMINI_API_KEY);
  if (!validation.ok) {
    fail(`Generated article failed validation, not publishing:\n- ${validation.errors.join("\n- ")}`);
  }

  const slug = uniqueSlug(generated.slug || slugify(generated.title), index);
  const now = todayISO();
  const readingTimeMinutes = Math.max(
    3,
    Math.round(wordsIn(generated.intro, generated.whatHappened, generated.whyItMatters, generated.howItWorks, generated.practicalImplications) / WORDS_PER_MINUTE),
  );

  const fullArticle = {
    ...generated,
    slug,
    sourceName: topic.sourceName,
    sourceUrl: topic.link,
    publishedAt: now,
    modifiedAt: now,
    readingTimeMinutes,
  };

  const indexEntry: IndexEntry = {
    slug,
    title: fullArticle.title,
    excerpt: fullArticle.excerpt,
    category: fullArticle.category,
    tags: fullArticle.tags,
    sourceName: fullArticle.sourceName,
    sourceUrl: fullArticle.sourceUrl,
    publishedAt: fullArticle.publishedAt,
    modifiedAt: fullArticle.modifiedAt,
    readingTimeMinutes: fullArticle.readingTimeMinutes,
  };

  if (!AUTO_PUBLISH) {
    console.log("[insights] AUTO_PUBLISH=false — generated + validated the article but will NOT write or commit it.");
    console.log(JSON.stringify(indexEntry, null, 2));
    return;
  }

  writeFileSync(path.join(CONTENT_DIR, `${slug}.json`), JSON.stringify(fullArticle, null, 2) + "\n");
  writeFileSync(INDEX_PATH, JSON.stringify([indexEntry, ...index], null, 2) + "\n");
  writeFileSync(SITEMAP_PATH, buildSitemap(today));
  console.log(`[insights] wrote content/insights/${slug}.json, updated index.json and sitemap.xml`);

  if (process.env.SKIP_GIT === "true") {
    console.log("[insights] SKIP_GIT=true — leaving changes uncommitted (local test mode).");
    return;
  }

  execSync('git config user.name "celertus-insights-bot"', { cwd: ROOT });
  execSync('git config user.email "actions@users.noreply.github.com"', { cwd: ROOT });
  execSync(`git add content/insights/${slug}.json content/insights/index.json public/sitemap.xml`, { cwd: ROOT });
  execSync(`git commit -m "content: add insight — ${fullArticle.title.replace(/"/g, "'")}"`, { cwd: ROOT });
  execSync("git push", { cwd: ROOT });
  console.log("[insights] committed and pushed — the existing deploy workflow will publish it.");
}

main().catch((err) => fail(`Unhandled error: ${(err as Error).stack || err}`));
