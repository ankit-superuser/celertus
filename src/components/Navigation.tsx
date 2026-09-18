import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

const Navigation = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Close the mobile drawer on route change and on Escape.
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[70] flex justify-center px-3 py-3.5 sm:px-5">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-full focus:bg-studio-indigo focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Primary"
        className="flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-x-5 gap-y-2 rounded-[28px] border border-white/10 bg-studio-ink/80 py-2.5 pl-4 pr-2.5 shadow-[0_18px_44px_-18px_rgba(10,13,24,0.55)] backdrop-blur-xl sm:pl-4.5"
      >
        <Link to="/" className="flex flex-none items-center gap-2.5 text-studio-cloud" aria-label="Celertus.ai home">
          <img
            src="/celertus-mark.png"
            alt=""
            aria-hidden="true"
            width={28}
            height={28}
            className="block h-7 w-7 flex-none object-contain"
          />
          <span className="font-display text-[17px] font-semibold tracking-[-0.02em]">
            Celertus<span className="text-studio-indigoLight">.ai</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`border-b py-1 transition-colors ${
                  active
                    ? "border-studio-indigo text-studio-cloud"
                    : "border-transparent text-studio-mutedDark hover:text-studio-cloud"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-none items-center gap-2">
          <Link
            to="/contact"
            className="hidden whitespace-nowrap items-center gap-2 rounded-full bg-studio-indigo px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-studio-indigoDark sm:inline-flex"
          >
            Start a project <span aria-hidden="true">&rarr;</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 flex-none place-items-center rounded-full border border-white/15 text-studio-cloud md:hidden"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[75] flex flex-col bg-studio-ink md:hidden"
        >
          <div className="flex items-center justify-between gap-6 border-b border-white/10 px-5 py-4">
            <span className="flex items-center gap-2.5 text-studio-cloud">
              <img src="/celertus-mark.png" alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
              <span className="font-display text-[17px] font-semibold">Celertus<span className="text-studio-indigoLight">.ai</span></span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-studio-cloud"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-8">
            {[{ label: "Home", href: "/" }, ...LINKS].map((l, i) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-white/10 py-4 text-studio-cloud"
              >
                <span className="font-mono text-[10.5px] tracking-[.14em] text-studio-indigoLight">0{i + 1}</span>
                <span className="font-display text-[clamp(1.6rem,7vw,2.2rem)] font-normal leading-tight">{l.label}</span>
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-studio-cloud px-6 py-4 font-medium text-studio-ink"
            >
              Start a project <span aria-hidden="true">&rarr;</span>
            </Link>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[.08em] text-studio-mutedDark">
              <a href="mailto:celertustechnologies@gmail.com" className="hover:text-studio-cloud">celertustechnologies@gmail.com</a>
              <a href="tel:+918076036432" className="hover:text-studio-cloud">+91 80760 36432</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
