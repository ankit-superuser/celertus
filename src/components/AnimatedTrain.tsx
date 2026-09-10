import Reveal from "@/components/Reveal";
import { SERVICES } from "@/data/services";

/** Marketing first — the marquee is the first thing under the hero. */
const chips = SERVICES;

const AnimatedTrain = () => (
  <div className="w-full overflow-hidden py-10 sm:py-14 bg-background border-y border-border scrollbar-none">
    <Reveal variant="fade" className="relative w-full train-sheen overflow-hidden py-3">
      <div
        className="flex gap-4 animate-train whitespace-nowrap items-center py-2"
        style={{ animation: "train-scroll 40s linear infinite" }}
      >
        {Array(3)
          .fill(chips)
          .flat()
          .map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="cs-chip inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3.5 w-max shrink-0 shadow-soft hover:border-primary/40 transition-colors duration-300"
              >
                <Icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground text-sm whitespace-nowrap shrink-0">
                  {service.shortTitle}
                </span>
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
          animation-duration: 24s !important;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .animate-train {
          animation: none !important;
        }
      }
    `}</style>
  </div>
);

export default AnimatedTrain;
