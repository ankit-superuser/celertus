import { Brain, Shield, Cloud, Code, Monitor } from "lucide-react";

const services = [
    { icon: Brain, label: "AI Solutions" },
    { icon: Shield, label: "Cybersecurity" },
    { icon: Cloud, label: "Cloud Hosting" },
    { icon: Code, label: "Web Development" },
    { icon: Monitor, label: "Website Enhancement" },
];

const AnimatedTrain = () => (
    <div className="w-full overflow-x-hidden py-8 bg-background">
        <div className="relative w-full">
            <div className="flex gap-8 animate-train whitespace-nowrap" style={{ animation: 'train-scroll 20s linear infinite' }}>
                {Array(2).fill(services).flat().map((service, idx) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={idx}
                            className="inline-flex flex-col items-center justify-center bg-muted/10 border border-primary/20 rounded-xl px-8 py-6 mx-2 min-w-[200px] shadow-md hover:scale-105 transition-transform duration-200"
                        >
                            <Icon className="w-8 h-8 text-primary mb-2" />
                            <span className="text-foreground font-semibold text-lg">{service.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
        <style>{`
      @keyframes train-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
    </div>
);

export default AnimatedTrain; 