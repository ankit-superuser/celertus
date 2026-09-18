import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceSchema } from "@/lib/serviceSchema";

const BrandContent = () => (
  <Layout>
    <SEO
      title="Brand & Content Studio | Identity, Social & Video | Celertus.ai"
      description="Identity, voice and creative that make a brand recognisable — then the content calendar and systems to sustain it. Brand & content from Celertus.ai, New Delhi."
      keywords="brand identity design, content marketing, social media management, video production, brand strategy, Celertus.ai"
      canonicalUrl="/brand-content"
      schema={serviceSchema("brand-content")}
    />
    <ServiceDetail slug="brand-content" />
  </Layout>
);

export default BrandContent;
