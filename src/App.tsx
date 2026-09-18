import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy-load secondary sub-routes for bundle splitting & performance optimization
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const MobileDevelopment = lazy(() => import("./pages/MobileDevelopment"));
const BackendSystem = lazy(() => import("./pages/BackendSystem"));
const CloudSolutions = lazy(() => import("./pages/CloudSolutions"));
const SecurityCompliance = lazy(() => import("./pages/SecurityCompliance"));
const PerformanceOptimization = lazy(() => import("./pages/PerformanceOptimization"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const PerformanceMarketing = lazy(() => import("./pages/PerformanceMarketing"));
const BrandContent = lazy(() => import("./pages/BrandContent"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightArticle = lazy(() => import("./pages/InsightArticle"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen bg-studio-mist flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-studio-indigo/30 border-t-studio-indigo rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/mobile-development" element={<MobileDevelopment />} />
            <Route path="/backend-system" element={<BackendSystem />} />
            <Route path="/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/security-compliance" element={<SecurityCompliance />} />
            <Route path="/performance-optimization" element={<PerformanceOptimization />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/brand-content" element={<BrandContent />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
