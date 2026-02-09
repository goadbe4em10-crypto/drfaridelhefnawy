import Header from "./Header";
import Footer from "./Footer";
import CTAButtons from "./CTAButtons";
import StickyWhatsAppButton from "./StickyWhatsAppButton";
import FloatingCTA from "./FloatingCTA";
import FAQSection from "./FAQSection";
import FinalCTASection from "./FinalCTASection";
import { motion } from "framer-motion";

interface ServiceFAQ {
  q: string;
  a: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  details: string[];
  faqs: ServiceFAQ[];
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  details,
  faqs,
}: ServicePageLayoutProps) => {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-section-alt pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="mb-3 inline-block rounded-full bg-primary-light px-4 py-1 font-cairo text-sm font-semibold text-primary">
                  {subtitle}
                </p>
                <h1 className="mb-4 font-cairo text-3xl font-extrabold leading-tight text-heading md:text-5xl">
                  {title}
                </h1>
                <p className="mb-6 max-w-lg font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                  {description}
                </p>
                <CTAButtons size="large" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex justify-center"
              >
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-auto w-64 rounded-2xl object-cover shadow-card md:w-80"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 font-cairo text-2xl font-extrabold text-heading md:text-3xl">
                تفاصيل العلاج
              </h2>
              <ul className="space-y-4">
                {details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 font-cairo text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButtons />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
                أسئلة شائعة
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
                  >
                    <summary className="cursor-pointer list-none font-cairo text-base font-bold text-heading md:text-lg">
                      {faq.q}
                    </summary>
                    <p className="mt-3 font-cairo leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <FinalCTASection />
      </main>
      <Footer />
      <StickyWhatsAppButton />
      <FloatingCTA />
    </>
  );
};

export default ServicePageLayout;
