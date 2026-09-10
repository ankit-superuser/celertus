import { Target, MousePointerClick, Repeat, LineChart, SlidersHorizontal, Wallet } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const performanceMarketingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://celertus.germanysoon.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Performance Marketing & Ads",
        "item": "https://celertus.germanysoon.com/performance-marketing"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Performance Marketing and Paid Advertising",
    "provider": {
      "@type": "Organization",
      "name": "Celertus.ai",
      "url": "https://celertus.germanysoon.com"
    },
    "serviceType": "Performance Marketing",
    "areaServed": "Global",
    "description":
      "Google Ads, Meta Ads, PPC, retargeting and conversion rate optimisation, measured against revenue with clean attribution."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What ad budget do we need to start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enough to gather statistically useful data within a month. For most categories that means a few hundred dollars a day at minimum — below that, campaigns take so long to learn that you are paying for the education without reaching the payoff."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns the ad accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do, always. We work inside your Google Ads and Meta Business accounts, or help you create them. If we stop working together you keep every account, every audience and every piece of creative."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Return on ad spend and cost per qualified lead, not impressions or clicks. We set up server-side conversion tracking where possible so the numbers survive browser privacy changes."
        }
      }
    ]
  }
];

const PerformanceMarketing = () => (
  <ServicePageLayout
    seoTitle="Performance Marketing & Paid Ads | Google & Meta | Celertus.ai"
    seoDescription="Paid campaigns measured against revenue. Google Ads, Meta Ads, retargeting and CRO run by a team that can also fix the landing page — Celertus.ai."
    seoKeywords="performance marketing agency, Google Ads management, Meta Ads, Facebook advertising, PPC agency, retargeting, conversion rate optimisation, paid media, Celertus.ai"
    canonicalUrl="/performance-marketing"
    schema={performanceMarketingSchema}
    eyebrow="Performance Marketing & Ads"
    eyebrowIcon={Target}
    breadcrumbLabel="Performance Marketing & Ads"
    heading="Spend that you can trace to revenue"
    intro="Paid media is the fastest lever you have — and the easiest to waste. We run campaigns against profit, not impressions, and fix the landing page when that is what is actually broken."
    primaryCta="Get an ad account review"
    secondaryCta="Talk about budget"
    technologiesTitle="Platforms we run"
    technologiesIntro="Where the money goes, and how we keep track of it."
    technologies={[
      { name: "Google Ads", icon: "🎯", description: "Search, Shopping, Display and YouTube" },
      { name: "Meta Ads", icon: "📱", description: "Facebook and Instagram campaigns" },
      { name: "Retargeting", icon: "🔁", description: "Warm audiences across platforms" },
      { name: "Attribution", icon: "🧭", description: "Server-side tracking and modelling" }
    ]}
    featuresTitle="How we run paid media"
    featuresIntro="Structure first, creative second, and a bias toward killing what is not working."
    features={[
      {
        icon: <Target className="w-7 h-7" />,
        title: "Campaigns built on intent",
        description:
          "Account structure that separates high-intent search from discovery, so budget follows the buyers."
      },
      {
        icon: <MousePointerClick className="w-7 h-7" />,
        title: "Creative tested in volume",
        description:
          "Multiple hooks and formats per audience, rotated on a schedule so fatigue never quietly drains spend."
      },
      {
        icon: <Repeat className="w-7 h-7" />,
        title: "Retargeting that isn't creepy",
        description:
          "Sequenced messaging for people who already know you, capped so frequency never turns into annoyance."
      },
      {
        icon: <LineChart className="w-7 h-7" />,
        title: "Attribution you can defend",
        description:
          "Server-side conversion tracking and a clear model, so you know which channel actually earned the sale."
      },
      {
        icon: <SlidersHorizontal className="w-7 h-7" />,
        title: "Landing pages we can change",
        description:
          "When the ad works and the page doesn't, we rebuild the page. That is usually where the real gains are."
      },
      {
        icon: <Wallet className="w-7 h-7" />,
        title: "Budget discipline",
        description:
          "Weekly pacing reviews and hard rules for pausing losers, so spend concentrates on what converts."
      }
    ]}
    detailsTitle="What an engagement includes"
    detailsIntro="Run as a full paid programme, or scoped to a single platform."
    details={[
      {
        title: "Paid search",
        description: "Capturing the people already typing what you sell into Google.",
        features: [
          "Account structure and rebuild",
          "Keyword and negative research",
          "Shopping feed optimisation",
          "Bid strategy management",
          "Competitor and auction analysis"
        ]
      },
      {
        title: "Paid social",
        description: "Creating demand where people are not yet searching for you.",
        features: [
          "Audience and lookalike strategy",
          "Creative concepting and production",
          "Systematic creative testing",
          "Full-funnel campaign structure",
          "Frequency and fatigue management"
        ]
      },
      {
        title: "Conversion optimisation",
        description: "Making the traffic you already pay for convert more often.",
        features: [
          "Landing page audit and rebuild",
          "A/B and multivariate testing",
          "Form and checkout friction fixes",
          "Page speed and Core Web Vitals",
          "Post-click journey mapping"
        ]
      }
    ]}
    faqTitle="Paid media questions"
    faqs={[
      {
        q: "What ad budget do we need to start?",
        a: "Enough to gather statistically useful data within a month. For most categories that means a few hundred dollars a day at minimum — below that, campaigns take so long to learn that you are paying for the education without reaching the payoff."
      },
      {
        q: "Who owns the ad accounts?",
        a: "You do, always. We work inside your Google Ads and Meta Business accounts, or help you create them. If we stop working together you keep every account, every audience and every piece of creative."
      },
      {
        q: "How do you measure success?",
        a: "Return on ad spend and cost per qualified lead, not impressions or clicks. We set up server-side conversion tracking where possible so the numbers survive browser privacy changes."
      },
      {
        q: "How quickly will we see results?",
        a: "Paid search can produce leads in the first week. Paid social usually needs two to three weeks of learning before performance stabilises. Real optimisation gains compound over the first quarter."
      }
    ]}
    ctaTitle="Show us the account"
    ctaBody="Give us read access to your ad accounts and we will come back with where the waste is and what we would change in the first thirty days."
    ctaLabel="Request an account review"
  />
);

export default PerformanceMarketing;
