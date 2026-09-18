import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DOMAIN = "https://celertus.germanysoon.com";
const INDEX_PATH = path.join(ROOT, "content/insights/index.json");
const SITEMAP_PATH = path.join(ROOT, "public/sitemap.xml");

interface IndexEntry {
  slug: string;
  modifiedAt: string;
}

// The site's static routes — kept here as the single source of truth for
// the sitemap so this script never has to guess what changed elsewhere.
const STATIC_ROUTES: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/work", priority: "0.8", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/insights", priority: "0.8", changefreq: "daily" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/digital-marketing", priority: "0.8", changefreq: "monthly" },
  { path: "/performance-marketing", priority: "0.8", changefreq: "monthly" },
  { path: "/brand-content", priority: "0.8", changefreq: "monthly" },
  { path: "/web-development", priority: "0.8", changefreq: "monthly" },
  { path: "/mobile-development", priority: "0.8", changefreq: "monthly" },
  { path: "/backend-system", priority: "0.8", changefreq: "monthly" },
  { path: "/cloud-solutions", priority: "0.8", changefreq: "monthly" },
  { path: "/security-compliance", priority: "0.8", changefreq: "monthly" },
  { path: "/performance-optimization", priority: "0.8", changefreq: "monthly" },
];

function loadInsightsIndex(): IndexEntry[] {
  if (!existsSync(INDEX_PATH)) return [];
  try {
    return JSON.parse(readFileSync(INDEX_PATH, "utf-8"));
  } catch {
    console.warn("[sitemap] content/insights/index.json is unreadable — generating sitemap without article URLs");
    return [];
  }
}

export function buildSitemap(today: string): string {
  const entries = loadInsightsIndex();

  const urlXml = (loc: string, lastmod: string, changefreq: string, priority: string) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

  const staticXml = STATIC_ROUTES.map((r) => urlXml(`${DOMAIN}${r.path}`, today, r.changefreq, r.priority));
  const articleXml = entries.map((e) =>
    urlXml(`${DOMAIN}/insights/${e.slug}`, (e.modifiedAt || today).slice(0, 10), "monthly", "0.6"),
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${[...staticXml, ...articleXml].join("\n")}
</urlset>
`;
}

// Only run when executed directly (not when imported by tests).
if (import.meta.url === `file://${process.argv[1]}`) {
  const today = new Date().toISOString().slice(0, 10);
  writeFileSync(SITEMAP_PATH, buildSitemap(today));
  console.log(`[sitemap] wrote ${SITEMAP_PATH}`);
}
