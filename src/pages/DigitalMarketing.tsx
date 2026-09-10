import { Search, FileText, Mail, BarChart3, Workflow, Users, TrendingUp } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const digitalMarketingSchema = [
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
        "name": "Digital Marketing",
        "item": "https://celertus.germanysoon.com/digital-marketing"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Celertus.ai",
      "url": "https://celertus.germanysoon.com"
    },
    "serviceType": "Digital Marketing",
    "areaServed": "Global",
    "description":
      "SEO, content strategy, email marketing, analytics and marketing automation — built and measured as one system by a team that also builds the website underneath."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does SEO take to show results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Technical fixes can move rankings within weeks. Content and authority building typically show meaningful movement between three and six months, depending on how competitive your category is and the current state of the site."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with our existing website or rebuild it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We start with what you have. We only recommend a rebuild when the current site is actively holding back rankings or conversions — and because we build sites too, we can tell you honestly which it is."
        }
      },
      {
        "@type": "Question",
        "name": "What reporting do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A monthly report tied to business outcomes — qualified traffic, leads and revenue — not just rankings and impressions. You keep full ownership of every analytics and search console account we set up."
        }
      }
    ]
  }
];

const DigitalMarketing = () => (
  <ServicePageLayout
    seoTitle="Digital Marketing Services | SEO, Content & Email | Celertus.ai"
    seoDescription="Digital marketing that compounds — SEO, content strategy, email and analytics run as one system. Celertus builds the campaigns and the website underneath them."
    seoKeywords="digital marketing agency, SEO services, content marketing, email marketing, marketing analytics, marketing automation, SEO agency New Delhi, Celertus.ai"
    canonicalUrl="/digital-marketing"
    schema={digitalMarketingSchema}
    eyebrow="Digital Marketing"
    eyebrowIcon={TrendingUp}
    breadcrumbLabel="Digital Marketing"
    heading="Get found by the people already looking for you"
    intro="Search, content and email are not three separate campaigns — they are one system that compounds. We build that system, measure it against revenue, and keep tuning it."
    primaryCta="Get a marketing audit"
    secondaryCta="Talk to a strategist"
    technologiesTitle="Channels we run"
    technologiesIntro="The four that consistently earn their keep for growing brands."
    technologies={[
      { name: "SEO", icon: "🔍", description: "Technical, on-page and authority building" },
      { name: "Content", icon: "✍️", description: "Strategy, calendars and production" },
      { name: "Email", icon: "✉️", description: "Lifecycle, nurture and broadcast" },
      { name: "Analytics", icon: "📊", description: "GA4, Search Console and dashboards" }
    ]}
    featuresTitle="How we work"
    featuresIntro="Marketing decisions backed by data, run by people who can also change the code."
    features={[
      {
        icon: <Search className="w-7 h-7" />,
        title: "Technical SEO that actually ships",
        description:
          "We find the crawl, speed and structure issues — then fix them ourselves instead of handing your developer a PDF."
      },
      {
        icon: <FileText className="w-7 h-7" />,
        title: "Content built on real search demand",
        description:
          "Every piece is mapped to a query people actually type and a stage of the buying decision."
      },
      {
        icon: <Mail className="w-7 h-7" />,
        title: "Email that earns its open rate",
        description:
          "Segmented lifecycle flows and broadcasts, written in your brand voice, measured on replies and revenue."
      },
      {
        icon: <BarChart3 className="w-7 h-7" />,
        title: "Analytics you can trust",
        description:
          "Clean GA4 and Search Console setup, sensible goals, and dashboards that answer real questions."
      },
      {
        icon: <Workflow className="w-7 h-7" />,
        title: "Automation where it pays",
        description:
          "Lead routing, nurture sequences and CRM hygiene automated so your team follows up faster."
      },
      {
        icon: <Users className="w-7 h-7" />,
        title: "One team, both halves",
        description:
          "The people running your campaigns can change the site the campaigns point at. Nothing gets lost in a handoff."
      }
    ]}
    detailsTitle="What an engagement includes"
    detailsIntro="Three tracks, run together or on their own."
    details={[
      {
        title: "Search visibility",
        description: "Getting the right pages to rank for the queries that lead to revenue.",
        features: [
          "Full technical SEO audit",
          "Keyword and intent mapping",
          "On-page optimisation",
          "Digital PR and link acquisition",
          "Local and Google Business Profile"
        ]
      },
      {
        title: "Content engine",
        description: "A publishing rhythm you can sustain, built around demand rather than guesswork.",
        features: [
          "Editorial strategy and calendar",
          "Long-form and landing page copy",
          "Content refresh programme",
          "Internal linking architecture",
          "Performance review each cycle"
        ]
      },
      {
        title: "Lifecycle and retention",
        description: "Turning first-time visitors into a list you own and can sell to repeatedly.",
        features: [
          "List growth and capture design",
          "Welcome and nurture sequences",
          "Segmentation and personalisation",
          "Broadcast campaign calendar",
          "Deliverability monitoring"
        ]
      }
    ]}
    faqTitle="Digital marketing questions"
    faqs={[
      {
        q: "How long does SEO take to show results?",
        a: "Technical fixes can move rankings within weeks. Content and authority building typically show meaningful movement between three and six months, depending on how competitive your category is and the current state of the site."
      },
      {
        q: "Do you work with our existing website or rebuild it?",
        a: "We start with what you have. We only recommend a rebuild when the current site is actively holding back rankings or conversions — and because we build sites too, we can tell you honestly which it is."
      },
      {
        q: "What reporting do you provide?",
        a: "A monthly report tied to business outcomes — qualified traffic, leads and revenue — not just rankings and impressions. You keep full ownership of every analytics and search console account we set up."
      },
      {
        q: "Do we need a minimum budget?",
        a: "There is no fixed minimum, but SEO and content need runway to compound. If your timeline is shorter than a quarter, paid campaigns are usually the more honest recommendation — we will tell you that rather than take the retainer."
      }
    ]}
    ctaTitle="Let's look at your numbers"
    ctaBody="Send us your site and current analytics. We will come back with what is working, what is leaking, and what we would do first."
    ctaLabel="Request an audit"
  />
);

export default DigitalMarketing;
