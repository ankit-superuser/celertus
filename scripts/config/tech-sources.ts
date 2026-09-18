/**
 * Free, no-key RSS/Atom feeds used purely for DAILY TOPIC DISCOVERY —
 * the generation script never republishes their text, only reads
 * headline + link + date as inspiration for an original article.
 *
 * Add or remove feeds freely; nothing else in the pipeline needs to change.
 * `tag` maps the feed to one of the site's existing Insights filter chips
 * (see FEED_TAGS in src/pages/Insights.tsx) so generated articles slot into
 * the same categories the live Dev.to feed already uses.
 */
export interface TechSource {
  name: string;
  url: string;
  tag: "webdev" | "ai" | "cloud" | "security";
}

export const TECH_SOURCES: TechSource[] = [
  { name: "GitHub Blog", url: "https://github.blog/feed/", tag: "webdev" },
  { name: "Dev.to", url: "https://dev.to/feed", tag: "webdev" },
  { name: "Cloudflare Blog", url: "https://blog.cloudflare.com/rss/", tag: "cloud" },
  { name: "AWS News Blog", url: "https://aws.amazon.com/blogs/aws/feed/", tag: "cloud" },
  { name: "Mozilla Hacks", url: "https://hacks.mozilla.org/feed/", tag: "webdev" },
  { name: "Smashing Magazine", url: "https://www.smashingmagazine.com/feed/", tag: "webdev" },
  { name: "Google Security Blog", url: "https://security.googleblog.com/feeds/posts/default", tag: "security" },
  { name: "Hacker News (front page)", url: "https://hnrss.org/frontpage", tag: "ai" },
];
