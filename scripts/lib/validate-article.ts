import type { GeneratedArticle } from "./gemini";

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MIN_SECTION_LEN = 40; // characters — catches empty/near-empty sections without being strict about style.

/**
 * Defence-in-depth: even though the prompt tells the model to only use
 * whitelisted CTA links, never trust generated output — a secret leaking
 * into published content is the one failure mode with no clean recovery,
 * so this check runs regardless of how confident the prompt is.
 */
function containsSecretLike(value: string, apiKey: string | undefined): boolean {
  if (apiKey && value.includes(apiKey)) return true;
  return /AIza[0-9A-Za-z_-]{10,}/.test(value); // Google API key prefix pattern.
}

export function validateArticle(
  article: Partial<GeneratedArticle>,
  allowedCtaHrefs: string[],
  apiKey: string | undefined,
): ValidationResult {
  const errors: string[] = [];
  const req = (cond: boolean, msg: string) => { if (!cond) errors.push(msg); };

  req(!!article.title && article.title.trim().length >= 10, "title missing or too short");
  req(!!article.slug && SLUG_RE.test(article.slug), "slug missing or not valid kebab-case");
  req(!!article.metaDescription && article.metaDescription.length >= 50 && article.metaDescription.length <= 300, "metaDescription missing or wrong length");
  req(!!article.excerpt && article.excerpt.trim().length >= 20, "excerpt missing or too short");
  req(!!article.category && ["webdev", "ai", "cloud", "security"].includes(article.category), "category missing or invalid");
  req(Array.isArray(article.tags) && article.tags.length >= 1, "tags missing or empty");

  for (const field of ["intro", "whatHappened", "whyItMatters", "howItWorks", "practicalImplications"] as const) {
    req(!!article[field] && article[field]!.trim().length >= MIN_SECTION_LEN, `${field} missing or too short`);
  }

  req(Array.isArray(article.keyTakeaways) && article.keyTakeaways.length >= 2, "keyTakeaways missing or too few");

  if (article.cta) {
    req(!!article.cta.text && !!article.cta.href, "cta present but incomplete");
    req(allowedCtaHrefs.includes(article.cta.href), `cta.href "${article.cta.href}" is not in the allowed link whitelist`);
  }

  const allText = JSON.stringify(article);
  req(!containsSecretLike(allText, apiKey), "generated content appears to contain an API-key-shaped string");

  return { ok: errors.length === 0, errors };
}
