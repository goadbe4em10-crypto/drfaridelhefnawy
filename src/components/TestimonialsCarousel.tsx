import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";

const reviews = [
  { src: review1, alt: "رأي مريض - تجربة علاج ناجحة" },
  { src: review2, alt: "رأي مريض - شكر للدكتور" },
  { src: review3, alt: "رأي مريض - رعاية طبية ممتازة" },
];

const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
            آراء المرضى
          </h2>
          <p className="mx-auto max-w-xl font-cairo text-muted-foreground">
            ثقة مرضانا هي أكبر شهادة على جودة خدماتنا الطبية
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-md">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {reviews.map((img, i) => (
                <div key={i} className="min-w-0 flex-[0_0_100%]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-auto w-full rounded-2xl object-cover shadow-card"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-card backdrop-blur-sm transition hover:bg-background"
            aria-label="السابق"
          >
            <ChevronRight className="h-5 w-5 text-heading" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-card backdrop-blur-sm transition hover:bg-background"
            aria-label="التالي"
          >
            <ChevronLeft className="h-5 w-5 text-heading" />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === selectedIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`رأي ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
