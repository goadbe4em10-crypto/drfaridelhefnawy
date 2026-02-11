import CTAButtons from "./CTAButtons";
import { Link } from "react-router-dom";
import brainImg from "@/assets/brain-illustration.jpg";
import spineImg from "@/assets/spine-illustration.jpg";
import nerveImg from "@/assets/nerve-illustration.jpg";

const services = [
  {
    title: "علاج الشلل الرعاش",
    description:
      "نقدم أحدث الطرق العلاجية لمرض باركنسون باستخدام تقنيات متطورة تساعد في تحسين جودة الحياة والسيطرة على الأعراض بشكل فعال.",
    image: brainImg,
    alt: "علاج الشلل الرعاش - تصوير توضيحي للمخ",
    link: "/علاج-الشلل-الرعاش",
  },
  {
    title: "علاج الانزلاق الغضروفي",
    description:
      "علاج الانزلاق الغضروفي بالتردد الحراري والجراحة الميكروسكوبية. تقنيات حديثة بأقل تدخل جراحي وفترة تعافي أسرع.",
    image: spineImg,
    alt: "علاج الانزلاق الغضروفي - تصوير توضيحي للعمود الفقري",
    link: "/علاج-الانزلاق-الغضروفي",
  },
  {
    title: "علاج العصب الخامس",
    description:
      "علاج آلام العصب الخامس بأحدث التقنيات الجراحية والتداخلية للتخلص من الألم بشكل نهائي وآمن.",
    image: nerveImg,
    alt: "علاج العصب الخامس - تصوير توضيحي للأعصاب",
    link: "/علاج-العصب-الخامس",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
            خدماتنا الطبية
          </h2>
          <p className="mx-auto max-w-xl font-cairo text-muted-foreground">
            نوفر أحدث العلاجات والتقنيات في جراحة المخ والأعصاب
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <Link to={service.link} className="mb-3 block font-cairo text-2xl font-bold text-heading hover:text-primary transition-colors">
                  {service.title}
                </Link>
                <p className="mb-6 font-cairo leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <CTAButtons />
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-1 rounded-lg px-4 py-3 font-cairo font-bold text-primary transition-colors hover:bg-primary-light"
                  >
                    المزيد ←
                  </Link>
                </div>
              </div>
              <div className={`flex justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <img
                  src={service.image}
                  alt={service.alt}
                  width={288}
                  height={288}
                  className="h-64 w-64 rounded-2xl object-cover shadow-card md:h-72 md:w-72"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
