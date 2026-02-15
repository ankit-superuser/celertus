import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowRight, Code, Database, Smartphone, Zap, Shield, Layers } from "lucide-react";

const WebDevelopment = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Next.js", icon: "▲" },
    { name: "MongoDB", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Applications",
      description: "Tailored web solutions built with modern frameworks and scalable architecture."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect experience across all devices."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions with APIs, databases, and cloud integration."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast applications with advanced caching and optimization techniques."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Implementation",
      description: "Enterprise-grade security measures to protect your data and users."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "System Architecture",
      description: "Scalable, maintainable architecture designed for growth and reliability."
    }
  ];

  const features = [
    "Modern React & TypeScript Development",
    "Scalable Cloud Architecture",
    "RESTful & GraphQL APIs",
    "Real-time Features",
    "Third-party Integrations",
    "Continuous Deployment",
    "Monitoring & Analytics",
    "24/7 Support & Maintenance"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6 p-3 bg-gradient-card rounded-xl border border-tech-border shadow-tech">
            <Globe className="w-8 h-8 text-primary" />
            <span className="text-lg font-semibold text-foreground">Web Development</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
            Modern Web Applications
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Build powerful, scalable web applications with React, TypeScript, and cutting-edge architecture
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-tech-border hover:border-primary hover:bg-tech-bg transition-all duration-300">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Technologies We Master</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We use the latest and most reliable technologies to build exceptional web experiences
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 bg-gradient-tech border-tech-border hover:border-primary transition-all duration-300 hover:shadow-tech hover:scale-105 group">
                <div className="text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Web Development Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions from concept to deployment and beyond
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-gradient-card border-tech-border hover:border-primary transition-all duration-300 hover:shadow-card hover:scale-105 group">
                <div className="text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why Choose Our Web Development Services?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We deliver enterprise-grade web applications that scale with your business. 
                Our team combines technical expertise with creative problem-solving to build 
                solutions that drive results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-card border-tech-border shadow-card">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Start?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss your project and bring your vision to life with cutting-edge web technology.
                  </p>
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Development Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that ensures quality, efficiency, and success
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and requirements" },
              { step: "02", title: "Design", desc: "Creating user-focused design and architecture" },
              { step: "03", title: "Development", desc: "Building with modern tools and best practices" },
              { step: "04", title: "Deployment", desc: "Testing, launching, and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a powerful web application that drives your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-tech-border hover:border-primary hover:bg-tech-bg transition-all duration-300">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;