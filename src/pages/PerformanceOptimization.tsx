import ServicePageLayout from "@/components/ServicePageLayout";
import { ArrowRight, Zap, Server, Gauge, Cpu, Globe, BarChart, Layers, HelpCircle, CheckCircle2 } from "lucide-react";

const perfSchema = [
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
        "name": "Performance Optimization",
        "item": "https://celertus.germanysoon.com/performance-optimization"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Application Performance & Core Web Vitals Optimization",
    "provider": {
      "@type": "Organization",
      "name": "Celertus.ai",
      "url": "https://celertus.germanysoon.com"
    },
    "serviceType": "Performance Engineering",
    "areaServed": "Global",
    "description": "Comprehensive Core Web Vitals optimization, LCP/INP/CLS tuning, CDN edge caching, and database response speed audits."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are Google Core Web Vitals and why do they matter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Core Web Vitals (LCP, INP, CLS) measure real-world user experience for speed, responsiveness, and visual stability. Google directly uses Core Web Vitals as a search ranking factor."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can Celertus.ai improve website load speed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically achieve sub-second page loads (LCP < 1.2s) and 90+ Lighthouse scores within 1 to 2 weeks of performance refactoring."
        }
      }
    ]
  }
];

const technologies = [
  { name: "Edge CDN", icon: "🌐", description: "Global Cloudflare & CloudFront edge caching" },
  { name: "Smart Caching", icon: "⚡", description: "Multi-tiered Redis & HTTP cache headers" },
  { name: "Load Balancing", icon: "📊", description: "Traffic distribution for 99.99% uptime" },
  { name: "APM Monitoring", icon: "📡", description: "Real-time Datadog & Lighthouse analytics" }
];

const features = [
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Sub-Second Page Load Times",
    description: "Accelerated Largest Contentful Paint (LCP) via asset preloading and code splitting."
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "High-Concurrency Scalability",
    description: "Engineered to handle sudden 10x traffic surges without latency spikes."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Optimized Main-Thread JS",
    description: "Low Interaction to Next Paint (INP) ensuring zero UI lag or freezing."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Edge Content Delivery",
    description: "Delivering dynamic static assets near users worldwide."
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Real User Monitoring (RUM)",
    description: "Continuous telemetry tracking live user experience metrics."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Zero Layout Shift (CLS)",
    description: "Fixed image dimensions and font display swapping eliminating layout jumps."
  }
];

const servicesList = [
  {
    title: "Comprehensive Core Web Vitals Audit",
    description: "Detailed performance analysis identifying bottlenecks in JavaScript, images, and database queries.",
    features: ["Lighthouse 90+ Target Audit", "Bundle Size Breakdown", "Database Query Profiling", "Network Waterfall Analysis"]
  },
  {
    title: "Frontend & Code Optimization",
    description: "Refactor JavaScript bundles, implement lazy loading, and optimize critical CSS rendering paths.",
    features: ["Tree-Shaking & Minification", "Modern Image Formats (WebP/AVIF)", "Font Display Swap Tuning", "Code Splitting"]
  },
  {
    title: "Server & CDN Edge Architecture",
    description: "Deploy edge caching rules, Gzip/Brotli compression, and distributed database read replicas.",
    features: ["Cloudflare / CloudFront CDN Setup", "Redis In-Memory Cache", "Brotli Asset Compression", "Database Connection Pooling"]
  }
];

const faqs = [
  {
    q: "How does website speed affect conversion rates?",
    a: "Studies show every 100ms delay in page load time reduces conversion rates by up to 7%. Fast sites rank higher in search engines and retain more paying customers."
  },
  {
    q: "What is INP (Interaction to Next Paint)?",
    a: "INP replaced FID as Google's official Core Web Vital metric. It measures the latency of all user interactions (clicks, taps, keystrokes) throughout the page lifecycle."
  },
  {
    q: "Can performance optimization be done without redesigning the website?",
    a: "Yes! In most cases, we optimize code execution, caching headers, script loading, and media assets under the hood without altering your visual design."
  }
];

const PerformanceOptimization = () => (
  <ServicePageLayout
    seoTitle="Performance Optimization & Core Web Vitals Engineering | Celertus.ai"
    seoDescription="Accelerate your website speed and improve Google rankings with Celertus.ai. Expert Core Web Vitals (LCP, INP, CLS) optimization, CDN caching, and bundle size reduction."
    seoKeywords="performance optimization, Core Web Vitals, speed audit, LCP optimization, INP tuning, CLS fix, CDN edge caching, Celertus.ai"
    canonicalUrl="/performance-optimization"
    schema={perfSchema}
    eyebrow="Web Performance Engineering"
    eyebrowIcon={Zap}
    breadcrumbLabel="Performance Optimization"
    heading="Every slow second costs you campaign spend"
    intro="We fix the bottlenecks behind poor Core Web Vitals — because the traffic you already pay for should convert."
    primaryCta="Get a speed audit"
    secondaryCta="Schedule a performance review"
    technologies={technologies}
    technologiesTitle="Optimisation stack"
    technologiesIntro="How we measure, profile and fix."
    features={features}
    featuresTitle="Why teams choose our performance work"
    featuresIntro="Measured improvements to real user metrics, not just lab scores."
    details={servicesList}
    detailsTitle="What an engagement includes"
    detailsIntro="Audit, remediation and monitoring so the gains do not quietly regress."
    faqs={faqs}
    faqTitle="Performance questions"
    ctaTitle="Ready for faster pages?"
    ctaBody="Better Core Web Vitals mean better rankings and more of your traffic converting."
    ctaLabel="Start a speed audit"
  />
);

export default PerformanceOptimization;
