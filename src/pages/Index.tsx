import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ScrollProgress from "@/components/ScrollProgress";
import SpotlightCursor from "@/components/SpotlightCursor";
import HomeHero from "@/components/home/HomeHero";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import PillarsSplit from "@/components/home/PillarsSplit";
import HowItWorks from "@/components/home/HowItWorks";
import StatsGrid from "@/components/home/StatsGrid";
import WorkPreview from "@/components/home/WorkPreview";
import ClientsSection from "@/components/home/ClientsSection";
import FinalCTA from "@/components/home/FinalCTA";

const DOMAIN = "https://celertus.germanysoon.com";

const indexSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Celertus.ai",
    url: DOMAIN,
    logo: `${DOMAIN}/favicon.png`,
    description:
      "Celertus.ai is a marketing and technology studio in New Delhi. Digital marketing, performance ads and brand on one side; web, mobile, cloud and backend engineering on the other — one team, one invoice.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8076036432",
      contactType: "customer service",
      email: "celertustechnologies@gmail.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/celertus-technologies/",
      "https://www.instagram.com/celertus.tech",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Celertus.ai",
    url: DOMAIN,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Celertus.ai do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Celertus.ai is a marketing and technology studio with two pillars staffed by one team: Growth & Marketing (digital marketing, performance ads, brand and content) and Technology (web, mobile, backend, cloud, security and performance engineering). We plan and build both together, so campaigns and product ship on one roadmap instead of two vendors handing off to each other.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can Celertus.ai start a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We begin with a short discovery session covering both halves of the work, and can typically have a dedicated team running within 3 to 5 business days.",
        },
      },
      {
        "@type": "Question",
        name: "Do we need both marketing and engineering, or can we hire Celertus.ai for just one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Either is fine. Most clients start with one pillar and bring in the other once they see how closely the two teams already work together, but every service can be engaged on its own.",
        },
      },
    ],
  },
];

/**
 * Home page for the marketing & technology studio redesign. Content and
 * structure follow the mockup spec: hero, marquee, two-pillar split (from
 * src/data/services.ts), how-it-works timeline, proof stats, selected work,
 * client quotes and a final CTA. See src/components/home/* for each section.
 */
const Index = () => {
  return (
    <Layout theme="dark">
      <SpotlightCursor />
      <ScrollProgress />
      <SEO
        title="Celertus.ai | Marketing & Technology Studio, New Delhi"
        description="Celertus.ai is a marketing and technology studio in New Delhi. Digital marketing, performance ads and brand on one side; web, mobile, cloud and backend engineering on the other — one team, one invoice."
        keywords="marketing and technology studio, digital marketing agency New Delhi, performance marketing, web development company New Delhi, Celertus.ai"
        canonicalUrl="/"
        schema={indexSchema}
      />

      <HomeHero />
      <MarqueeStrip />
      <PillarsSplit />
      <HowItWorks />
      <StatsGrid />
      <WorkPreview />
      <ClientsSection />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
