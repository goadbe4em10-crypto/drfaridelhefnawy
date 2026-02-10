import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
}

interface VideoCarouselProps {
  title?: string;
  videos: VideoItem[];
}

const VideoCarousel = ({ title = "فيديوهات توعوية", videos }: VideoCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="mt-12">
      <h3 className="mb-6 font-cairo text-2xl font-extrabold text-heading md:text-3xl text-center">
        {title}
      </h3>

      <div className="relative mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {videos.map((video, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%] px-2">
                <div className="relative overflow-hidden rounded-2xl shadow-card">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="aspect-video w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-center font-cairo text-sm font-semibold text-muted-foreground">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {videos.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-card backdrop-blur-sm transition hover:bg-background"
              aria-label="السابق"
            >
              <ChevronRight className="h-5 w-5 text-heading" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 left-1 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-card backdrop-blur-sm transition hover:bg-background"
              aria-label="التالي"
            >
              <ChevronLeft className="h-5 w-5 text-heading" />
            </button>

            <div className="mt-4 flex justify-center gap-2">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === selectedIndex ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`فيديو ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoCarousel;
