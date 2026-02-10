import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ImageCarousel from "@/components/ImageCarousel";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyWhatsAppButton from "@/components/StickyWhatsAppButton";

import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ImageCarousel />
        <WhyChooseSection />
        <TestimonialsCarousel />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyWhatsAppButton />
      
    </>
  );
};

export default Index;
