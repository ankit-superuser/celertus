import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceSchema } from "@/lib/serviceSchema";

const PerformanceOptimization = () => (
  <Layout>
    <SEO
      title="Performance Optimization | Core Web Vitals & Speed | Celertus.ai"
      description="Core Web Vitals, caching and delivery tuned — because slow pages quietly waste campaign spend and rankings at the same time. Celertus.ai, New Delhi."
      keywords="performance optimization, Core Web Vitals, page speed, CDN, caching strategy, Celertus.ai"
      canonicalUrl="/performance-optimization"
      schema={serviceSchema("performance-optimization")}
    />
    <ServiceDetail slug="performance-optimization" />
  </Layout>
);

export default PerformanceOptimization;
