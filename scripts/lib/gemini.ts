/**
 * Thin wrapper around the free Gemini Developer API (Google AI Studio) —
 * NOT Vertex AI. This is the endpoint that issues API keys with no billing
 * account required. If Google ever changes that, this file is the one
 * place that would need to change; the rest of the pipeline doesn't care.
 *
 * https://ai.google.dev/gemini-api/docs/pricing lists this model family as
 * free-of-charge as of the time this was written — verify at that URL
 * (or https://aistudio.google.com/rate-limit for your own account) before
 * relying on it, since free-tier terms can change.
 */
const MODEL = "gemini-2.5-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

export class MissingApiKeyError extends Error {
  constructor() {
    super("GEMINI_API_KEY is not set — refusing to run, no request was made.");
    this.name = "MissingApiKeyError";
  }
}

export class GeminiRateLimitError extends Error {
  constructor() {
    super("Gemini free-tier rate limit or quota hit — aborting safely, no paid fallback will be used.");
    this.name = "GeminiRateLimitError";
  }
}

export class GeminiRequestError extends Error {
  constructor(status: number, body: string) {
    super(`Gemini API request failed (HTTP ${status}): ${body.slice(0, 500)}`);
    this.name = "GeminiRequestError";
  }
}

export class MalformedResponseError extends Error {
  constructor(detail: string) {
    super(`Gemini response was not usable: ${detail}`);
    this.name = "MalformedResponseError";
  }
}

export interface GeneratedArticle {
  title: string;
  slug: string;
  metaDescription: string;
  excerpt: string;
  category: "webdev" | "ai" | "cloud" | "security";
  tags: string[];
  intro: string;
  whatHappened: string;
  whyItMatters: string;
  howItWorks: string;
  practicalImplications: string;
  keyTakeaways: string[];
  cta: { text: string; href: string } | null;
}

const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string" },
    slug: { type: "string" },
    metaDescription: { type: "string" },
    excerpt: { type: "string" },
    category: { type: "string", enum: ["webdev", "ai", "cloud", "security"] },
    tags: { type: "array", items: { type: "string" }, minItems: 2, maxItems: 5 },
    intro: { type: "string" },
    whatHappened: { type: "string" },
    whyItMatters: { type: "string" },
    howItWorks: { type: "string" },
    practicalImplications: { type: "string" },
    keyTakeaways: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 5 },
    cta: {
      type: "object",
      nullable: true,
      properties: { text: { type: "string" }, href: { type: "string" } },
      required: ["text", "href"],
    },
  },
  required: [
    "title", "slug", "metaDescription", "excerpt", "category", "tags",
    "intro", "whatHappened", "whyItMatters", "howItWorks", "practicalImplications", "keyTakeaways",
  ],
};

interface TopicInput {
  sourceTitle: string;
  sourceUrl: string;
  sourceName: string;
  suggestedTag: string;
}

const buildPrompt = (topic: TopicInput, allowedCtaLinks: { text: string; href: string }[]) => `
You are writing one original article for Celertus.ai, a marketing-and-technology studio's "Insights" page.

A headline from a technology source is provided ONLY as a topic seed. You must NOT copy, quote at length, or closely paraphrase the source article. Write an independent, original explanation of the underlying topic in your own words, as if for a general technology-literate business audience.

Topic seed (inspiration only — do not reproduce its text):
- Headline: "${topic.sourceTitle}"
- Source: ${topic.sourceName} (${topic.sourceUrl})
- Suggested category: ${topic.suggestedTag}

Write the article with these constraints:
- Plain, clear language. No generic AI filler phrases ("in today's fast-paced world", "in conclusion", etc.).
- No keyword stuffing, no unsupported claims, no fake statistics.
- If the topic involves a recent event, mention the approximate timeframe in relative terms (e.g. "this week") rather than inventing a specific date you cannot verify.
- Ground it in one of: AI, software development, automation, cybersecurity, cloud, data, or digital transformation.
- Do NOT turn this into a sales pitch. Only include a "cta" if one of the provided links is genuinely relevant to the topic; otherwise set "cta" to null. Never invent a link that is not in this list:
${allowedCtaLinks.map((l) => `  - href: "${l.href}" — about: ${l.text}`).join("\n")}
- "slug" must be lowercase kebab-case, derived from the title, no dates, 3-6 words.
- "metaDescription" must be 120-160 characters.
- "excerpt" must be 1-2 sentences, under 200 characters.
- Each of intro/whatHappened/whyItMatters/howItWorks/practicalImplications should be 2-4 short paragraphs of plain text, paragraphs separated by a blank line (\\n\\n). Total article should read in roughly 5-7 minutes.
- "keyTakeaways" is 3-5 short bullet strings.

Return ONLY the JSON object described by the response schema — no markdown, no commentary.
`.trim();

async function callOnce(apiKey: string, prompt: string): Promise<Response> {
  return fetch(`${ENDPOINT}?key=${encodeURIComponent(apiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: RESPONSE_SCHEMA,
        temperature: 0.6,
      },
    }),
  });
}

/**
 * Generates one article. Makes AT MOST two HTTP requests total (one retry,
 * only on a transient/rate-limit response) to honour "minimize API calls" —
 * never loops, never falls back to a different/paid model.
 */
export async function generateArticle(
  topic: TopicInput,
  allowedCtaLinks: { text: string; href: string }[],
): Promise<GeneratedArticle> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new MissingApiKeyError();

  const prompt = buildPrompt(topic, allowedCtaLinks);

  let res = await callOnce(apiKey, prompt);

  if (res.status === 429) {
    console.warn("[gemini] 429 received, waiting 20s for one safe retry (no fallback model)...");
    await new Promise((r) => setTimeout(r, 20_000));
    res = await callOnce(apiKey, prompt);
  }

  if (res.status === 429) throw new GeminiRateLimitError();
  if (!res.ok) throw new GeminiRequestError(res.status, await res.text());

  const payload = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const text = payload?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new MalformedResponseError("no text part in Gemini response");

  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new MalformedResponseError("response text was not valid JSON");
  }

  return parsed as GeneratedArticle;
}
