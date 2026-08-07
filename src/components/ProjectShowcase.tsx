import { useCallback, useEffect, useRef, useState } from "react";
import { AlertTriangle, ArrowUpRight, ExternalLink, Loader2, MousePointerClick, RotateCw, Tag, Monitor, Smartphone } from "lucide-react";
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

const LOAD_TIMEOUT_MS = 9000;

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

  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();
  const { ref: sectionRef, shown } = useReveal<HTMLDivElement>();

  const stageRef = useRef<HTMLDivElement | null>(null);
  const loadTimer = useRef<number | null>(null);
  const project = PROJECTS[active];

  const select = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setLoading(true);
      setFailed(false);
      setActive(idx);
    },
    [active]
  );

  const reload = useCallback(() => {
    setLoading(true);
    setFailed(false);
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

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = stageRef.current;
      if (!el || !finePointer || reducedMotion) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--tilt-x", `${py * -8}deg`);
      el.style.setProperty("--tilt-y", `${px * 10}deg`);
    },
    [finePointer, reducedMotion]
  );

  const resetMouse = useCallback(() => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }, []);

  return (
    <div
      ref={sectionRef}
      id="work"
      className={`cs-root min-h-screen flex flex-col justify-center container mx-auto py-24 lg:py-32 px-4 sm:px-8 md:px-12 ${shown ? "cs-in" : ""}`}
      style={{ ["--accent" as string]: project.accent }}
    >
      {/* Section header — Split-Screen header format */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 pb-8 border-b border-white/10 text-left">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 backdrop-blur-xl font-mono text-xs text-primary uppercase tracking-wider mb-4 rounded-full shadow-lg shadow-primary/10">
            <MousePointerClick className="w-4 h-4 text-primary animate-pulse" />
            <span>[03 // FEATURED SHOWCASE]</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-wide text-foreground">
            DUAL-DEVICE <span className="text-gradient-animated">LIVE SHOWCASE</span>
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="font-mono text-sm sm:text-base text-muted-foreground leading-[1.7] max-w-[70ch]">
            Simultaneously preview our client deployments across synchronized Laptop (Desktop) and Smartphone (Mobile) viewports.
          </p>
        </div>
      </div>

      {/* Main Dual Device Stage & Selector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* ── Dual Device Stage (Laptop + Phone) ─────────────────────────────────── */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
          className="lg:col-span-7 flex flex-col items-center relative perspective-[1200px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-purple-500/20 to-pink-500/20 blur-3xl opacity-40 rounded-full pointer-events-none" />

          {/* Dual Device Composite Wrapper */}
          <div
            className="relative w-full max-w-[640px] aspect-[16/11] transition-transform duration-300 ease-out"
            style={{
              transform: "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
            }}
          >
            {/* 1. DESKTOP LAPTOP MOCKUP */}
            <div className="absolute inset-x-0 top-0 w-[88%] mx-auto aspect-[16/10] bg-zinc-900 rounded-t-2xl border-[3px] border-zinc-700 shadow-2xl overflow-hidden z-10">
              {/* Laptop Screen Bezel */}
              <div className="w-full h-full bg-black relative flex flex-col">
                {/* Top Notch / Camera dot */}
                <div className="w-full bg-zinc-950 h-5 flex items-center justify-center px-4 border-b border-white/10 shrink-0">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto flex items-center gap-1 font-mono text-[10px] text-zinc-400">
                    <Monitor className="w-3 h-3 text-primary" />
                    <span className="truncate max-w-[180px]">{project.name} — Desktop View</span>
                  </div>
                </div>

                {/* Desktop Screen Viewport */}
                <div className="relative flex-1 w-full bg-black overflow-hidden">
                  <iframe
                    key={`laptop-${active}-${reloadKey}`}
                    src={project.url}
                    title={`${project.name} desktop preview`}
                    loading="lazy"
                    onLoad={handleLoad}
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`w-full h-full border-0 transition-opacity duration-500 ${
                      loading || failed ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Loading / Fallback Layer */}
                  {(loading || failed) && (
                    <div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center p-6 text-center text-white font-mono">
                      {failed ? (
                        <>
                          <AlertTriangle className="w-8 h-8 text-yellow-500 mb-2" />
                          <span className="text-xs font-bold uppercase">PREVIEW RESTRICTED</span>
                          <span className="text-[11px] text-zinc-400 mt-1 max-w-[200px]">
                            Site blocks frame embedding. Open directly below.
                          </span>
                        </>
                      ) : (
                        <>
                          <Loader2 className="w-8 h-8 animate-spin text-primary mb-2" />
                          <span className="text-xs font-bold uppercase tracking-wider">
                            LOADING DESKTOP VIEW…
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Laptop Keyboard Base Bar */}
              <div className="absolute bottom-0 inset-x-0 h-3 bg-zinc-800 border-t border-zinc-600 rounded-b-sm flex justify-center items-center">
                <div className="w-16 h-1 bg-zinc-600 rounded-full" />
              </div>
            </div>

            {/* Laptop Bottom Deck Shadow */}
            <div className="absolute bottom-[10%] inset-x-[4%] h-4 bg-zinc-950/80 rounded-b-2xl border-t border-zinc-700 shadow-2xl" />

            {/* 2. SMARTPHONE MOBILE MOCKUP (Positioned Bottom Right) */}
            <div className="absolute right-0 bottom-0 w-[30%] aspect-[9/19] bg-zinc-900 rounded-[2rem] border-[3px] border-zinc-700 shadow-2xl overflow-hidden z-20 transition-transform duration-300 hover:scale-105">
              <div className="w-full h-full bg-black relative flex flex-col">
                {/* Dynamic Island Notch */}
                <div className="w-full h-6 bg-zinc-950 flex items-center justify-center shrink-0 border-b border-white/5">
                  <div className="w-12 h-2.5 bg-black rounded-full border border-zinc-800" />
                </div>

                {/* Mobile Viewport */}
                <div className="relative flex-1 w-full bg-black overflow-hidden">
                  <iframe
                    key={`mobile-${active}-${reloadKey}`}
                    src={project.url}
                    title={`${project.name} mobile preview`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`w-full h-full border-0 transition-opacity duration-500 ${
                      loading || failed ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  {(loading || failed) && (
                    <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center p-2 text-center text-white font-mono">
                      <Smartphone className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Home Indicator */}
                <div className="w-full h-3 bg-black flex justify-center items-center shrink-0">
                  <div className="w-10 h-1 bg-zinc-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons under showcase */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="cs-magnetic inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-7 py-3 text-xs font-bold font-mono uppercase tracking-wider text-white shadow-xl shadow-primary/25 hover:scale-105 transition-all duration-300"
            >
              Open Live Deployment
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={reload}
              className="cs-magnetic inline-flex items-center gap-2 rounded-full border border-white/20 bg-card/60 backdrop-blur-xl px-6 py-3 text-xs font-semibold font-mono uppercase tracking-wider text-foreground hover:border-primary transition-all duration-300"
            >
              <RotateCw className="w-4 h-4" />
              Sync Viewports
            </button>
          </div>
        </div>

        {/* ── Project Selector List (Right Column) ─────────────────────────────────── */}
        <div className="lg:col-span-5 flex flex-col gap-4 font-mono">
          {PROJECTS.map((p, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={p.name + idx}
                aria-pressed={isActive}
                aria-label={`Preview ${p.name}`}
                onClick={() => select(idx)}
                style={{ ["--accent" as string]: p.accent }}
                className={`cs-card sheen text-left rounded-3xl border p-6 transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "border-primary bg-card/90 shadow-2xl shadow-primary/10 scale-[1.02]"
                    : "border-white/10 bg-card/40 hover:bg-card/70 hover:border-primary/40 hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl font-mono text-xs font-bold text-white shadow-md border border-white/20"
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
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-muted/60 text-muted-foreground border border-white/10 transition-colors"
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
    </div>
  );
};

export default ProjectShowcase;
