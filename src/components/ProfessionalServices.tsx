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
  Code2,
  Palette,
  BarChart3,
  Rocket,
  Brain
} from "lucide-react";

const ProfessionalServices = () => {
  const services = [
    {
      icon: Globe,
      category: "Web Development",
      title: "Full-Stack Applications",
      description: "Enterprise-grade web applications with modern architectures, microservices, and scalable infrastructure.",
      technologies: ["React", "Node.js", "TypeScript", "GraphQL", "Docker"],
      features: [
        "Progressive Web Apps (PWA)",
        "Server-Side Rendering (SSR)",
        "Real-time Data Sync",
        "Advanced Caching Strategies",
        "Performance Optimization"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: Smartphone,
      category: "Mobile Development",
      title: "Cross-Platform Solutions",
      description: "Native-quality mobile applications with shared codebases, optimized for both iOS and Android platforms.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
      features: [
        "Native Performance",
        "Offline-First Architecture",
        "Push Notifications",
        "Biometric Authentication",
        "App Store Optimization"
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: Database,
      category: "Backend Systems",
      title: "Scalable Infrastructure",
      description: "Robust backend systems with distributed architectures, real-time processing, and advanced data management.",
      technologies: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "Kafka"],
      features: [
        "Microservices Architecture",
        "Event-Driven Systems",
        "Database Optimization",
        "API Gateway Design",
        "Load Balancing"
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      icon: Cloud,
      category: "Cloud Solutions",
      title: "DevOps & Infrastructure",
      description: "Modern cloud infrastructure with automated deployments, monitoring, and infinite scalability capabilities.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      features: [
        "Auto-Scaling Infrastructure",
        "CI/CD Pipelines",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Alerting"
      ],
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400"
    },
    {
      icon: Brain,
      category: "AI Integration",
      title: "Intelligent Systems",
      description: "AI-powered solutions with machine learning models, natural language processing, and predictive analytics.",
      technologies: ["TensorFlow", "OpenAI", "Python", "PyTorch", "Hugging Face"],
      features: [
        "Custom ML Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Automated Decision Making"
      ],
      gradient: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-400"
    },
    {
      icon: Shield,
      category: "Security & Compliance",
      title: "Enterprise Security",
      description: "Comprehensive security solutions with advanced threat detection, compliance frameworks, and data protection.",
      technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "OWASP", "GDPR"],
      features: [
        "Multi-Factor Authentication",
        "Data Encryption",
        "Vulnerability Assessment",
        "Compliance Auditing",
        "Security Monitoring"
      ],
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-secondary/10 rounded-full blur-2xl animate-float-reverse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 animate-bounce-in">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Our Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Professional</span>
            <br />
            <span className="text-foreground">Services</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Comprehensive technology solutions designed for enterprises that demand excellence, 
            scalability, and cutting-edge innovation in every project we deliver.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group relative glass border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elevated hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-8 h-8 ${service.iconColor} group-hover:animate-pulse-neon`} />
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs font-mono border-primary/30 text-primary">
                      {service.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-mono text-sm text-primary mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs font-mono bg-muted/50 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-mono text-sm text-primary mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group/btn hover:bg-primary/10 transition-all duration-300"
                  >
                    <span className="text-primary group-hover/btn:text-primary-glow transition-colors duration-300">
                      Learn More
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-3xl p-12 relative overflow-hidden animate-fade-in delay-500">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-5 animate-gradient-shift" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-primary/20 animate-glow-pulse">
                <Rocket className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
              Ready to Build Something Amazing?
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution 
              that exceeds your expectations and drives real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-secondary text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 neon-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="glass border-primary/30 hover:border-primary/60 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-glow"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalServices;