# Insights content store

This directory **is the database** for Celertus's own auto-generated Insights
articles — no CMS, no external database. It's committed to the repo like
any other file, and read at build time by `src/lib/insights.ts`.

- `index.json` — a lightweight manifest of every generated article (used for
  the Insights grid, duplicate-detection, and sitemap generation). Each entry:

  ```json
  {
    "slug": "kebab-case-slug",
    "title": "...",
    "excerpt": "...",
    "category": "webdev | ai | cloud | security",
    "tags": ["..."],
    "sourceName": "GitHub Blog",
    "sourceUrl": "https://...",
    "publishedAt": "2026-09-19T03:30:00.000Z",
    "modifiedAt": "2026-09-19T03:30:00.000Z",
    "readingTimeMinutes": 6
  }
  ```

- `<slug>.json` — the full article body for that slug (same shape as the
  index entry, plus `intro`, `whatHappened`, `whyItMatters`, `howItWorks`,
  `practicalImplications`, `keyTakeaways`, `cta`).

Both are written by `scripts/generate-daily-insight.ts`, run daily by
`.github/workflows/daily-insights.yml`. See that workflow file and the
repo's main README for how to configure/disable it.

Nothing in this directory is ever committed unless a generation run passes
every validation check in `scripts/lib/validate-article.ts` — a failed or
rate-limited run leaves these files untouched.
