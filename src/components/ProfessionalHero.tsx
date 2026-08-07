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
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden py-20 lg:py-28 px-4 sm:px-8 md:px-12 border-b-2 border-border/40"
    >
      {/* Background Aurora Mesh Glow */}
      <div className="cs-aurora opacity-30" aria-hidden="true" />

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

      {/* Grid line overlay for neo-brutalist aesthetic */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#1f1f2e15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-primary/50 bg-primary/10 font-mono text-xs text-primary uppercase tracking-wider mb-6 shadow-brutal-sm rounded-none">
            <Cpu className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>[STUDIO // AI-FIRST DEVELOPMENT]</span>
          </div>

          {/* H1: Minimum 72px on Desktop, Clash Display Bold */}
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

          {/* Neo-Brutalist CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button
              size="lg"
              className="cs-magnetic font-mono text-xs uppercase tracking-wider rounded-none bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 border border-primary shadow-brutal hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all duration-200"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ShinyText text="Let's Collaborate" speed={3} className="text-white font-semibold" />
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cs-magnetic font-mono text-xs uppercase tracking-wider rounded-none border-2 border-foreground/30 bg-background hover:bg-muted text-foreground font-semibold px-8 py-6 hover:border-primary transition-all duration-200"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Right Column: Neo-Brutalist Split Feature Matrix Block */}
        <div className="lg:col-span-5 w-full">
          <div className="border-2 border-primary/40 bg-card/60 backdrop-blur-md p-6 sm:p-8 shadow-brutal relative">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-primary" />
                <span>SYS_DIAGNOSTICS // V2.6</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-none animate-pulse" />
                <span className="font-mono text-[10px] text-muted-foreground uppercase">ONLINE</span>
              </div>
            </div>

            {/* Matrix items */}
            <div className="space-y-4 font-mono text-xs">
              <div className="p-3.5 border border-border/60 bg-background/80 flex items-start gap-3 hover:border-primary/50 transition-colors">
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

              <div className="p-3.5 border border-border/60 bg-background/80 flex items-start gap-3 hover:border-primary/50 transition-colors">
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

              <div className="p-3.5 border border-border/60 bg-background/80 flex items-start gap-3 hover:border-primary/50 transition-colors">
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
            <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-border/60 text-center font-mono">
              <div className="p-2 border border-border/40 bg-background/40">
                <div className="font-display font-bold text-lg text-primary">50+</div>
                <div className="text-[9px] text-muted-foreground uppercase">SHIPPED</div>
              </div>
              <div className="p-2 border border-border/40 bg-background/40">
                <div className="font-display font-bold text-lg text-primary">99.9%</div>
                <div className="text-[9px] text-muted-foreground uppercase">UPTIME</div>
              </div>
              <div className="p-2 border border-border/40 bg-background/40">
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