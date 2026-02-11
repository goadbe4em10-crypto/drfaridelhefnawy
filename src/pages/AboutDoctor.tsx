import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsAppButton from "@/components/StickyWhatsAppButton";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import { motion } from "framer-motion";
import { Award, Users, Clock, Heart, GraduationCap, Stethoscope, Brain, Activity } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.png";
import CTAButtons from "@/components/CTAButtons";

const stats = [
  { icon: Clock, label: "سنوات الخبرة", value: "+١٥" },
  { icon: Users, label: "مريض سعيد", value: "+٥٠٠٠" },
  { icon: Award, label: "عملية ناجحة", value: "+٣٠٠٠" },
  { icon: Heart, label: "نسبة رضا المرضى", value: "٩٨٪" },
];

const qualifications = [
  "استشاري جراحة المخ والأعصاب والعمود الفقري",
  "خبير مصري بخبرة أمريكية تمتد لسنوات طويلة",
  "زميل جمعية أورام المخ بالولايات المتحدة الأمريكية",
  "حاصل على زمالة إكلينيكية في جراحة المخ والأعصاب الوظيفية – فلوريدا، أمريكا",
  "حاصل على زمالة إكلينيكية في جراحة أورام المخ – كلايفلاند، أمريكا",
];

const specializations = [
  { icon: Brain, title: "جراحة المخ والأعصاب الوظيفية", desc: "علاج الشلل الرعاش والصرع باستخدام أحدث تقنيات التحفيز العميق للمخ (DBS)" },
  { icon: Activity, title: "جراحات العمود الفقري", desc: "جراحات التدخل المحدود والتردد الحراري والجراحة الميكروسكوبية لعلاج الانزلاق الغضروفي" },
  { icon: Stethoscope, title: "علاج العصب الخامس", desc: "علاج آلام العصب الخامس بالتقنيات الجراحية الدقيقة وتقنية التخفيف الوعائي الميكروسكوبي" },
];

const AboutDoctor = () => {
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
                className="order-2 md:order-1"
              >
                <p className="mb-3 inline-block rounded-full bg-primary-light px-4 py-1 font-cairo text-sm font-semibold text-primary">
                  تعرف على طبيبك
                </p>
                <h1 className="mb-4 font-cairo text-3xl font-extrabold leading-tight text-heading md:text-5xl">
                  د. فريد الحفناوي
                </h1>
                <p className="mb-2 font-cairo text-xl font-bold text-primary md:text-2xl">
                  استشاري جراحة المخ والأعصاب والعمود الفقري
                </p>
                <p className="mb-6 max-w-lg font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                  أكثر من ١٥ عاماً من الخبرة في جراحات المخ والأعصاب الوظيفية وجراحات التدخل المحدود للعمود الفقري. نؤمن بأن كل مريض يستحق أعلى مستوى من الرعاية الطبية والاهتمام الشخصي.
                </p>
                <CTAButtons size="large" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="order-1 flex justify-center md:order-2"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
                  <img
                    src={doctorImg}
                    alt="د. فريد الحفناوي - استشاري جراحة المخ والأعصاب"
                    className="relative z-10 h-auto w-64 rounded-2xl object-cover shadow-card md:w-80"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 text-center shadow-card"
                >
                  <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-cairo text-3xl font-extrabold text-primary">{stat.value}</p>
                  <p className="mt-1 font-cairo text-sm font-semibold text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
                المؤهلات العلمية والشهادات
              </h2>
              <p className="mx-auto max-w-xl font-cairo text-muted-foreground">
                حاصل على أعلى الدرجات العلمية والزمالات المتخصصة في جراحة المخ والأعصاب
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-3xl gap-4">
              {qualifications.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-light">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-cairo text-base font-semibold text-heading">{q}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
                التخصصات الدقيقة
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {specializations.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light">
                    <spec.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-cairo text-lg font-bold text-heading">{spec.title}</h3>
                  <p className="font-cairo text-sm leading-relaxed text-muted-foreground">{spec.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VIDEO ===== */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <VideoCarousel
              title="تعرف على د. فريد الحفناوي"
              videos={[
                { id: "8X1D5qV8qeI", title: "تعرف على د. فريد الحفناوي" },
              ]}
            />
          </div>
        </section>

        <TestimonialsCarousel />
      </main>
      <Footer />
      <StickyWhatsAppButton />
    </>
  );
};

export default AboutDoctor;
