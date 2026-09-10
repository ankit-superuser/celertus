import ServicePageLayout from "@/components/ServicePageLayout";
import { ArrowRight, Shield, Lock, Zap, Eye, Users, Code, HelpCircle, CheckCircle2 } from "lucide-react";

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

const SecurityCompliance = () => (
  <ServicePageLayout
    seoTitle="Enterprise Security & Compliance Services | OWASP & SOC 2 | Celertus.ai"
    seoDescription="Protect your digital enterprise with Celertus.ai. Cyber security audits, penetration testing, Zero Trust architecture, and SOC 2 / GDPR compliance engineering."
    seoKeywords="security compliance, cybersecurity services, penetration testing, SOC 2 compliance, GDPR compliance, Zero Trust, OWASP security, Celertus.ai"
    canonicalUrl="/security-compliance"
    schema={securitySchema}
    eyebrow="Cybersecurity & Regulatory Compliance"
    eyebrowIcon={Shield}
    breadcrumbLabel="Security & Compliance"
    heading="Security built in, not bolted on"
    intro="Zero-trust defences, hardened infrastructure and the compliance controls auditors actually ask for."
    primaryCta="Request a security assessment"
    secondaryCta="Schedule a compliance review"
    technologies={technologies}
    technologiesTitle="Security stack and frameworks"
    technologiesIntro="The standards and tooling we build and audit against."
    features={features}
    featuresTitle="Why teams choose our security engineering"
    featuresIntro="Practical hardening, prioritised by real risk rather than checklist length."
    details={servicesList}
    detailsTitle="What an engagement includes"
    detailsIntro="Assessment, remediation and the ongoing monitoring that keeps it from regressing."
    faqs={faqs}
    faqTitle="Security and compliance questions"
    ctaTitle="Ready to secure your platform?"
    ctaBody="Start with an assessment. We will show you what is exposed and what to fix first."
    ctaLabel="Schedule a security audit"
  />
);

export default SecurityCompliance;
