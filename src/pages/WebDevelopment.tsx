import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceSchema } from "@/lib/serviceSchema";

const WebDevelopment = () => (
  <Layout>
    <SEO
      title="Web Development Company New Delhi | React & TypeScript | Celertus.ai"
      description="Fast, accessible websites and web apps built to convert and to keep ranking. React, TypeScript and Node.js engineering from Celertus.ai, New Delhi."
      keywords="web development company, React development, TypeScript, Next.js, custom web applications, Celertus.ai"
      canonicalUrl="/web-development"
      schema={serviceSchema("web-development")}
    />
    <ServiceDetail slug="web-development" />
  </Layout>
);

export default WebDevelopment;
