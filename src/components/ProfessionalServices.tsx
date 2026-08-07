import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  Code2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ShinyText from "./ShinyText";
import Reveal from "@/components/Reveal";

const ProfessionalServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern web applications with React, TypeScript, and scalable architecture.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      route: "/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      technologies: ["React Native", "Flutter", "Expo"],
      route: "/mobile-development"
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Robust backend systems with microservices and real-time processing.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
      route: "/backend-system"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud infrastructure with automated deployments and monitoring.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      route: "/cloud-solutions"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise security with advanced threat detection and data protection.",
      technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "OWASP"],
      route: "/security-compliance"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize applications for speed, scalability, and user experience.",
      technologies: ["CDN", "Caching", "Load Balancing", "Monitoring"],
      route: "/performance-optimization"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background px-4 sm:px-8 md:px-16 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <Reveal variant="pop" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 mb-6 border border-primary/20 backdrop-blur-md">
            <Code2 className="w-4 h-4 text-primary" />
            <ShinyText text="Our Services" speed={3} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-animated">Professional Services</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed for modern businesses.
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} variant="flip-up" delay={((index % 3) + Math.floor(index / 3)) * 90} className="h-full">
                <Card className="group cs-card-3d sheen hover:shadow-2xl border-border/60 hover:border-primary/50 w-full max-w-md mx-auto h-full flex flex-col justify-between transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3.5 rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:rotate-3 shadow-md">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>

                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2.5">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-muted/60 hover:bg-primary/20 hover:text-primary transition-colors cursor-default border border-border/40"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full hover:bg-primary/10 group/btn transition-all duration-300"
                      onClick={() => navigate(service.route)}
                    >
                      <span className="text-primary font-medium group-hover/btn:mr-1 transition-all">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 text-primary group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* CTA Section */}
        <Reveal variant="spring-up" className="text-center bg-muted/30 border border-primary/20 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-xl">
          <div className="flex justify-center mb-4">
            <div className="p-3.5 rounded-2xl bg-primary/10 animate-float-slow border border-primary/30">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Start Your Project?
          </h3>

          <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
            Let's discuss your requirements and create a solution that drives real business value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 cs-magnetic sheen shadow-tech"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProfessionalServices;