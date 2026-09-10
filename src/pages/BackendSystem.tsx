import ServicePageLayout from "@/components/ServicePageLayout";
import { ArrowRight, Database, Server, Zap, Shield, Users, Code, HelpCircle, CheckCircle2 } from "lucide-react";

const backendSchema = [
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
        "name": "Backend Systems",
        "item": "https://celertus.germanysoon.com/backend-system"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Backend Systems & Microservices Architecture",
    "provider": {
      "@type": "Organization",
      "name": "Celertus.ai",
      "url": "https://celertus.germanysoon.com"
    },
    "serviceType": "Backend Software Engineering",
    "areaServed": "Global",
    "description": "High-performance backend systems, distributed microservices, RESTful & GraphQL APIs, and real-time streaming architectures."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Celertus.ai approach microservices architecture design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design decoupled, event-driven microservices using Node.js, Go, or Python, containerized with Docker, and orchestrated via Kubernetes or AWS ECS with automated load balancing."
        }
      },
      {
        "@type": "Question",
        "name": "What database systems do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in PostgreSQL, MongoDB, Redis, DynamoDB, and MySQL, optimizing schema indexing, query performance, and connection pooling for millions of requests."
        }
      }
    ]
  }
];

const technologies = [
  { name: "Node.js", icon: "🟢", description: "Scalable server-side JavaScript runtime" },
  { name: "PostgreSQL", icon: "🐘", description: "Advanced open-source relational database" },
  { name: "Redis", icon: "🔴", description: "In-memory data structure store & cache" },
  { name: "GraphQL & REST", icon: "🔮", description: "High-throughput API endpoints" }
];

const features = [
  {
    icon: <Server className="w-8 h-8" />,
    title: "Distributed Microservices",
    description: "Scalable, loosely-coupled architecture with resilient inter-service communication."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Real-Time Event Processing",
    description: "High-concurrency streaming via WebSockets, Kafka, and RabbitMQ message brokers."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Ultra-Low Latency APIs",
    description: "Sub-50ms server response times utilizing intelligent Redis caching and database indexing."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise OAuth & RBAC",
    description: "Role-based access control, JWT validation, and OWASP API security compliance."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Infinite Horizontal Scale",
    description: "Infrastructure built to automatically handle millions of requests without degradation."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "API-First Methodology",
    description: "Comprehensive OpenAPI/Swagger documentation and automated integration testing."
  }
];

const servicesList = [
  {
    title: "Custom API & Backend Development",
    description: "End-to-end backend creation from schema design to deployment and monitoring.",
    features: ["RESTful & GraphQL APIs", "Database Schema Optimization", "OAuth 2.0 / JWT Auth", "Third-Party Integrations"]
  },
  {
    title: "Monolith to Microservices Refactoring",
    description: "Migrate legacy single-server applications into resilient microservices.",
    features: ["Microservice Blueprinting", "Zero-Downtime Migration", "Load Balancing", "Containerization"]
  },
  {
    title: "Database & Performance Tuning",
    description: "Optimize database queries, indexing, and connection pools for high throughput.",
    features: ["Query Optimization", "Redis Caching Layers", "Replica Scaling", "Database Audit"]
  }
];

const faqs = [
  {
    q: "What is the difference between REST and GraphQL APIs?",
    a: "REST uses fixed endpoints for specific data resources, while GraphQL allows clients to request exact fields in a single query, reducing network payload and over-fetching."
  },
  {
    q: "How do you ensure zero-downtime database migrations?",
    a: "We implement multi-step blue-green schema migrations, backward-compatible API versioning, and continuous database replication."
  },
  {
    q: "Can Celertus.ai integrate AI LLMs into our backend?",
    a: "Yes! We specialize in embedding OpenAI, Anthropic, and custom self-hosted vector database (pgvector, Pinecone) pipelines directly into backend microservices."
  }
];

const BackendSystems = () => (
  <ServicePageLayout
    seoTitle="Backend Systems & Microservices Engineering | Celertus.ai"
    seoDescription="Build high-concurrency backend systems, microservices, and APIs with Celertus.ai. Node.js, PostgreSQL, Redis, and cloud-native server solutions."
    seoKeywords="backend development, microservices architecture, Node.js engineering, PostgreSQL database, API development, cloud backend, Celertus.ai"
    canonicalUrl="/backend-system"
    schema={backendSchema}
    eyebrow="Backend & Microservices Engineering"
    eyebrowIcon={Database}
    breadcrumbLabel="Backend Systems"
    heading="Backend systems that hold up under load"
    intro="Scalable, high-concurrency microservices and real-time architectures that keep working as traffic and complexity grow."
    primaryCta="Build your backend"
    secondaryCta="Schedule an architecture review"
    technologies={technologies}
    technologiesTitle="Backend stack"
    technologiesIntro="Proven, boring-in-the-best-way infrastructure choices."
    features={features}
    featuresTitle="Why teams choose our backend engineering"
    featuresIntro="Systems designed for the failure cases, not just the happy path."
    details={servicesList}
    detailsTitle="What an engagement includes"
    detailsIntro="API design, data modelling and the operational work that keeps it all running."
    faqs={faqs}
    faqTitle="Backend engineering questions"
    ctaTitle="Ready to build your backend?"
    ctaBody="Talk to our architects about the concurrency, data and reliability requirements you are working against."
    ctaLabel="Start your project"
  />
);

export default BackendSystems;
