import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cloud, Server, Zap, Shield, Users, Code, HelpCircle, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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

const CloudSolutions = () => {
  const navigate = useNavigate();

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

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEO
        title="Cloud Architecture & DevOps Solutions | AWS & Kubernetes | Celertus.ai"
        description="Transform your enterprise infrastructure with Celertus.ai. Expert AWS cloud solutions, DevOps automation, Kubernetes orchestration, and cloud migration."
        keywords="cloud solutions, AWS architecture, DevOps consulting, Kubernetes orchestration, Docker, cloud migration, Terraform, Celertus.ai"
        canonicalUrl="/cloud-solutions"
        schema={cloudSchema}
      />
      <Navigation />

      <main id="main-content" className="pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 py-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Cloud Solutions</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 px-6">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Cloud className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Cloud Infrastructure & DevOps</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
              Enterprise Cloud Architecture & DevOps Solutions
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We design, build, and manage high-availability AWS cloud environments with automated DevOps deployment pipelines and continuous security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 shadow-tech hover:scale-105 transition-all"
              >
                Accelerate Cloud Migration
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactClick}
                className="border-border hover:bg-card hover:text-primary transition-all"
              >
                Schedule DevOps Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-6 bg-card/40 border-y border-border/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Cloud Technology Stack</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Industry-standard cloud platforms and automation tools.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Celertus.ai Cloud Solutions?</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Building automated, secure, and cost-efficient cloud infrastructure.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Cloud Services</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              End-to-end DevOps and cloud transformation engineering.
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
              <h2 className="text-3xl font-bold text-foreground">Cloud Solutions FAQ</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Cloud?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                Optimize cloud performance, cut infrastructure waste, and accelerate deployments.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleContactClick}
                className="font-semibold text-foreground hover:bg-white transition-all shadow-lg"
              >
                Schedule Cloud Consultation
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

export default CloudSolutions;