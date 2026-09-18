import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceSchema } from "@/lib/serviceSchema";

const DigitalMarketing = () => (
  <Layout>
    <SEO
      title="Digital Marketing Services | SEO, Content & Email | Celertus.ai"
      description="Search, content and email working as one system — so the right people find you and keep coming back. Digital marketing from Celertus.ai, New Delhi."
      keywords="digital marketing agency, SEO services, content strategy, email marketing, marketing automation, Celertus.ai"
      canonicalUrl="/digital-marketing"
      schema={serviceSchema("digital-marketing")}
    />
    <ServiceDetail slug="digital-marketing" />
  </Layout>
);

export default DigitalMarketing;
