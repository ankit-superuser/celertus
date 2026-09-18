import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { useReveal } from "@/hooks/use-reveal";

interface AnimatedNumberProps {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  color: string;
}

/** Counts 0 -> `to` once it scrolls into view. Jumps straight to the final value under prefers-reduced-motion. */
const AnimatedNumber = ({ to, decimals = 0, prefix = "", suffix = "", color }: AnimatedNumberProps) => {
  const { ref, shown } = useReveal<HTMLSpanElement>({ threshold: 0.4 });
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!shown || started.current) return;
    started.current = true;

    const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setValue(to);
      return;
    }

    const duration = 1200;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(to * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shown, to]);

  return (
    <span ref={ref} className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl" style={{ color }}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const STATS: { color: string; note: string; label: string; render: () => JSX.Element }[] = [
  {
    color: "#5B5BF5",
    label: "Projects shipped",
    note: "Across manufacturing, legal, F&B, education and SaaS.",
    render: () => <AnimatedNumber to={50} suffix="+" color="#5B5BF5" />,
  },
  {
    color: "#FF6A45",
    label: "Services, two pillars",
    note: "Three growth, six technology — deliberately balanced.",
    render: () => <AnimatedNumber to={9} color="#FF6A45" />,
  },
  {
    color: "#00CFC1",
    label: "Uptime",
    note: "Monitored infrastructure with automated deploys.",
    render: () => <AnimatedNumber to={99.9} decimals={1} suffix="%" color="#00CFC1" />,
  },
  {
    color: "#5B5BF5",
    label: "Support",
    note: "Same team that built it answers the phone.",
    render: () => (
      <span className="text-4xl font-bold tracking-[-0.02em] sm:text-5xl" style={{ color: "#5B5BF5" }}>
        24/7
      </span>
    ),
  },
];

const StatsGrid = () => (
  <section className="bg-studio-mist px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-[1240px]">
      <Reveal variant="fade">
        <div className="mb-5 flex items-baseline gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[.14em] text-studio-mutedLight">03 &mdash; By the numbers</span>
          <span aria-hidden="true" className="h-px flex-1 bg-studio-hairline" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-studio-hairline bg-studio-hairline sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} variant="up" delay={i * 90} className="h-full">
            <div className="flex h-full flex-col gap-3 bg-white p-7">
              {s.render()}
              <span className="text-base font-semibold text-studio-ink">{s.label}</span>
              <span className="text-sm leading-[1.6] text-studio-mutedLight">{s.note}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsGrid;
