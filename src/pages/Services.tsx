import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { SERVICES, pillarColor, pillarLabel, Pillar } from "@/data/services";

const PROCESS = [
  { step: "01", color: "#5B5BF5", title: "Discovery", body: "One session with both halves in the room. We map the audience and the system at the same time.", dur: "3–5 days" },
  { step: "02", color: "#FF6A45", title: "Plan & price", body: "A written scope with the marketing plan and the build plan side by side, on one timeline.", dur: "1 week" },
  { step: "03", color: "#00CFC1", title: "Build in parallel", body: "Channels go into test while the product takes shape. Weekly demos, shared dashboard.", dur: "4–10 weeks" },
  { step: "04", color: "#5B5BF5", title: "Run & compound", body: "Ad data reshapes the page, product analytics reshape the targeting. Monthly reviews.", dur: "Ongoing" },
];

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://celertus.germanysoon.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://celertus.germanysoon.com/services" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://celertus.germanysoon.com${s.path}`,
    })),
  },
];

type Filter = "all" | Pillar;

const Services = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = SERVICES.filter((s) => filter === "all" || s.pillar === filter);

  const filterBtn = (key: Filter, label: string) => {
    const on = filter === key;
    const color = key === "growth" ? "#FF6A45" : key === "technology" ? "#00CFC1" : "#0A0D18";
    return (
      <button
        key={key}
        type="button"
        onClick={() => setFilter(key)}
        aria-pressed={on}
        className="rounded-full border px-5 py-2.5 font-mono text-xs uppercase tracking-[.06em] transition-all"
        style={on ? { background: color, borderColor: color, color: "#fff" } : { background: "transparent", borderColor: "#D8DDE9", color: "#5D6478" }}
      >
        {label}
      </button>
    );
  };

  return (
    <Layout>
      <SEO
        title="Services | Growth & Marketing, Technology | Celertus.ai"
        description="Nine services across two pillars — three growth, six technology. Celertus.ai, New Delhi. Digital marketing, performance ads and brand on one side; web, mobile, cloud and backend engineering on the other."
        keywords="marketing services, technology services, digital marketing, web development, mobile development, cloud solutions, Celertus.ai"
        canonicalUrl="/services"
        schema={servicesSchema}
      />

      <section className="px-4 pb-10 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1240px]">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.12em] text-studio-mutedLight">
            <Link to="/" className="hover:text-studio-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-studio-ink">Services</span>
          </nav>
          <h1 className="mb-6 max-w-[18ch] text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1] tracking-[-0.035em]">
            Nine services.<br /><span className="text-studio-ember">Two</span> <span className="text-studio-teal">halves.</span>
          </h1>
          <p className="mb-10 max-w-[60ch] text-[17.5px] leading-[1.65] text-studio-mutedLight">
            Three growth services and six technology services, staffed by one team. Pick a pillar to filter, or read any service in full.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {filterBtn("all", "All 9")}
            {filterBtn("growth", "Growth & Marketing · 3")}
            {filterBtn("technology", "Technology · 6")}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-28">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => {
            const color = pillarColor(s.pillar);
            const num = SERVICES.indexOf(s) + 1;
            return (
              <Reveal key={s.slug} variant="up" delay={i * 60}>
                <Link
                  to={s.path}
                  className="flex h-full flex-col rounded-[26px] border border-studio-hairline bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5"
                  style={{ borderColor: undefined }}
                >
                  <div className="mb-5 flex items-center justify-between gap-3.5">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-[14px] font-mono text-[13px] font-medium"
                      style={{ background: `${color}1A`, color }}
                    >
                      {String(num).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[.12em]" style={{ color }}>
                      {pillarLabel(s.pillar)}
                    </span>
                  </div>
                  <h2 className="mb-3 text-[21px] font-semibold leading-[1.2] tracking-[-0.02em]">{s.title}</h2>
                  <p className="mb-6 flex-1 text-[14.5px] leading-[1.6] text-studio-mutedLight">{s.description}</p>
                  <div className="flex flex-wrap gap-1.5 border-t border-studio-hairline pt-5">
                    {s.technologies.map((t) => (
                      <span key={t} className="rounded-full bg-studio-mist px-2.5 py-1 font-mono text-[10.5px] text-studio-mutedLight">{t}</span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold" style={{ color }}>
                    Read the detail <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-studio-ink px-4 py-16 text-studio-cloud sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-4 flex items-baseline gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[.14em] text-studio-mutedDark">How we run it</span>
            <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="mb-12 max-w-[22ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em]">One process, both pillars</h2>
          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <li key={p.step} className="flex flex-col gap-3 rounded-[22px] border border-white/10 bg-white/[.03] p-6">
                <span className="font-mono text-[11px]" style={{ color: p.color }}>{p.step}</span>
                <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-studio-cloud">{p.title}</h3>
                <p className="text-sm leading-[1.6] text-studio-mutedDark">{p.body}</p>
                <span className="mt-2 font-mono text-[10.5px] tracking-[.08em] text-studio-mutedLight">{p.dur}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-8 rounded-[32px] border border-studio-hairline bg-white p-9 sm:grid-cols-2 sm:p-14">
          <div>
            <h2 className="mb-3.5 text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em]">Not sure which half you need?</h2>
            <p className="max-w-[48ch] text-base leading-[1.65] text-studio-mutedLight">
              Most conversations start there. Tell us what you are trying to grow and we will tell you honestly whether it is a marketing problem, a product problem, or both.
            </p>
          </div>
          <div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-studio-ink px-7 py-4 font-semibold text-white transition-colors hover:bg-studio-indigo">
              Start a conversation <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
