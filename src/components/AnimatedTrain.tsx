import { Brain, Shield, Cloud, Code, Monitor, Cpu, Sparkles } from "lucide-react";
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
  <div className="w-full overflow-x-hidden py-6 bg-background border-y-2 border-primary/30">
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
              className="cs-chip inline-flex items-center gap-3 bg-card border-2 border-primary/40 rounded-none px-6 py-4 mx-1 min-w-[220px] shadow-brutal-sm hover:shadow-brutal hover:border-primary hover:-translate-y-0.5 transition-all font-mono"
            >
              <span className="text-primary text-xs font-bold font-mono">[{indexNum}]</span>
              <Icon className="w-5 h-5 text-primary" />
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
