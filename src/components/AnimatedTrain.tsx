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
  <div className="w-full overflow-x-hidden py-8 bg-background border-y border-white/10">
    <Reveal variant="spring-up" className="relative w-full train-sheen">
      <div
        className="flex gap-6 animate-train whitespace-nowrap"
        style={{ animation: 'train-scroll 25s linear infinite' }}
      >
        {Array(3).fill(services).flat().map((service, idx) => {
          const Icon = service.icon;
          const indexNum = String((idx % services.length) + 1).padStart(2, '0');
          return (
            <div
              key={idx}
              className="cs-chip inline-flex items-center gap-3 bg-card/60 backdrop-blur-xl border border-white/10 rounded-full px-7 py-3.5 mx-1 min-w-[230px] shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 font-mono"
            >
              <span className="text-primary text-xs font-bold font-mono">[{indexNum}]</span>
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-foreground font-semibold text-xs uppercase tracking-wider">{service.label}</span>
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
          animation-duration: 12s !important;
        }
      }
    `}</style>
  </div>
);

export default AnimatedTrain;
