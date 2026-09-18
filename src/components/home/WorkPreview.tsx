import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const WORK = [
  {
    name: "URJA POWER",
    href: "https://www.urjapower.in/",
    category: "Industrial Manufacturing",
    description:
      "A premium B2B corporate site for industrial-grade PVC electrical infrastructure — brand identity, motion design and a full responsive rebuild.",
    gradient: "linear-gradient(135deg,#0A0D18,#00c6ff)",
  },
  {
    name: "Germanysoon",
    href: "https://germanysoon.com/",
    category: "Consultancy Platform",
    description: "A consultancy platform that guides people through starting their journey to Germany.",
    gradient: "linear-gradient(135deg,#0A0D18,#5B5BF5)",
  },
  {
    name: "VD Legal",
    href: "https://vdlegal.in/",
    category: "Law Firm",
    description: "A full-service law firm in New Delhi delivering high-quality legal solutions.",
    gradient: "linear-gradient(135deg,#0A0D18,#6366f1)",
  },
];

const WorkPreview = () => (
  <section className="bg-studio-mist px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-[1240px]">
      <Reveal variant="fade">
        <div className="mb-5 flex flex-wrap items-baseline gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[.14em] text-studio-mutedLight">04 &mdash; Selected work</span>
          <span aria-hidden="true" className="h-px flex-1 bg-studio-hairline" />
          <Link to="/work" className="whitespace-nowrap text-[13.5px] font-semibold text-studio-indigo hover:text-studio-ember">
            All case studies &rarr;
          </Link>
        </div>
        <h2 className="mb-12 max-w-[20ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-studio-ink">
          Work we are proud of
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WORK.map((w, i) => (
          <Reveal key={w.name} variant="up" delay={i * 100} className="h-full">
            <a
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-studio-hairline bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div
                className="flex h-40 items-end p-6"
                style={{ backgroundImage: w.gradient }}
              >
                <span className="text-2xl font-bold tracking-[-0.02em] text-white">{w.name}</span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="font-mono text-[11px] uppercase tracking-[.1em] text-studio-mutedLight">{w.category}</span>
                <p className="flex-1 text-[14.5px] leading-[1.6] text-studio-mutedLight">{w.description}</p>
                <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-studio-indigo">
                  Visit site <span aria-hidden="true">&#8599;</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WorkPreview;
