import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import ProfessionalHero from "@/components/ProfessionalHero";
import ProfessionalServices from "@/components/ProfessionalServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedTrain from "@/components/AnimatedTrain";
import GrowthStory from "@/components/GrowthStory";
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
    "description": "A marketing and technology studio running digital marketing, performance advertising and brand campaigns, and building the web, mobile and cloud systems behind them.",
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
    "@type": "ProfessionalService",
    "name": "Celertus.ai Digital Marketing & Technology Studio",
    "image": "https://celertus.germanysoon.com/social-preview.png",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "IN"
    },
    "telephone": "+91-8076036432",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing & Technology Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Marketing & Ads" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand & Content" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backend Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security & Compliance" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Optimization" } }
      ]
    }
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
          "text": "Celertus.ai works across two pillars. Growth & Marketing covers Digital Marketing (SEO, content, email and analytics), Performance Marketing & Ads (Google Ads, Meta Ads, PPC, retargeting and CRO), and Brand & Content (brand identity, social media, video and copywriting). Technology covers Web Development, Mobile Development, Backend Systems, Cloud Solutions, Security & Compliance, and Performance Optimization."
        }
      },
      {
        "@type": "Question",
        "name": "Does Celertus.ai do both marketing and software development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The same team runs your campaigns and builds the website, app or platform those campaigns point at, so marketing decisions and engineering decisions are made together rather than handed between agencies."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can Celertus.ai start a new project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We begin with a short discovery phase and can typically start a marketing engagement or deploy a dedicated engineering team within 3 to 5 business days."
        }
      }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary-foreground">
      <SpotlightCursor />
      <SEO
        title="Celertus.ai | Digital Marketing & Technology Studio"
        description="Celertus is a marketing and technology studio in New Delhi. We run digital marketing, performance advertising and brand campaigns — and build the websites, apps and cloud systems underneath them."
        keywords="digital marketing agency, performance marketing, Google Ads, Meta Ads, SEO services, social media marketing, brand and content, marketing agency New Delhi, web development, mobile app development, cloud architecture, Celertus.ai"
        canonicalUrl="/"
        schema={indexSchema}
      />
      <Navigation />
      <main id="main-content" className="w-full">
        {/* Hero Section */}
        <section id="hero">
          <ProfessionalHero />
        </section>
        {/* Animated Train Section */}
        <section id="animated-train">
          <AnimatedTrain />
        </section>
        {/* Services Section */}
        <section id="services">
          <ProfessionalServices />
        </section>
        {/* Interactive scroll-driven growth story */}
        <GrowthStory />
        {/* Work / Projects Showcase Section */}
        <section id="work">
          <ProjectShowcase />
        </section>
        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
