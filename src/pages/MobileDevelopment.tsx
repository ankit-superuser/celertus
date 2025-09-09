import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Globe, Zap, Shield, Users, Code } from "lucide-react";

const MobileDevelopment = () => {
  const technologies = [
    { name: "React Native", icon: "⚛️", description: "Native performance with React" },
    { name: "Flutter", icon: "🚀", description: "Google's UI toolkit for mobile" },
    { name: "Expo", icon: "🔧", description: "Rapid development platform" }
  ];

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cross-Platform",
      description: "One codebase for both iOS and Android platforms"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Native Performance",
      description: "Optimized performance that feels truly native"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Development",
      description: "Rapid prototyping and development cycles"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure",
      description: "Enterprise-grade security and data protection"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric",
      description: "Intuitive interfaces and exceptional UX"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Maintainable, scalable, and well-documented code"
    }
  ];

  const services = [
    {
      title: "Mobile App Development",
      description: "Full-stack mobile application development from concept to deployment",
      features: ["iOS & Android apps", "Cross-platform solutions", "Custom UI/UX design", "API integration"]
    },
    {
      title: "App Modernization",
      description: "Transform your existing apps with modern technologies and improved performance",
      features: ["Legacy app migration", "Performance optimization", "UI/UX redesign", "Security updates"]
    },
    {
      title: "Consultation & Strategy",
      description: "Expert guidance on mobile strategy, technology choices, and project planning",
      features: ["Technology selection", "Project roadmapping", "Architecture design", "Best practices"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-card rounded-full border border-border">
            <Smartphone className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Mobile Development</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Cross-platform mobile applications
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            for iOS and Android
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We build high-performance mobile applications that deliver exceptional user experiences 
            across all platforms using cutting-edge technologies.
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
          We leverage the most powerful and efficient mobile development frameworks
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
                <p className="text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Our Mobile Development</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We deliver comprehensive mobile solutions that drive business growth
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
          End-to-end mobile development services tailored to your business needs
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
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and bring your mobile app vision to life
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

export default MobileDevelopment;