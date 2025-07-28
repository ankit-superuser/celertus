import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles, Rocket, Eye, Globe, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const ProfessionalHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Morphing Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-mesh opacity-20 animate-morphing blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-secondary opacity-15 animate-morphing delay-1000 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-primary opacity-10 animate-float blur-3xl" />
        <div className="absolute top-1/6 right-1/6 w-64 h-64 bg-accent/20 animate-float-reverse delay-500 blur-xl" />
        <div className="absolute bottom-1/6 left-1/6 w-72 h-72 bg-primary-glow/15 animate-float delay-700 blur-2xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-8 animate-bounce-in delay-300">
            <div className="relative">
              <Zap className="w-5 h-5 text-primary animate-pulse-neon" />
              <div className="absolute inset-0 w-5 h-5 text-accent animate-pulse-neon delay-500" />
            </div>
            <span className="text-sm font-medium text-gradient font-mono">
              // Premium Development Studio
            </span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>

          {/* Main Heading with Reveal Animation */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4">
              <span className="block animate-text-reveal delay-500">
                <span className="text-gradient">Crafting</span>
              </span>
              <span className="block animate-text-reveal delay-700">
                <span className="text-foreground">Digital</span>
              </span>
              <span className="block animate-text-reveal delay-900">
                <span className="text-gradient">Masterpieces</span>
              </span>
            </h1>
            
            {/* Animated Tagline */}
            <div className="relative">
              <p className="text-xl md:text-2xl text-muted-foreground font-mono animate-fade-in delay-1000">
                <span className="text-primary">const</span> experience = 
                <span className="text-accent"> innovation</span> + 
                <span className="text-primary-glow"> precision</span>;
              </p>
            </div>
          </div>

          {/* Professional Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-1200">
            We architect cutting-edge digital solutions that transcend ordinary expectations. 
            From complex web applications to sophisticated user experiences, we deliver 
            enterprise-grade quality with artistic finesse.
          </p>

          {/* Advanced CTA Section */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center animate-slide-up delay-1400">
            {/* Primary CTA */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Button 
                size="lg"
                className="relative bg-gradient-primary hover:bg-gradient-secondary text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 neon-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Button>
            </div>

            {/* Secondary CTA */}
            <div className="relative group">
              <Button 
                variant="outline"
                size="lg"
                className="glass border-primary/30 hover:border-primary/60 text-foreground font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-glow group-hover:neon-glow"
                onClick={() => {
                  const servicesElement = document.getElementById('services');
                  if (servicesElement) {
                    servicesElement.style.animation = 'glow-pulse 2s ease-in-out';
                    setTimeout(() => {
                      if (servicesElement.style) servicesElement.style.animation = '';
                    }, 2000);
                    servicesElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Portfolio</span>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>
              </Button>
            </div>

            {/* Tertiary Action */}
            <div className="relative group">
              <Button 
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-primary font-mono px-6 py-4 rounded-2xl transition-all duration-300"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5" />
                  <span>&lt;/code&gt;</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Professional Stats with Advanced Animations */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 animate-fade-in delay-1600">
            {[
              { value: "150+", label: "Projects Delivered", icon: Globe },
              { value: "99.9%", label: "Uptime SLA", icon: Zap },
              { value: "24/7", label: "Expert Support", icon: Sparkles },
              { value: "5★", label: "Client Rating", icon: Code2 }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="group text-center glass rounded-2xl p-6 hover:shadow-elevated transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${1800 + index * 200}ms` }}
                >
                  <div className="relative mb-4">
                    <Icon className="w-8 h-8 text-primary mx-auto group-hover:animate-pulse-neon transition-all duration-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient font-display mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Advanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce delay-2000">
        <div className="relative">
          <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center glass">
            <div className="w-1 h-4 bg-gradient-primary rounded-full mt-2 animate-float" />
          </div>
          <div className="absolute -inset-2 border border-primary/20 rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHero;