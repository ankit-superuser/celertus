import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { getOwnInsightBySlug } from "@/lib/insights";

const DOMAIN = "https://celertus.germanysoon.com";

const CATEGORY_LABEL: Record<string, string> = {
  webdev: "Web Dev",
  ai: "AI",
  cloud: "Cloud",
  security: "Security",
};

const Paragraphs = ({ text }: { text: string }) => (
  <>
    {text.split(/\n{2,}/).map((p, i) => (
      <p key={i} className="mb-4 text-[16px] leading-[1.75] text-studio-mutedLight last:mb-0">
        {p}
      </p>
    ))}
  </>
);

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getOwnInsightBySlug(slug) : undefined;

  if (!article) {
    return (
      <Layout>
        <SEO title="Article Not Found | Celertus.ai" description="This Insights article could not be found." noIndex />
        <div className="flex min-h-[50vh] items-center justify-center px-6 py-32">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold">Article not found</h1>
            <p className="mb-8 text-studio-mutedLight">It may have been renamed or removed.</p>
            <Link to="/insights" className="inline-flex items-center gap-2 rounded-full bg-studio-ink px-6 py-3.5 font-semibold text-white transition-colors hover:bg-studio-indigo">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Insights
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${DOMAIN}/insights` },
        { "@type": "ListItem", position: 3, name: article.title, item: `${DOMAIN}/insights/${article.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishedAt,
      dateModified: article.modifiedAt,
      author: { "@type": "Organization", name: "Celertus.ai", url: DOMAIN },
      publisher: { "@type": "Organization", name: "Celertus.ai", url: DOMAIN, logo: `${DOMAIN}/favicon.png` },
      mainEntityOfPage: `${DOMAIN}/insights/${article.slug}`,
    },
  ];

  return (
    <Layout>
      <SEO
        title={`${article.title} | Celertus.ai Insights`}
        description={article.metaDescription}
        keywords={article.tags.join(", ")}
        canonicalUrl={`/insights/${article.slug}`}
        schema={schema}
      />

      <article className="px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-[760px]">
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.12em] text-studio-mutedLight">
            <Link to="/" className="hover:text-studio-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/insights" className="hover:text-studio-ink">Insights</Link>
            <span aria-hidden="true">/</span>
            <span className="truncate text-studio-ink">{article.title}</span>
          </nav>

          <Reveal variant="up">
            <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[.1em] text-studio-teal">
              <span>{CATEGORY_LABEL[article.category] ?? article.category}</span>
              <span aria-hidden="true" className="text-studio-hairline">&middot;</span>
              <span className="text-studio-mutedLight">{article.readingTimeMinutes} min read</span>
            </div>
            <h1 className="mb-5 text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em]">{article.title}</h1>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[.08em] text-studio-mutedLight">
              By Celertus.ai &middot;{" "}
              {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              {" "}&middot; drafted with AI assistance, reviewed before publishing
            </p>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <div className="mb-8 text-[17px] leading-[1.75] text-studio-ink">
              <Paragraphs text={article.intro} />
            </div>

            <h2 className="mb-3 mt-9 text-[22px] font-bold tracking-[-0.02em]">What's new</h2>
            <Paragraphs text={article.whatHappened} />

            <h2 className="mb-3 mt-9 text-[22px] font-bold tracking-[-0.02em]">Why it matters</h2>
            <Paragraphs text={article.whyItMatters} />

            <h2 className="mb-3 mt-9 text-[22px] font-bold tracking-[-0.02em]">How it works</h2>
            <Paragraphs text={article.howItWorks} />

            <h2 className="mb-3 mt-9 text-[22px] font-bold tracking-[-0.02em]">What this means for you</h2>
            <Paragraphs text={article.practicalImplications} />

            <h2 className="mb-3 mt-9 text-[22px] font-bold tracking-[-0.02em]">Key takeaways</h2>
            <ul className="flex flex-col gap-2.5">
              {article.keyTakeaways.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[16px] leading-[1.6] text-studio-mutedLight">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-studio-teal" />
                  {t}
                </li>
              ))}
            </ul>

            {article.cta && (
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[22px] border border-studio-hairline bg-studio-mist p-6">
                <p className="text-[15px] font-medium">{article.cta.text}</p>
                <Link to={article.cta.href} className="inline-flex flex-none items-center gap-2 rounded-full bg-studio-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-studio-indigo">
                  Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            )}

            <p className="mt-10 border-t border-studio-hairline pt-6 text-[13px] leading-[1.6] text-studio-mutedLight">
              Topic inspired by coverage from{" "}
              <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline decoration-studio-hairline hover:text-studio-ink">
                {article.sourceName}
              </a>. This article is Celertus's own independent write-up, not a reproduction of that piece.
            </p>
          </Reveal>

          <Link to="/insights" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-studio-indigo hover:text-studio-ember">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Insights
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default InsightArticle;
