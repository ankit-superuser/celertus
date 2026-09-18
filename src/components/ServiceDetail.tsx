import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { SERVICES, getService, relatedServices, pillarColor, pillarLabel } from "@/data/services";

interface ServiceDetailProps {
  slug: string;
}

const ServiceDetail = ({ slug }: ServiceDetailProps) => {
  const [openFaq, setOpenFaq] = useState(0);
  const active = getService(slug);
  if (!active) return null;

  const color = pillarColor(active.pillar);
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const related = relatedServices(slug, 3);
  const glow = active.pillar === "growth" ? "rgba(255,106,69,.20)" : "rgba(0,207,193,.18)";

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-studio-ink px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:pt-32"
        style={{ backgroundImage: `radial-gradient(70% 90% at 12% 0%, ${glow}, transparent 70%)` }}
      >
        <div className="relative mx-auto max-w-[1240px]">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.12em] text-studio-mutedLight">
            <Link to="/" className="hover:text-studio-cloud">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/services" className="hover:text-studio-cloud">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-studio-cloud">{active.title}</span>
          </nav>

          <div role="tablist" aria-label="Services" className="mb-9 flex flex-wrap gap-2">
            {SERVICES.map((t) => {
              const on = t.slug === slug;
              const c = pillarColor(t.pillar);
              return (
                <Link
                  key={t.slug}
                  to={t.path}
                  role="tab"
                  aria-selected={on}
                  className="whitespace-nowrap rounded-full border px-4 py-2 font-mono text-[11px] tracking-[.04em] transition-all"
                  style={on ? { background: c, borderColor: c, color: "#0A0D18" } : { background: "rgba(255,255,255,.04)", borderColor: "rgba(255,255,255,.14)", color: "#9AA4BC" }}
                >
                  {t.short}
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-4 block font-mono text-[11px] uppercase tracking-[.14em]" style={{ color }}>
                {pillarLabel(active.pillar)} &mdash; {String(idx + 1).padStart(2, "0")}/09
              </span>
              <h1 className="mb-5 max-w-[20ch] text-[clamp(2.2rem,5.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-studio-cloud">
                {active.title}
              </h1>
              <p className="mb-7 max-w-[52ch] text-[17.5px] leading-[1.65] text-studio-mutedDark">{active.long}</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-studio-cloud px-7 py-3.5 font-semibold text-studio-ink transition-colors hover:bg-white">
                  Discuss this service <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[.22] px-7 py-3.5 font-medium text-studio-cloud transition-colors"
                  style={{ borderColor: undefined }}
                >
                  See related work
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10">
              {active.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1.5 bg-studio-inkAlt p-5">
                  <dd className="text-2xl font-bold tracking-[-0.02em]" style={{ color }}>{s.value}</dd>
                  <dt className="font-mono text-[10.5px] uppercase tracking-[.08em] text-studio-mutedDark">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* What you get / pairing */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal variant="up">
            <h2 className="mb-6 text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.03em]">What you get</h2>
            <ul className="flex flex-col gap-px overflow-hidden rounded-[20px] border border-studio-hairline bg-studio-hairline">
              {active.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3.5 bg-white p-5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: color }} />
                  <span className="text-[15px] leading-[1.6]">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h2 className="mb-6 text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.03em]">How it works with the other half</h2>
            <p className="mb-7 text-base leading-[1.7] text-studio-mutedLight">{active.pairing}</p>
            <h3 className="mb-3.5 text-[15px] font-semibold tracking-[.02em]">Stack &amp; channels</h3>
            <div className="flex flex-wrap gap-2">
              {active.technologies.map((t) => (
                <span key={t} className="rounded-full border border-studio-hairline bg-white px-3.5 py-2 font-mono text-[11.5px] text-studio-mutedLight">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-7 text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.03em]">Common questions</h2>
          <div className="flex max-w-[860px] flex-col gap-3">
            {active.faqs.map((f, fi) => {
              const open = openFaq === fi;
              return (
                <div key={f.q} className="overflow-hidden rounded-[20px] border border-studio-hairline bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : fi)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold"
                  >
                    {f.q}
                    <span aria-hidden="true" className="font-mono text-lg" style={{ color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && <p className="max-w-[72ch] px-6 pb-6 text-[15px] leading-[1.7] text-studio-mutedLight">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-studio-inkAlt px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-7 flex items-baseline gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[.14em] text-studio-mutedDark">Pairs well with</span>
            <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            <Link to="/services" className="whitespace-nowrap text-[13.5px] text-studio-indigoLight hover:text-studio-ember">
              All services &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => {
              const rc = pillarColor(r.pillar);
              return (
                <Link
                  key={r.slug}
                  to={r.path}
                  className="flex flex-col gap-2.5 rounded-[20px] border border-white/10 bg-white/[.03] p-6 transition-all hover:-translate-y-1"
                >
                  <span className="font-mono text-[10.5px] uppercase tracking-[.1em]" style={{ color: rc }}>{pillarLabel(r.pillar)}</span>
                  <span className="text-lg font-semibold tracking-[-0.02em] text-studio-cloud">{r.title}</span>
                  <span className="text-[13.5px] leading-[1.6] text-studio-mutedDark">{r.description}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
