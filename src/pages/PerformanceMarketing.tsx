import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceSchema } from "@/lib/serviceSchema";

const PerformanceMarketing = () => (
  <Layout>
    <SEO
      title="Performance Marketing & Paid Ads | Google & Meta Ads | Celertus.ai"
      description="Paid campaigns measured against revenue, not impressions. Google Ads, Meta Ads and CRO from Celertus.ai, New Delhi — we tune spend until the numbers work."
      keywords="performance marketing, Google Ads agency, Meta Ads, PPC management, conversion rate optimization, Celertus.ai"
      canonicalUrl="/performance-marketing"
      schema={serviceSchema("performance-marketing")}
    />
    <ServiceDetail slug="performance-marketing" />
  </Layout>
);

export default PerformanceMarketing;
