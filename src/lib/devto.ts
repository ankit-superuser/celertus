export interface DevToArticle {
  id: number;
  title: string;
  description: string | null;
  url: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  user: { name: string; username: string };
}

const CACHE_TTL_MS = 20 * 60 * 1000; // 20 minutes — Dev.to's feed doesn't change fast enough to need fresher polling.
const memoryCache = new Map<string, { data: DevToArticle[]; ts: number }>();

const readSessionCache = (key: string): { data: DevToArticle[]; ts: number } | null => {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null; // private browsing / storage disabled — fall through to a live fetch.
  }
};

const writeSessionCache = (key: string, entry: { data: DevToArticle[]; ts: number }) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // Storage full or unavailable — the in-memory cache still covers this tab.
  }
};

/**
 * Fetches the latest technology articles from Dev.to's public REST API
 * (free, no API key, CORS-enabled — https://developers.forem.com/api).
 * `tag` filters to a specific Dev.to tag; an empty tag returns the top
 * articles from the last 7 days across the whole platform.
 */
export async function fetchDevToArticles(tag: string, perPage = 9): Promise<DevToArticle[]> {
  const key = `devto:${tag || "top"}:${perPage}`;
  const now = Date.now();

  const cached = memoryCache.get(key) ?? readSessionCache(key);
  if (cached && now - cached.ts < CACHE_TTL_MS) {
    memoryCache.set(key, cached);
    return cached.data;
  }

  const params = new URLSearchParams({ per_page: String(perPage) });
  if (tag) params.set("tag", tag);
  else params.set("top", "7");

  const res = await fetch(`https://dev.to/api/articles?${params.toString()}`);
  if (!res.ok) throw new Error(`Dev.to API responded with ${res.status}`);
  const data: DevToArticle[] = await res.json();

  const entry = { data, ts: now };
  memoryCache.set(key, entry);
  writeSessionCache(key, entry);
  return data;
}
