import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import ProfessionalHero from "@/components/ProfessionalHero";
import ProfessionalServices from "@/components/ProfessionalServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedTrain from "@/components/AnimatedTrain";
import ProjectShowcase from "@/components/ProjectShowcase";
import BackToTop from "@/components/BackToTop";
import SpotlightCursor from "@/components/SpotlightCursor";

const indexSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Celertus.ai",
    "url": "https://celertus.germanysoon.com",
    "logo": "https://celertus.germanysoon.com/favicon.png",
    "description": "Premier AI & Custom Software Engineering Studio building swift, scalable, and sophisticated software solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8076036432",
      "contactType": "customer service",
      "email": "celertustechnologies@gmail.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/celertus-technologies/",
      "https://www.instagram.com/celertus.tech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Celertus.ai",
    "url": "https://celertus.germanysoon.com"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Celertus.ai specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Celertus.ai specializes in Enterprise AI Solutions, Custom Web Application Development, Cross-Platform Mobile Apps, Scalable Microservices & Backend Systems, Cloud Infrastructure (AWS/DevOps), Security Compliance, and Performance Optimization."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can Celertus.ai start a new software project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We begin with a swift technical discovery phase and can typically deploy a dedicated engineering team within 3 to 5 business days."
        }
      }
    ]
  }
];

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary-foreground">
      <SpotlightCursor />
      <SEO
        title="Celertus.ai | Premier AI & Custom Software Engineering Studio"
        description="Celertus.ai architects cutting-edge AI systems, cloud infrastructure, enterprise web & mobile applications, and high-performance microservices. Transform your digital vision into enterprise reality."
        keywords="AI development, custom software engineering, cloud architecture, web applications, mobile apps, microservices, digital transformation, Celertus.ai"
        canonicalUrl="/"
        schema={indexSchema}
      />
      <Navigation />
      <main id="main-content" className="snap-y snap-proximity overflow-y-auto">
        {/* Hero Section */}
        <section id="hero" className="snap-start">
          <ProfessionalHero />
        </section>
        {/* Animated Train Section */}
        <section id="animated-train" className="snap-start">
          <AnimatedTrain />
        </section>
        {/* Services Section */}
        <section id="services" className="snap-start">
          <ProfessionalServices />
        </section>
        {/* Work / Projects Showcase Section */}
        <section id="work" className="snap-start">
          <ProjectShowcase />
        </section>
        {/* Contact Section */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
