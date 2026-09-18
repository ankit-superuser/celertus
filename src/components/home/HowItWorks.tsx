import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionValue, useScroll, useTransform } from "framer-motion";

const EMBER = "#FF6A45";
const TEAL = "#00CFC1";
const INDIGO = "#5B5BF5";

const BEATS = [
  { title: "Day 0 — the brief lands.", body: "One team takes it apart. The marketers ask who we are talking to; the engineers ask what has to exist for them to act." },
  { title: "Weeks 1–4 — built in parallel.", body: "Channels go into test while the product takes shape. Neither waits on the other, and both are reading the same numbers." },
  { title: "Weeks 4–8 — the loop closes.", body: "Ad data reshapes the page. Product analytics reshape the targeting. This is the part you cannot buy from two vendors." },
  { title: "Launch — one system, not two.", body: "Campaign and product ship together, measured on the same dashboard, owned by the same team." },
];

const CHANNELS = ["SEO", "Google Ads", "Meta Ads", "Content", "Email"];
const BUILDS = [
  { label: "landing page", state: "live" },
  { label: "event tracking", state: "wired" },
  { label: "API + database", state: "ok" },
  { label: "CI / deploy", state: "green" },
  { label: "Core Web Vitals", state: "98" },
];

const nf = new Intl.NumberFormat("en-US");

/** Subscribes to a framer-motion value and returns its current value as plain React state. */
function useMotionValueState<T>(value: MotionValue<T>): T {
  const [state, setState] = useState(value.get());
  useEffect(() => value.on("change", setState), [value]);
  return state;
}

interface ChannelChipProps {
  label: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const ChannelChip = ({ label, index, scrollYProgress }: ChannelChipProps) => {
  const t = useTransform(scrollYProgress, [0.08 + index * 0.07, 0.24 + index * 0.07], [0, 1]);
  const y = useTransform(t, (v) => (1 - v) * 14);
  return (
    <motion.span
      style={{ opacity: t, y }}
      className="rounded-full border border-[rgba(255,106,69,.35)] bg-[rgba(255,106,69,.10)] px-3.5 py-1.5 font-mono text-[11px] text-[#FFCBBB]"
    >
      {label}
    </motion.span>
  );
};

interface BuildChipProps {
  label: string;
  state: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const BuildChip = ({ label, state, index, scrollYProgress }: BuildChipProps) => {
  const t = useTransform(scrollYProgress, [0.12 + index * 0.08, 0.3 + index * 0.08], [0, 1]);
  const x = useTransform(t, (v) => (1 - v) * 18);
  return (
    <motion.span
      style={{ opacity: t, x }}
      className="flex items-center justify-between gap-3 rounded-xl border border-[rgba(0,207,193,.24)] bg-[rgba(0,207,193,.08)] px-3.5 py-2.5 font-mono text-[11px] text-[#B6F3EE]"
    >
      {label}
      <span className="text-studio-teal">{state}</span>
    </motion.span>
  );
};

interface MetricProps {
  label: string;
  scrollYProgress: MotionValue<number>;
  format: (t: number) => string;
}

const Metric = ({ label, scrollYProgress, format }: MetricProps) => {
  const metricT = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);
  const display = useTransform(metricT, format);
  const value = useMotionValueState(display);
  return (
    <span className="flex flex-col gap-1">
      <span className="text-[clamp(14px,1.5vw,19px)] tabular-nums text-studio-cloud">{value}</span>
      <span className="text-[10px] tracking-[.06em] text-studio-mutedDark">{label}</span>
    </span>
  );
};

/**
 * Scroll-scrubbed "campaign meets product" story, matching the mockup's
 * pinned/sticky section: as the user scrolls through a tall section, the
 * beat text advances, the campaign/product panels slide in and converge
 * into a single "ONE LAUNCH" badge, an SVG line chart draws in, and the
 * illustrative metrics count up — all driven directly by scroll position
 * via framer-motion's useScroll/useTransform (no WebGL, no hand-rolled
 * scroll math). Because it's driven 1:1 by the user's own scroll input
 * rather than autoplaying, this is left running under prefers-reduced-motion
 * too (same stance the source mockup takes for its scroll-linked values).
 */
const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  const enter = useTransform(scrollYProgress, [0.02, 0.2], [0, 1]);
  const chart = useTransform(scrollYProgress, [0.2, 0.62], [0, 1]);
  const converge = useTransform(scrollYProgress, [0.55, 0.95], [0, 1]);

  const leftShift = useTransform([enter, converge], ([e, c]: number[]) => -(1 - e) * 60 + c * 22);
  const rightShift = useTransform([enter, converge], ([e, c]: number[]) => (1 - e) * 60 - c * 22);
  const leftOpacity = useTransform(enter, (e) => 0.25 + e * 0.75);
  const rightOpacity = leftOpacity;
  const mergeOpacity = converge;
  const mergeScale = useTransform(converge, (c) => 0.6 + c * 0.4);
  const mergeGlow = useTransform(converge, (c) => c * 0.22);
  const chartFillOpacity = useTransform(chart, (c) => c * 0.9);

  const beatIndexMV = useTransform(scrollYProgress, (p) => (p < 0.25 ? 0 : p < 0.5 ? 1 : p < 0.75 ? 2 : 3));
  const beatIndex = useMotionValueState(beatIndexMV);
  const beat = BEATS[beatIndex];

  const glowBg = useTransform(mergeGlow, (g) => `radial-gradient(circle 40vw at 50% 50%, rgba(91,91,245,${g}), transparent 70%)`);

  return (
    <section ref={sectionRef} className="relative h-[260vh] bg-studio-ink sm:h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-4 py-20 sm:px-6 sm:py-0">
        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: glowBg }} />

        <div className="relative z-[1] mx-auto w-full max-w-[1240px]">
          <div className="mb-2.5 flex items-baseline gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[.14em] text-studio-mutedDark">02 &mdash; How it works</span>
            <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[11px] text-studio-indigo">{beatIndex + 1}/4</span>
          </div>

          <div className="min-h-[2.3em] sm:min-h-[1.2em]">
            <AnimatePresence mode="wait">
              <motion.h2
                key={beatIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="max-w-[22ch] text-[clamp(1.7rem,3.4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.03em] text-studio-cloud"
              >
                {beat.title}
              </motion.h2>
            </AnimatePresence>
          </div>
          <div className="mt-2 min-h-[3.4em] sm:min-h-[3.2em]">
            <AnimatePresence mode="wait">
              <motion.p
                key={beatIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-[56ch] text-base leading-[1.6] text-studio-mutedDark"
              >
                {beat.body}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:mt-10 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
            {/* Campaign panel */}
            <motion.div
              style={{ x: leftShift, opacity: leftOpacity }}
              className="flex flex-col gap-4 rounded-[22px] border border-[rgba(255,106,69,.30)] bg-[rgba(255,106,69,.06)] p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.12em] text-studio-ember">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-studio-ember" />
                Campaign
              </div>
              <div className="flex flex-wrap gap-2">
                {CHANNELS.map((c, i) => (
                  <ChannelChip key={c} label={c} index={i} scrollYProgress={scrollYProgress} />
                ))}
              </div>
              <svg viewBox="0 0 320 110" preserveAspectRatio="none" aria-hidden="true" className="block h-[clamp(70px,12vh,120px)] w-full">
                <motion.path
                  d="M4 104 L60 92 L116 78 L172 56 L228 40 L284 12"
                  fill="none"
                  stroke={EMBER}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  style={{ pathLength: chart }}
                />
                <motion.path
                  d="M4 104 L60 92 L116 78 L172 56 L228 40 L284 12 L284 108 L4 108 Z"
                  fill="rgba(255,106,69,.14)"
                  style={{ opacity: chartFillOpacity }}
                />
              </svg>
              <div className="mt-auto grid grid-cols-3 gap-2.5 font-mono">
                <Metric label="REACH" scrollYProgress={scrollYProgress} format={(t) => nf.format(Math.round(2400 + t * 45600))} />
                <Metric label="ROAS" scrollYProgress={scrollYProgress} format={(t) => (1.2 + t * 5.2).toFixed(1) + "x"} />
                <Metric label="LEADS" scrollYProgress={scrollYProgress} format={(t) => nf.format(Math.round(18 + t * 322))} />
              </div>
            </motion.div>

            {/* Convergence badge */}
            <div className="flex flex-row items-center justify-center gap-2.5 sm:flex-col sm:gap-2.5">
              <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-white/15 sm:block sm:h-auto sm:w-px sm:bg-gradient-to-b" />
              <motion.div
                style={{ opacity: mergeOpacity, scale: mergeScale }}
                className="grid h-[clamp(52px,7vw,84px)] w-[clamp(52px,7vw,84px)] flex-none place-items-center rounded-full bg-studio-indigo text-center font-mono text-[10px] leading-tight text-white shadow-[0_0_0_1px_rgba(255,255,255,.18),0_0_60px_rgba(91,91,245,.55)]"
              >
                ONE<br />LAUNCH
              </motion.div>
              <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-white/15 to-transparent sm:block sm:h-auto sm:w-px sm:bg-gradient-to-b" />
            </div>

            {/* Product panel */}
            <motion.div
              style={{ x: rightShift, opacity: rightOpacity }}
              className="flex flex-col gap-4 rounded-[22px] border border-[rgba(0,207,193,.30)] bg-[rgba(0,207,193,.06)] p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.12em] text-studio-teal">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-studio-teal" />
                Product
              </div>
              <div className="flex flex-col gap-2">
                {BUILDS.map((b, i) => (
                  <BuildChip key={b.label} label={b.label} state={b.state} index={i} scrollYProgress={scrollYProgress} />
                ))}
              </div>
              <div className="mt-auto grid grid-cols-3 gap-2.5 font-mono">
                <Metric label="LIGHTHOUSE" scrollYProgress={scrollYProgress} format={(t) => Math.round(62 + t * 36) + "/100"} />
                <Metric label="LCP" scrollYProgress={scrollYProgress} format={(t) => (1.8 - t * 1.1).toFixed(1) + "s"} />
                <Metric label="UPTIME" scrollYProgress={scrollYProgress} format={(t) => (99 + t * 0.9).toFixed(1) + "%"} />
              </div>
            </motion.div>
          </div>

          <div aria-hidden="true" className="mt-5 flex gap-1.5">
            {BEATS.map((b, i) => (
              <span key={b.title} className="h-0.5 flex-1 transition-colors duration-300" style={{ background: i <= beatIndex ? INDIGO : "rgba(255,255,255,.12)" }} />
            ))}
          </div>
          <p className="mt-3.5 font-mono text-[10px] tracking-[.08em] text-studio-mutedLight">Illustrative campaign trajectory</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
