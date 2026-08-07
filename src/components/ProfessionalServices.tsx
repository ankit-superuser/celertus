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
      id: "01",
      icon: Globe,
      title: "Web Development",
      description: "Modern enterprise web applications engineered with React, TypeScript, and high-performance server architectures.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      route: "/web-development"
    },
    {
      id: "02",
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform iOS and Android mobile applications delivering native performance and offline capabilities.",
      technologies: ["React Native", "Flutter", "Expo", "GraphQL"],
      route: "/mobile-development"
    },
    {
      id: "03",
      icon: Database,
      title: "Backend Systems",
      description: "High-throughput backend microservices with real-time processing, queue management, and fault tolerance.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Kafka"],
      route: "/backend-system"
    },
    {
      id: "04",
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Automated cloud infrastructure, CI/CD pipelines, container orchestration, and real-time observability.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      route: "/cloud-solutions"
    },
    {
      id: "05",
      icon: Shield,
      title: "Security & Compliance",
      description: "Zero-trust security architecture, automated threat detection, encryption at rest, and regulatory compliance.",
      technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "OWASP"],
      route: "/security-compliance"
    },
    {
      id: "06",
      icon: Zap,
      title: "Performance Optimization",
      description: "Comprehensive audits, database query tuning, CDN edge caching, and memory leak resolution.",
      technologies: ["CDN", "Caching", "Load Balancing", "Monitoring"],
      route: "/performance-optimization"
    }
  ];

  return (
    <section id="services" className="w-full py-20 sm:py-24 lg:py-28 bg-background px-4 sm:px-8 md:px-12 relative border-b border-white/10">
      <div className="container mx-auto">
        {/* Split-Screen Header */}
        <Reveal variant="spring-up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 backdrop-blur-xl font-mono text-xs text-primary uppercase tracking-wider mb-4 rounded-full shadow-lg shadow-primary/10">
              <Code2 className="w-4 h-4 text-primary" />
              <span>[02 // CORE CAPABILITIES]</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-wide text-foreground">
              PROFESSIONAL <span className="text-gradient-animated">SERVICES</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="font-mono text-sm sm:text-base text-muted-foreground leading-[1.7] max-w-[70ch]">
              End-to-end digital transformation and custom software engineering built for scalability, resilience, and business growth.
            </p>
          </div>
        </Reveal>

        {/* Services Grid with Curved Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} variant="flip-up" delay={((index % 3) + Math.floor(index / 3)) * 80} className="h-full">
                <Card className="group cs-card-3d bg-card/60 backdrop-blur-xl border border-white/10 hover:border-primary/50 rounded-3xl p-7 shadow-2xl hover:shadow-primary/20 h-full flex flex-col justify-between transition-all duration-300">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                      <div className="p-3 bg-primary/10 border border-primary/30 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-mono text-xs font-bold text-primary tracking-widest">
                        [{service.id}]
                      </span>
                    </div>

                    <CardTitle className="font-display text-xl font-bold tracking-wide text-foreground group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </CardTitle>

                    <CardDescription className="font-mono text-xs text-muted-foreground leading-[1.7]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 pt-4 border-t border-white/10">
                    {/* Technologies */}
                    <div className="mb-6 font-mono">
                      <h4 className="text-[10px] font-bold text-primary/80 uppercase tracking-widest mb-2.5">
                        STACK //
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="font-mono text-[10px] uppercase rounded-full bg-muted/60 hover:bg-primary/20 hover:text-primary border border-white/10 transition-colors px-3 py-1"
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
                      className="w-full font-mono text-xs uppercase tracking-wider rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 justify-between group/btn transition-all py-5"
                      onClick={() => navigate(service.route)}
                    >
                      <span className="text-primary font-bold">Explore Solution</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Curved Glass Banner */}
        <Reveal variant="spring-up" className="border border-white/10 bg-card/60 backdrop-blur-2xl p-8 sm:p-12 rounded-3xl shadow-2xl shadow-primary/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 font-mono text-xs text-primary uppercase tracking-wider mb-4 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span>[READY FOR DISCOVERY]</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-foreground mb-3 tracking-wide">
              HAVE A SPECIFIC SYSTEM TO BUILD?
            </h3>
            <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-[1.7] max-w-[70ch]">
              Consult with our principal architects to formulate your technical roadmap, estimate project velocity, and assemble a dedicated engineering pod.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              size="lg"
              className="cs-magnetic font-mono text-xs uppercase tracking-wider rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 border border-primary shadow-xl shadow-primary/25 hover:scale-105 transition-all w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ShinyText text="Start Your Project" speed={3} className="text-white font-semibold" />
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProfessionalServices;