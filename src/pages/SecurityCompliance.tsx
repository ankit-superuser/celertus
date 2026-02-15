import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Lock, Zap, Eye, Users, Code } from "lucide-react";

const SecurityCompliance = () => {
  const technologies = [
    { name: "OAuth 2.0", icon: "🔐", description: "Secure authorization framework" },
    { name: "JWT", icon: "🎫", description: "JSON Web Tokens for authentication" },
    { name: "SSL/TLS", icon: "🔒", description: "Encrypted data transmission" },
    { name: "OWASP", icon: "🛡️", description: "Security best practices framework" }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and real-time monitoring"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Data Protection",
      description: "Enterprise-grade encryption and data security"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Zero Trust Architecture",
      description: "Never trust, always verify security model"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Compliance Monitoring",
      description: "Continuous compliance tracking and reporting"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Identity Management",
      description: "Robust user authentication and access control"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Secure Development",
      description: "Security-first development practices"
    }
  ];

  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits and vulnerability assessments",
      features: ["Penetration testing", "Code security review", "Infrastructure audit", "Compliance evaluation"]
    },
    {
      title: "Compliance Implementation",
      description: "Implement industry standards and regulatory compliance",
      features: ["GDPR compliance", "SOC 2 certification", "ISO 27001 standards", "HIPAA requirements"]
    },
    {
      title: "Security Monitoring",
      description: "24/7 security monitoring and incident response",
      features: ["Real-time threat detection", "Security incident response", "Log analysis", "Compliance reporting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-card rounded-full border border-border">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Security & Compliance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Enterprise security
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            with advanced threat detection and data protection
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We implement comprehensive security solutions that protect your business from cyber threats 
            while ensuring compliance with industry standards and regulations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Security Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Technologies</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We implement proven security technologies and frameworks for maximum protection
        </p>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name} 
              className="card-hover animate-scale-in bg-card/50 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{tech.name}</h3>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Our Security Solutions</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We deliver comprehensive security and compliance solutions that protect your business
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="card-hover h-full bg-card/30 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          End-to-end security and compliance services to protect your digital assets
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="card-hover animate-fade-in bg-gradient-secondary border-border/50"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="bg-gradient-primary text-primary-foreground animate-pulse-glow">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your security needs and build a comprehensive protection strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                Start Security Assessment
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default SecurityCompliance;