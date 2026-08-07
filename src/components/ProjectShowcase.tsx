import { useCallback, useEffect, useRef, useState } from "react";
import { AlertTriangle, ArrowUpRight, ExternalLink, Loader2, MousePointerClick, RotateCw, Tag } from "lucide-react";
import ShinyText from "./ShinyText";

export interface Project {
  name: string;
  url: string;
  category: string;
  description: string;
  accent: string;
  tags?: string[];
  poster?: string;
}

const PROJECTS: Project[] = [
  {
    name: "URJA POWER",
    url: "https://www.urjapower.in/",
    category: "Industrial Manufacturing",
    description:
      "Designed and developed a premium corporate website for URJA POWER, showcasing industrial-grade PVC electrical infrastructure solutions, including UPVC conduit pipes, modular electrical accessories, concealed boxes, wiring protection systems, and large-scale electrical infrastructure products. The website emphasizes premium branding, modern UI/UX, responsiveness, and a strong B2B presence.",
    accent: "#00c6ff",
    tags: [
      "Industrial",
      "Manufacturing",
      "B2B",
      "Corporate",
      "Premium Website",
      "Motion Design",
      "Brand Identity"
    ]
  },
  {
    name: "Germanysoon",
    url: "https://germanysoon.com/",
    category: "Consultancy Platform",
    description:
      "A consultancy platform that guides people through starting their journey to Germany.",
    accent: "#a855f7",
    tags: ["Consultancy", "Global Mobility", "Education", "SaaS"]
  },
  {
    name: "Gurukul Bakery",
    url: "https://gurukulbakery.com/",
    category: "Bakery & Courses",
    description:
      "An artisan bakery storefront showcasing baked goods and hands-on baking courses.",
    accent: "#f59e0b",
    tags: ["E-commerce", "Culinary", "Education", "Storefront"]
  },
  {
    name: "VD Legal",
    url: "https://vdlegal.in/",
    category: "Law Firm",
    description:
      "A full-service law firm in New Delhi delivering high-quality legal solutions.",
    accent: "#6366f1",
    tags: ["Corporate Law", "Legal Tech", "Enterprise", "B2B"]
  },
  {
    name: "Bigg Spoon",
    url: "https://biggspoon.com/",
    category: "Food & Beverage",
    description:
      "Your Complete Corporate Cafeteria Solution.",
    accent: "#10b981",
    tags: ["Corporate Dining", "F&B", "Enterprise", "Operations"]
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
      {/* Section header — Split-Screen header format */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 pb-8 border-b-2 border-border/40 text-left">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/40 font-mono text-xs text-primary uppercase tracking-wider mb-4 rounded-none shadow-brutal-sm">
            <MousePointerClick className="w-4 h-4 text-primary animate-pulse" />
            <span>[03 // FEATURED WORK]</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-wide text-foreground">
            PROJECTS, <span className="text-gradient-animated">LIVE &amp; INTERACTIVE</span>
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="font-mono text-sm sm:text-base text-muted-foreground leading-[1.7] max-w-[70ch]">
            Select a project to explore the real, deployed production website directly within the interactive viewport—scroll, navigate, and test performance in real-time.
          </p>
        </div>
      </div>

      {/* Two-column stage: phone + selector. Stacks on mobile (selector first). */}
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-14">
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
                  {/* Live site */}
                  <iframe
                    key={`${active}-${reloadKey}`}
                    src={project.url}
                    title={`${project.name} — live preview`}
                    loading="lazy"
                    onLoad={handleLoad}
                    referrerPolicy="no-referrer-when-downgrade"
                    allow="clipboard-write; encrypted-media; fullscreen"
                    className={`cs-iframe ${loading || failed ? "opacity-0" : "opacity-100"} ${
                      !finePointer && !interacting ? "pointer-events-none" : ""
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
                      <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center text-white/85 font-mono">
                        <AlertTriangle className="w-7 h-7 text-white/70 animate-bounce" />
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          CAN'T EMBED IN-FRAME
                        </span>
                        <span className="text-[11px] text-white/60 leading-[1.6]">
                          Site blocks frame embedding. Open directly in a new tab.
                        </span>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="mt-2 inline-flex items-center gap-1.5 border border-primary bg-primary px-4 py-2 text-xs font-mono font-semibold uppercase text-white rounded-none shadow-brutal-sm hover:-translate-y-0.5 transition-all"
                        >
                          Open Live Site
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ) : (
                      <>
                        <div className="cs-shimmer" />
                        <div className="relative z-10 flex flex-col items-center gap-3 text-white/80 font-mono">
                          <Loader2 className="w-7 h-7 animate-spin text-primary" />
                          <span className="text-xs font-medium tracking-wider uppercase">
                            Loading {project.name}…
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Touch-only "tap to interact" gate */}
                  {!finePointer && !interacting && !failed && (
                    <button
                      type="button"
                      onClick={() => setInteracting(true)}
                      aria-label={`Tap to interact with ${project.name}`}
                      className={`cs-tap ${loading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                    >
                      <span className="cs-tap-pill font-mono">
                        <MousePointerClick className="w-4 h-4" />
                        TAP TO INTERACT
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Controls under the phone */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="cs-magnetic inline-flex items-center gap-2 rounded-none border border-primary bg-primary px-6 py-3 text-xs font-bold font-mono uppercase tracking-wider text-white shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              Open Live Site
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={reload}
              className="cs-magnetic inline-flex items-center gap-2 rounded-none border-2 border-foreground/30 bg-background px-5 py-3 text-xs font-semibold font-mono uppercase tracking-wider text-foreground hover:border-primary transition-all"
            >
              <RotateCw className="w-4 h-4" />
              Reload Frame
            </button>
          </div>
        </div>

        {/* ── Selector ──────────────────────────────────────────────────── */}
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
                className={`cs-card sheen group snap-start shrink-0 w-[85%] sm:w-[50%] lg:w-full text-left rounded-none border-2 p-5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? "cs-card-active border-primary bg-card/90 shadow-brutal"
                    : "border-border/70 bg-card/40 hover:bg-card/70 hover:border-primary/50 hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-none font-mono text-xs font-bold text-white shadow-brutal-sm border border-white/20 transition-transform group-hover:scale-105"
                    style={{
                      background: `linear-gradient(150deg, ${p.accent}, ${p.accent}99)`,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <div className="min-w-0 flex-1 font-mono">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors tracking-wide truncate">
                        {p.name}
                      </h3>
                      <ArrowUpRight
                        className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0"
                        }`}
                        style={{ color: p.accent }}
                      />
                    </div>
                    <p className="mt-0.5 truncate text-[11px] font-bold uppercase tracking-widest text-primary">
                      {p.category}
                    </p>
                    <p className="mt-2 line-clamp-2 text-xs text-muted-foreground leading-[1.7]">
                      {p.description}
                    </p>

                    {/* Project Tags */}
                    {p.tags && p.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none text-[9px] font-mono uppercase bg-muted/60 text-muted-foreground border border-border/50 group-hover:border-primary/30 transition-colors"
                          >
                            <Tag className="w-2.5 h-2.5 opacity-60" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Component-scoped styles */}
      <style>{`
        .cs-root {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s ease, transform .7s ease;
          overflow-x: clip;
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

        .cs-tap {
          position: absolute; inset: 0; z-index: 15;
          display: grid; place-items: end center;
          padding-bottom: 1.25rem;
          background: linear-gradient(to top, rgba(0,0,0,.5), transparent 40%);
          transition: opacity .4s ease;
          cursor: pointer;
          touch-action: pan-y;
        }
        .cs-tap-pill {
          display: inline-flex; align-items: center; gap: .4rem;
          border-radius: 999px; padding: .5rem .9rem;
          background: rgba(10,10,12,.82); backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,.14);
          color: #fff; font-size: .75rem; font-weight: 600;
          animation: cs-tap-bob 2.4s ease-in-out infinite;
        }

        .cs-card-active {
          box-shadow: 0 0 0 1.5px var(--accent), 0 18px 40px -22px var(--accent);
        }
        .cs-in .cs-frame {
          animation: cs-phone-punch .9s var(--cs-spring) both;
        }
        .cs-in .cs-card {
          animation: cs-card-spring .7s var(--cs-spring) both;
        }

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
        @keyframes cs-tap-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }

        .cs-selector::-webkit-scrollbar { height: 0; width: 0; }
        .cs-selector { scrollbar-width: none; }

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
