import ServicePageLayout from "@/components/ServicePageLayout";
import { ArrowRight, Cloud, Server, Zap, Shield, Users, Code, HelpCircle, CheckCircle2 } from "lucide-react";

const cloudSchema = [
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
        "name": "Cloud Solutions",
        "item": "https://celertus.germanysoon.com/cloud-solutions"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Architecture & DevOps Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Celertus.ai",
      "url": "https://celertus.germanysoon.com"
    },
    "serviceType": "Cloud & DevOps Infrastructure",
    "areaServed": "Global",
    "description": "Enterprise AWS cloud solutions, Docker & Kubernetes container orchestration, CI/CD automated deployment pipelines, and Infrastructure as Code."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which cloud provider does Celertus.ai specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure, leveraging Terraform Infrastructure as Code for multi-cloud automation."
        }
      },
      {
        "@type": "Question",
        "name": "How does Celertus.ai manage zero-downtime deployments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We utilize automated CI/CD pipelines with blue-green or canary release strategies on Kubernetes or AWS ECS, ensuring seamless software updates without interruption."
        }
      }
    ]
  }
];

const technologies = [
  { name: "AWS Cloud", icon: "☁️", description: "Amazon Web Services infrastructure & serverless" },
  { name: "Docker", icon: "🐳", description: "Containerized application packaging" },
  { name: "Kubernetes", icon: "⚙️", description: "Production-grade container orchestration" },
  { name: "Terraform", icon: "🏗️", description: "Declarative Infrastructure as Code (IaC)" }
];

const features = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Automated Deployment Pipelines",
    description: "Streamlined GitHub Actions & GitLab CI/CD for continuous delivery."
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "24/7 Infrastructure Monitoring",
    description: "Real-time Prometheus, Grafana, and CloudWatch metrics with automated alerting."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Dynamic Auto-Scaling",
    description: "Automated horizontal pod & instance scaling based on real-time traffic spikes."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cloud Security & Compliance",
    description: "IAM least-privilege policies, VPC isolation, and SOC 2 / ISO 27001 readiness."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Multi-Region Redundancy",
    description: "Global failover setups providing 99.99% uptime SLAs."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "DevOps & GitOps Workflow",
    description: "Version-controlled infrastructure templates for reproducible environments."
  }
];

const servicesList = [
  {
    title: "Cloud Migration & Modernization",
    description: "Seamlessly transition legacy workloads into scalable cloud environments.",
    features: ["Legacy App Migration", "Cloud Cost Optimization", "Zero-Downtime Data Transfer", "Serverless Refactoring"]
  },
  {
    title: "DevOps & CI/CD Pipeline Automation",
    description: "Build rapid, reliable release pipelines with automated security scans.",
    features: ["Automated Build & Test Pipelines", "Docker Containerization", "Kubernetes Management", "Infrastructure as Code"]
  },
  {
    title: "Cloud Security & Compliance Engineering",
    description: "Hardening cloud infrastructure against vulnerabilities and unauthorized access.",
    features: ["IAM Security Audits", "VPC Network Encryption", "Automated Backup & DR", "Cost & Usage Governance"]
  }
];

const faqs = [
  {
    q: "How can cloud migration reduce our IT operating costs?",
    a: "By converting upfront capital expenditures into pay-as-you-go cloud compute and leveraging auto-scaling, you only pay for resources actively consumed by users."
  },
  {
    q: "What is Infrastructure as Code (IaC)?",
    a: "IaC uses configuration code (like Terraform) to define servers, networks, and databases. This ensures environments can be destroyed, recreated, or cloned instantly with zero manual error."
  },
  {
    q: "How do you handle disaster recovery and backup?",
    a: "We implement automated daily cross-region database snapshots, multi-AZ failovers, and low RTO/RPO disaster recovery procedures."
  }
];

const CloudSolutions = () => (
  <ServicePageLayout
    seoTitle="Cloud Architecture & DevOps Solutions | AWS & Kubernetes | Celertus.ai"
    seoDescription="Transform your enterprise infrastructure with Celertus.ai. Expert AWS cloud solutions, DevOps automation, Kubernetes orchestration, and cloud migration."
    seoKeywords="cloud solutions, AWS architecture, DevOps consulting, Kubernetes orchestration, Docker, cloud migration, Terraform, Celertus.ai"
    canonicalUrl="/cloud-solutions"
    schema={cloudSchema}
    eyebrow="Cloud Infrastructure & DevOps"
    eyebrowIcon={Cloud}
    breadcrumbLabel="Cloud Solutions"
    heading="Cloud infrastructure you can deploy to on a Friday"
    intro="High-availability environments, automated pipelines and infrastructure as code — so releases stop being events."
    primaryCta="Accelerate cloud migration"
    secondaryCta="Schedule a DevOps assessment"
    technologies={technologies}
    technologiesTitle="Cloud stack"
    technologiesIntro="Industry-standard platforms and automation tooling."
    features={features}
    featuresTitle="Why teams choose our cloud work"
    featuresIntro="Automated, secure and cost-efficient infrastructure that does not need babysitting."
    details={servicesList}
    detailsTitle="What an engagement includes"
    detailsIntro="Migration, automation and the security work that has to come with both."
    faqs={faqs}
    faqTitle="Cloud and DevOps questions"
    ctaTitle="Ready to transform your cloud?"
    ctaBody="Cut infrastructure waste, speed up deployments and stop firefighting releases."
    ctaLabel="Schedule a consultation"
  />
);

export default CloudSolutions;
