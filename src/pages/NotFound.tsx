import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="dark min-h-screen bg-background text-foreground flex flex-col justify-between">
      <SEO
        title="404 Page Not Found | Celertus.ai"
        description="The requested page could not be found on Celertus.ai. Return to our homepage to explore enterprise AI & software solutions."
        noIndex={true}
      />
      <Navigation />

      <main id="main-content" className="flex-1 flex items-center justify-center py-32 px-6">
        <div className="max-w-md w-full text-center">
          <span className="text-7xl font-extrabold text-primary block mb-2 tracking-widest animate-pulse">
            404
          </span>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-card">
              <Link to="/web-development">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
