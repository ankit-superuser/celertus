import Navigation from "@/components/Navigation";
import ProfessionalHero from "@/components/ProfessionalHero";
import ProfessionalServices from "@/components/ProfessionalServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="dark min-h-screen">
      <Navigation />
      <main>
        <section id="hero">
          <ProfessionalHero />
        </section>
        <ProfessionalServices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
