import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

// Lazy-load secondary sub-routes for bundle splitting & performance optimization
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const MobileDevelopment = lazy(() => import("./pages/MobileDevelopment"));
const BackendSystem = lazy(() => import("./pages/BackendSystem"));
const CloudSolutions = lazy(() => import("./pages/CloudSolutions"));
const SecurityCompliance = lazy(() => import("./pages/SecurityCompliance"));
const PerformanceOptimization = lazy(() => import("./pages/PerformanceOptimization"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="dark min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/mobile-development" element={<MobileDevelopment />} />
            <Route path="/backend-system" element={<BackendSystem />} />
            <Route path="/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/security-compliance" element={<SecurityCompliance />} />
            <Route path="/performance-optimization" element={<PerformanceOptimization />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
