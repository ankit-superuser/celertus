import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/WebDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import BackendSystem from "./pages/BackendSystem";
import CloudSolutions from "./pages/CloudSolutions";
import SecurityCompliance from "./pages/SecurityCompliance";
import PerformanceOptimization from "./pages/PerformanceOptimization";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-development" element={<MobileDevelopment />} />
          <Route path="/backend-system" element={<BackendSystem />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/security-compliance" element={<SecurityCompliance/>} />
            <Route path="/performance-optimization" element={<PerformanceOptimization/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
