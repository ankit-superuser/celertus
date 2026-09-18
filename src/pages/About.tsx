import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";

const HALVES = [
  {
    kicker: "Half one",
    title: "The marketers",
    color: "#FF6A45",
    body: "Search, paid, brand and content — run by people who are allowed to change the product when the data says they should.",
    points: [
      "Reporting on revenue and qualified leads, not impressions",
      "Creative produced in-house so tests ship in days",
      "The honest read on when to stop spending",
    ],
  },
  {
    kicker: "Half two",
    title: "The engineers",
    color: "#00CFC1",
    body: "Web, mobile, backend, cloud, security and performance — built for the traffic the other half is about to send.",
    points: [
      "Load-tested against the campaign forecast before launch",
      "Event tracking is part of the definition of done",
      "You own the code and the accounts, always",
    ],
  },
];

const PRINCIPLES = [
  { color: "#5B5BF5", title: "One team, one invoice", body: "No handoff between a marketing vendor and a dev vendor, because there is no handoff to get wrong." },
  { color: "#FF6A45", title: "We say no", body: "If your problem is not the one we would solve, we will tell you that in the first call rather than sell you a retainer." },
  { color: "#00CFC1", title: "You own everything", body: "Code, ad accounts, analytics, design source files. Nothing is held hostage to keep you subscribed." },
  { color: "#5B5BF5", title: "Numbers in the open", body: "One shared dashboard both halves read from. Good weeks and bad weeks look the same in it." },
];

const TEAM = [
  { role: "Founder & Engineering Lead", pillar: "Technology", color: "#00CFC1", gradient: "linear-gradient(140deg,#0A0D18,#00CFC1)" },
  { role: "Growth Lead", pillar: "Growth & Marketing", color: "#FF6A45", gradient: "linear-gradient(140deg,#0A0D18,#FF6A45)" },
  { role: "Brand & Content Designer", pillar: "Growth & Marketing", color: "#FF6A45", gradient: "linear-gradient(140deg,#0A0D18,#5B5BF5)" },
  { role: "Full-stack Engineer", pillar: "Technology", color: "#00CFC1", gradient: "linear-gradient(140deg,#0A0D18,#121726)" },
];

const FACTS = [
  { value: "50+", label: "Projects shipped since founding", color: "#5B5BF5" },
  { value: "New Delhi", label: "Based in 110043, India — clients worldwide", color: "#FF6A45" },
  { value: "3–5 days", label: "From first call to a written plan", color: "#00CFC1" },
  { value: "24/7", label: "Support from the team that built it", color: "#5B5BF5" },
];

const DOMAIN = "https://celertus.germanysoon.com";

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
      { "@type": "ListItem", position: 2, name: "About", item: `${DOMAIN}/about` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Celertus.ai",
    url: `${DOMAIN}/about`,
    about: {
      "@type": "Organization",
      name: "Celertus.ai",
      url: DOMAIN,
      description: "A marketing and technology studio in New Delhi — half campaigns, half engineering, one team.",
      address: { "@type": "PostalAddress", addressLocality: "New Delhi", postalCode: "110043", addressCountry: "IN" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8076036432",
        contactType: "customer service",
        email: "celertustechnologies@gmail.com",
      },
      sameAs: [
        "https://www.instagram.com/celertus.tech",
        "https://www.linkedin.com/company/celertus-technologies/",
      ],
    },
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Celertus.ai | Marketing & Technology Studio, New Delhi"
        description="Celertus.ai — a marketing and technology studio in New Delhi. Small, senior, and deliberately split in two halves."
        canonicalUrl="/about"
        schema={aboutSchema}
      />

      {/* Hero */}
      <section className="px-4 pb-10 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1240px]">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.12em] text-studio-mutedLight">
            <Link to="/" className="hover:text-studio-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-studio-ink">About</span>
          </nav>
          <h1 className="mb-10 max-w-[26ch] text-[clamp(2.2rem,5.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.035em]">
            We started as engineers. Then we got tired of watching good products go unnoticed.
          </h1>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal variant="up">
              <p className="max-w-[52ch] text-[17px] leading-[1.7] text-studio-mutedLight">
                Celertus Technologies began as a software consultancy in New Delhi. The name comes from <em>celerity</em> — swiftness of movement — and for years that meant shipping fast, staying lean, and handing over clean code.
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="max-w-[52ch] text-[17px] leading-[1.7] text-studio-mutedLight">
                The pattern we kept hitting: the build was good, and nobody came. Clients would launch, then go looking for a marketing agency that did not understand the product. So we became the other half too — deliberately, half and half, one team.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Two halves */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 lg:grid-cols-2">
          {HALVES.map((h, i) => (
            <Reveal key={h.title} variant="up" delay={i * 100}>
              <div className="flex h-full flex-col overflow-hidden rounded-[26px] border border-studio-hairline bg-white shadow-sm">
                <span aria-hidden="true" className="block h-1.5 w-full" style={{ background: h.color }} />
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <span className="mb-3 font-mono text-[11px] uppercase tracking-[.14em]" style={{ color: h.color }}>
                    {h.kicker}
                  </span>
                  <h2 className="mb-4 text-[26px] font-bold tracking-[-0.02em]">{h.title}</h2>
                  <p className="mb-6 text-[15.5px] leading-[1.7] text-studio-mutedLight">{h.body}</p>
                  <ul className="mt-auto flex flex-col gap-3 border-t border-studio-hairline pt-6">
                    {h.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-[14.5px] leading-[1.6] text-studio-ink">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: h.color }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Four things we will not trade away */}
      <section className="bg-studio-ink px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-4 flex items-baseline gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[.14em] text-studio-mutedDark">How we work</span>
            <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="mb-12 max-w-[22ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-studio-cloud">
            Four things we will not trade away
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={i * 70} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-[22px] border border-white/10 bg-white/[.03] p-6">
                  <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full" style={{ background: p.color }} />
                  <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-studio-cloud">{p.title}</h3>
                  <p className="text-sm leading-[1.6] text-studio-mutedDark">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-4 flex items-baseline gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[.14em] text-studio-mutedLight">The team</span>
            <span aria-hidden="true" className="h-px flex-1 bg-studio-hairline" />
          </div>
          <h2 className="mb-5 max-w-[20ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Small, senior, and in one room
          </h2>
          <p className="mb-12 max-w-[60ch] text-[17px] leading-[1.65] text-studio-mutedLight">
            No account layer between you and the people doing the work. The person who writes your ad copy sits next to the person who ships your API.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.role} variant="up" delay={i * 60}>
                <div className="flex flex-col gap-4">
                  <div
                    className="grid aspect-square w-full place-items-center rounded-[22px]"
                    style={{ background: m.gradient }}
                  >
                    <span className="px-4 text-center font-mono text-[11px] uppercase tracking-[.1em] text-white/60">
                      Photo to be supplied
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-bold tracking-[-0.01em] text-studio-ink">{m.role}</p>
                    <span className="font-mono text-[10.5px] uppercase tracking-[.1em]" style={{ color: m.color }}>
                      {m.pillar}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1240px]">
          <Reveal variant="up">
            <div className="overflow-hidden rounded-[28px] border border-studio-hairline bg-white">
              <div className="grid grid-cols-1 gap-px bg-studio-hairline sm:grid-cols-2 lg:grid-cols-4">
                {FACTS.map((f) => (
                  <div key={f.label} className="flex flex-col gap-2 bg-white p-7">
                    <span className="text-3xl font-bold tracking-[-0.02em]" style={{ color: f.color }}>{f.value}</span>
                    <span className="text-[13.5px] leading-[1.5] text-studio-mutedLight">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-studio-inkAlt px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <h2 className="max-w-[16ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-studio-cloud">
            Come find out which half you need.
          </h2>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-studio-cloud px-7 py-3.5 font-semibold text-studio-ink transition-colors hover:bg-white"
            >
              Start a conversation <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/[.22] px-7 py-3.5 font-medium text-studio-cloud transition-colors hover:border-white/40"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
