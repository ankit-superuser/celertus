import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { pillarColor, pillarLabel, Pillar } from "@/data/services";

interface Project {
  name: string;
  url: string;
  category: string;
  gradient: string;
  description: string;
  tags: string[];
  pillars: Pillar[];
}

const PROJECTS: Project[] = [
  {
    name: "URJA POWER",
    url: "https://www.urjapower.in/",
    category: "Industrial Manufacturing",
    gradient: "linear-gradient(135deg,#0A0D18,#00c6ff)",
    description:
      "Designed and developed a premium corporate website for URJA POWER, showcasing industrial-grade PVC electrical infrastructure solutions — UPVC conduit pipes, modular electrical accessories, concealed boxes, wiring protection systems and large-scale electrical infrastructure products. The work emphasised premium branding, modern UI/UX, responsiveness and a strong B2B presence.",
    tags: ["Industrial", "Manufacturing", "B2B", "Corporate", "Premium Website", "Motion Design", "Brand Identity"],
    pillars: ["growth", "technology"],
  },
  {
    name: "Germanysoon",
    url: "https://germanysoon.com/",
    category: "Consultancy Platform",
    gradient: "linear-gradient(135deg,#0A0D18,#a855f7)",
    description:
      "A consultancy platform that guides people through starting their journey to Germany — structured programme information, enquiry capture and a content system the team can run themselves.",
    tags: ["Consultancy", "Global Mobility", "Education", "SaaS"],
    pillars: ["growth", "technology"],
  },
  {
    name: "Gurukul Bakery",
    url: "https://gurukulbakery.com/",
    category: "Bakery & Courses",
    gradient: "linear-gradient(135deg,#0A0D18,#f59e0b)",
    description:
      "An artisan bakery storefront showcasing baked goods and hands-on baking courses, with course enrolment and a product catalogue built for a small team to maintain.",
    tags: ["E-commerce", "Culinary", "Education", "Storefront"],
    pillars: ["growth", "technology"],
  },
  {
    name: "VD Legal",
    url: "https://vdlegal.in/",
    category: "Law Firm",
    gradient: "linear-gradient(135deg,#0A0D18,#6366f1)",
    description:
      "A full-service law firm in New Delhi delivering high-quality legal solutions — a credibility-first site structured around practice areas, with clear enquiry paths for corporate clients.",
    tags: ["Corporate Law", "Legal Tech", "Enterprise", "B2B"],
    pillars: ["technology"],
  },
  {
    name: "Bigg Spoon",
    url: "https://biggspoon.com/",
    category: "Food & Beverage",
    gradient: "linear-gradient(135deg,#0A0D18,#10b981)",
    description:
      "Your complete corporate cafeteria solution — a B2B service site built to convert facilities and HR decision-makers, with the operational detail those buyers ask for up front.",
    tags: ["Corporate Dining", "F&B", "Enterprise", "Operations"],
    pillars: ["growth", "technology"],
  },
];

const DOMAIN = "https://celertus.germanysoon.com";

const workSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
      { "@type": "ListItem", position: 2, name: "Work", item: `${DOMAIN}/work` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.url,
    })),
  },
];

const Work = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Layout>
      <SEO
        title="Our Work | 5 Live Client Projects | Celertus.ai"
        description="Selected work from Celertus.ai — five live client platforms across manufacturing, consultancy, F&B, legal and education."
        canonicalUrl="/work"
        schema={workSchema}
      />

      {/* Hero */}
      <section className="px-4 pb-10 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1240px]">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.12em] text-studio-mutedLight">
            <Link to="/" className="hover:text-studio-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-studio-ink">Work</span>
          </nav>
          <h1 className="mb-6 max-w-[20ch] text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1] tracking-[-0.035em]">
            Five clients.<br />Both halves of the job.
          </h1>
          <p className="max-w-[60ch] text-[17.5px] leading-[1.65] text-studio-mutedLight">
            Manufacturing, consultancy, legal, hospitality and education. Every one of these is a live site you can open right now — pick a project to read what we did.
          </p>
        </div>
      </section>

      {/* Accordion project list */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-28">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4">
          {PROJECTS.map((p, i) => {
            const open = openIndex === i;
            const letter = p.name.charAt(0);
            const panelId = `project-panel-${i}`;
            return (
              <Reveal key={p.name} variant="up" delay={i * 60}>
                <div className="overflow-hidden rounded-[26px] border border-studio-hairline bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full flex-col gap-4 p-6 text-left sm:flex-row sm:items-center sm:gap-6 sm:p-7"
                  >
                    <div className="flex flex-1 items-center gap-4">
                      <span
                        aria-hidden="true"
                        className="grid h-14 w-14 flex-none place-items-center rounded-2xl font-display text-xl font-bold text-white"
                        style={{ background: p.gradient }}
                      >
                        {letter}
                      </span>
                      <div className="min-w-0">
                        <span className="block truncate font-display text-lg font-bold tracking-[-0.02em] text-studio-ink sm:text-xl">
                          {p.name}
                        </span>
                        <span className="block font-mono text-[10.5px] uppercase tracking-[.1em] text-studio-mutedLight">
                          {p.category}
                        </span>
                      </div>
                    </div>

                    <div className="hidden flex-wrap gap-2 lg:flex lg:flex-none lg:max-w-[280px]">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-full bg-studio-mist px-2.5 py-1 font-mono text-[10.5px] text-studio-mutedLight">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-none items-center gap-3 self-start sm:self-center">
                      <span className="font-mono text-[11px] uppercase tracking-[.08em] text-studio-mutedLight">
                        {open ? "Close" : "Read the detail"}
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid h-9 w-9 flex-none place-items-center rounded-full border border-studio-hairline font-mono text-base text-studio-ink"
                      >
                        {open ? "−" : "+"}
                      </span>
                    </div>
                  </button>

                  {open && (
                    <div id={panelId} className="grid grid-cols-1 gap-8 border-t border-studio-hairline p-6 sm:p-7 lg:grid-cols-2 lg:gap-12">
                      <div>
                        <h2 className="mb-3 text-lg font-semibold tracking-[-0.02em]">What we did</h2>
                        <p className="mb-5 max-w-[56ch] text-[15px] leading-[1.7] text-studio-mutedLight">{p.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span key={t} className="rounded-full bg-studio-mist px-2.5 py-1 font-mono text-[10.5px] text-studio-mutedLight">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h2 className="mb-3 text-lg font-semibold tracking-[-0.02em]">Which half</h2>
                        <div className="mb-6 flex flex-col gap-2.5">
                          {p.pillars.map((pl) => (
                            <span key={pl} className="inline-flex items-center gap-2.5 text-sm font-medium text-studio-ink">
                              <span aria-hidden="true" className="h-2 w-2 flex-none rounded-full" style={{ background: pillarColor(pl) }} />
                              {pillarLabel(pl)}
                            </span>
                          ))}
                        </div>
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-studio-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-studio-indigo"
                        >
                          Visit live site <span aria-hidden="true">&#8599;</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-studio-ink px-4 py-16 text-center sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-4 text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-studio-cloud">
            Your project could be next on this list.
          </h2>
          <p className="mb-9 text-base leading-[1.65] text-studio-mutedDark">
            Tell us what you are trying to grow. We will tell you which half of the studio you need — or if it is both.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-studio-cloud px-7 py-3.5 font-semibold text-studio-ink transition-colors hover:bg-white"
          >
            Start a conversation <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
