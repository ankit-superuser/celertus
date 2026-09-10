import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PILLAR_LABELS, growthServices, techServices } from "@/data/services";

const socials = [
  {
    href: "https://www.instagram.com/celertus.tech?igsh=ZGZnemJ1dnd5OWpx",
    label: "Follow Celertus.ai on Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/celertus-technologies/",
    label: "Connect with Celertus.ai on LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.facebook.com/yourpage",
    label: "Follow Celertus.ai on Facebook",
    Icon: Facebook,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border text-foreground relative overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <Reveal variant="up" delay={0} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/favicon.png"
                alt="Celertus.ai Logo"
                className="w-9 h-9 object-cover border border-border rounded-full"
                width="36"
                height="36"
              />
              <span className="font-display text-lg text-foreground">
                Celertus<span className="text-primary">.ai</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-7 max-w-md text-sm">
              A marketing and technology studio in New Delhi. We run the campaigns
              that bring people to your brand, and build the websites, apps and
              cloud systems that keep them there.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-card border border-border hover:border-primary/50 hover:text-primary flex items-center justify-center text-muted-foreground rounded-full transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Services, grouped by pillar */}
          <Reveal variant="up" delay={100}>
            <h3 className="font-display text-base mb-4 text-foreground">What we do</h3>

            <p className="text-xs text-muted-foreground mb-2.5">{PILLAR_LABELS.growth}</p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              {growthServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={service.route}
                    className="hover:text-primary transition-colors inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted-foreground mb-2.5">{PILLAR_LABELS.technology}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {techServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={service.route}
                    className="hover:text-primary transition-colors inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact Info */}
          <Reveal variant="up" delay={200}>
            <h3 className="font-display text-base mb-4 text-foreground">Get in touch</h3>
            <div className="space-y-3.5 text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:celertustechnologies@gmail.com"
                  className="hover:text-foreground transition-colors break-all"
                >
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
                <span className="leading-relaxed">
                  New Delhi 110043, India — working with clients remotely worldwide
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <Reveal
          variant="fade"
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>© {currentYear} Celertus.ai. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap.xml" target="_blank" className="hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
