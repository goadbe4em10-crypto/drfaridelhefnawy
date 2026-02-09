import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import brainImg from "@/assets/brain-illustration.jpg";
import spineImg from "@/assets/spine-illustration.jpg";
import nerveImg from "@/assets/nerve-illustration.jpg";

const images = [
  { src: brainImg, alt: "تصوير توضيحي للمخ" },
  { src: spineImg, alt: "تصوير توضيحي للعمود الفقري" },
  { src: nerveImg, alt: "تصوير توضيحي للأعصاب" },
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-section-alt py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
            صور طبية توضيحية
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {images.map((img, i) => (
                <div key={i} className="min-w-0 flex-[0_0_100%]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-72 w-full object-cover md:h-96"
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
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === selectedIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`صورة ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
