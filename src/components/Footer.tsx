import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import Reveal from "@/components/Reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border text-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <Reveal variant="up" delay={0} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/favicon.png"
                alt="Celertus.ai Logo"
                className="w-9 h-9 rounded-lg object-cover"
                width="36"
                height="36"
              />
              <span className="text-xl font-bold tracking-tight">
                CELERTUS<span className="text-primary">.AI</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-sm leading-relaxed">
              We architect swift, scalable, and sophisticated AI solutions, custom web applications, cloud infrastructure, and enterprise mobile software.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/celertus.tech?igsh=ZGZnemJ1dnd5OWpx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Celertus.ai on Instagram"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/celertus-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Celertus.ai on LinkedIn"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Celertus.ai on Facebook"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </Reveal>

          {/* Solutions & Services Internal Links */}
          <Reveal variant="up" delay={100}>
            <h3 className="font-semibold text-base mb-4 text-foreground">Services</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/web-development" className="hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/mobile-development" className="hover:text-primary transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/backend-system" className="hover:text-primary transition-colors">
                  Backend Systems
                </Link>
              </li>
              <li>
                <Link to="/cloud-solutions" className="hover:text-primary transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/security-compliance" className="hover:text-primary transition-colors">
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link to="/performance-optimization" className="hover:text-primary transition-colors">
                  Performance Optimization
                </Link>
              </li>
            </ul>
          </Reveal>

          {/* Contact Info */}
          <Reveal variant="up" delay={200}>
            <h3 className="font-semibold text-base mb-4 text-foreground">Contact Info</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:celertustechnologies@gmail.com" className="hover:text-foreground transition-colors">
                  celertustechnologies@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+918076036432" className="hover:text-foreground transition-colors">
                  +91-8076036432
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>New Delhi, India (Global Remote Operations)</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <Reveal variant="fade" className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Celertus.ai. All rights reserved. Architecting Future Technologies.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-xs text-muted-foreground">
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