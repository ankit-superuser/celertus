import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Cpu, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import FloatingLines from "@/components/FloatingLines";
import ShinyText from "./ShinyText";

const typingText = "ENGINEERING";

const ProfessionalHero = () => {
  const [typed, setTyped] = useState("");
  const [lineCount, setLineCount] = useState(5);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < typingText.length) {
        setTyped(typingText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setLineCount(mq.matches ? 3 : 5);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24 lg:py-32 px-4 sm:px-8 md:px-12"
    >
      {/* Background Ambient Aurora Mesh Glow */}
      <div className="cs-aurora opacity-40" aria-hidden="true" />

      {/* Floating lines background */}
      <div className="absolute inset-0 z-0 w-full h-full min-h-0 opacity-40">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={lineCount}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={["#a855f7", "#ec4899", "#6366f1"]}
        />
      </div>

      {/* Soft curved grid background overlay */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(168,85,247,0.15),rgba(255,255,255,0))] pointer-events-none" />

      {/* Split-Screen Container */}
      <div
        className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
        }}
      >
        {/* Left Column: Huge Clash Display H1 + Mono Subtext + CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-primary/30 bg-primary/10 backdrop-blur-xl rounded-full font-mono text-xs text-primary uppercase tracking-wider mb-6 shadow-lg shadow-primary/10">
            <Cpu className="w-4 h-4 text-primary animate-pulse" />
            <span>[STUDIO // AI-FIRST DEVELOPMENT]</span>
          </div>

          {/* H1: Minimum 76px on Desktop, Clash Display Bold */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-[76px] xl:text-[84px] leading-[1.02] tracking-wide text-foreground mb-6">
            CELERTUS<span className="text-primary">.AI</span><br />
            SOFTWARE <br />
            <span className="text-gradient-animated underline-draw inline-block">
              {typed}
            </span>
          </h1>

          {/* Subtitle: IBM Plex Mono, 1.7 line height, 70ch max width */}
          <p className="font-mono text-sm sm:text-base text-muted-foreground leading-[1.7] max-w-[70ch] mb-8">
            Architecting high-performance enterprise AI systems, cloud infrastructure, 
            cross-platform mobile applications, and scalable microservice architectures for ambitious startups and global enterprises.
          </p>

          {/* Luxury Curved CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button
              size="lg"
              className="cs-magnetic font-mono text-xs uppercase tracking-wider rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 border border-primary/80 shadow-2xl shadow-primary/30 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ShinyText text="Let's Collaborate" speed={3} className="text-white font-semibold" />
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cs-magnetic font-mono text-xs uppercase tracking-wider rounded-full border border-white/20 bg-card/60 backdrop-blur-xl hover:bg-card hover:border-primary text-foreground font-semibold px-8 py-6 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Right Column: Soft Glass Split Diagnostics Card */}
        <div className="lg:col-span-5 w-full">
          <div className="border border-white/10 bg-card/60 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-2xl shadow-primary/10 relative">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-primary" />
                <span>SYS_DIAGNOSTICS // V2.6</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">ONLINE</span>
              </div>
            </div>

            {/* Matrix items */}
            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 border border-white/10 bg-background/50 rounded-2xl flex items-start gap-3 hover:border-primary/50 transition-colors">
                <span className="text-primary font-bold">[01]</span>
                <div>
                  <div className="font-bold text-foreground mb-1 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    AI Core Architecture
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-[1.6]">
                    Custom LLM fine-tuning, agentic workflows, and automated reasoning pipelines.
                  </p>
                </div>
              </div>

              <div className="p-4 border border-white/10 bg-background/50 rounded-2xl flex items-start gap-3 hover:border-primary/50 transition-colors">
                <span className="text-primary font-bold">[02]</span>
                <div>
                  <div className="font-bold text-foreground mb-1 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    Rapid Team Deployment
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-[1.6]">
                    Dedicated senior engineering teams deployed within 3 to 5 business days.
                  </p>
                </div>
              </div>

              <div className="p-4 border border-white/10 bg-background/50 rounded-2xl flex items-start gap-3 hover:border-primary/50 transition-colors">
                <span className="text-primary font-bold">[03]</span>
                <div>
                  <div className="font-bold text-foreground mb-1 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    Enterprise Security
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-[1.6]">
                    SOC2/GDPR ready infrastructure with zero-trust data protection standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer metrics bar */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/10 text-center font-mono">
              <div className="p-2.5 border border-white/10 bg-background/40 rounded-xl">
                <div className="font-display font-bold text-lg text-primary">50+</div>
                <div className="text-[9px] text-muted-foreground uppercase">SHIPPED</div>
              </div>
              <div className="p-2.5 border border-white/10 bg-background/40 rounded-xl">
                <div className="font-display font-bold text-lg text-primary">99.9%</div>
                <div className="text-[9px] text-muted-foreground uppercase">UPTIME</div>
              </div>
              <div className="p-2.5 border border-white/10 bg-background/40 rounded-xl">
                <div className="font-display font-bold text-lg text-primary">24/7</div>
                <div className="text-[9px] text-muted-foreground uppercase">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHero;