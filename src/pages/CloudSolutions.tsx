import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cloud, Server, Zap, Shield, Users, Code } from "lucide-react";

const CloudSolutions = () => {
  const technologies = [
    { name: "AWS", icon: "☁️", description: "Amazon Web Services cloud platform" },
    { name: "Docker", icon: "🐳", description: "Containerization and deployment" },
    { name: "Kubernetes", icon: "⚙️", description: "Container orchestration platform" },
    { name: "Terraform", icon: "🏗️", description: "Infrastructure as code" }
  ];

  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Automated Deployments",
      description: "Streamlined CI/CD pipelines and automated deployments"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure Monitoring",
      description: "Real-time monitoring and alerting systems"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto-Scaling",
      description: "Dynamic resource allocation based on demand"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Enterprise-grade security and compliance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Region",
      description: "Global deployment across multiple regions"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "DevOps Ready",
      description: "Infrastructure as code and GitOps workflows"
    }
  ];

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud",
      features: ["Legacy system migration", "Data transfer strategies", "Zero-downtime deployment", "Performance optimization"]
    },
    {
      title: "Infrastructure Management",
      description: "Complete cloud infrastructure design and management",
      features: ["Infrastructure as code", "Container orchestration", "Load balancing", "Disaster recovery"]
    },
    {
      title: "DevOps & Automation",
      description: "Streamline development and operations with automated workflows",
      features: ["CI/CD pipelines", "Monitoring & alerting", "Auto-scaling", "Security compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-card rounded-full border border-border">
            <Cloud className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Cloud Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Cloud infrastructure
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            with automated deployments and monitoring
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We design and implement scalable cloud solutions that reduce costs, improve performance, 
            and accelerate your digital transformation with industry-leading technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Technologies</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We use industry-leading cloud technologies for reliable and scalable solutions
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
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Our Cloud Solutions</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We deliver comprehensive cloud infrastructure that scales with your business needs
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
          Complete cloud transformation services from strategy to implementation
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
            <h2 className="text-4xl font-bold mb-4">Ready to Move to the Cloud?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your cloud strategy and accelerate your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                Start Your Migration
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

export default CloudSolutions;