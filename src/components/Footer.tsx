import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import Reveal from "@/components/Reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/60 text-foreground relative overflow-hidden">
      {/* Ambient background light line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <Reveal variant="up" delay={0} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/favicon.png"
                alt="Celertus.ai Logo"
                className="w-10 h-10 rounded-xl object-cover shadow-md transition-transform hover:scale-110"
                width="40"
                height="40"
              />
              <span className="text-xl font-bold tracking-tight">
                CELERTUS<span className="text-primary">.AI</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-sm leading-relaxed">
              We architect swift, scalable, and sophisticated AI solutions, custom web applications, cloud infrastructure, and enterprise mobile software.
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/celertus.tech?igsh=ZGZnemJ1dnd5OWpx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Celertus.ai on Instagram"
                className="w-10 h-10 bg-muted/60 border border-border/40 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:scale-110 hover:-translate-y-1 shadow-sm transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/celertus-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Celertus.ai on LinkedIn"
                className="w-10 h-10 bg-muted/60 border border-border/40 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:scale-110 hover:-translate-y-1 shadow-sm transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Celertus.ai on Facebook"
                className="w-10 h-10 bg-muted/60 border border-border/40 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:scale-110 hover:-translate-y-1 shadow-sm transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            </div>
          </Reveal>

          {/* Solutions & Services Internal Links */}
          <Reveal variant="up" delay={100}>
            <h3 className="font-semibold text-base mb-4 text-foreground">Services</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/web-development" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/mobile-development" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/backend-system" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Backend Systems
                </Link>
              </li>
              <li>
                <Link to="/cloud-solutions" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/security-compliance" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Security &amp; Compliance
                </Link>
              </li>
              <li>
                <Link to="/performance-optimization" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Performance Optimization
                </Link>
              </li>
            </ul>
          </Reveal>

          {/* Contact Info */}
          <Reveal variant="up" delay={200}>
            <h3 className="font-semibold text-base mb-4 text-foreground">Contact Info</h3>
            <div className="space-y-3.5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:celertustechnologies@gmail.com" className="hover:text-foreground transition-colors font-mono text-xs sm:text-sm">
                  celertustechnologies@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 group">
                <Phone className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+918076036432" className="hover:text-foreground transition-colors font-mono text-xs sm:text-sm">
                  +91-8076036432
                </a>
              </div>
              <div className="flex items-start gap-2.5 group">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">New Delhi, India (Global Remote Operations)</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <Reveal variant="fade" className="border-t border-border/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Celertus.ai. All rights reserved. Architecting Future Technologies.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
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