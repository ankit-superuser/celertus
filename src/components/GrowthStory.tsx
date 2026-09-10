import { useEffect, useRef, useState } from "react";
import { Search, Target, Share2, FileText, Mail } from "lucide-react";

/**
 * GrowthStory — the interactive beat of the homepage.
 *
 * A tall section with a sticky stage. Scroll progress (0→1) drives four
 * overlapping beats: the frame settles, an SVG line draws itself, three metric
 * counters run, and channel chips fly in.
 *
 * Everything animates via transform / opacity / stroke-dashoffset only, so the
 * section can never cause layout shift while the numbers are changing.
 * Under reduced motion or on small screens the sticky pin is dropped and the
 * final state renders statically.
 */

const CHANNELS = [
  { label: "SEO", Icon: Search },
  { label: "Ads", Icon: Target },
  { label: "Social", Icon: Share2 },
  { label: "Content", Icon: FileText },
  { label: "Email", Icon: Mail },
];

/** Illustrative trajectory — not a specific client's numbers. */
const METRICS = [
  { label: "Monthly reach", from: 2400, to: 48000, format: "number" as const },
  { label: "Return on ad spend", from: 1.2, to: 6.4, format: "multiple" as const },
  { label: "Qualified leads", from: 18, to: 340, format: "number" as const },
];

/** The shape of the chart line, in a 0–100 × 0–100 viewBox. */
const CHART_POINTS = "0,88 14,82 28,71 42,74 56,55 70,42 84,24 100,10";

const numberFmt = new Intl.NumberFormat("en-US");

const formatMetric = (value: number, format: "number" | "multiple") =>
  format === "multiple" ? `${value.toFixed(1)}x` : numberFmt.format(Math.round(value));

/** Map a global 0–1 progress onto a sub-range, clamped to 0–1. */
const beat = (p: number, start: number, end: number) =>
  Math.max(0, Math.min(1, (p - start) / (end - start)));

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const GrowthStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isStatic, setIsStatic] = useState(false);

  useEffect(() => {
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallMq = window.matchMedia("(max-width: 767px)");

    const evaluate = () => setIsStatic(reducedMq.matches || smallMq.matches);
    evaluate();

    reducedMq.addEventListener("change", evaluate);
    smallMq.addEventListener("change", evaluate);
    return () => {
      reducedMq.removeEventListener("change", evaluate);
      smallMq.removeEventListener("change", evaluate);
    };
  }, []);

  useEffect(() => {
    if (isStatic) {
      setProgress(1);
      return;
    }

    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Progress across the scrollable portion of the section.
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(1);
        return;
      }
      setProgress(Math.max(0, Math.min(1, -rect.top / scrollable)));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isStatic]);

  // Beat 1 — frame settles.
  const frameIn = easeOut(beat(progress, 0.0, 0.25));
  // Beat 2 — the line draws.
  const draw = easeOut(beat(progress, 0.2, 0.55));
  // Beat 3 — counters run.
  const count = easeOut(beat(progress, 0.35, 0.75));
  // Beat 4 — audience dots and channel chips.
  const settle = easeOut(beat(progress, 0.55, 1.0));

  const dotCount = 36;
  const dotsVisible = Math.round(dotCount * settle);

  return (
    <section
      id="growth"
      ref={sectionRef}
      className={isStatic ? "relative bg-background" : "relative bg-background h-[280vh]"}
      aria-labelledby="growth-heading"
    >
      <div
        className={
          isStatic
            ? "px-4 sm:px-8 md:px-12 py-20"
            : "sticky top-0 h-screen flex items-center overflow-hidden px-4 sm:px-8 md:px-12"
        }
      >
        <div className="container mx-auto w-full">
          {/* Heading */}
          <div
            className="max-w-2xl mb-10"
            style={{
              opacity: frameIn,
              transform: `translateY(${(1 - frameIn) * 20}px)`,
            }}
          >
            <span className="text-sm text-muted-foreground">Why both halves matter</span>
            <h2 id="growth-heading" className="font-display text-foreground mt-3">
              Watch a campaign compound
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Chart */}
            <div
              className="lg:col-span-7"
              style={{
                opacity: frameIn,
                transform: `translateY(${(1 - frameIn) * 24}px)`,
              }}
            >
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
                <div className="flex items-baseline justify-between mb-6">
                  <p className="text-sm text-muted-foreground">
                    Illustrative campaign trajectory
                  </p>
                  <p className="text-sm text-muted-foreground tabular-nums">
                    Month 1 &ndash; 12
                  </p>
                </div>

                <div className="relative w-full aspect-[16/9]">
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="w-full h-full overflow-visible"
                    role="img"
                    aria-label="A line chart rising from left to right, illustrating compounding campaign growth."
                  >
                    <defs>
                      <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="growth-line" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                      <clipPath id="growth-clip">
                        {/* Scales horizontally with the draw beat so the fill
                            follows the line rather than appearing all at once. */}
                        <rect x="0" y="-10" width="100" height="120" transform={`scale(${Math.max(draw, 0.0001)} 1)`} />
                      </clipPath>
                    </defs>

                    {/* Grid lines */}
                    {[25, 50, 75].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="100"
                        y2={y}
                        stroke="hsl(var(--border))"
                        strokeWidth="0.4"
                        vectorEffect="non-scaling-stroke"
                      />
                    ))}

                    <g clipPath="url(#growth-clip)">
                      <polygon points={`0,100 ${CHART_POINTS} 100,100`} fill="url(#growth-fill)" />
                    </g>

                    <polyline
                      points={CHART_POINTS}
                      fill="none"
                      stroke="url(#growth-line)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      pathLength={1}
                      strokeDasharray={1}
                      strokeDashoffset={1 - draw}
                    />
                  </svg>
                </div>

                {/* Audience dots */}
                <div className="mt-7 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Audience reached</p>
                  <div className="flex flex-wrap gap-1.5" aria-hidden="true">
                    {Array.from({ length: dotCount }).map((_, i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary transition-opacity duration-500"
                        style={{
                          opacity: i < dotsVisible ? 0.25 + (i / dotCount) * 0.75 : 0,
                          transform: `scale(${i < dotsVisible ? 1 : 0.4})`,
                          transition: "opacity .4s ease, transform .4s cubic-bezier(0.22,1,0.36,1)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics + channels */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {METRICS.map((metric, i) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                    style={{
                      opacity: frameIn,
                      transform: `translateY(${(1 - frameIn) * (16 + i * 6)}px)`,
                    }}
                  >
                    <p className="text-sm text-muted-foreground mb-1.5">{metric.label}</p>
                    <p className="font-display text-3xl sm:text-4xl text-foreground tabular-nums">
                      {formatMetric(
                        metric.from + (metric.to - metric.from) * count,
                        metric.format
                      )}
                    </p>
                  </div>
                ))}
              </div>

              {/* Channel chips */}
              <div className="mt-7">
                <p className="text-sm text-muted-foreground mb-3">Channels working together</p>
                <div className="flex flex-wrap gap-2">
                  {CHANNELS.map(({ label, Icon }, i) => {
                    const chipIn = easeOut(
                      beat(settle, (i / CHANNELS.length) * 0.7, (i / CHANNELS.length) * 0.7 + 0.3)
                    );
                    return (
                      <span
                        key={label}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground shadow-soft"
                        style={{
                          opacity: chipIn,
                          transform: `translateY(${(1 - chipIn) * 14}px)`,
                        }}
                      >
                        <Icon className="w-3.5 h-3.5 text-primary" />
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>

              <p
                className="mt-7 text-sm text-muted-foreground"
                style={{ opacity: settle }}
              >
                No single channel did this. The compounding comes from search, paid,
                social and email feeding each other &mdash; on a site fast enough to
                convert the traffic they send.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthStory;
