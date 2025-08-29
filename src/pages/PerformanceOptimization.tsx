import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Server, Gauge, Cpu, Globe, BarChart, Layers } from "lucide-react";

const PerformanceOptimization = () => {
  const technologies = [
    { name: "CDN", icon: "🌐", description: "Deliver content faster with global edge servers" },
    { name: "Caching", icon: "⚡", description: "Reduce load times with efficient caching strategies" },
    { name: "Load Balancing", icon: "📊", description: "Distribute traffic for scalability and reliability" },
    { name: "Monitoring", icon: "📡", description: "Track performance metrics and optimize resources" }
  ];

  const features = [
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "High-Speed Delivery",
      description: "Accelerated load times with optimized delivery strategies"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Scalable Infrastructure",
      description: "Scale applications seamlessly to handle growing demand"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Resource Optimization",
      description: "Efficient use of resources for better performance"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "CDN-backed infrastructure for worldwide availability"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "Track performance KPIs with actionable insights"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Seamless Load Balancing",
      description: "Ensure uptime and reliability with balanced requests"
    }
  ];

  const services = [
    {
      title: "Performance Audit",
      description: "Comprehensive evaluation of application performance",
      features: ["Speed testing", "Bottleneck analysis", "Database optimization", "Infrastructure review"]
    },
    {
      title: "Optimization Implementation",
      description: "Apply industry best practices for peak performance",
      features: ["Caching setup", "CDN integration", "Load balancing configuration", "Code-level optimization"]
    },
    {
      title: "Continuous Monitoring",
      description: "24/7 performance monitoring and fine-tuning",
      features: ["Real-time analytics", "Alert systems", "Proactive optimization", "Detailed reporting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-card rounded-full border border-border">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Performance Optimization</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Optimize for Speed & Scalability
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Enhance user experience with faster, more scalable, and reliable applications
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our solutions focus on delivering top performance while ensuring your applications can handle 
            any level of traffic with seamless scalability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Performance Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Technologies</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We leverage modern optimization technologies to maximize application performance
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
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Our Performance Solutions</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We deliver scalable, reliable, and high-speed solutions that enhance user experience
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
          End-to-end performance optimization services tailored for your business
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
            <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Applications?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's improve speed, scalability, and reliability together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                Start Performance Audit
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

export default PerformanceOptimization;
