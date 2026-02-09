import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";
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
  },
  {
    title: "علاج الانزلاق الغضروفي",
    description:
      "علاج الانزلاق الغضروفي بالتردد الحراري والجراحة الميكروسكوبية. تقنيات حديثة بأقل تدخل جراحي وفترة تعافي أسرع.",
    image: spineImg,
    alt: "علاج الانزلاق الغضروفي - تصوير توضيحي للعمود الفقري",
  },
  {
    title: "علاج العصب الخامس",
    description:
      "علاج آلام العصب الخامس (التوائم الثلاثي) بأحدث التقنيات الجراحية والتداخلية للتخلص من الألم بشكل نهائي وآمن.",
    image: nerveImg,
    alt: "علاج العصب الخامس - تصوير توضيحي للأعصاب",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
            خدماتنا الطبية
          </h2>
          <p className="mx-auto max-w-xl font-cairo text-muted-foreground">
            نوفر أحدث العلاجات والتقنيات في جراحة المخ والأعصاب
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                index % 2 === 1 ? "" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="mb-3 font-cairo text-2xl font-bold text-heading">{service.title}</h3>
                <p className="mb-6 font-cairo leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <CTAButtons />
              </div>
              <div className={`flex justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-64 w-64 rounded-2xl object-cover shadow-card md:h-72 md:w-72"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
