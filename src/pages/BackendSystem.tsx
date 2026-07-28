import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Database, Server, Zap, Shield, Users, Code, HelpCircle, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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

const BackendSystems = () => {
  const navigate = useNavigate();

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

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEO
        title="Backend Systems & Microservices Engineering | Celertus.ai"
        description="Build high-concurrency backend systems, microservices, and APIs with Celertus.ai. Node.js, PostgreSQL, Redis, and cloud-native server solutions."
        keywords="backend development, microservices architecture, Node.js engineering, PostgreSQL database, API development, cloud backend, Celertus.ai"
        canonicalUrl="/backend-system"
        schema={backendSchema}
      />
      <Navigation />

      <main id="main-content" className="pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 py-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Backend Systems</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 px-6">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Database className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Backend & Microservices Engineering</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
              Robust Backend Systems Built for Millions
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We design and implement scalable, high-concurrency microservices and real-time backend architectures that power modern enterprise digital platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 shadow-tech hover:scale-105 transition-all"
              >
                Build Your Backend System
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactClick}
                className="border-border hover:bg-card hover:text-primary transition-all"
              >
                Schedule Architecture Review
              </Button>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-6 bg-card/40 border-y border-border/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Backend Technology Stack</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Proven, high-throughput technologies for enterprise-grade backend stability.
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech) => (
                <Card key={tech.name} className="p-6 bg-card border-border/60 hover:border-primary/60 text-center hover:shadow-tech transition-all">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Celertus.ai Backend Engineering?</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Delivering secure, fault-tolerant server architecture.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 bg-card border-border/60 hover:border-primary/60 transition-all hover:-translate-y-1">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 px-6 bg-card/40 border-t border-border/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Backend Development Services</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Tailored server engineering for enterprise scale.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {servicesList.map((service, index) => (
                <Card key={index} className="p-8 bg-card border-border/60 hover:border-primary/60">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground">Backend Development FAQ</h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 bg-card border-border/60">
                  <h3 className="text-lg font-semibold mb-2 text-foreground flex items-center gap-2">
                    <span className="text-primary font-bold">Q:</span> {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-primary text-white p-12 text-center rounded-3xl shadow-glow">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Backend?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                Consult with our backend architects to engineer high-concurrency systems.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleContactClick}
                className="font-semibold text-foreground hover:bg-white transition-all shadow-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BackendSystems;