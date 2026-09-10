import ServicePageLayout from "@/components/ServicePageLayout";
import { ArrowRight, Smartphone, Globe, Zap, Shield, Users, Code, HelpCircle, CheckCircle2 } from "lucide-react";

const mobileDevSchema = [
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
        "name": "Mobile Development",
        "item": "https://celertus.germanysoon.com/mobile-development"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Application Development",
    "provider": {
      "@type": "Organization",
      "name": "Celertus.ai",
      "url": "https://celertus.germanysoon.com"
    },
    "serviceType": "Mobile Software Development",
    "areaServed": "Global",
    "description": "Cross-platform mobile application development for iOS and Android using React Native and Flutter."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the benefits of cross-platform mobile development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cross-platform development with React Native or Flutter allows a single codebase to run seamlessly on both iOS and Android, drastically cutting development costs, accelerating time-to-market, and simplifying app maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "Does Celertus.ai assist with App Store and Google Play publishing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle complete end-to-end app store submissions, compliance checks, certificate provisioning, and post-launch maintenance."
        }
      }
    ]
  }
];

const technologies = [
  { name: "React Native", icon: "⚛️", description: "Native performance powered by React" },
  { name: "Flutter", icon: "🚀", description: "Google's UI toolkit for multi-platform apps" },
  { name: "Expo", icon: "🔧", description: "Rapid mobile build and deployment framework" },
  { name: "Swift / Kotlin", icon: "📱", description: "Native platform modules & integrations" }
];

const features = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Cross-Platform Efficiency",
    description: "One unified codebase delivering native performance on both iOS and Android."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "60 FPS Native UX",
    description: "Fluid animations and hardware-accelerated user interfaces."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Prototyping & Iteration",
    description: "Fast development cycles with instant hot-reloading and continuous integration."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Biometric & Enterprise Security",
    description: "Biometric authentication, encrypted local storage, and secure OAuth flows."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Offline-First Sync",
    description: "Reliable offline data caching and background server synchronization."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Clean Modular Codebase",
    description: "Maintainable, scalable architecture with full unit & integration testing."
  }
];

const servicesList = [
  {
    title: "End-to-End Mobile Engineering",
    description: "Full-stack mobile app creation from user experience wireframing to store release.",
    features: ["iOS & Android App Suite", "Cross-Platform Frameworks", "Custom Native Plugins", "App Store Deployment"]
  },
  {
    title: "Mobile App Modernization",
    description: "Transform legacy mobile apps with modern frameworks, better speed, and refreshed UI.",
    features: ["Legacy App Refactoring", "Performance Optimization", "UI/UX Redesign", "Security & API Upgrades"]
  },
  {
    title: "Mobile Technical Strategy",
    description: "Expert consulting on framework selection, offline architecture, and release roadmaps.",
    features: ["Technology Selection", "Architecture Blueprinting", "Security Audits", "Scalability Planning"]
  }
];

const faqs = [
  {
    q: "Should I build a native app or a cross-platform app?",
    a: "For 95% of businesses, cross-platform apps (React Native or Flutter) deliver identical performance to native apps at half the development timeline and cost."
  },
  {
    q: "How long does it take to develop a mobile application?",
    a: "A standard MVP takes 6 to 10 weeks, while complex enterprise mobile applications take between 3 to 6 months depending on features and integrations."
  },
  {
    q: "Do you provide ongoing support after app launch?",
    a: "Yes, we offer ongoing SLA maintenance, OS update compatibility, server monitoring, and feature iteration packages."
  }
];

const MobileDevelopment = () => (
  <ServicePageLayout
    seoTitle="Mobile App Development Services | React Native & Flutter | Celertus.ai"
    seoDescription="Build high-performance iOS & Android mobile applications with Celertus.ai. Expert React Native, Flutter, and cross-platform mobile engineering."
    seoKeywords="mobile app development, React Native, Flutter development, iOS app development, Android app engineering, cross-platform apps, Celertus.ai"
    canonicalUrl="/mobile-development"
    schema={mobileDevSchema}
    eyebrow="Mobile Software Engineering"
    eyebrowIcon={Smartphone}
    breadcrumbLabel="Mobile Development"
    heading="Cross-platform apps for iOS and Android"
    intro="One codebase, native speed, offline resilience — and an experience people actually keep on their home screen."
    primaryCta="Start your mobile project"
    secondaryCta="Request a strategy call"
    technologies={technologies}
    technologiesTitle="Mobile stack"
    technologiesIntro="Frameworks and tooling we use to ship to both stores from a single codebase."
    features={features}
    featuresTitle="Why teams choose our mobile engineering"
    featuresIntro="Apps built to pass review, perform on mid-range hardware, and survive OS updates."
    details={servicesList}
    detailsTitle="What an engagement includes"
    detailsIntro="From first prototype through store release and ongoing maintenance."
    faqs={faqs}
    faqTitle="Mobile development questions"
    ctaTitle="Ready to build your app?"
    ctaBody="Turn a product idea into something people can download. Tell us where you are starting from."
    ctaLabel="Start your mobile project"
  />
);

export default MobileDevelopment;
