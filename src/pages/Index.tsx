import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const StickyWhatsAppButton = lazy(() => import("@/components/StickyWhatsAppButton"));

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ImageCarousel = lazy(() => import("@/components/ImageCarousel"));
const WhyChooseSection = lazy(() => import("@/components/WhyChooseSection"));
const TestimonialsCarousel = lazy(() => import("@/components/TestimonialsCarousel"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-16">
    <div className="h-6 w-6 animate-spin rounded-full border-3 border-primary border-t-transparent" />
  </div>
);

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ImageCarousel />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyChooseSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsCarousel />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FinalCTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <StickyWhatsAppButton />
      </Suspense>
    </>
  );
};

export default Index;
