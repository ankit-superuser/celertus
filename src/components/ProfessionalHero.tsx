import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

/* three.js is ~480 kB — keep it out of the critical path. Until the shader
   loads, the fallback below paints the same palette as a plain CSS gradient,
   so there's no flash of empty background. */
const SilkBackground = lazy(() => import("@/components/SilkBackground"));

const SilkFallback = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 z-0 w-full h-full"
    style={{
      background:
        "radial-gradient(60% 60% at 30% 30%, #6D5AE622, transparent 70%), radial-gradient(55% 55% at 75% 60%, #E8A87C22, transparent 70%), #FAF8F5",
    }}
  />
);

const trustPoints = [
  { value: "50+", label: "projects shipped" },
  { value: "99.9%", label: "uptime" },
  { value: "24/7", label: "support" },
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const ProfessionalHero = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center min-h-[92vh] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-8 md:px-12">
      {/* Flowing silk gradient — the single background layer. */}
      <Suspense fallback={<SilkFallback />}>
        <SilkBackground className="absolute inset-0 z-0 w-full h-full" />
      </Suspense>

      {/* Scrim: keeps the headline readable wherever the silk drifts bright. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,hsl(var(--background)/0.72),transparent_75%)]"
      />
      {/* Bottom fade into the page. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[1] h-40 pointer-events-none bg-gradient-to-b from-transparent to-background"
      />

      <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
        <Reveal variant="fade">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/70 backdrop-blur-md text-xs sm:text-sm text-muted-foreground shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Marketing &amp; technology studio — New Delhi
          </span>
        </Reveal>

        <Reveal variant="up" delay={90}>
          <h1 className="mt-7 font-display text-foreground max-w-[18ch] mx-auto">
            Marketing that moves.
            <br />
            <span className="text-gradient-animated">Technology that lasts.</span>
          </h1>
        </Reveal>

        <Reveal variant="up" delay={180}>
          <p className="mt-7 mx-auto text-base sm:text-lg text-muted-foreground max-w-[58ch]">
            We run the campaigns that bring people to your brand — and build the
            websites, apps and cloud systems that keep them there. One team for
            growth and the engineering underneath it.
          </p>
        </Reveal>

        <Reveal variant="up" delay={270}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3.5 justify-center">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="cs-magnetic rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-sm shadow-soft"
            >
              Start a project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("work")}
              className="cs-magnetic rounded-full border-border bg-card/70 backdrop-blur-md hover:bg-card text-foreground font-medium px-8 py-6 text-sm"
            >
              See our work
            </Button>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={380}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            {trustPoints.map((point, i) => (
              <span key={point.label} className="inline-flex items-center gap-3">
                {i > 0 && <span className="text-border select-none">·</span>}
                <span>
                  <span className="font-medium text-foreground">{point.value}</span>{" "}
                  {point.label}
                </span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProfessionalHero;
