import { validateArticle } from "../lib/validate-article.ts";
import { isDuplicate } from "../lib/dedupe.ts";

// 1. A broken article should fail validation with specific, useful errors.
const broken = {
  title: "Too short",
  slug: "Not Valid Slug!!",
  metaDescription: "short",
  excerpt: "",
  category: "marketing", // not in the allowed enum
  tags: [],
  intro: "hi",
  whatHappened: "",
  whyItMatters: "",
  howItWorks: "",
  practicalImplications: "",
  keyTakeaways: ["only one"],
  cta: { text: "click", href: "https://not-on-the-whitelist.example.com" },
};
const result = validateArticle(broken, ["/contact", "/services"], undefined);
console.log("broken article valid? (expect false):", result.ok);
console.log("errors found:", result.errors.length, "(expect several)");
result.errors.forEach((e) => console.log("  -", e));

// 2. A secret-shaped string anywhere in the article must fail validation.
const leaky = {
  title: "A perfectly fine title about something",
  slug: "a-perfectly-fine-title",
  metaDescription: "A meta description that is a reasonable length for SEO purposes here, yes.",
  excerpt: "A short excerpt sentence that is long enough.",
  category: "ai",
  tags: ["ai"],
  intro: "This paragraph is definitely long enough to pass the minimum length check easily.",
  whatHappened: "This paragraph is definitely long enough to pass the minimum length check easily.",
  whyItMatters: "This paragraph is definitely long enough to pass the minimum length check easily.",
  howItWorks: "This paragraph is definitely long enough to pass the minimum length check easily. AIzaSyFAKEKEYLOOKSLIKEAREALONE1234",
  practicalImplications: "This paragraph is definitely long enough to pass the minimum length check easily.",
  keyTakeaways: ["one", "two", "three"],
  cta: null,
};
const leakyResult = validateArticle(leaky, ["/contact"], undefined);
console.log("\nleaky article valid? (expect false):", leakyResult.ok);
console.log("caught secret-like string:", leakyResult.errors.some((e) => e.includes("API-key-shaped")));

// 3. Near-duplicate title detection.
const existing = [{ title: "OpenAI launches new voice model for developers", sourceUrl: "https://a.example.com/1" }];
console.log("\nnear-duplicate rewrite detected? (expect true):", isDuplicate("New voice model for developers launched by OpenAI", "https://b.example.com/2", existing));
console.log("unrelated topic falsely flagged? (expect false):", isDuplicate("Kubernetes 1.32 adds native gateway support", "https://c.example.com/3", existing));
console.log("same URL always flagged? (expect true):", isDuplicate("A totally different title", "https://a.example.com/1", existing));
