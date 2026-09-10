import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, Loader2, RotateCw, ChevronLeft, ChevronRight } from "lucide-react";

export interface Project {
  name: string;
  url: string;
  category: string;
  description: string;
  accent: string;
  tags?: string[];
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
const SWIPE_THRESHOLD = 45;

const ProjectShowcase = () => {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  /** Drives the cross-fade when switching projects. */
  const [swapping, setSwapping] = useState(false);

  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();

  const stageRef = useRef<HTMLDivElement | null>(null);
  const loadTimer = useRef<number | null>(null);
  const swapTimer = useRef<number | null>(null);
  const pointerStart = useRef<number | null>(null);

  const project = PROJECTS[active];

  const select = useCallback(
    (idx: number) => {
      const next = (idx + PROJECTS.length) % PROJECTS.length;
      if (next === active) return;
      setSwapping(true);
      if (swapTimer.current) window.clearTimeout(swapTimer.current);
      swapTimer.current = window.setTimeout(
        () => {
          setLoading(true);
          setFailed(false);
          setActive(next);
          setSwapping(false);
        },
        reducedMotion ? 0 : 220
      );
    },
    [active, reducedMotion]
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

  useEffect(
    () => () => {
      if (swapTimer.current) window.clearTimeout(swapTimer.current);
    },
    []
  );

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
      el.style.setProperty("--tilt-x", `${py * -3}deg`);
      el.style.setProperty("--tilt-y", `${px * 4}deg`);
    },
    [finePointer, reducedMotion]
  );

  const resetMouse = useCallback(() => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }, []);

  /* Swipe to change projects on touch devices. */
  const onPointerDown = (e: React.PointerEvent) => {
    pointerStart.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (pointerStart.current === null) return;
    const dx = e.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    select(dx < 0 ? active + 1 : active - 1);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      select(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      select(active - 1);
    }
  };

  return (
    /* One of the two dark contrast bands on the page. */
    <div className="dark bg-background text-foreground">
      <div className="w-full py-20 sm:py-24 lg:py-28 container mx-auto px-4 sm:px-8 md:px-12">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="text-sm text-muted-foreground">Selected work</span>
            <h2 className="font-display text-foreground mt-3">Work we&rsquo;re proud of</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-muted-foreground">
              Live previews of client sites, running in a real browser. Pick a project
              &mdash; or swipe the phone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ── iPhone stage ─────────────────────────────────────────────── */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMouse}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onKeyDown={onKeyDown}
            tabIndex={0}
            role="group"
            aria-label={`${project.name} preview. Use left and right arrow keys to change project.`}
            className="lg:col-span-6 flex flex-col items-center relative focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-3xl"
            style={{ perspective: "1200px" }}
          >
            {/* Soft ambient pool under the device */}
            <div
              aria-hidden="true"
              className="absolute bottom-16 w-56 h-10 rounded-[50%] blur-2xl opacity-40"
              style={{ background: project.accent }}
            />

            <div
              className="relative w-full max-w-[300px] aspect-[9/19.5]"
              style={{
                transform: `rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) translateY(${
                  swapping ? "6px" : "0px"
                })`,
                opacity: swapping ? 0 : 1,
                transition: "transform 450ms cubic-bezier(0.22,1,0.36,1), opacity 450ms ease",
              }}
            >
              {/* Phone shell */}
              <div className="w-full h-full rounded-[2.75rem] bg-zinc-900 border-[3px] border-zinc-700 p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,.7)]">
                <div className="w-full h-full rounded-[2.25rem] bg-black relative flex flex-col overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-20 h-5 bg-black rounded-full" />

                  {/* Viewport */}
                  <div className="relative flex-1 w-full bg-black overflow-hidden">
                    <iframe
                      key={`mobile-${active}-${reloadKey}`}
                      src={project.url}
                      title={`${project.name} mobile preview`}
                      loading="lazy"
                      onLoad={handleLoad}
                      referrerPolicy="no-referrer-when-downgrade"
                      className={`w-full h-full border-0 transition-opacity duration-500 ${
                        loading || failed ? "opacity-0" : "opacity-100"
                      }`}
                    />

                    {/* Loading spinner */}
                    {loading && !failed && (
                      <div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center gap-3 text-center px-6">
                        <Loader2 className="w-6 h-6 animate-spin text-white/60" />
                        <span className="text-xs text-white/50">Loading preview…</span>
                      </div>
                    )}

                    {/* Branded fallback for sites that block embedding */}
                    {failed && (
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-10"
                        style={{
                          background: `linear-gradient(160deg, ${project.accent}, ${project.accent}55 55%, #0b0b0e)`,
                        }}
                      >
                        <p className="text-[11px] uppercase tracking-wider text-white/70 mb-3">
                          {project.category}
                        </p>
                        <p className="font-display text-2xl text-white leading-tight mb-4">
                          {project.name}
                        </p>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-zinc-900 hover:bg-white transition-colors"
                        >
                          View live site
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                        <p className="mt-4 text-[10px] text-white/55 max-w-[190px] leading-relaxed">
                          This site doesn&rsquo;t allow embedding, so it opens in a new tab.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Home indicator */}
                  <div className="h-5 bg-black flex justify-center items-center shrink-0">
                    <div className="w-24 h-1 bg-zinc-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stage controls */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => select(active - 1)}
                aria-label="Previous project"
                className="cs-magnetic grid place-items-center w-10 h-10 rounded-full border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="cs-magnetic inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Visit site
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={reload}
                aria-label="Reload preview"
                className="cs-magnetic inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground hover:border-primary/50 transition-colors"
              >
                <RotateCw className="w-4 h-4" />
                Reload
              </button>

              <button
                type="button"
                onClick={() => select(active + 1)}
                aria-label="Next project"
                className="cs-magnetic grid place-items-center w-10 h-10 rounded-full border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ── Project selector ─────────────────────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {PROJECTS.map((p, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={p.name}
                  aria-pressed={isActive}
                  aria-label={`Preview ${p.name}`}
                  onClick={() => select(idx)}
                  className={`group sheen text-left rounded-2xl border p-5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive
                      ? "border-primary/60 bg-card"
                      : "border-border bg-card/40 hover:bg-card/70 hover:border-border"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="w-1 self-stretch rounded-full shrink-0 transition-opacity duration-300"
                      style={{
                        background: p.accent,
                        opacity: isActive ? 1 : 0.25,
                      }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display text-lg text-foreground truncate">
                          {p.name}
                        </h3>
                        <ArrowUpRight
                          className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                          }`}
                        />
                      </div>
                      <p className="mt-0.5 truncate text-xs text-muted-foreground">
                        {p.category}
                      </p>

                      {isActive && (
                        <>
                          <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {p.description}
                          </p>
                          {p.tags && p.tags.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {p.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] bg-secondary text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
