import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const typingText = "Tech Solutions";

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
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-background py-24 px-4 sm:px-8 md:px-16">
      {/* Company Name */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-center max-w-full whitespace-nowrap mt-8">
        <span className="text-gradient">Nurovia </span>
        <span className="text-gradient">{typed}</span>
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
    </section>
  );
};

export default ProfessionalHero;