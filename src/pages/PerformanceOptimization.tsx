import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Server, Gauge, Cpu, Globe, BarChart, Layers, HelpCircle, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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

const PerformanceOptimization = () => {
  const navigate = useNavigate();

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

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEO
        title="Performance Optimization & Core Web Vitals Engineering | Celertus.ai"
        description="Accelerate your website speed and improve Google rankings with Celertus.ai. Expert Core Web Vitals (LCP, INP, CLS) optimization, CDN caching, and bundle size reduction."
        keywords="performance optimization, Core Web Vitals, speed audit, LCP optimization, INP tuning, CLS fix, CDN edge caching, Celertus.ai"
        canonicalUrl="/performance-optimization"
        schema={perfSchema}
      />
      <Navigation />

      <main id="main-content" className="pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 py-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Performance Optimization</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 px-6">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Web Performance Engineering</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
              High-Speed Web Performance & Core Web Vitals Studio
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We optimize website speed, eliminate main-thread bottlenecks, and ensure 90+ Lighthouse Core Web Vitals scores that drive organic rankings and conversion rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 shadow-tech hover:scale-105 transition-all"
              >
                Get Free Speed Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactClick}
                className="border-border hover:bg-card hover:text-primary transition-all"
              >
                Schedule Performance Review
              </Button>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-6 bg-card/40 border-y border-border/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Optimization Stack</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Modern performance engineering tooling for sub-second speeds.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Celertus.ai Performance Optimization?</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Delivering measurable speed improvements backed by real user data.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Performance Engineering Services</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Targeted optimizations for web apps and e-commerce platforms.
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
              <h2 className="text-3xl font-bold text-foreground">Performance Optimization FAQ</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Sub-Second Speeds?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                Boost your Core Web Vitals scores and capture higher organic search traffic today.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleContactClick}
                className="font-semibold text-foreground hover:bg-white transition-all shadow-lg"
              >
                Start Free Speed Audit
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

export default PerformanceOptimization;
