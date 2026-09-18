export interface OwnInsight {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: "webdev" | "ai" | "cloud" | "security";
  tags: string[];
  intro: string;
  whatHappened: string;
  whyItMatters: string;
  howItWorks: string;
  practicalImplications: string;
  keyTakeaways: string[];
  cta: { text: string; href: string } | null;
  sourceName: string;
  sourceUrl: string;
  publishedAt: string;
  modifiedAt: string;
  readingTimeMinutes: number;
}

// Bundled at build time — every generated article becomes part of the
// static site, same as any other page content. `eager` avoids a waterfall
// of dynamic-import requests for what's typically a handful of small files.
const modules = import.meta.glob("/content/insights/*.json", { eager: true }) as Record<string, { default: OwnInsight }>;

const ALL: OwnInsight[] = Object.entries(modules)
  .filter(([file]) => !file.endsWith("/index.json"))
  .map(([, mod]) => mod.default)
  .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

export const getAllOwnInsights = (): OwnInsight[] => ALL;

export const getOwnInsightBySlug = (slug: string): OwnInsight | undefined => ALL.find((a) => a.slug === slug);
