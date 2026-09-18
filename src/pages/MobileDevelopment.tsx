import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceSchema } from "@/lib/serviceSchema";

const MobileDevelopment = () => (
  <Layout>
    <SEO
      title="Mobile App Development | React Native & Flutter | Celertus.ai"
      description="Cross-platform iOS and Android apps from one codebase — shipped to the stores, instrumented, and maintained past version one. Celertus.ai, New Delhi."
      keywords="mobile app development, React Native, Flutter, cross-platform apps, app store submission, Celertus.ai"
      canonicalUrl="/mobile-development"
      schema={serviceSchema("mobile-development")}
    />
    <ServiceDetail slug="mobile-development" />
  </Layout>
);

export default MobileDevelopment;
