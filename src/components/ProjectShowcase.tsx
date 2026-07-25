import { useCallback, useEffect, useRef, useState } from "react";
import { AlertTriangle, ArrowUpRight, ExternalLink, Loader2, MousePointerClick, RotateCw } from "lucide-react";
import ShinyText from "./ShinyText";

/**
 * ───────────────────────────────────────────────────────────────────────────
 *  EDIT YOUR PROJECTS HERE  ▸  one object per project, that's it.
 *
 *  Each project loads LIVE inside the iPhone. Fields:
 *    name        – shown in the selector + on the phone status bar
 *    url         – the deployed https:// URL. NOTE: the site must allow being
 *                  embedded in an <iframe>. If a site sends
 *                  `X-Frame-Options: DENY` or a `frame-ancestors` CSP, it will
 *                  render blank — the "Open live ↗" button + optional `poster`
 *                  screenshot cover that case gracefully. (See note at bottom.)
 *    category    – short label, e.g. "E-commerce", "SaaS", "Landing Page"
 *    description – one line describing what you built
 *    accent      – any CSS color; drives that project's glow + highlight
 *    poster      – OPTIONAL: path to a screenshot in /public shown while the
 *                  live site loads (and as a fallback if embedding is blocked)
 * ───────────────────────────────────────────────────────────────────────────
 */
export interface Project {
  name: string;
  url: string;
  category: string;
  description: string;
  accent: string;
  poster?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Germanysoon",
    url: "https://germanysoon.com/",
    category: "Consultancy Platform",
    description:
      "A consultancy platform that guides people through starting their journey to Germany.",
    accent: "#a855f7",
  },
  {
    name: "Gurukul Bakery",
    url: "https://gurukulbakery.com/",
    category: "Bakery & Courses",
    description:
      "An artisan bakery storefront showcasing baked goods and hands-on baking courses.",
    accent: "#f59e0b",
  },
  {
    name: "VD Legal",
    url: "https://vdlegal.in/",
    category: "Law Firm",
    description:
      "A full-service law firm in New Delhi delivering high-quality legal solutions.",
    accent: "#6366f1",
  },
  {
    name: "Bigg Spoon",
    url: "https://biggspoon.com/",
    category: "Food & Beverage",
    description:
      "Your Complete Corporate Cafeteria Solution.",
    accent: "#10b981",
  },
];

/** Detect a device that can hover with a fine pointer (i.e. a real mouse). */
const useFinePointer = () => {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return fine;
};

/** Whether the user prefers reduced motion (drives the JS-based tilt). */
const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
};

/** How long to wait for a site to load before showing the "can't embed" fallback. */
const LOAD_TIMEOUT_MS = 9000;

/** Reveal-on-scroll: adds `.cs-in` once the section enters the viewport. */
const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
};

const ProjectShowcase = () => {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  // Touch devices gate interaction so page-scroll isn't trapped by the iframe.
  const [interacting, setInteracting] = useState(false);

  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();
  const { ref: sectionRef, shown } = useReveal<HTMLDivElement>();

  const tiltRef = useRef<HTMLDivElement | null>(null);
  const loadTimer = useRef<number | null>(null);
  const project = PROJECTS[active];

  // Switch project → show the loading shimmer until the new site fires onLoad.
  const select = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setLoading(true);
      setFailed(false);
      setInteracting(false);
      setActive(idx);
    },
    [active]
  );

  const reload = useCallback(() => {
    setLoading(true);
    setFailed(false);
    setInteracting(false);
    setReloadKey((k) => k + 1);
  }, []);

  // Failsafe: if the iframe never fires onLoad (site down, or it blocks framing
  // and the browser suppresses the load event) fall back to a "can't embed"
  // state instead of spinning forever. Runs on every (re)mount of the iframe.
  useEffect(() => {
    loadTimer.current = window.setTimeout(() => {
      setLoading(false);
      setFailed(true);
    }, LOAD_TIMEOUT_MS);
    return () => {
      if (loadTimer.current) window.clearTimeout(loadTimer.current);
    };
  }, [active, reloadKey]);

  const handleLoad = useCallback(() => {
    if (loadTimer.current) window.clearTimeout(loadTimer.current);
    setLoading(false);
    setFailed(false);
  }, []);

  // 3D tilt that follows the cursor — desktop only, respects reduced motion.
  const handleTilt = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = tiltRef.current;
      if (!el || !finePointer || reducedMotion) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 … 0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${px * 14}deg`);
      el.style.setProperty("--rx", `${py * -14}deg`);
    },
    [finePointer, reducedMotion]
  );

  const resetTilt = useCallback(() => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`cs-root container mx-auto py-20 px-4 sm:px-8 md:px-16 ${shown ? "cs-in" : ""}`}
      style={{ ["--accent" as string]: project.accent }}
    >
      {/* Section header — mirrors the Services section styling */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
          <MousePointerClick className="w-4 h-4 text-primary" />
          <ShinyText text="Our Work" speed={3} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Projects, Live &amp; Interactive</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Pick a project and explore the real, deployed site right inside the
          phone — scroll it, tap it, try it.
        </p>
      </div>

      {/* Two-column stage: phone + selector. Stacks on mobile (selector first). */}
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-14">
        {/* ── Phone ─────────────────────────────────────────────────────── */}
        <div className="cs-stage order-2 lg:order-1 flex flex-col items-center">
          <div
            ref={tiltRef}
            className="cs-tilt"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            {/* accent glow aura */}
            <div className="cs-glow" aria-hidden="true" />

            <div className="cs-float">
              <div className="cs-frame">
                <div className="cs-island" aria-hidden="true" />

                <div className="cs-screen">
                  {/* Live site — keyed on the active index so switching always
                      remounts (even when two projects share a URL). */}
                  <iframe
                    key={`${active}-${reloadKey}`}
                    src={project.url}
                    title={`${project.name} — live preview`}
                    loading="lazy"
                    onLoad={handleLoad}
                    referrerPolicy="no-referrer-when-downgrade"
                    allow="clipboard-write; encrypted-media; fullscreen"
                    className={`cs-iframe ${loading || failed ? "opacity-0" : "opacity-100"} ${!finePointer && !interacting ? "pointer-events-none" : ""
                      }`}
                  />

                  {/* Poster / loading / fallback layer */}
                  <div
                    className={`cs-poster ${loading || failed ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    aria-hidden={!(loading || failed)}
                  >
                    {project.poster ? (
                      <img
                        src={project.poster}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    ) : null}

                    {failed ? (
                      <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center text-white/85">
                        <AlertTriangle className="w-7 h-7 text-white/70" />
                        <span className="text-sm font-semibold">
                          Can&apos;t preview in-frame
                        </span>
                        <span className="text-xs text-white/55">
                          This site blocks embedding or took too long. Open it live below.
                        </span>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/20"
                        >
                          Open live site
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ) : (
                      <>
                        <div className="cs-shimmer" />
                        <div className="relative z-10 flex flex-col items-center gap-3 text-white/80">
                          <Loader2 className="w-7 h-7 animate-spin" />
                          <span className="text-xs font-medium tracking-wide">
                            Loading {project.name}…
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Touch-only "tap to interact" gate: a drag over it scrolls
                      the page; a tap hands control to the live site. */}
                  {!finePointer && !interacting && !failed && (
                    <button
                      type="button"
                      onClick={() => setInteracting(true)}
                      aria-label={`Tap to interact with ${project.name}`}
                      className={`cs-tap ${loading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                    >
                      <span className="cs-tap-pill">
                        <MousePointerClick className="w-4 h-4" />
                        Tap to interact
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Controls under the phone */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Open live site
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={reload}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <RotateCw className="w-4 h-4" />
              Reload
            </button>
          </div>
        </div>

        {/* ── Selector ──────────────────────────────────────────────────── */}
        {/* Mobile: horizontal snap-scroll of chips. Desktop: vertical list. */}
        <div
          role="group"
          aria-label="Select a project to preview"
          className="cs-selector order-1 lg:order-2 flex gap-3 overflow-x-auto px-0.5 py-3 snap-x snap-mandatory lg:flex-col lg:gap-4 lg:overflow-visible lg:p-0"
        >
          {PROJECTS.map((p, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={p.name + idx}
                aria-pressed={isActive}
                aria-label={`Preview ${p.name}`}
                onClick={() => select(idx)}
                style={{ ["--accent" as string]: p.accent, animationDelay: `${idx * 90}ms` }}
                className={`cs-card group snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-full text-left rounded-2xl border p-5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${isActive
                  ? "cs-card-active border-transparent bg-card"
                  : "border-border bg-card/40 hover:bg-card/70 hover:-translate-y-0.5"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl font-mono text-sm font-bold text-white"
                    style={{
                      background: `linear-gradient(150deg, ${p.accent}, ${p.accent}66)`,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="truncate text-base font-semibold text-foreground">
                        {p.name}
                      </h3>
                      <ArrowUpRight
                        className={`h-4 w-4 shrink-0 transition-all duration-300 ${isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0"
                          }`}
                        style={{ color: p.accent }}
                      />
                    </div>
                    <p className="mt-0.5 truncate text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {p.category}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Component-scoped styles (keeps tailwind.config untouched). */}
      <style>{`
        .cs-root {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s ease, transform .7s ease;
          overflow-x: clip; /* contain the phone's bleeding glow */
        }
        .cs-root.cs-in { opacity: 1; transform: none; }

        /* ── Phone frame ─────────────────────────────────────────── */
        .cs-stage { --phone-w: clamp(15rem, 68vw, 19.5rem); perspective: 1400px; }

        .cs-tilt {
          --rx: 0deg; --ry: 0deg;
          transform: rotateX(var(--rx)) rotateY(var(--ry));
          transform-style: preserve-3d;
          transition: transform .25s ease-out;
          position: relative;
        }

        .cs-glow {
          position: absolute; inset: -14%;
          background: radial-gradient(circle at 50% 42%, var(--accent), transparent 62%);
          filter: blur(56px);
          opacity: .5;
          z-index: 0;
          transition: background .6s ease;
          animation: cs-glow-pulse 6s ease-in-out infinite;
        }

        .cs-float { position: relative; z-index: 1; animation: cs-float 7s ease-in-out infinite; }

        .cs-frame {
          position: relative;
          width: var(--phone-w);
          aspect-ratio: 9 / 19.5;
          margin: 0 auto;
          padding: .5rem;
          border-radius: 3rem;
          background: linear-gradient(155deg, #35353c 0%, #0a0a0c 45%, #1c1c22 100%);
          box-shadow:
            0 0 0 2px rgba(255,255,255,.05),
            inset 0 0 0 2px rgba(255,255,255,.06),
            0 40px 90px -25px rgba(0,0,0,.85),
            0 0 60px -20px var(--accent);
          transition: box-shadow .6s ease;
        }
        /* side buttons */
        .cs-frame::before, .cs-frame::after {
          content: ""; position: absolute; left: -2px; width: 3px; border-radius: 3px;
          background: linear-gradient(180deg, #3a3a42, #17171b);
        }
        .cs-frame::before { top: 22%; height: 8%; }
        .cs-frame::after  { top: 33%; height: 12%; }

        .cs-screen {
          position: relative; height: 100%; width: 100%;
          overflow: hidden; border-radius: 2.5rem; background: #000;
        }
        .cs-island {
          position: absolute; top: .55rem; left: 50%; transform: translateX(-50%);
          width: 34%; height: 1.15rem; background: #000; border-radius: 1rem; z-index: 20;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.05);
        }
        .cs-iframe {
          position: absolute; inset: 0; height: 100%; width: 100%; border: 0;
          background: #fff;
          transition: opacity .5s ease;
        }
        .cs-poster {
          position: absolute; inset: 0; z-index: 10;
          display: grid; place-items: center;
          background: #0a0a0c;
          transition: opacity .5s ease;
          overflow: hidden;
        }
        .cs-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,.06) 50%, transparent 70%);
          background-size: 220% 100%;
          animation: cs-shimmer 1.6s linear infinite;
        }

        /* Touch tap-to-interact gate */
        .cs-tap {
          position: absolute; inset: 0; z-index: 15;
          display: grid; place-items: end center;
          padding-bottom: 1.25rem;
          background: linear-gradient(to top, rgba(0,0,0,.5), transparent 40%);
          transition: opacity .4s ease;
          cursor: pointer;
          touch-action: pan-y; /* let vertical page-scroll drags pass through */
        }
        .cs-tap-pill {
          display: inline-flex; align-items: center; gap: .4rem;
          border-radius: 999px; padding: .5rem .9rem;
          background: rgba(10,10,12,.82); backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,.14);
          color: #fff; font-size: .75rem; font-weight: 600;
          animation: cs-tap-bob 2.4s ease-in-out infinite;
        }

        /* ── Selector cards ──────────────────────────────────────── */
        .cs-card-active {
          box-shadow: 0 0 0 1.5px var(--accent), 0 18px 40px -22px var(--accent);
        }
        /* Phone punch-zooms in from a 3D rotateY, matching the spring language. */
        .cs-in .cs-frame {
          animation: cs-phone-punch .9s var(--cs-spring) both;
        }
        .cs-in .cs-card {
          animation: cs-card-spring .7s var(--cs-spring) both;
        }

        /* ── Keyframes ───────────────────────────────────────────── */
        @keyframes cs-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes cs-glow-pulse {
          0%, 100% { opacity: .4; }
          50%      { opacity: .62; }
        }
        @keyframes cs-shimmer {
          0%   { background-position: 220% 0; }
          100% { background-position: -120% 0; }
        }
        @keyframes cs-rise {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes cs-tap-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }

        /* Hide scrollbar on the mobile selector strip */
        .cs-selector::-webkit-scrollbar { height: 0; width: 0; }
        .cs-selector { scrollbar-width: none; }

        /* Respect reduced-motion: kill continuous + reveal motion */
        @media (prefers-reduced-motion: reduce) {
          .cs-root { transition: none; opacity: 1; transform: none; }
          .cs-float, .cs-glow, .cs-shimmer, .cs-in .cs-card, .cs-in .cs-frame, .cs-tap-pill { animation: none; }
          .cs-tilt { transition: none; }
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;

/*
 * ── Note on embedding ──────────────────────────────────────────────────────
 * Loading a site inside the iPhone uses an <iframe>. A site can only be framed
 * if it does NOT block it via response headers:
 *   • X-Frame-Options: DENY / SAMEORIGIN   → blocks framing
 *   • Content-Security-Policy: frame-ancestors 'none'  → blocks framing
 * These are your own deployed projects, so you can allow embedding by either
 * removing those headers or setting `frame-ancestors 'self' https://celertus.germanysoon.com`.
 * If a project can't be framed, add a `poster` screenshot to its entry — the
 * showcase then shows the screenshot + the "Open live site ↗" button instead.
 */
