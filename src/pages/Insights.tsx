import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, ExternalLink, RefreshCw } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { fetchDevToArticles, DevToArticle } from "@/lib/devto";
import { getAllOwnInsights } from "@/lib/insights";

const EMBER = "#FF6A45";
const TEAL = "#00CFC1";
const INDIGO = "#5B5BF5";

const FEED_TAGS = [
  { key: "", label: "Everything", color: "#0A0D18" },
  { key: "webdev", label: "Web Dev", color: TEAL },
  { key: "ai", label: "AI", color: INDIGO },
  { key: "cloud", label: "Cloud", color: EMBER },
  { key: "security", label: "Security", color: TEAL },
] as const;

const FALLBACK_GRADIENTS = [
  "linear-gradient(140deg,#0A0D18,#5B5BF5 60%,#FF6A45)",
  "linear-gradient(140deg,#0A0D18,#00CFC1)",
  "linear-gradient(140deg,#0A0D18,#FF6A45)",
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

interface UnifiedCard {
  id: string;
  href: string;
  external: boolean;
  coverImage: string | null;
  tag: string;
  readMin: number;
  title: string;
  excerpt: string | null;
  byline: string;
  date: string;
}

const insightsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://celertus.germanysoon.com/" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://celertus.germanysoon.com/insights" },
    ],
  },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Same free Sheety endpoint the Contact page already posts to — see src/pages/Contact.tsx.
const SHEETY_API_URL = "https://api.sheety.co/7c902e1a3a2e23b195242f624ed6ddc6/nuroviClients/sheet1";

const Insights = () => {
  const [tag, setTag] = useState<string>(FEED_TAGS[0].key);
  const [retryToken, setRetryToken] = useState(0);
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [feedState, setFeedState] = useState<"loading" | "ready" | "error">("loading");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setFeedState("loading");
    fetchDevToArticles(tag)
      .then((data) => {
        if (cancelled) return;
        setArticles(data);
        setFeedState("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setFeedState("error");
      });
    return () => {
      cancelled = true;
    };
  }, [tag, retryToken]);

  const ownCards: UnifiedCard[] = useMemo(
    () =>
      getAllOwnInsights()
        .filter((a) => !tag || a.category === tag)
        .map((a) => ({
          id: `own:${a.slug}`,
          href: `/insights/${a.slug}`,
          external: false,
          coverImage: null,
          tag: a.category,
          readMin: a.readingTimeMinutes,
          title: a.title,
          excerpt: a.excerpt,
          byline: "By Celertus.ai",
          date: a.publishedAt,
        })),
    [tag],
  );

  const devToCards: UnifiedCard[] = useMemo(
    () =>
      articles.map((a) => ({
        id: `devto:${a.id}`,
        href: a.url,
        external: true,
        coverImage: a.cover_image,
        tag: a.tag_list[0] ?? "tech",
        readMin: a.reading_time_minutes,
        title: a.title,
        excerpt: a.description,
        byline: `By ${a.user.name}`,
        date: a.published_at,
      })),
    [articles],
  );

  // Own articles render immediately (they're static, no network wait) — the
  // live Dev.to feed merges in once it resolves, so nothing blocks on it.
  const merged = [...ownCards, ...(feedState === "ready" ? devToCards : [])].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  );
  const [featured, ...rest] = merged;

  const chip = (key: string, label: string, color: string) => {
    const on = tag === key;
    return (
      <button
        key={key || "all"}
        type="button"
        onClick={() => setTag(key)}
        aria-pressed={on}
        className="rounded-full border px-5 py-2.5 font-mono text-xs uppercase tracking-[.06em] transition-all"
        style={on ? { background: color, borderColor: color, color: "#fff" } : { background: "transparent", borderColor: "#D8DDE9", color: "#5D6478" }}
      >
        {label}
      </button>
    );
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!emailRegex.test(trimmed)) {
      setStatus("error");
      setStatusMsg("Check that address");
      return;
    }

    setSubscribing(true);
    try {
      // Reuses the same free Sheety sheet the Contact form posts to — no new
      // service, no new cost. Rows are tagged so subscribers never get
      // confused for real leads when reading the sheet.
      const res = await fetch(SHEETY_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sheet1: {
            name: "Newsletter subscriber",
            company: "[Newsletter signup]",
            email: trimmed,
            phone: "",
            message: "Subscribed via the /insights newsletter form.",
            submittedAt: new Date().toISOString(),
          },
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setStatusMsg("You are on the list — first note goes out when it is written");
      setEmail("");
    } catch {
      setStatus("error");
      setStatusMsg("Couldn't save that just now — try again in a moment");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Insights | Tech News & Notes from Celertus.ai"
        description="Notes from both halves of the Celertus.ai studio, plus a live, auto-updated feed of the latest technology articles from around the web."
        keywords="tech news, technology blog, marketing insights, engineering insights, Celertus.ai blog, latest tech articles"
        canonicalUrl="/insights"
        schema={insightsSchema}
      />

      {/* Hero */}
      <section className="px-4 pb-10 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1240px]">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.12em] text-studio-mutedLight">
            <Link to="/" className="hover:text-studio-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-studio-ink">Insights</span>
          </nav>
          <h1 className="mb-6 max-w-[22ch] text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1] tracking-[-0.035em]">
            Notes from both halves of the studio.
          </h1>
          <p className="max-w-[62ch] text-[17.5px] leading-[1.65] text-studio-mutedLight">
            What we learn running campaigns and shipping systems for the same clients — plus a live feed of what the wider technology
            world is reading right now, pulled straight from Dev.to.
          </p>
        </div>
      </section>

      {/* Article feed — Celertus's own daily-generated pieces merged with a
          live pull from Dev.to's public feed, newest first, one grid. */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="mb-2 text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em]">What the industry is reading</h2>
              <p className="max-w-[56ch] text-[15px] leading-[1.65] text-studio-mutedLight">
                Original pieces from Celertus, published daily, alongside a live pull from{" "}
                <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="underline decoration-studio-hairline hover:text-studio-ink">Dev.to</a>'s
                public feed — external pieces link back to their original source.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {FEED_TAGS.map((f) => chip(f.key, f.label, f.color))}
            </div>
          </div>

          {merged.length === 0 && feedState === "loading" && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Loading latest articles">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-[280px] animate-pulse rounded-[26px] border border-studio-hairline bg-studio-mist" />
              ))}
            </div>
          )}

          {merged.length === 0 && feedState === "error" && (
            <div className="flex flex-col items-start gap-4 rounded-[26px] border border-studio-hairline bg-white p-8">
              <p className="text-[15px] text-studio-mutedLight">
                Couldn't reach the Dev.to feed just now — this is a live network call, not stored content, so it occasionally hiccups.
              </p>
              <button
                type="button"
                onClick={() => setRetryToken((n) => n + 1)}
                className="inline-flex items-center gap-2 rounded-full border border-studio-hairline px-5 py-2.5 text-sm font-semibold transition-colors hover:border-studio-indigo hover:text-studio-indigo"
              >
                <RefreshCw className="h-4 w-4" aria-hidden="true" /> Try again
              </button>
            </div>
          )}

          {merged.length === 0 && feedState === "ready" && (
            <p className="text-[15px] text-studio-mutedLight">No articles found for this tag right now — try another filter.</p>
          )}

          {featured && (
            <div className="grid grid-cols-1 gap-5">
              <Reveal variant="up">
                <a
                  href={featured.href}
                  {...(featured.external ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {})}
                  className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-studio-hairline bg-white shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2"
                >
                  <div
                    className="relative min-h-[220px] bg-cover bg-center sm:min-h-[280px]"
                    style={{ backgroundImage: featured.coverImage ? `url(${featured.coverImage})` : FALLBACK_GRADIENTS[0] }}
                  >
                    <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[.12em] text-white backdrop-blur-sm">
                      {featured.external ? "Trending on Dev.to" : "From Celertus"}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[.1em] text-studio-teal">
                      <span>{featured.tag}</span>
                      <span aria-hidden="true" className="text-studio-hairline">&middot;</span>
                      <span className="text-studio-mutedLight">{featured.readMin} min read</span>
                    </div>
                    <h3 className="max-w-[32ch] text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.02em]">{featured.title}</h3>
                    {featured.excerpt && (
                      <p className="max-w-[60ch] text-[15.5px] leading-[1.7] text-studio-mutedLight">{featured.excerpt}</p>
                    )}
                    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.08em] text-studio-mutedLight">
                      {featured.byline} &middot; {formatDate(featured.date)}
                      {featured.external && <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
                    </p>
                  </div>
                </a>
              </Reveal>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((a, i) => (
                  <Reveal key={a.id} variant="up" delay={i * 60}>
                    <a
                      href={a.href}
                      {...(a.external ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {})}
                      className="flex h-full flex-col overflow-hidden rounded-[26px] border border-studio-hairline bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div
                        className="h-36 bg-cover bg-center"
                        style={{ backgroundImage: a.coverImage ? `url(${a.coverImage})` : FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length] }}
                      />
                      <div className="flex h-full flex-col p-6">
                        <div className="mb-3.5 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[.1em] text-studio-teal">
                          <span>{a.tag}</span>
                          <span aria-hidden="true" className="text-studio-hairline">&middot;</span>
                          <span className="text-studio-mutedLight">{a.readMin} min read</span>
                        </div>
                        <h3 className="mb-3 line-clamp-2 text-[17px] font-semibold leading-[1.3] tracking-[-0.01em]">{a.title}</h3>
                        {a.excerpt && (
                          <p className="mb-5 flex-1 line-clamp-3 text-[14px] leading-[1.6] text-studio-mutedLight">{a.excerpt}</p>
                        )}
                        <div className="flex items-center justify-between gap-3 border-t border-studio-hairline pt-4 font-mono text-[10.5px] uppercase tracking-[.06em] text-studio-mutedLight">
                          <span className="truncate">{a.byline}</span>
                          <span className="flex-none">{formatDate(a.date)}</span>
                        </div>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {merged.length > 0 && feedState === "loading" && (
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[.08em] text-studio-mutedLight">Loading more from Dev.to&hellip;</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-studio-ink px-4 py-16 text-studio-cloud sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="up">
              <h2 className="mb-4 max-w-[20ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                One email a month. Only when we have something worth sending.
              </h2>
              <p className="max-w-[52ch] text-base leading-[1.65] text-studio-mutedDark">
                What worked, what did not, and the numbers behind both. Unsubscribe in one click.
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row sm:items-start" noValidate>
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== "idle") setStatus("idle");
                    }}
                    placeholder="you@company.com"
                    disabled={subscribing}
                    className="w-full rounded-full border border-white/15 bg-white/[.04] px-5 py-3.5 font-mono text-sm text-studio-cloud placeholder:text-studio-mutedDark focus:border-studio-teal focus:outline-none disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={subscribing}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-studio-teal px-7 py-3.5 font-semibold text-studio-ink transition-colors hover:bg-studio-teal/90 disabled:opacity-60"
                >
                  {subscribing ? "Saving…" : "Subscribe"} <Mail className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
              {status !== "idle" && (
                <p
                  role="status"
                  className={`mt-3 font-mono text-[12.5px] ${status === "success" ? "text-studio-teal" : "text-studio-ember"}`}
                >
                  {statusMsg}
                </p>
              )}
              <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[.08em] text-studio-mutedDark">
                No spam, unsubscribe any time — just reply to any note and ask.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-8 rounded-[32px] border border-studio-hairline bg-white p-9 sm:grid-cols-2 sm:p-14">
          <div>
            <h2 className="mb-3.5 text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em]">Rather talk it through than read about it?</h2>
            <p className="max-w-[48ch] text-base leading-[1.65] text-studio-mutedLight">
              Tell us what you are trying to grow and we will tell you honestly whether it is a marketing problem, a product problem, or both.
            </p>
          </div>
          <div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-studio-ink px-7 py-4 font-semibold text-white transition-colors hover:bg-studio-indigo">
              Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
