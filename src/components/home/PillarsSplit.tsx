import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { SERVICES, pillarColor, pillarLabel, type Pillar } from "@/data/services";

// Short "stack / channel" meta strings, one per service — same spirit as
// technologies[0..2] on the service detail pages, hand-picked for a compact list row.
const META: Record<string, string> = {
  "digital-marketing": "SEO · Content · Email",
  "performance-marketing": "Google Ads · Meta Ads · CRO",
  "brand-content": "Identity · Video · Social",
  "web-development": "React · Node.js · PostgreSQL",
  "mobile-development": "React Native · Flutter · Expo",
  "backend-system": "APIs · PostgreSQL · Redis",
  "cloud-solutions": "AWS · Kubernetes · Terraform",
  "security-compliance": "OAuth · OWASP · Audit trail",
  "performance-optimization": "CDN · Caching · Web Vitals",
};

const PILLARS: { pillar: Pillar; num: string; blurb: string }[] = [
  { pillar: "growth", num: "01", blurb: "Demand, measured against revenue rather than impressions." },
  { pillar: "technology", num: "02", blurb: "The systems that have to hold when the campaign works." },
];

const PillarsSplit = () => (
  <section className="bg-studio-mist px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-[1240px]">
      <Reveal variant="fade">
        <div className="mb-5 flex items-baseline gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[.14em] text-studio-mutedLight">01 &mdash; What we do</span>
          <span aria-hidden="true" className="h-px flex-1 bg-studio-hairline" />
        </div>
        <h2 className="mb-5 max-w-[20ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-studio-ink">
          Two halves of the same job
        </h2>
        <p className="mb-12 max-w-[62ch] text-[17px] leading-[1.65] text-studio-mutedLight">
          Most agencies do the campaign or the build, then hand you off. We do both &mdash; so the marketing is
          designed around what the product can deliver, and the product is built for the traffic the marketing
          brings.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {PILLARS.map((p, i) => {
          const color = pillarColor(p.pillar);
          const services = SERVICES.filter((s) => s.pillar === p.pillar);
          return (
            <Reveal key={p.pillar} variant="up" delay={i * 100} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-studio-hairline bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="h-1.5 w-full flex-none" style={{ background: color }} />
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[.12em]" style={{ color }}>
                      Pillar {p.num}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[.1em] text-studio-mutedLight">
                      {services.length} service{services.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <h3 className="mb-2.5 text-[26px] font-bold tracking-[-0.02em] text-studio-ink">
                    {pillarLabel(p.pillar)}
                  </h3>
                  <p className="mb-7 text-[15px] leading-[1.6] text-studio-mutedLight">{p.blurb}</p>

                  <ul className="mb-8 flex flex-1 flex-col gap-px overflow-hidden rounded-2xl border border-studio-hairline bg-studio-hairline">
                    {services.map((s) => (
                      <li key={s.slug} className="flex flex-wrap items-baseline justify-between gap-2 bg-white px-5 py-4">
                        <span className="font-semibold text-studio-ink">{s.title}</span>
                        <span className="font-mono text-[11px] text-studio-mutedLight">{META[s.slug]}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/services"
                    className="mt-auto inline-flex items-center gap-1.5 self-start font-semibold"
                    style={{ color }}
                  >
                    Explore {p.pillar === "growth" ? "growth" : "technology"} services <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default PillarsSplit;
