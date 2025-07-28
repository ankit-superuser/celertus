import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Code,
    Globe,
    Smartphone,
    Database,
    Cloud,
    Shield,
    Zap,
    Users,
    ArrowRight
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Website Development",
        description: "Custom websites and web applications built with modern technologies. Responsive, fast, and SEO-optimized.",
        features: ["Responsive Design", "SEO Optimization", "Performance Focused", "CMS Integration"]
    },
    {
        icon: Code,
        title: "Custom Software",
        description: "Tailored software solutions designed specifically for your business needs and workflow optimization.",
        features: ["Business Logic", "Workflow Automation", "Integration APIs", "Scalable Architecture"]
    },
    {
        icon: Smartphone,
        title: "Mobile Applications",
        description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
        features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Ready"]
    },
    {
        icon: Database,
        title: "Database Solutions",
        description: "Robust database design and optimization for efficient data management and lightning-fast queries.",
        features: ["Database Design", "Performance Tuning", "Data Migration", "Backup Systems"]
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description: "Scalable cloud infrastructure and deployment solutions for modern, distributed applications.",
        features: ["AWS/Azure/GCP", "DevOps Setup", "Auto Scaling", "Monitoring"]
    },
    {
        icon: Shield,
        title: "Security Audits",
        description: "Comprehensive security assessments and implementations to protect your digital assets.",
        features: ["Vulnerability Assessment", "Security Implementation", "Compliance", "Monitoring"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Our Services</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Solutions
                        </span>{" "}
                        <span className="text-foreground">Tailored</span>
                        <br />
                        <span className="text-foreground">For Your</span>{" "}
                        <span className="text-primary">Success</span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        From concept to deployment, we deliver comprehensive software solutions
                        that drive innovation and accelerate your business growth.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group bg-gradient-card hover:shadow-card transition-all duration-500 hover:scale-105 animate-fade-in border-border/50"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                            <ArrowRight className="w-3 h-3 text-primary" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 animate-fade-in">
                    <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
                        <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                        <p className="text-muted-foreground mb-6">
                            Let's discuss your project and how we can help bring your vision to life with our expertise.
                        </p>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
                        >
                            Start Your Project Today
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;