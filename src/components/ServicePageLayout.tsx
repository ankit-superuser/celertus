import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface TechnologyItem {
  name: string;
  /** Emoji or short glyph. */
  icon: string;
  description: string;
}

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface DetailItem {
  title: string;
  description: string;
  features: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServicePageLayoutProps {
  /* SEO */
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  canonicalUrl: string;
  schema: object[];

  /* Hero */
  eyebrow: string;
  eyebrowIcon: LucideIcon;
  breadcrumbLabel: string;
  heading: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;

  /* Sections */
  technologies: TechnologyItem[];
  technologiesTitle: string;
  technologiesIntro: string;

  features: FeatureItem[];
  featuresTitle: string;
  featuresIntro: string;

  /** Three detail cards. Omit to skip the section. */
  details?: DetailItem[];
  detailsTitle?: string;
  detailsIntro?: string;

  /** A flat capability checklist. Omit to skip the section. */
  checklist?: string[];
  checklistTitle?: string;
  checklistIntro?: string;

  faqs: FaqItem[];
  faqTitle: string;

  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;
}

/**
 * Shared shell for every service page. All nine pages (three marketing, six
 * technology) render through this so they stay visually identical — only the
 * copy and schema differ.
 */
const ServicePageLayout = ({
  seoTitle,
  seoDescription,
  seoKeywords,
  canonicalUrl,
  schema,
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  breadcrumbLabel,
  heading,
  intro,
  primaryCta,
  secondaryCta,
  technologies,
  technologiesTitle,
  technologiesIntro,
  features,
  featuresTitle,
  featuresIntro,
  details,
  detailsTitle,
  detailsIntro,
  checklist,
  checklistTitle,
  checklistIntro,
  faqs,
  faqTitle,
  ctaTitle,
  ctaBody,
  ctaLabel,
}: ServicePageLayoutProps) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalUrl={canonicalUrl}
        schema={schema}
      />
      <Navigation />

      <main id="main-content" className="pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="container mx-auto px-6 py-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{breadcrumbLabel}</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24 px-6">
          <div className="cs-aurora" aria-hidden="true" />
          <div className="relative max-w-4xl mx-auto text-center">
            <Reveal variant="fade">
              <span className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 bg-card border border-border rounded-full shadow-soft">
                <EyebrowIcon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{eyebrow}</span>
              </span>
            </Reveal>

            <Reveal variant="up" delay={80}>
              <h1 className="font-display text-foreground mb-6">{heading}</h1>
            </Reveal>

            <Reveal variant="up" delay={160}>
              <p className="text-lg text-muted-foreground mb-9 max-w-2xl mx-auto">{intro}</p>
            </Reveal>

            <Reveal variant="up" delay={240}>
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
                <Button
                  size="lg"
                  onClick={handleContactClick}
                  className="cs-magnetic rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-sm shadow-soft"
                >
                  {primaryCta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleContactClick}
                  className="cs-magnetic rounded-full border-border bg-card hover:bg-secondary text-foreground font-medium px-8 py-6 text-sm"
                >
                  {secondaryCta}
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Technologies / channels */}
        <section className="py-16 md:py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-5xl mx-auto">
            <Reveal variant="up" className="text-center mb-12">
              <h2 className="font-display text-foreground mb-4">{technologiesTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{technologiesIntro}</p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {technologies.map((tech, i) => (
                <Reveal key={tech.name} variant="up" delay={(i % 4) * 70}>
                  <div className="h-full p-6 rounded-3xl bg-card border border-border text-center shadow-soft hover:border-primary/40 transition-colors">
                    <div className="text-3xl mb-3" aria-hidden="true">
                      {tech.icon}
                    </div>
                    <h3 className="font-display text-base text-foreground mb-1.5">{tech.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tech.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why us / features */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal variant="up" className="text-center mb-14">
              <h2 className="font-display text-foreground mb-4">{featuresTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{featuresIntro}</p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Reveal key={feature.title} variant="up" delay={(index % 3) * 80} className="h-full">
                  <div className="cs-card-3d h-full p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-soft-lg hover:border-primary/40">
                    <div className="text-primary mb-4">{feature.icon}</div>
                    <h3 className="font-display text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Capability checklist */}
        {checklist && checklist.length > 0 && (
          <section className="py-20 px-6 bg-secondary border-y border-border">
            <div className="max-w-4xl mx-auto">
              <Reveal variant="up" className="text-center mb-12">
                <h2 className="font-display text-foreground mb-4">{checklistTitle}</h2>
                {checklistIntro && (
                  <p className="text-muted-foreground max-w-2xl mx-auto">{checklistIntro}</p>
                )}
              </Reveal>

              <Reveal variant="up" delay={80}>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )}

        {/* Detailed offering */}
        {details && details.length > 0 && (
        <section className="py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <Reveal variant="up" className="text-center mb-14">
              <h2 className="font-display text-foreground mb-4">{detailsTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{detailsIntro}</p>
            </Reveal>

            <div className="grid lg:grid-cols-3 gap-6">
              {details.map((detail, index) => (
                <Reveal key={detail.title} variant="up" delay={(index % 3) * 80} className="h-full">
                  <div className="h-full p-8 rounded-3xl bg-card border border-border shadow-soft">
                    <h3 className="font-display text-xl text-foreground mb-3">{detail.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {detail.description}
                    </p>
                    <ul className="space-y-2.5">
                      {detail.features.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal variant="up" className="text-center mb-10">
              <span className="text-sm text-muted-foreground">Frequently asked</span>
              <h2 className="font-display text-foreground mt-3">{faqTitle}</h2>
            </Reveal>

            <Reveal variant="up" delay={80}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.q}
                    value={`item-${index}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="text-left font-display text-base sm:text-lg text-foreground hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal variant="up">
              <div className="rounded-3xl border border-border bg-gradient-secondary p-10 sm:p-14 text-center">
                <h2 className="font-display text-foreground mb-4">{ctaTitle}</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{ctaBody}</p>
                <Button
                  size="lg"
                  onClick={handleContactClick}
                  className="cs-magnetic rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-sm shadow-soft"
                >
                  {ctaLabel}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ServicePageLayout;
