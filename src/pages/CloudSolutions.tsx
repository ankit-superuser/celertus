import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceSchema } from "@/lib/serviceSchema";

const CloudSolutions = () => (
  <Layout>
    <SEO
      title="Cloud Solutions & DevOps | AWS, Docker, Kubernetes | Celertus.ai"
      description="Infrastructure as code, automated deploys and cloud costs that stay predictable — so scaling for a campaign spike is a configuration change. Celertus.ai."
      keywords="cloud solutions, AWS, DevOps, Kubernetes, Terraform, infrastructure as code, Celertus.ai"
      canonicalUrl="/cloud-solutions"
      schema={serviceSchema("cloud-solutions")}
    />
    <ServiceDetail slug="cloud-solutions" />
  </Layout>
);

export default CloudSolutions;
