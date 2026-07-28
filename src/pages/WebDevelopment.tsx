import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, ArrowRight, Code, Database, Smartphone, Zap, Shield, Layers, HelpCircle, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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

const WebDevelopment = () => {
  const navigate = useNavigate();

  const technologies = [
    { name: "React", icon: "⚛️", desc: "Modern UI library for responsive applications" },
    { name: "TypeScript", icon: "📘", desc: "Type-safe JavaScript for robust codebases" },
    { name: "Next.js", icon: "▲", desc: "Server-side rendering & static generation" },
    { name: "Node.js", icon: "🟢", desc: "High-performance backend API runtime" },
    { name: "PostgreSQL", icon: "🐘", desc: "Enterprise relational database system" },
    { name: "MongoDB", icon: "🍃", desc: "Scalable NoSQL document database" },
    { name: "AWS Cloud", icon: "☁️", desc: "Global cloud hosting & serverless compute" },
    { name: "Docker", icon: "🐳", desc: "Isolated containerized deployment" }
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

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEO
        title="Web Development Services | Custom React & Next.js Studio | Celertus.ai"
        description="Build high-performance, scalable web applications with Celertus.ai. Expert React, TypeScript, Next.js, and cloud backend engineering tailored for enterprise growth."
        keywords="web development, custom web applications, React development, Next.js engineering, full stack web development, TypeScript, Celertus.ai"
        canonicalUrl="/web-development"
        schema={webDevSchema}
      />
      <Navigation />

      <main id="main-content" className="pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 py-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Web Development</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 px-6">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Web Application Development</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
              Modern Web Applications Built for Scale
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Empower your digital product with React, TypeScript, and cloud-native software architecture engineered for speed, security, and organic search dominance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 shadow-tech hover:scale-105 transition-all"
              >
                Start Your Web Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactClick}
                className="border-border hover:bg-card hover:text-primary transition-all"
              >
                Schedule Architecture Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-6 bg-card/40 border-y border-border/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Web Technologies We Master</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                We leverage battle-tested tools and cutting-edge web frameworks for enterprise performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <Card key={index} className="p-6 bg-card border-border/60 hover:border-primary/60 transition-all duration-300 hover:shadow-tech hover:-translate-y-1 group">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{tech.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Web Development Services</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                End-to-end engineering from product discovery and UI design to cloud deployment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 bg-card border-border/60 hover:border-primary/60 transition-all duration-300 hover:shadow-card hover:-translate-y-1 group">
                  <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Why Choose Us */}
        <section className="py-20 px-6 bg-card/40 border-t border-border/40">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Partner with Celertus.ai for Web Engineering?
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                  We build web platforms designed for high scalability, rapid user conversion, and top-tier Google rankings. Our engineering processes adhere to modern CI/CD standards and clean code principles.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Card className="p-8 bg-card border-border/60 shadow-xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Ready to Build Your Web Application?</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      Consult with our senior web architects to map out your project scope and timelines.
                    </p>
                    <Button
                      size="lg"
                      onClick={handleContactClick}
                      className="bg-primary hover:bg-primary/90 text-white font-semibold w-full py-4 shadow-tech"
                    >
                      Get Free Web Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for AI Search & Google Rich Snippets */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground">Web Development FAQ</h2>
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
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default WebDevelopment;