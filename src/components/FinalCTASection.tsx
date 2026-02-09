import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-transparent" />
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-cairo text-3xl font-extrabold text-primary-foreground md:text-4xl">
            لا تؤجل صحتك.. احجز استشارتك الآن
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-cairo text-lg text-primary-foreground/80">
            تواصل معنا اليوم للحصول على تشخيص دقيق وخطة علاجية متكاملة مع د. فريد الحفناوي
          </p>
          <div className="flex justify-center">
            <CTAButtons size="large" />
          </div>
          <p className="mt-6 font-cairo text-primary-foreground/70" dir="ltr">
            01006074000
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
