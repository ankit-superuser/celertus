import {
  TrendingUp,
  Target,
  Sparkles,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Pillar = "growth" | "technology";

export interface Service {
  slug: string;
  title: string;
  /** Compact label for tight spaces (nav, marquee chips). */
  shortTitle: string;
  pillar: Pillar;
  icon: LucideIcon;
  description: string;
  /** Tools / channels / stack shown as chips on the service card. */
  technologies: string[];
  route: string;
}

export const PILLAR_LABELS: Record<Pillar, string> = {
  growth: "Growth & Marketing",
  technology: "Technology",
};

/**
 * The single source of truth for what Celertus offers.
 *
 * Consumed by ProfessionalServices (home grid), Navigation (mega menu),
 * AnimatedTrain (marquee chips) and Footer (capabilities list). Add a service
 * here and it appears in all four — but remember a new service still needs its
 * own page, a route in App.tsx, and a sitemap entry.
 */
export const SERVICES: Service[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    pillar: "growth",
    icon: TrendingUp,
    description:
      "Search, content and email working as one system — so the right people find you and keep coming back.",
    technologies: ["SEO", "Content Strategy", "Email", "Analytics", "Automation"],
    route: "/digital-marketing",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing & Ads",
    shortTitle: "Performance & Ads",
    pillar: "growth",
    icon: Target,
    description:
      "Paid campaigns measured against revenue, not impressions. We tune spend until the numbers work.",
    technologies: ["Google Ads", "Meta Ads", "PPC", "Retargeting", "CRO"],
    route: "/performance-marketing",
  },
  {
    slug: "brand-content",
    title: "Brand & Content",
    shortTitle: "Brand & Content",
    pillar: "growth",
    icon: Sparkles,
    description:
      "Identity, voice and creative that make a brand recognisable — then the content calendar to sustain it.",
    technologies: ["Brand Identity", "Social Media", "Video", "Copywriting", "Design"],
    route: "/brand-content",
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    pillar: "technology",
    icon: Globe,
    description:
      "Fast, accessible websites and web apps built to convert and to keep ranking.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    route: "/web-development",
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    shortTitle: "Mobile Apps",
    pillar: "technology",
    icon: Smartphone,
    description:
      "Cross-platform iOS and Android apps from one codebase, shipped and maintained.",
    technologies: ["React Native", "Flutter", "Expo", "GraphQL"],
    route: "/mobile-development",
  },
  {
    slug: "backend-system",
    title: "Backend Systems",
    shortTitle: "Backend Systems",
    pillar: "technology",
    icon: Database,
    description:
      "APIs, data models and services that stay reliable as traffic and complexity grow.",
    technologies: ["Node.js", "PostgreSQL", "Redis", "Kafka"],
    route: "/backend-system",
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortTitle: "Cloud & DevOps",
    pillar: "technology",
    icon: Cloud,
    description:
      "Infrastructure as code, automated deploys and cloud costs that stay predictable.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    route: "/cloud-solutions",
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    shortTitle: "Security",
    pillar: "technology",
    icon: Shield,
    description:
      "Authentication, data protection and audit readiness built in rather than bolted on.",
    technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "OWASP"],
    route: "/security-compliance",
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization",
    shortTitle: "Performance",
    pillar: "technology",
    icon: Zap,
    description:
      "Core Web Vitals, caching and delivery tuned — because slow pages cost you campaign spend.",
    technologies: ["CDN", "Caching", "Load Balancing", "Monitoring"],
    route: "/performance-optimization",
  },
];

export const growthServices = SERVICES.filter((s) => s.pillar === "growth");
export const techServices = SERVICES.filter((s) => s.pillar === "technology");
