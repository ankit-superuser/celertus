# Manual test harnesses for the Insights automation

These are not part of the CI pipeline — they're kept as reusable manual
checks for whenever you edit `scripts/generate-daily-insight.ts` or its
dependencies. None of them make a real Gemini call or touch git.

- `run-stubbed.mjs` — full pipeline with real RSS discovery + a **stubbed**
  Gemini response (no real API key needed, no real AI call made).
  ```bash
  AUTO_PUBLISH=false npx tsx scripts/__tests__/run-stubbed.mjs   # dry run, writes nothing
  AUTO_PUBLISH=true SKIP_GIT=true npx tsx scripts/__tests__/run-stubbed.mjs  # writes files, skips git
  ```
  After a `SKIP_GIT=true` run, clean up with:
  ```bash
  rm content/insights/<generated-slug>.json
  echo '[]' > content/insights/index.json
  npx tsx scripts/generate-sitemap.ts
  ```

- `run-failure-modes.mjs` — exercises the failure paths that are hard to
  trigger for real:
  ```bash
  SCENARIO=rss-down   npx tsx scripts/__tests__/run-failure-modes.mjs  # every RSS source fails
  SCENARIO=rate-limit npx tsx scripts/__tests__/run-failure-modes.mjs  # 429 twice, one safe retry, then abort (~20s)
  SCENARIO=malformed  npx tsx scripts/__tests__/run-failure-modes.mjs  # Gemini returns non-JSON text
  ```
  All three should exit non-zero and write nothing.

- `unit-checks.mjs` — pure logic checks for `lib/validate-article.ts` and
  `lib/dedupe.ts` (bad-article rejection, secret-leak detection, near-duplicate
  title detection):
  ```bash
  npx tsx scripts/__tests__/unit-checks.mjs
  ```

The real "missing API key" path needs no stub — just run the real script
with no key set:
```bash
GEMINI_API_KEY= npx tsx scripts/generate-daily-insight.ts
```
