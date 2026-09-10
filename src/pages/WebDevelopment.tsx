import ServicePageLayout from "@/components/ServicePageLayout";
import { Globe, ArrowRight, Code, Database, Smartphone, Zap, Shield, Layers, HelpCircle, CheckCircle2 } from "lucide-react";

const webDevSchema = [
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
        "name": "Web Development",
        "item": "https://celertus.germanysoon.com/web-development"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Application Development",
    "provider": {
      "@type": "Organization",
      "name": "Celertus.ai",
      "url": "https://celertus.germanysoon.com"
    },
    "serviceType": "Web Engineering & Software Development",
    "areaServed": "Global",
    "description": "Enterprise web application development using React, TypeScript, Next.js, and cloud-native architecture."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why choose React and TypeScript for enterprise web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "React combined with TypeScript offers strict type safety, modular design systems, lightning-fast rendering, and maintainable enterprise codebases that scale effortlessly as your business grows."
        }
      },
      {
        "@type": "Question",
        "name": "How does Celertus.ai ensure high web performance and Core Web Vitals scores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement modern code-splitting, static/server-side rendering, asset compression, lazy image loading, edge caching, and bundle size reduction to achieve optimal Core Web Vitals."
        }
      }
    ]
  }
];

const technologies = [
  { name: "React", icon: "⚛️", description: "Modern UI library for responsive applications" },
  { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript for robust codebases" },
  { name: "Next.js", icon: "▲", description: "Server-side rendering & static generation" },
  { name: "Node.js", icon: "🟢", description: "High-performance backend API runtime" },
  { name: "PostgreSQL", icon: "🐘", description: "Enterprise relational database system" },
  { name: "MongoDB", icon: "🍃", description: "Scalable NoSQL document database" },
  { name: "AWS Cloud", icon: "☁️", description: "Global cloud hosting & serverless compute" },
  { name: "Docker", icon: "🐳", description: "Isolated containerized deployment" }
];

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Web Applications",
    description: "Tailored enterprise web solutions built with modern frameworks and scalable modular architecture."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Responsive Mobile-First Design",
    description: "Fluid design systems ensuring flawless user experiences across mobile, tablet, and desktop viewports."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Full-Stack API Integration",
    description: "Robust RESTful & GraphQL APIs connected seamlessly with relational and non-relational databases."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Core Web Vitals Optimization",
    description: "Lightning-fast page loads, sub-second latency, and maximum search engine crawl efficiency."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security Implementation",
    description: "OWASP-compliant security protocols, encrypted data transmission, and automated vulnerability defense."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Cloud System Architecture",
    description: "Scalable microservices and cloud deployments designed for multi-region reliability and growth."
  }
];

const features = [
  "Modern React 18 & TypeScript Development",
  "Scalable Cloud Architecture on AWS",
  "RESTful & GraphQL API Engineering",
  "Real-time WebSockets & Streaming Data",
  "Third-party CRM & Payment Integrations",
  "CI/CD Automated Deployment Pipelines",
  "24/7 Monitoring & Maintenance Support",
  "Accessibility & SEO Best Practices Compliance"
];

const faqs = [
  {
    q: "What web development stack does Celertus.ai recommend?",
    a: "We primary recommend React, Next.js, and TypeScript on the frontend, paired with Node.js/Python microservices, PostgreSQL, and AWS cloud infrastructure for ultimate scalability."
  },
  {
    q: "Can you modernize an existing legacy web application?",
    a: "Yes! We specialize in refactoring and migrating legacy monolithic applications into modern React-based micro-frontends with high test coverage and improved security."
  },
  {
    q: "How do you ensure SEO compliance during web development?",
    a: "Every application we build is audited for semantic HTML5 structure, clean open graph tags, XML sitemap integration, JSON-LD schemas, high Lighthouse scores, and fast mobile response."
  }
];

const WebDevelopment = () => (
  <ServicePageLayout
    seoTitle="Web Development Services | Custom React & Next.js Studio | Celertus.ai"
    seoDescription="Build high-performance, scalable web applications with Celertus.ai. Expert React, TypeScript, Next.js, and cloud backend engineering tailored for enterprise growth."
    seoKeywords="web development, custom web applications, React development, Next.js engineering, full stack web development, TypeScript, Celertus.ai"
    canonicalUrl="/web-development"
    schema={webDevSchema}
    eyebrow="Web Application Development"
    eyebrowIcon={Globe}
    breadcrumbLabel="Web Development"
    heading="Modern web applications built for scale"
    intro="React, TypeScript and cloud-native architecture, engineered for speed, security and search visibility."
    primaryCta="Start your web project"
    secondaryCta="Schedule a consultation"
    technologies={technologies}
    technologiesTitle="Core web technologies we work in"
    technologiesIntro="The stack we reach for on most builds, chosen for longevity rather than novelty."
    features={services}
    featuresTitle="What we build"
    featuresIntro="End-to-end web engineering, from the interface down to the infrastructure."
    checklist={features}
    checklistTitle="Why teams partner with us"
    checklistIntro="Web platforms built for scale, conversion and rankings — with modern CI/CD and clean code as the baseline."
    faqs={faqs}
    faqTitle="Web development questions"
    ctaTitle="Ready to build?"
    ctaBody="Tell us what you are trying to launch and we will map out the architecture and a realistic timeline."
    ctaLabel="Start your web project"
  />
);

export default WebDevelopment;
