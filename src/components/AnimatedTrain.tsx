import { Brain, Shield, Cloud, Code, Monitor, Cpu } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  { icon: Brain, label: "AI Solutions" },
  { icon: Cpu, label: "Enterprise AI & LLMs" },
  { icon: Shield, label: "Cybersecurity & OAuth" },
  { icon: Cloud, label: "Cloud Hosting & DevOps" },
  { icon: Code, label: "Fullstack Web Systems" },
  { icon: Monitor, label: "Mobile Apps & Microservices" },
];

const AnimatedTrain = () => (
  <div className="w-full overflow-hidden py-10 sm:py-14 bg-background border-y border-white/10 scrollbar-none my-6">
    <Reveal variant="spring-up" className="relative w-full train-sheen overflow-hidden py-3">
      <div
        className="flex gap-8 animate-train whitespace-nowrap items-center py-2"
        style={{ animation: 'train-scroll 28s linear infinite' }}
      >
        {Array(3).fill(services).flat().map((service, idx) => {
          const Icon = service.icon;
          const indexNum = String((idx % services.length) + 1).padStart(2, '0');
          return (
            <div
              key={idx}
              className="cs-chip inline-flex items-center gap-3.5 bg-card/80 backdrop-blur-2xl border border-white/15 rounded-full px-8 py-4 sm:px-10 sm:py-5 w-max shrink-0 shadow-xl hover:shadow-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300 font-mono overflow-hidden"
            >
              <span className="text-primary text-xs font-bold font-mono shrink-0">[{indexNum}]</span>
              <Icon className="w-4.5 h-4.5 text-primary shrink-0" />
              <span className="text-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap shrink-0">{service.label}</span>
            </div>
          );
        })}
      </div>
    </Reveal>
    <style>{`
      @keyframes train-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }

      @media (max-width: 768px) {
        .animate-train {
          animation-duration: 14s !important;
        }
      }
    `}</style>
  </div>
);

export default AnimatedTrain;
