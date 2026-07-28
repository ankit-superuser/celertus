import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Globe, Zap, Shield, Users, Code, HelpCircle, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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

const MobileDevelopment = () => {
  const navigate = useNavigate();

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

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEO
        title="Mobile App Development Services | React Native & Flutter | Celertus.ai"
        description="Build high-performance iOS & Android mobile applications with Celertus.ai. Expert React Native, Flutter, and cross-platform mobile engineering."
        keywords="mobile app development, React Native, Flutter development, iOS app development, Android app engineering, cross-platform apps, Celertus.ai"
        canonicalUrl="/mobile-development"
        schema={mobileDevSchema}
      />
      <Navigation />

      <main id="main-content" className="pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 py-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Mobile Development</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 px-6">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Mobile Software Engineering</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
              Cross-Platform Mobile Applications for iOS & Android
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We engineer high-performance mobile applications that deliver native speed, offline resilience, and exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 shadow-tech hover:scale-105 transition-all"
              >
                Start Your Mobile Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactClick}
                className="border-border hover:bg-card hover:text-primary transition-all"
              >
                Request Mobile Strategy Call
              </Button>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-6 bg-card/40 border-y border-border/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Mobile Tech Stack</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We leverage industry-leading mobile frameworks to maximize build speed and platform consistency.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Celertus.ai Mobile Engineering?</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Delivering cross-platform apps built to scale with your user base.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Mobile Development Services</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Comprehensive solutions tailored for startups and enterprise platforms.
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
              <h2 className="text-3xl font-bold text-foreground">Mobile Development FAQ</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                Turn your product idea into an app store success with Celertus.ai.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleContactClick}
                className="font-semibold text-foreground hover:bg-white transition-all shadow-lg"
              >
                Get Started Today
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

export default MobileDevelopment;