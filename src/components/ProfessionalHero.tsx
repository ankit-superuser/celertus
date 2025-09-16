import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LiquidEther from "./LiquidEther";
import { ArrowRight } from "lucide-react";

const typingText = "TECHNOLOGIES";

const ProfessionalHero = () => {
  const [typed, setTyped] = useState("");

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

    // Cleanup function to clear interval if the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <section className="relative min-h-[80vh] bg-background py-24 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={40}
          cursorSize={140}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={1}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={4}
          takeoverDuration={0.25}
          autoResumeDelay={0}
          autoRampDuration={0.6}
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Company Name */}
        <h1 className="font-bold mb-4 text-center mt-8 leading-tight 
                 text-3xl sm:text-4xl md:text-6xl">
          <span className="text-gradient block sm:inline">CELERTUS</span>{" "}
          <span className="text-gradient block sm:inline">{typed}</span>
        </h1>
        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-2xl text-muted-foreground mb-8 text-center max-w-2xl">
          Empowering your business with AI, Cybersecurity, Cloud, and Web Solutions.
        </p>
        {/* Let's Collaborate Button */}
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 w-full max-w-xs sm:max-w-sm md:max-w-md"
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