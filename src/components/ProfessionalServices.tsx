import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { PILLAR_LABELS, growthServices, techServices, type Service } from "@/data/services";

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const navigate = useNavigate();
  const Icon = service.icon;

  return (
    <Reveal variant="up" delay={(index % 3) * 80} className="h-full">
      <button
        type="button"
        onClick={() => navigate(service.route)}
        aria-label={`${service.title} — read more`}
        className="group cs-card-3d text-left w-full h-full flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-soft-lg hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <span className="grid place-items-center w-12 h-12 rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon className="w-5 h-5" />
          </span>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>

        <h3 className="font-display text-xl text-foreground mb-2.5">{service.title}</h3>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-border">
          {service.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="rounded-full bg-secondary text-muted-foreground font-normal text-[11px] px-2.5 py-1 border-0 hover:bg-secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </button>
    </Reveal>
  );
};

const PillarGroup = ({ label, services }: { label: string; services: Service[] }) => (
  <div>
    <Reveal variant="fade">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="font-display text-lg sm:text-xl text-foreground shrink-0">{label}</h3>
        <span className="h-px flex-1 bg-border" />
        <span className="text-sm text-muted-foreground shrink-0">
          {services.length} {services.length === 1 ? "service" : "services"}
        </span>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <ServiceCard key={service.slug} service={service} index={i} />
      ))}
    </div>
  </div>
);

const ProfessionalServices = () => {
  return (
    // The `services` anchor lives on the wrapping <section> in Index.tsx.
    <section className="w-full py-20 sm:py-24 lg:py-28 bg-background px-4 sm:px-8 md:px-12 relative">
      <div className="container mx-auto">
        {/* Section header */}
        <Reveal variant="up" className="max-w-3xl mb-16">
          <span className="text-sm text-muted-foreground">What we do</span>
          <h2 className="font-display text-foreground mt-3 mb-5">
            Two halves of the same job
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Most agencies do the campaign or the build, then hand you off. We do both,
            which means the marketing is designed around what the product can actually
            deliver — and the product is built for the traffic the marketing brings.
          </p>
        </Reveal>

        <div className="space-y-16">
          <PillarGroup label={PILLAR_LABELS.growth} services={growthServices} />
          <PillarGroup label={PILLAR_LABELS.technology} services={techServices} />
        </div>

        {/* Closing CTA banner */}
        <Reveal
          variant="up"
          className="mt-20 rounded-3xl border border-border bg-gradient-secondary p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8">
            <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-3">
              Not sure which half you need?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Most conversations start there. Tell us what you are trying to grow and
              we will tell you honestly whether it is a marketing problem, a product
              problem, or both.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              size="lg"
              className="cs-magnetic rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-sm shadow-soft w-full sm:w-auto"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProfessionalServices;
