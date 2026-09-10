import { Sparkles, Palette, PenLine, Video, Share2, BookOpen } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const brandContentSchema = [
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
        "name": "Brand & Content",
        "item": "https://celertus.germanysoon.com/brand-content"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brand Identity and Content Services",
    "provider": {
      "@type": "Organization",
      "name": "Celertus.ai",
      "url": "https://celertus.germanysoon.com"
    },
    "serviceType": "Brand and Content Marketing",
    "areaServed": "Global",
    "description":
      "Brand identity, voice, social media, video and copywriting — plus the content calendar and design system to keep it consistent."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do we get the source files for our brand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You receive editable source files, the full logo set in every format, and written brand guidelines. The brand is yours — you should never have to come back to us just to get a logo in the right file type."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work with our existing brand rather than replacing it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Often that is the better call. Plenty of brands need sharper application and a real content system rather than a redesign. We will say so if that is what we find."
        }
      },
      {
        "@type": "Question",
        "name": "Who creates the ongoing content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can run the calendar end to end, or set up the system and templates so your in-house team can. Many clients start with us producing and shift to templates once the rhythm is established."
        }
      }
    ]
  }
];

const BrandContent = () => (
  <ServicePageLayout
    seoTitle="Brand Identity & Content Marketing | Social & Video | Celertus.ai"
    seoDescription="Brand identity, voice and creative that make you recognisable — plus the social, video and content calendar to sustain it. Celertus.ai, New Delhi."
    seoKeywords="brand identity design, content marketing agency, social media marketing, video production, copywriting services, brand strategy, creative agency New Delhi, Celertus.ai"
    canonicalUrl="/brand-content"
    schema={brandContentSchema}
    eyebrow="Brand & Content"
    eyebrowIcon={Sparkles}
    breadcrumbLabel="Brand & Content"
    heading="Be recognisable before you're remembered"
    intro="A brand is what people can pick out of a crowded feed. We build the identity and voice that make that possible — then the content system that keeps it consistent long after launch."
    primaryCta="Start a brand project"
    secondaryCta="See how we work"
    technologiesTitle="What we make"
    technologiesIntro="The pieces that turn a company into a brand people recognise."
    technologies={[
      { name: "Identity", icon: "🎨", description: "Logo, palette, type and system" },
      { name: "Social", icon: "💬", description: "Calendars, templates and community" },
      { name: "Video", icon: "🎬", description: "Short-form, explainer and ad creative" },
      { name: "Copy", icon: "🖋️", description: "Voice, messaging and long-form" }
    ]}
    featuresTitle="How we approach brand"
    featuresIntro="Strategy you can act on, delivered as files and systems rather than a slide deck."
    features={[
      {
        icon: <Palette className="w-7 h-7" />,
        title: "Identity built to be used",
        description:
          "A logo set, palette and type scale that hold up at every size — from an app icon to a billboard."
      },
      {
        icon: <PenLine className="w-7 h-7" />,
        title: "A voice your team can write in",
        description:
          "Messaging and tone documented with real examples, so anyone on your team can sound like the brand."
      },
      {
        icon: <Video className="w-7 h-7" />,
        title: "Video made for the feed",
        description:
          "Short-form built for how people actually watch — sound-off legible, hook in the first second."
      },
      {
        icon: <Share2 className="w-7 h-7" />,
        title: "Social with a rhythm",
        description:
          "A calendar and template set that make consistent posting sustainable instead of heroic."
      },
      {
        icon: <BookOpen className="w-7 h-7" />,
        title: "Guidelines people read",
        description:
          "Short, visual, practical brand rules — not a hundred-page PDF nobody opens twice."
      },
      {
        icon: <Sparkles className="w-7 h-7" />,
        title: "Designed against the build",
        description:
          "Because we also build the site, the brand ships as real components rather than mockups that never survive development."
      }
    ]}
    detailsTitle="What an engagement includes"
    detailsIntro="A full identity build, or ongoing creative once the brand exists."
    details={[
      {
        title: "Brand identity",
        description: "The foundation — what you look like and what you sound like.",
        features: [
          "Discovery and positioning",
          "Logo and mark design",
          "Colour and typography system",
          "Brand guidelines document",
          "Full source file handover"
        ]
      },
      {
        title: "Content production",
        description: "The ongoing output that keeps the brand visible.",
        features: [
          "Monthly content calendar",
          "Social graphics and templates",
          "Short-form video editing",
          "Photography art direction",
          "Copywriting across channels"
        ]
      },
      {
        title: "Social presence",
        description: "Showing up consistently in the places your audience already is.",
        features: [
          "Channel strategy and setup",
          "Profile and bio optimisation",
          "Community management",
          "Influencer and partner briefs",
          "Monthly performance review"
        ]
      }
    ]}
    faqTitle="Brand and content questions"
    faqs={[
      {
        q: "Do we get the source files for our brand?",
        a: "Yes. You receive editable source files, the full logo set in every format, and written brand guidelines. The brand is yours — you should never have to come back to us just to get a logo in the right file type."
      },
      {
        q: "Can you work with our existing brand rather than replacing it?",
        a: "Often that is the better call. Plenty of brands need sharper application and a real content system rather than a redesign. We will say so if that is what we find."
      },
      {
        q: "Who creates the ongoing content?",
        a: "We can run the calendar end to end, or set up the system and templates so your in-house team can. Many clients start with us producing and shift to templates once the rhythm is established."
      },
      {
        q: "How long does a brand project take?",
        a: "A focused identity project typically runs four to six weeks from discovery to handover. Adding a full content system and launch campaign usually extends that to around eight."
      }
    ]}
    ctaTitle="Tell us what you're building"
    ctaBody="Whether it is a brand from scratch or a refresh that has been overdue for a while, start by telling us where you are now."
    ctaLabel="Start a brand project"
  />
);

export default BrandContent;
