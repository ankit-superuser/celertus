/**
 * Minimal, dependency-free RSS 2.0 / Atom parser. Good enough for headline
 * discovery (title + link + date) without adding an XML-parsing package —
 * this pipeline only ever reads three fields, so a small regex parser is
 * more auditable than a full dependency for the job.
 */
export interface FeedItem {
  title: string;
  link: string;
  pubDate: string | null;
  sourceName: string;
}

const decodeEntities = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .trim();

const firstMatch = (xml: string, tag: string): string | null => {
  const m = xml.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return m ? decodeEntities(m[1]) : null;
};

/** Atom feeds use `<link href="..."/>` instead of a text link element. */
const atomLink = (xml: string): string | null => {
  const m = xml.match(/<link\b[^>]*\brel=["']?alternate["']?[^>]*\bhref=["']([^"']+)["']/i) ||
    xml.match(/<link\b[^>]*\bhref=["']([^"']+)["']/i);
  return m ? decodeEntities(m[1]) : null;
};

export function parseFeed(xml: string, sourceName: string): FeedItem[] {
  const blocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) ?? xml.match(/<entry\b[\s\S]*?<\/entry>/gi) ?? [];

  return blocks
    .map((block): FeedItem | null => {
      const title = firstMatch(block, "title");
      const link = firstMatch(block, "link") || atomLink(block) || firstMatch(block, "guid");
      const pubDate = firstMatch(block, "pubDate") || firstMatch(block, "published") || firstMatch(block, "updated");
      if (!title || !link) return null;
      return { title, link, pubDate, sourceName };
    })
    .filter((item): item is FeedItem => item !== null);
}

/**
 * Fetches one feed with a timeout and returns [] on any failure — callers
 * should treat an empty array as "this source is unavailable right now",
 * not a fatal error, since other sources may still succeed.
 */
export async function fetchFeed(url: string, sourceName: string, timeoutMs = 10_000): Promise<FeedItem[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "celertus-insights-bot/1.0 (+https://celertus.germanysoon.com)" },
    });
    if (!res.ok) {
      console.warn(`[rss] ${sourceName}: HTTP ${res.status}, skipping this source`);
      return [];
    }
    const xml = await res.text();
    return parseFeed(xml, sourceName);
  } catch (err) {
    console.warn(`[rss] ${sourceName}: ${(err as Error).message}, skipping this source`);
    return [];
  } finally {
    clearTimeout(timer);
  }
}
