import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceSchema } from "@/lib/serviceSchema";

const BackendSystem = () => (
  <Layout>
    <SEO
      title="Backend Systems & API Development | Node.js & PostgreSQL | Celertus.ai"
      description="APIs, data models and services that stay reliable as traffic and complexity grow — designed so the next feature does not require a rewrite. Celertus.ai."
      keywords="backend development, Node.js, PostgreSQL, API design, microservices, Celertus.ai"
      canonicalUrl="/backend-system"
      schema={serviceSchema("backend-system")}
    />
    <ServiceDetail slug="backend-system" />
  </Layout>
);

export default BackendSystem;
