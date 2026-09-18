// Exercises the failure paths that are hard to trigger for real:
// rate-limit retry, malformed response, and total RSS outage.
const scenario = process.env.SCENARIO;
const realFetch = globalThis.fetch;
let geminiCallCount = 0;

globalThis.fetch = async function (url, init) {
  const href = typeof url === "string" ? url : url.toString();

  if (scenario === "rss-down") {
    return new Response("nope", { status: 500 });
  }

  if (href.indexOf("generativelanguage.googleapis.com") !== -1) {
    geminiCallCount = geminiCallCount + 1;
    if (scenario === "rate-limit") {
      console.log("[stub] Gemini call number " + geminiCallCount + ": returning 429");
      return new Response("quota exceeded", { status: 429 });
    }
    if (scenario === "malformed") {
      console.log("[stub] Gemini call: returning garbage text instead of JSON");
      var garbage = "not valid json";
      var wrapped = { candidates: [{ content: { parts: [{ text: garbage }] } }] };
      return new Response(JSON.stringify(wrapped), { status: 200, headers: { "content-type": "application/json" } });
    }
  }

  return realFetch(url, init);
};

process.env.GEMINI_API_KEY = "test-stub-key-not-real";
process.env.AUTO_PUBLISH = "false";

await import("../generate-daily-insight.ts");
