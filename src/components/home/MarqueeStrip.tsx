const CHIPS: { label: string; pillar: "growth" | "technology" }[] = [
  { label: "SEO", pillar: "growth" },
  { label: "Google Ads", pillar: "growth" },
  { label: "Meta Ads", pillar: "growth" },
  { label: "Brand identity", pillar: "growth" },
  { label: "Content strategy", pillar: "growth" },
  { label: "CRO", pillar: "growth" },
  { label: "React", pillar: "technology" },
  { label: "React Native", pillar: "technology" },
  { label: "Node.js", pillar: "technology" },
  { label: "PostgreSQL", pillar: "technology" },
  { label: "AWS", pillar: "technology" },
  { label: "Kubernetes", pillar: "technology" },
  { label: "Terraform", pillar: "technology" },
  { label: "OWASP", pillar: "technology" },
];

const Chip = ({ label, pillar }: { label: string; pillar: "growth" | "technology" }) => (
  <span className="inline-flex flex-none items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-2 font-mono text-[11.5px] tracking-[.03em] text-studio-mutedDark">
    <span
      aria-hidden="true"
      className="h-1.5 w-1.5 flex-none rounded-full"
      style={{ background: pillar === "growth" ? "#FF6A45" : "#00CFC1" }}
    />
    {label}
  </span>
);

/**
 * Infinitely-scrolling chip strip. `.studio-marquee-track` (index.css)
 * animates translateX(0 -> -50%), so the track must render the chip list
 * exactly twice back to back for a seamless loop.
 */
const MarqueeStrip = () => (
  <div className="overflow-hidden border-y border-white/10 bg-studio-ink py-4">
    <div className="studio-marquee-track flex w-max flex-nowrap gap-3">
      {[...CHIPS, ...CHIPS].map((c, i) => (
        <Chip key={`${c.label}-${i}`} label={c.label} pillar={c.pillar} />
      ))}
    </div>
  </div>
);

export default MarqueeStrip;
