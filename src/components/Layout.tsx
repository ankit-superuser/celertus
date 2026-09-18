import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
  /** Page background: "light" (#F3F5FA, dark text) or "dark" (#0A0D18, light text). */
  theme?: "light" | "dark";
}

/**
 * Shared page shell for the marketing & technology studio redesign — floating
 * nav, footer, back-to-top and the WhatsApp entry point on every route.
 */
const Layout = ({ children, theme = "light" }: LayoutProps) => (
  <div className={`min-h-screen overflow-x-clip ${theme === "dark" ? "bg-studio-ink text-studio-cloud" : "bg-studio-mist text-studio-ink"}`}>
    <Navigation />
    <main id="main-content">{children}</main>
    <Footer />
    <BackToTop />
    <WhatsAppButton />
  </div>
);

export default Layout;
