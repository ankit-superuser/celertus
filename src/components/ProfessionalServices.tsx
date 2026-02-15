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
    <section id="services" className="py-20 bg-background px-4 sm:px-8 md:px-16">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Our Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Professional Services</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed for modern businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 w-full max-w-md mx-auto">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {service.title}
                    </CardTitle>
                  </div>

                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-primary mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-muted/50"
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
                    className="w-full hover:bg-primary/10"
                    onClick={() => navigate(service.route)}
                  >
                    <span className="text-primary">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl p-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-primary">
            Ready to Start Your Project?
          </h3>

          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss your requirements and create a solution that drives real business value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalServices;