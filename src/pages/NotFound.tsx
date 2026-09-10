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
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <SEO
        title="404 Page Not Found | Celertus.ai"
        description="The requested page could not be found on Celertus.ai. Return to our homepage to explore our marketing and technology services."
        noIndex={true}
      />
      <Navigation />

      <main id="main-content" className="flex-1 flex items-center justify-center py-32 px-6">
        <div className="max-w-md w-full text-center">
          <span className="font-display text-6xl text-primary block mb-3">404</span>
          <h1 className="font-display mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            This page may have moved, been renamed, or never existed. Let&rsquo;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Button
              asChild
              size="lg"
              className="cs-magnetic rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-7 py-6 text-sm shadow-soft"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="cs-magnetic rounded-full border-border bg-card hover:bg-secondary px-7 py-6 text-sm font-medium"
            >
              <Link to="/digital-marketing">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View services
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
