// Manual integration test — NOT part of the pipeline. Stubs only the
// Gemini endpoint (so zero real AI calls happen) while letting real RSS
// fetches through, to exercise the full script without touching git or
// spending any quota. Run with: node scripts/__tests__/run-stubbed.mjs
const realFetch = globalThis.fetch;
globalThis.fetch = async (url, init) => {
  const href = typeof url === "string" ? url : url.toString();
  if (href.includes("generativelanguage.googleapis.com")) {
    console.log("[stub] intercepted Gemini call — returning canned success response, no real API call made");
    const body = {
      title: "Why Edge Caching Keeps Coming Back Into Fashion",
      slug: "why-edge-caching-keeps-coming-back",
      metaDescription: "A look at why teams keep rediscovering edge caching as a fix for slow global apps, and when it actually helps.",
      excerpt: "Edge caching is having another moment. Here's what it actually fixes.",
      category: "cloud",
      tags: ["cloud", "performance", "architecture"],
      intro: "Every few years, a wave of teams rediscovers edge caching.\n\nThis time the trigger is different, but the shape of the discussion is familiar.",
      whatHappened: "Several infrastructure providers have been expanding edge compute and caching options.\n\nThe pattern is the same: push logic and cached responses closer to users.",
      whyItMatters: "Latency compounds. A few hundred milliseconds saved on every request adds up across a session.\n\nFor global products, this is often cheaper than optimizing application code further.",
      howItWorks: "A CDN's edge nodes cache responses close to the requester.\n\nSmart invalidation and short TTLs make this safe even for semi-dynamic content.",
      practicalImplications: "Teams should identify the 20% of requests that are safe to cache and start there.\n\nFull-page caching is rarely realistic; targeted caching usually is.",
      keyTakeaways: [
        "Edge caching mainly helps read-heavy, latency-sensitive traffic",
        "Start with static or semi-static responses before anything dynamic",
        "Invalidation strategy matters more than cache duration",
      ],
      cta: { text: "Celertus's services (growth & technology)", href: "/services" },
    };
    return new Response(
      JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify(body) }] } }] }),
      { status: 200, headers: { "content-type": "application/json" } },
    );
  }
  return realFetch(url, init);
};

process.env.GEMINI_API_KEY = "test-stub-key-not-real";

await import("../generate-daily-insight.ts");
