import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO
        title="404 Page Not Found | Celertus.ai"
        description="The requested page could not be found on Celertus.ai. Return to our homepage to explore our marketing and technology services."
        noIndex={true}
      />

      <div className="flex min-h-[70vh] items-center justify-center px-6 py-32">
        <div className="w-full max-w-md text-center">
          <span className="mb-2 block text-7xl font-bold tracking-widest text-studio-indigo">404</span>
          <h1 className="mb-4 text-3xl font-bold">Page Not Found</h1>
          <p className="mb-8 leading-relaxed text-studio-mutedLight">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-studio-ink px-6 py-3.5 font-semibold text-white transition-colors hover:bg-studio-indigo">
              <Home className="h-4 w-4" /> Return to Home
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-studio-hairline px-6 py-3.5 font-medium text-studio-ink transition-colors hover:border-studio-indigo hover:text-studio-indigo">
              <ArrowLeft className="h-4 w-4" /> View Services
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
