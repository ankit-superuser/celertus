import { getService, pillarLabel } from "@/data/services";

const DOMAIN = "https://celertus.germanysoon.com";

/**
 * BreadcrumbList + Service + FAQPage JSON-LD for a service detail page,
 * generated from the shared services data so page files don't repeat FAQ copy.
 */
export const serviceSchema = (slug: string) => {
  const service = getService(slug);
  if (!service) return [];

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${DOMAIN}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: `${DOMAIN}${service.path}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: pillarLabel(service.pillar),
      description: service.long,
      provider: { "@type": "Organization", name: "Celertus.ai", url: DOMAIN },
      areaServed: "Global",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.title} deliverables`,
        itemListElement: service.deliverables.map((d) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: d } })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
};
