import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import ScrollProgress from "./ScrollProgress";
import { PILLAR_LABELS, growthServices, techServices, type Service } from "@/data/services";

const pillars: { label: string; items: Service[] }[] = [
  { label: PILLAR_LABELS.growth, items: growthServices },
  { label: PILLAR_LABELS.technology, items: techServices },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <ScrollProgress />

      {/* Skip to main content link for screen reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 ${isScrolled ? "py-3 px-4 sm:px-8" : "py-5 px-4 sm:px-8"}`}
      >
        <div className="container mx-auto">
          <div
            className={`flex items-center justify-between px-5 py-3 transition-all duration-300 rounded-full border ${
              isScrolled
                ? "bg-card/85 backdrop-blur-xl border-border shadow-soft"
                : "bg-card/50 backdrop-blur-md border-border/70"
            }`}
          >
            {/* Logo Link */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1"
              aria-label="Celertus.ai Home"
            >
              <img
                src="/favicon.png"
                alt="Celertus.ai Logo"
                className="w-9 h-9 object-cover rounded-full border border-border group-hover:scale-105 transition-transform duration-300"
                width="36"
                height="36"
              />
              <span className="font-display text-lg text-foreground">
                Celertus<span className="text-primary">.ai</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7 text-sm">
              <button
                onClick={() => handleNavClick("hero")}
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none relative group py-1"
              >
                Home
                <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>

              {/* Services mega menu — grouped by pillar */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick("services")}
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors focus:outline-none relative group py-1"
                  aria-expanded={isServicesDropdownOpen}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isServicesDropdownOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </button>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                    <div className="w-[min(90vw,720px)] p-6 bg-popover border border-border rounded-3xl shadow-soft-lg grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
                      {pillars.map((pillar) => (
                        <div key={pillar.label}>
                          <p className="text-xs text-muted-foreground mb-3 px-3">
                            {pillar.label}
                          </p>
                          <div className="grid gap-1">
                            {pillar.items.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.route}
                                  to={service.route}
                                  onClick={() => setIsServicesDropdownOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl text-foreground hover:bg-secondary transition-colors duration-150 group/item"
                                >
                                  <Icon className="w-4 h-4 text-primary shrink-0" />
                                  <span className="truncate">{service.title}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick("work")}
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none relative group py-1"
              >
                Work
                <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>

              <button
                onClick={() => handleNavClick("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none relative group py-1"
              >
                Contact
                <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                variant="default"
                onClick={() => handleNavClick("contact")}
                className="cs-magnetic rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-5 py-2.5 shadow-soft"
                aria-label="Start a project with Celertus.ai"
              >
                Start a project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 py-4 px-4 bg-popover rounded-3xl border border-border shadow-soft-lg animate-in fade-in slide-in-from-top-4 duration-300 max-h-[75vh] overflow-y-auto">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleNavClick("hero")}
                  className="text-left py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>

                {pillars.map((pillar) => (
                  <div key={pillar.label} className="border-t border-border pt-3 mt-1">
                    <span className="text-xs text-muted-foreground block mb-2 px-1">
                      {pillar.label}
                    </span>
                    <div className="grid gap-1 pl-1">
                      {pillar.items.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.route}
                            to={service.route}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary py-1.5"
                          >
                            <Icon className="w-4 h-4 text-primary shrink-0" />
                            {service.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => handleNavClick("work")}
                  className="text-left py-2 mt-2 text-sm text-foreground hover:text-primary transition-colors border-t border-border pt-3"
                >
                  Work
                </button>

                <button
                  onClick={() => handleNavClick("contact")}
                  className="text-left py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>

                <Button
                  variant="default"
                  onClick={() => handleNavClick("contact")}
                  className="mt-3 w-full cs-magnetic rounded-full"
                >
                  Start a project
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
