import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Sparkles, Rocket, Eye } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Hero Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: `url(${heroBackground})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-hero" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-glow-pulse" />
                <div className="absolute top-3/4 left-1/6 w-32 h-32 bg-accent/15 rounded-full blur-xl animate-float delay-500" />
                <div className="absolute top-1/6 right-1/6 w-40 h-40 bg-primary/8 rounded-full blur-2xl animate-float delay-700" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8 animate-scale-in">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Innovative Software Solution</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Transform
                        </span>{" "}
                        <span className="text-foreground">Your Business</span>
                        <br />
                        <span className="text-foreground">With</span>{" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Cutting-Edge
                        </span>
                        <br />
                        <span className="text-foreground">Software</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
                        We create innovative websites, custom software, and digital solutions that drive growth and efficiency for modern businesses.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500">
                        <Button
                            variant="hero"
                            size="lg"
                            className="group relative overflow-hidden transform hover:scale-105 transition-all duration-300"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center gap-2">
                                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                Launch Your Vision
                                <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            </span>
                        </Button>

                        <div className="relative group">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-card/30 backdrop-blur-md border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group-hover:shadow-glow"
                                onClick={() => {
                                    const servicesElement = document.getElementById('services');
                                    if (servicesElement) {
                                        // Add a glowing effect animation
                                        servicesElement.style.boxShadow = '0 0 30px hsl(var(--primary) / 0.5)';
                                        servicesElement.style.transition = 'box-shadow 0.5s ease';
                                        setTimeout(() => {
                                            servicesElement.style.boxShadow = '';
                                        }, 2000);
                                        servicesElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                <span className="group-hover:text-primary transition-colors duration-300">
                                    Explore Magic
                                </span>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
                            </Button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in delay-700">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                            <div className="text-sm text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                            <div className="text-sm text-muted-foreground">Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
                            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default Hero;