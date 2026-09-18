import Reveal from "@/components/Reveal";

const TESTIMONIALS = [
  {
    color: "#FF6A45",
    quote:
      "They rebuilt the site and then actually filled it with the right traffic. Two agencies could never have got that handoff right.",
    name: "URJA POWER",
    role: "Industrial Manufacturing",
  },
  {
    color: "#5B5BF5",
    quote:
      "The platform and the campaign were designed together. Our cost per qualified enquiry dropped in the first quarter.",
    name: "Germanysoon",
    role: "Consultancy Platform",
  },
  {
    color: "#00CFC1",
    quote: "Responsive, technical, and honest about what would not work. That last part is rarer than it should be.",
    name: "VD Legal",
    role: "Law Firm",
  },
];

const ClientsSection = () => (
  <section className="bg-studio-inkAlt px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-[1240px]">
      <Reveal variant="fade">
        <div className="mb-12 flex items-baseline gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[.14em] text-studio-mutedDark">05 &mdash; Clients</span>
          <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} variant="up" delay={i * 100} className="h-full">
            <figure className="flex h-full flex-col gap-5 rounded-[22px] border border-white/10 bg-white/[.03] p-7">
              <span aria-hidden="true" className="font-display text-5xl leading-none" style={{ color: t.color }}>
                &ldquo;
              </span>
              <blockquote className="flex-1 text-[15px] leading-[1.7] text-studio-cloud">{t.quote}</blockquote>
              <figcaption className="border-t border-white/10 pt-4">
                <span className="block font-semibold text-studio-cloud">{t.name}</span>
                <span className="block text-sm text-studio-mutedDark">{t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[.1em] text-studio-mutedDark/70">
        Placeholder quotes &mdash; replace with signed-off client wording before launch
      </p>
    </div>
  </section>
);

export default ClientsSection;
