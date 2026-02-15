import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Database, Server, Zap, Shield, Users, Code } from "lucide-react";

const BackendSystems = () => {
  const technologies = [
    { name: "Node.js", icon: "🟢", description: "Scalable server-side JavaScript runtime" },
    { name: "PostgreSQL", icon: "🐘", description: "Advanced open-source relational database" },
    { name: "Redis", icon: "🔴", description: "In-memory data structure store" },
    { name: "GraphQL", icon: "🔮", description: "Query language for APIs" }
  ];

  const features = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Microservices",
      description: "Scalable architecture with distributed services"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Real-time Processing",
      description: "Live data processing and instant updates"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Advanced security protocols and data protection"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Scalable",
      description: "Handle millions of users and requests"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "API-First",
      description: "RESTful and GraphQL API development"
    }
  ];

  const services = [
    {
      title: "Backend Development",
      description: "Full-stack backend solutions from database design to API deployment",
      features: ["RESTful APIs", "GraphQL endpoints", "Database design", "Authentication systems"]
    },
    {
      title: "System Architecture",
      description: "Design and implement scalable microservices architecture",
      features: ["Microservices design", "Load balancing", "Container orchestration", "Cloud deployment"]
    },
    {
      title: "Performance Optimization",
      description: "Optimize existing systems for maximum performance and reliability",
      features: ["Database optimization", "Caching strategies", "Monitoring setup", "Performance tuning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-card rounded-full border border-border">
            <Database className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Backend Systems</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Robust backend systems
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            with microservices and real-time processing
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We build scalable, secure, and high-performance backend systems that power 
            modern applications with cutting-edge technologies and best practices.
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
          We leverage powerful and proven backend technologies for enterprise-grade solutions
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
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Our Backend Systems</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We deliver comprehensive backend solutions that scale with your business growth
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
          End-to-end backend development services tailored to your technical requirements
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
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your Backend?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your architecture needs and create a robust backend solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                Start Your Project
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

export default BackendSystems;