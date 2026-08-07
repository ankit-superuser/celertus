import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import FloatingLines from "@/components/FloatingLines";

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
    setMousePos({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden py-24 px-4 sm:px-8 md:px-16"
    >
      {/* Background Aurora Mesh Glow */}
      <div className="cs-aurora" aria-hidden="true" />

      {/* Floating lines background */}
      <div className="absolute inset-0 z-0 w-full h-full min-h-0 opacity-50">
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
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-hero pointer-events-none" />

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center px-6 sm:px-8 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary mb-6 shadow-sm backdrop-blur-md transition-all hover:border-primary/60 hover:scale-105">
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span>Enterprise AI &amp; Digital Transformation Studio</span>
        </div>

        <h1 className="font-extrabold mb-6 leading-tight text-white text-3xl sm:text-5xl md:text-6xl tracking-tight">
          CELERTUS<span className="text-primary">.AI</span> SOFTWARE <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent underline-draw inline-block">
            {typed}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
          Building swift, scalable, and sophisticated AI systems, cloud infrastructure, enterprise mobile applications, and modern web platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
          <Button
            size="lg"
            className="cs-magnetic sheen bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 w-full shadow-tech hover:scale-105 transition-all"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Collaborate
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="cs-magnetic border-border hover:bg-card hover:text-primary font-semibold px-8 py-4 w-full transition-all"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHero;