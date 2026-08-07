import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, Smartphone, Database, Cloud, Shield, Zap } from "lucide-react";
import ShinyText from "./ShinyText";
import ScrollProgress from "./ScrollProgress";

const servicesList = [
  { name: "Web Development", path: "/web-development", icon: Globe },
  { name: "Mobile App Development", path: "/mobile-development", icon: Smartphone },
  { name: "Backend Systems", path: "/backend-system", icon: Database },
  { name: "Cloud Solutions", path: "/cloud-solutions", icon: Cloud },
  { name: "Security & Compliance", path: "/security-compliance", icon: Shield },
  { name: "Performance Optimization", path: "/performance-optimization", icon: Zap },
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
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-2xl py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo Link */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-label="Celertus.ai Home"
            >
              <img
                src="/favicon.png"
                alt="Celertus.ai Logo"
                className="w-10 h-10 rounded-lg object-cover group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 shadow-md"
                width="40"
                height="40"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                CELERTUS<span className="text-primary">.AI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => handleNavClick("hero")}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:text-primary relative group"
              >
                Home
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick("services")}
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none relative group"
                  aria-expanded={isServicesDropdownOpen}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180 text-primary" : ""}`} />
                  <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 p-2 bg-card/95 backdrop-blur-xl rounded-2xl border border-border/60 shadow-2xl grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    {servicesList.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="flex items-center gap-3 px-3.5 py-2.5 text-xs font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 group/item"
                        >
                          <Icon className="w-4 h-4 text-primary group-hover/item:scale-110 transition-transform" />
                          {service.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick("work")}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:text-primary relative group"
              >
                Work
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              <button
                onClick={() => handleNavClick("contact")}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:text-primary relative group"
              >
                Contact
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                variant="default"
                onClick={() => handleNavClick("contact")}
                className="cs-magnetic sheen hover:scale-105 transition-transform shadow-tech"
                aria-label="Get Started with Celertus.ai"
              >
                <ShinyText text="Get Started" speed={3} className="text-primary-foreground font-semibold" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 px-4 bg-card/95 backdrop-blur-xl rounded-2xl border border-border/60 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick("hero")}
                  className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>

                <div className="border-t border-border/40 pt-2">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2 px-1">
                    Services
                  </span>
                  <div className="grid gap-2 pl-2">
                    {servicesList.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-xs text-foreground/80 hover:text-primary py-1"
                        >
                          <Icon className="w-4 h-4 text-primary" />
                          {service.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => handleNavClick("work")}
                  className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors border-t border-border/40"
                >
                  Work
                </button>

                <button
                  onClick={() => handleNavClick("contact")}
                  className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>

                <Button
                  variant="default"
                  onClick={() => handleNavClick("contact")}
                  className="mt-2 w-full cs-magnetic"
                >
                  <ShinyText text="Get Started" speed={3} className="text-primary-foreground font-semibold" />
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