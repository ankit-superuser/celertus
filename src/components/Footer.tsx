import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import Reveal from "@/components/Reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/80 backdrop-blur-xl border-t border-white/10 text-foreground relative overflow-hidden font-mono">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <Reveal variant="up" delay={0} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/favicon.png"
                alt="Celertus.ai Logo"
                className="w-9 h-9 object-cover border border-primary/50 shadow-lg rounded-full"
                width="36"
                height="36"
              />
              <span className="font-display text-xl font-bold tracking-wider text-foreground">
                CELERTUS<span className="text-primary">.AI</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-xs sm:text-sm leading-[1.7]">
              Architecting swift, scalable, and sophisticated enterprise AI systems, cloud infrastructure, cross-platform mobile applications, and modern web platforms.
            </p>
            <div className="flex gap-3 font-mono">
              <a
                href="https://www.instagram.com/celertus.tech?igsh=ZGZnemJ1dnd5OWpx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Celertus.ai on Instagram"
                className="w-10 h-10 bg-background/60 border border-white/10 hover:border-primary/50 flex items-center justify-center text-primary rounded-full shadow-lg hover:scale-110 transition-all group"
              >
                <Instagram className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/celertus-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Celertus.ai on LinkedIn"
                className="w-10 h-10 bg-background/60 border border-white/10 hover:border-primary/50 flex items-center justify-center text-primary rounded-full shadow-lg hover:scale-110 transition-all group"
              >
                <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Celertus.ai on Facebook"
                className="w-10 h-10 bg-background/60 border border-white/10 hover:border-primary/50 flex items-center justify-center text-primary rounded-full shadow-lg hover:scale-110 transition-all group"
              >
                <Facebook className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </Reveal>

          {/* Solutions & Services Internal Links */}
          <Reveal variant="up" delay={100}>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-foreground">Capabilities</h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground font-mono">
              <li>
                <Link to="/web-development" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  [01] Web Development
                </Link>
              </li>
              <li>
                <Link to="/mobile-development" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  [02] Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/backend-system" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  [03] Backend Systems
                </Link>
              </li>
              <li>
                <Link to="/cloud-solutions" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  [04] Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/security-compliance" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  [05] Security &amp; Compliance
                </Link>
              </li>
              <li>
                <Link to="/performance-optimization" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  [06] Performance Tuning
                </Link>
              </li>
            </ul>
          </Reveal>

          {/* Contact Info */}
          <Reveal variant="up" delay={200}>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-foreground">Direct Desk</h3>
            <div className="space-y-3.5 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:celertustechnologies@gmail.com" className="hover:text-foreground transition-colors">
                  celertustechnologies@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 group">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+918076036432" className="hover:text-foreground transition-colors">
                  +91-8076036432
                </a>
              </div>
              <div className="flex items-start gap-2.5 group">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="leading-relaxed">New Delhi 110043, India (Global Remote Engineering)</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <Reveal variant="fade" className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
          <p>
            © {currentYear} Celertus.ai. All rights reserved. Architecting Future Technologies.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/sitemap.xml" target="_blank" className="hover:text-foreground transition-colors">XML Sitemap</Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;