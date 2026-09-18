import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceSchema } from "@/lib/serviceSchema";

const SecurityCompliance = () => (
  <Layout>
    <SEO
      title="Security & Compliance Services | OWASP, OAuth 2.0 | Celertus.ai"
      description="Authentication, data protection and audit readiness built in rather than bolted on — which is both cheaper and the only version that actually holds."
      keywords="security compliance, OWASP, OAuth 2.0, penetration testing, data protection, Celertus.ai"
      canonicalUrl="/security-compliance"
      schema={serviceSchema("security-compliance")}
    />
    <ServiceDetail slug="security-compliance" />
  </Layout>
);

export default SecurityCompliance;
