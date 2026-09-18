import { Link } from "react-router-dom";

const GROWTH_LINKS = [
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Performance Marketing & Ads", href: "/performance-marketing" },
  { label: "Brand & Content", href: "/brand-content" },
];

const TECH_LINKS = [
  { label: "Web Development", href: "/web-development" },
  { label: "Mobile Development", href: "/mobile-development" },
  { label: "Backend Systems", href: "/backend-system" },
  { label: "Cloud Solutions", href: "/cloud-solutions" },
  { label: "Security & Compliance", href: "/security-compliance" },
  { label: "Performance Optimization", href: "/performance-optimization" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-studio-ink px-6 py-16 sm:px-8">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/celertus-mark.png" alt="" aria-hidden="true" width={30} height={30} className="h-[30px] w-[30px] object-contain" />
            <span className="font-display text-[17px] font-semibold tracking-[-0.02em] text-studio-cloud">
              Celertus<span className="text-studio-indigoLight">.ai</span>
            </span>
          </div>
          <p className="max-w-[34ch] text-sm leading-[1.65] text-studio-mutedDark">
            A marketing and technology studio in New Delhi, working with clients remotely worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[.12em] text-studio-ember">Growth &amp; Marketing</span>
          {GROWTH_LINKS.map((l) => (
            <Link key={l.href} to={l.href} className="text-sm text-studio-mutedDark transition-colors hover:text-studio-cloud">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[.12em] text-studio-teal">Technology</span>
          {TECH_LINKS.map((l) => (
            <Link key={l.href} to={l.href} className="text-sm text-studio-mutedDark transition-colors hover:text-studio-cloud">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[.12em] text-studio-mutedDark">Get in touch</span>
          <a href="mailto:celertustechnologies@gmail.com" className="break-all text-sm text-studio-mutedDark transition-colors hover:text-studio-cloud">
            celertustechnologies@gmail.com
          </a>
          <a href="tel:+918076036432" className="text-sm text-studio-mutedDark transition-colors hover:text-studio-cloud">
            +91-8076036432
          </a>
          <span className="text-sm leading-[1.6] text-studio-mutedDark">New Delhi 110043, India</span>
          <div className="mt-1.5 flex gap-2.5">
            <a
              href="https://www.instagram.com/celertus.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/[.14] px-3.5 py-1.5 text-xs text-studio-mutedDark transition-colors hover:border-studio-ember hover:text-studio-ember"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/celertus-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/[.14] px-3.5 py-1.5 text-xs text-studio-mutedDark transition-colors hover:border-studio-teal hover:text-studio-teal"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1240px] flex-wrap items-center justify-between gap-4 border-t border-white/[.08] pt-6 text-[13px] text-studio-mutedLight">
        <span>&copy; {year} Celertus.ai. All rights reserved.</span>
        <span className="flex gap-6">
          <Link to="/about" className="hover:text-studio-mutedDark">About</Link>
          <Link to="/insights" className="hover:text-studio-mutedDark">Insights</Link>
          <Link to="/contact" className="hover:text-studio-mutedDark">Contact</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
