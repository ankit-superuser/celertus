import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  { value: "50+", label: "Projects shipped" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
  { value: "9", label: "Services, 2 pillars" },
];

/**
 * Hero — dark, near-viewport, CSS/framer-motion blob background standing in
 * for the mockup's WebGL fluid shader (see Index.tsx spec: intentional and
 * premium without any canvas/WebGL code).
 */
const HomeHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-studio-ink px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-40 lg:pb-24">
      {/* Background: blurred radial-gradient blobs, slow drift, center hairline, vignette. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-[10%] top-[-10%] h-[55vw] w-[55vw] max-w-[640px] max-h-[640px] rounded-full opacity-60 blur-[90px]"
          style={{ background: "radial-gradient(closest-side, rgba(255,106,69,0.55), transparent)" }}
          animate={reduceMotion ? undefined : { x: [0, 40, -10, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-15%] top-[5%] h-[50vw] w-[50vw] max-w-[580px] max-h-[580px] rounded-full opacity-50 blur-[100px]"
          style={{ background: "radial-gradient(closest-side, rgba(91,91,245,0.55), transparent)" }}
          animate={reduceMotion ? undefined : { x: [0, -30, 15, 0], y: [0, -25, 10, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[20%] h-[48vw] w-[48vw] max-w-[560px] max-h-[560px] rounded-full opacity-45 blur-[100px]"
          style={{ background: "radial-gradient(closest-side, rgba(0,207,193,0.5), transparent)" }}
          animate={reduceMotion ? undefined : { x: [0, 25, -30, 0], y: [0, -15, 20, 0] }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Center hairline */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/[.06] lg:block" />
        {/* Vignette so text stays legible over the blobs */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(120% 90% at 50% 30%, transparent 35%, rgba(10,13,24,0.75) 78%, rgba(10,13,24,0.95) 100%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px]">
        <span className="mb-7 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.16em] text-studio-mutedDark">
          <span aria-hidden="true" className="studio-pulse-dot h-2 w-2 rounded-full bg-studio-teal" />
          Marketing &amp; technology studio &mdash; New Delhi
        </span>

        <h1 className="max-w-[22ch] text-[clamp(2.7rem,7.6vw,6.4rem)] font-bold leading-[0.98] tracking-[-0.03em] text-studio-cloud">
          Marketing
          <br />
          <span className="text-studio-ember">that moves.</span>
          <span className="mt-2 block sm:mt-3">Technology</span>
          <span className="text-studio-teal">that lasts.</span>
        </h1>

        <div className="mt-9 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-[52ch] text-[17px] leading-[1.65] text-studio-mutedDark sm:text-lg">
            Half of us run the campaigns that bring people to your brand. Half of us build the websites, apps and
            cloud systems that keep them. Same room, same roadmap, one invoice.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-studio-cloud px-7 py-3.5 font-semibold text-studio-ink transition-colors hover:bg-white"
            >
              Start a project <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/[.22] px-7 py-3.5 font-medium text-studio-cloud transition-colors hover:border-white/40"
            >
              See our work
            </Link>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 pb-1 sm:mt-14 sm:gap-y-6 sm:pt-7 sm:pb-0 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <dd className="font-mono text-xl font-bold text-studio-cloud sm:text-2xl">{s.value}</dd>
              <dt className="font-mono text-[10.5px] uppercase tracking-[.1em] text-studio-mutedDark">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HomeHero;
