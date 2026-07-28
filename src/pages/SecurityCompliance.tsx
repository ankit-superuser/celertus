import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Lock, Zap, Eye, Users, Code, HelpCircle, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const securitySchema = [
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
        "name": "Security & Compliance",
        "item": "https://celertus.germanysoon.com/security-compliance"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Enterprise Security & Compliance Services",
    "provider": {
      "@type": "Organization",
      "name": "Celertus.ai",
      "url": "https://celertus.germanysoon.com"
    },
    "serviceType": "Cybersecurity & Regulatory Compliance",
    "areaServed": "Global",
    "description": "Comprehensive enterprise cybersecurity, OWASP code hardening, vulnerability penetration testing, and SOC 2 / ISO 27001 / GDPR compliance implementation."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What compliance frameworks does Celertus.ai support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We audit and implement technical controls for SOC 2 Type II, ISO 27001, GDPR, HIPAA, and OWASP Top 10 security compliance."
        }
      },
      {
        "@type": "Question",
        "name": "How does Celertus.ai perform security assessments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine automated static application security testing (SAST), dynamic penetration testing (DAST), infrastructure vulnerability scans, and manual code review."
        }
      }
    ]
  }
];

const SecurityCompliance = () => {
  const navigate = useNavigate();

  const technologies = [
    { name: "OAuth 2.0 & OIDC", icon: "🔐", description: "Secure federated authorization" },
    { name: "JWT Encryption", icon: "🎫", description: "Cryptographically signed tokens" },
    { name: "SSL / TLS 1.3", icon: "🔒", description: "End-to-end transport layer security" },
    { name: "OWASP Hardening", icon: "🛡️", description: "Top 10 vulnerability mitigation" }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Real-Time Threat Detection",
      description: "AI-powered anomaly detection and automated intrusion prevention."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "AES-256 Data Encryption",
      description: "Comprehensive encryption at rest and in transit across all databases and networks."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Zero Trust Architecture",
      description: "Strict identity verification and least-privilege access governance."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Continuous Compliance Tracking",
      description: "Automated audit logs and real-time posture reporting."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Identity & Access Management",
      description: "Multi-Factor Authentication (MFA), SAML SSO, and granular RBAC policies."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "DevSecOps Integration",
      description: "Automated security scanning embedded directly into CI/CD build pipelines."
    }
  ];

  const servicesList = [
    {
      title: "Vulnerability & Penetration Testing",
      description: "Deep security audits uncovering system flaws before malicious actors do.",
      features: ["Penetration Testing", "Source Code Audit", "Cloud Infrastructure Scans", "Remediation Roadmap"]
    },
    {
      title: "Regulatory Compliance Implementation",
      description: "Engineer your software stack to meet strict global compliance standards.",
      features: ["SOC 2 Type II Controls", "GDPR Data Governance", "ISO 27001 Preparedness", "HIPAA Health Data Defense"]
    },
    {
      title: "DevSecOps & Incident Response",
      description: "24/7 automated monitoring and instant mitigation protocols for security breaches.",
      features: ["SIEM Integration", "Automated Patching", "Disaster Recovery Playbooks", "Post-Incident Forensic Analysis"]
    }
  ];

  const faqs = [
    {
      q: "Why is security critical for early-stage software startups?",
      a: "B2B enterprise buyers require SOC 2 or ISO 27001 compliance before signing contracts. Security built in from day one unlocks enterprise sales cycles faster."
    },
    {
      q: "What is Zero Trust Architecture?",
      a: "Zero Trust operates on the principle of 'never trust, always verify', requiring continuous authentication and micro-segmentation for every network request."
    },
    {
      q: "How often should security penetration testing be conducted?",
      a: "We recommend conducting full penetration testing at least once a year, as well as whenever major architectural code updates are deployed."
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
        title="Enterprise Security & Compliance Services | OWASP & SOC 2 | Celertus.ai"
        description="Protect your digital enterprise with Celertus.ai. Cyber security audits, penetration testing, Zero Trust architecture, and SOC 2 / GDPR compliance engineering."
        keywords="security compliance, cybersecurity services, penetration testing, SOC 2 compliance, GDPR compliance, Zero Trust, OWASP security, Celertus.ai"
        canonicalUrl="/security-compliance"
        schema={securitySchema}
      />
      <Navigation />

      <main id="main-content" className="pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-6 py-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Security & Compliance</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 px-6">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Cybersecurity & Regulatory Compliance</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
              Enterprise Cyber Security & Compliance Engineering
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We implement military-grade cybersecurity protocols, zero-trust network defenses, and compliance controls to safeguard your critical digital assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 shadow-tech hover:scale-105 transition-all"
              >
                Request Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactClick}
                className="border-border hover:bg-card hover:text-primary transition-all"
              >
                Schedule Compliance Review
              </Button>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-6 bg-card/40 border-y border-border/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Security Stack & Frameworks</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Industry-certified security mechanisms protecting modern applications.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Celertus.ai Security Engineering?</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Building resilient digital fortresses designed for enterprise trust.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Cybersecurity Services</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Comprehensive threat defense and regulatory governance.
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
              <h2 className="text-3xl font-bold text-foreground">Security & Compliance FAQ</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Digital Enterprise?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                Consult with our cybersecurity architects to conduct a comprehensive security assessment.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleContactClick}
                className="font-semibold text-foreground hover:bg-white transition-all shadow-lg"
              >
                Schedule Security Audit
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

export default SecurityCompliance;