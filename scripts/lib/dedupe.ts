const STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "but", "of", "in", "on", "for", "to", "is", "are",
  "was", "were", "with", "at", "by", "from", "as", "how", "why", "what", "new",
  "this", "that", "it", "its", "your", "you", "we", "our", "now", "just",
]);

/** Lowercased, punctuation-stripped, stopword-free bag of words — used both
 *  as a dedupe key and for near-duplicate similarity scoring. */
export function fingerprint(title: string): Set<string> {
  return new Set(
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOPWORDS.has(w)),
  );
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  for (const w of a) if (b.has(w)) intersection++;
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

export interface ExistingArticle {
  title: string;
  sourceUrl?: string | null;
}

/**
 * True if `candidateTitle`/`candidateUrl` is the same story (or an obvious
 * near-duplicate) as something already published. Threshold of 0.5 catches
 * "X launches Y" vs "Y launched by X" rewrites without flagging unrelated
 * stories that merely share a couple of common tech words.
 */
export function isDuplicate(
  candidateTitle: string,
  candidateUrl: string,
  existing: ExistingArticle[],
  threshold = 0.5,
): boolean {
  const candidateFp = fingerprint(candidateTitle);
  return existing.some((a) => {
    if (a.sourceUrl && a.sourceUrl === candidateUrl) return true;
    return jaccard(candidateFp, fingerprint(a.title)) >= threshold;
  });
}
