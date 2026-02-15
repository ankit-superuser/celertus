import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LiquidEther from "./LiquidEther";
import { ArrowRight } from "lucide-react";
import FloatingLines from "@/components/FloatingLines";

const typingText = "TECHNOLOGIES";

const ProfessionalHero = () => {
  const [typed, setTyped] = useState("");
  const [lineCount, setLineCount] = useState(5);

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

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden py-24 px-4 sm:px-8 md:px-16">
      {/* Floating lines background – dimmed so text stays readable */}
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
      {/* Content – centered, bolder white text */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center px-6 sm:px-8">
        <h1 className="font-extrabold mb-4 leading-tight text-white text-3xl sm:text-4xl md:text-6xl whitespace-normal md:whitespace-nowrap">
          <span className="inline">CELERTUS</span>{" "}
          <span className="inline">{typed}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-white font-bold mb-8 max-w-2xl mx-auto">
          Empowering your business with AI, Cybersecurity, Cloud, and Web Solutions.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Let's Collaborate
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default ProfessionalHero;