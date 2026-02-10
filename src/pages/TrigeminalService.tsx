import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButtons from "@/components/CTAButtons";
import StickyWhatsAppButton from "@/components/StickyWhatsAppButton";
import FloatingCTA from "@/components/FloatingCTA";
import FinalCTASection from "@/components/FinalCTASection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Stethoscope,
  Activity,
  Shield,
  DollarSign,
  Pill,
  Zap,
  Microscope,
  AlertCircle,
} from "lucide-react";
import nerveImg from "@/assets/nerve-illustration.jpg";

const PHONE = "01006074000";

const symptoms = [
  "ألم حاد مفاجئ في أحد جانبي الوجه",
  "إحساس صعق كهربائي في الفك أو الخد",
  "ألم عند غسل الوجه أو تنظيف الأسنان",
  "ألم أثناء المضغ أو الكلام",
  "نوبات ألم قصيرة لكنها شديدة جدًا",
  "تكرار الألم يوميًا",
];

const emergencySymptoms = [
  "زيادة عدد نوبات الألم",
  "عدم القدرة على الأكل",
  "فقدان الوزن بسبب الألم",
  "عدم الاستجابة للمسكنات",
];

const whyChoose = [
  { icon: Stethoscope, text: "استشاري جراحة المخ والأعصاب والعمود الفقري" },
  { icon: Activity, text: "خبرة في علاج حالات العصب الخامس" },
  { icon: Shield, text: "تحديد العلاج المناسب بدون تدخل غير ضروري" },
  { icon: Zap, text: "استخدام التردد الحراري والتقنيات الحديثة" },
  { icon: CheckCircle2, text: "متابعة دقيقة بعد العلاج" },
];

const faqs = [
  {
    q: "هل العصب الخامس مرض مزمن؟",
    a: "يمكن السيطرة عليه وعلاجه بشكل كبير، وفي حالات كثيرة تختفي النوبات تمامًا.",
  },
  {
    q: "هل التردد الحراري مؤلم؟",
    a: "يتم تحت تخدير مناسب والمريض لا يشعر بالألم أثناء الإجراء.",
  },
  {
    q: "هل يمكن أن يعود الألم؟",
    a: "نسبة الارتجاع قليلة ويمكن التعامل معها بسهولة.",
  },
  {
    q: "هل يحتاج المريض جراحة مفتوحة؟",
    a: "معظم الحالات لا تحتاج جراحة.",
  },
  {
    q: "هل المسكنات العادية تفيد؟",
    a: "غالبًا لا، لأن الألم عصبي وليس عضليًا.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const TrigeminalService = () => {
  useEffect(() => {
    document.title =
      "علاج العصب الخامس بدون معاناة | د. فريد الحفناوي – تردد حراري وعلاج دوائي";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent =
      "علاج العصب الخامس مع د. فريد الحفناوي – استشاري جراحة المخ والأعصاب. تردد حراري، علاج دوائي، تدخل جراحي دقيق. احجز الآن.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const doctorSchema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: "د. فريد الحفناوي",
      medicalSpecialty: "جراحة المخ والأعصاب",
      description:
        "استشاري جراحة المخ والأعصاب والعمود الفقري – متخصص في علاج العصب الخامس بالتردد الحراري والتدخل الجراحي الدقيق",
      telephone: PHONE,
      areaServed: "مصر",
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(faqSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(doctorSchema);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden bg-section-alt pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="mb-5 font-cairo text-xl font-extrabold leading-snug text-heading md:text-2xl lg:text-3xl">
                  ألم مفاجئ في الوجه يشبه الصعق الكهربائي؟
                  <br />
                  <span className="text-primary">ألم يمنعك من الأكل أو الكلام أو حتى لمس وجهك؟</span>
                </h1>
                <p className="mb-4 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                  غالبًا هذه ليست مشكلة أسنان… بل التهاب العصب الخامس.
                </p>
                <p className="mb-2 font-cairo text-lg font-bold text-primary md:text-xl">الخبر الجيد:</p>
                <p className="mb-6 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                  يمكن علاج العصب الخامس نهائيًا في كثير من الحالات بدون جراحة كبيرة، باستخدام الأدوية أو التردد الحراري أو التدخل الدقيق حسب حالتك.
                </p>

                <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
                  <p className="mb-1 font-cairo text-sm text-muted-foreground">مع</p>
                  <p className="font-cairo text-xl font-extrabold text-heading">د. فريد الحفناوي</p>
                  <p className="mb-4 font-cairo text-sm font-semibold text-primary">
                    استشاري جراحة المخ والأعصاب والعمود الفقري
                  </p>
                  <ul className="space-y-2">
                    {[
                      "تشخيص دقيق لحالات العصب الخامس",
                      "علاج دوائي وتداخلي متقدم",
                      "جلسات التردد الحراري لعلاج الألم",
                      "متابعة حتى اختفاء النوبات",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 font-cairo text-sm text-heading">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <CTAButtons size="large" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex justify-center"
              >
                <img
                  src={nerveImg}
                  alt="علاج العصب الخامس مع د. فريد الحفناوي"
                  className="h-auto w-64 rounded-2xl object-cover shadow-card md:w-80"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== SYMPTOMS ===== */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp} className="mb-10 text-center">
              <h2 className="mb-3 font-cairo text-2xl font-extrabold text-heading md:text-3xl">
                هل هذه أعراض العصب الخامس؟
              </h2>
              <p className="mx-auto max-w-2xl font-cairo text-muted-foreground">
                إذا شعرت بأي من التالي فهناك احتمال كبير أنك تعاني من العصب الخامس:
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="grid gap-3 md:grid-cols-2">
              {symptoms.map((s, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                  <p className="font-cairo text-sm font-semibold text-heading">{s}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp} className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="font-cairo text-base leading-relaxed text-muted-foreground">
                كثير من المرضى يخلع أكثر من ضرس دون تحسن…
              </p>
              <p className="font-cairo text-base font-bold text-destructive">
                لأن السبب ليس الأسنان بل العصب.
              </p>
            </motion.div>

            <div className="mt-8 flex justify-center">
              <CTAButtons />
            </div>
          </div>
        </section>

        {/* ===== WHAT IS TRIGEMINAL ===== */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp}>
              <h2 className="mb-6 font-cairo text-2xl font-extrabold text-heading md:text-3xl">
                ما هو العصب الخامس؟
              </h2>
              <p className="mb-4 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                العصب الخامس هو المسؤول عن الإحساس في الوجه.
              </p>
              <p className="mb-6 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                عند حدوث ضغط عليه أو التهاب، يرسل إشارات ألم قوية جدًا للمخ، لذلك يشعر المريض بآلام شديدة للغاية رغم عدم وجود جرح أو مشكلة ظاهرة.
              </p>

              <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6">
                <p className="font-cairo text-lg font-bold text-heading">المهم:</p>
                <p className="mt-2 font-cairo text-base leading-relaxed text-muted-foreground">
                  العصب الخامس مرض معروف وله علاج فعال…
                </p>
                <p className="font-cairo text-base font-bold text-primary">
                  والمشكلة الحقيقية هي التأخر في التشخيص فقط.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== TREATMENT OPTIONS ===== */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="mb-3 font-cairo text-2xl font-extrabold text-heading md:text-3xl">
                طرق علاج العصب الخامس
              </h2>
              <p className="font-cairo text-muted-foreground">
                يتم اختيار العلاج حسب شدة الألم واستجابة المريض.
              </p>
            </motion.div>

            {/* 1) Drug */}
            <motion.div {...fadeUp} className="mb-6 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-cairo text-lg font-bold text-heading">١) العلاج الدوائي</h3>
              </div>
              <p className="mb-4 font-cairo text-sm text-muted-foreground">
                في البداية يتم استخدام أدوية مخصصة لتهدئة نشاط العصب وتقليل نوبات الألم، وكثير من المرضى يتحسنون عليها.
              </p>
              <p className="mb-2 font-cairo font-semibold text-heading text-sm">لكن أحيانًا:</p>
              <ul className="space-y-2">
                {["يقل تأثير الأدوية", "أو تسبب آثارًا جانبية"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-cairo text-sm text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-cairo text-sm font-bold text-primary">وهنا ننتقل للحل الأقوى.</p>
            </motion.div>

            {/* 2) Radiofrequency */}
            <motion.div {...fadeUp} className="mb-6 rounded-2xl border-2 border-primary bg-card p-6 shadow-card md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-cairo text-lg font-bold text-heading">٢) التردد الحراري للعصب الخامس</h3>
              </div>
              <p className="mb-4 font-cairo text-sm text-muted-foreground">
                يعد من أفضل وأشهر علاجات العصب الخامس الحديثة.
              </p>
              <p className="mb-4 font-cairo text-sm text-muted-foreground">
                يتم إدخال إبرة دقيقة موجهة بالأشعة إلى العصب وعمل تردد حراري دقيق يؤدي إلى:
              </p>
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                {[
                  "اختفاء نوبات الألم",
                  "نفس اليوم خروج من المستشفى",
                  "بدون جراحة مفتوحة",
                  "مناسب لكبار السن",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-xl bg-primary/5 p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <p className="font-cairo text-sm font-semibold text-heading">{b}</p>
                  </div>
                ))}
              </div>
              <p className="font-cairo text-sm font-bold text-primary">
                ويعتبر الخيار الأمثل للحالات المتكررة أو التي لا تستجيب للأدوية.
              </p>
            </motion.div>

            {/* 3) Microscopic surgery */}
            <motion.div {...fadeUp} className="mb-6 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <Microscope className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-cairo text-lg font-bold text-heading">٣) التدخل الجراحي الميكروسكوبي (في حالات محددة)</h3>
              </div>
              <p className="mb-3 font-cairo text-sm text-muted-foreground">
                إذا كان السبب ضغط وعاء دموي على العصب، يمكن إجراء تدخل دقيق لتحرير العصب نهائيًا.
              </p>
              <p className="font-cairo text-sm text-muted-foreground">
                يتم تحديد ذلك فقط بعد الفحص والأشعة.
              </p>
            </motion.div>

            <div className="mt-8 flex justify-center">
              <CTAButtons size="large" />
            </div>
          </div>
        </section>

        {/* ===== EMERGENCY ===== */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp}>
              <div className="rounded-2xl border-2 border-destructive bg-destructive/5 p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <AlertCircle className="h-7 w-7 text-destructive" />
                  <h2 className="font-cairo text-xl font-extrabold text-destructive md:text-2xl">
                    متى يجب زيارة الطبيب فورًا؟
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {emergencySymptoms.map((s, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-xl bg-destructive/5 p-3">
                      <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                      <p className="font-cairo text-sm font-semibold text-heading">{s}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 font-cairo text-sm font-bold text-destructive">
                  لا تنتظر… لأن الألم يزداد مع الوقت.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <CTAButtons />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== COST ===== */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-cairo text-xl font-extrabold text-heading md:text-2xl">
                    تكلفة علاج العصب الخامس في مصر
                  </h2>
                </div>
                <p className="mb-4 font-cairo text-sm text-muted-foreground">تختلف حسب:</p>
                <ul className="mb-4 space-y-2">
                  {[
                    "العلاج الدوائي أو التردد الحراري",
                    "احتياج تدخل جراحي أم لا",
                    "حالة المريض",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-cairo text-sm text-muted-foreground">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mb-2 font-cairo text-sm text-muted-foreground">
                  يتم تحديد التكلفة المناسبة بعد الكشف والتقييم.
                </p>
                <div className="mt-4">
                  <CTAButtons />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== WHY CHOOSE ===== */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp} className="mb-10 text-center">
              <h2 className="mb-3 font-cairo text-2xl font-extrabold text-heading md:text-3xl">
                لماذا تختار دكتور فريد الحفناوي؟
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-light">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-cairo text-base font-semibold text-heading">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <CTAButtons size="large" />
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <motion.div {...fadeUp} className="mb-10 text-center">
              <h2 className="mb-3 font-cairo text-2xl font-extrabold text-heading md:text-3xl">أسئلة شائعة</h2>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details key={index} className="group rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                    <summary className="cursor-pointer list-none font-cairo text-base font-bold text-heading">
                      {faq.q}
                    </summary>
                    <p className="mt-3 font-cairo leading-relaxed text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <TestimonialsCarousel />

        {/* ===== FINAL CTA ===== */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-transparent" />
          <div className="container relative z-10 text-center">
            <motion.div {...fadeUp}>
              <h2 className="mb-4 font-cairo text-2xl font-extrabold text-primary-foreground md:text-3xl">
                لا تنتظر… لأن الألم يزداد مع الوقت.
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-cairo text-lg font-bold text-primary-foreground">
                احجز الآن مع د. فريد الحفناوي استشاري جراحة المخ والأعصاب
              </p>
              <div className="flex justify-center">
                <CTAButtons size="large" />
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

export default TrigeminalService;
