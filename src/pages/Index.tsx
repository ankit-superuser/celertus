import Navigation from "@/components/Navigation";
import ProfessionalHero from "@/components/ProfessionalHero";
import ProfessionalServices from "@/components/ProfessionalServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedTrain from "@/components/AnimatedTrain";
import Portfolio from "@/components/Portfolio";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section id="hero" data-aos="fade-up">
          <ProfessionalHero />
        </section>
        {/* Animated Train Section */}
        <section id="animated-train" data-aos="fade-up">
          <AnimatedTrain />
        </section>
        {/* Services Section */}
        <section id="services" data-aos="fade-up">
          <ProfessionalServices />
        </section>
        {/* Portfolio Section */}
        <section id="portfolio" data-aos="fade-up">
          <Portfolio />
        </section>
        {/* Contact Section */}
        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
