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
  HelpCircle,
  Stethoscope,
  Activity,
  Shield,
  DollarSign,
  Pill,
  Zap,
  Microscope,
  Lock,
  AlertCircle,
} from "lucide-react";
import spineImg from "@/assets/spine-illustration.jpg";

const PHONE = "01006074000";

const symptoms = [
  "ألم شديد أسفل الظهر",
  "ألم يمتد من الظهر إلى الساق (عرق النسا)",
  "تنميل أو وخز في القدم أو الأصابع",
  "ضعف في الساق",
  "زيادة الألم عند الجلوس أو الانحناء",
  "صعوبة الوقوف لفترة طويلة",
  "ألم يوقظك من النوم",
];

const emergencySymptoms = [
  "ضعف في القدم",
  "سقوط القدم أثناء المشي",
  "فقدان الإحساس",
  "مشاكل في التحكم بالبول أو البراز",
];

const whyChoose = [
  { icon: Stethoscope, text: "استشاري جراحة العمود الفقري والمخ والأعصاب" },
  { icon: Activity, text: "خبرة في جراحات الغضروف والعمود الفقري" },
  { icon: Shield, text: "اختيار العلاج المناسب بدون التسرع في الجراحة" },
  { icon: Zap, text: "استخدام التقنيات الحديثة مثل المنظار والتردد الحراري" },
  { icon: CheckCircle2, text: "متابعة مستمرة بعد العلاج حتى التعافي" },
];

const faqs = [
  {
    q: "هل كل مريض انزلاق غضروفي يحتاج عملية؟",
    a: "لا، أغلب الحالات تُعالج بدون جراحة.",
  },
  {
    q: "هل عملية الغضروف خطيرة؟",
    a: "مع المنظار أصبحت من العمليات الآمنة جدًا.",
  },
  {
    q: "كم مدة الراحة بعد العملية؟",
    a: "عادة المشي في نفس اليوم والعودة التدريجية خلال أيام.",
  },
  {
    q: "هل الألم يعود مرة أخرى؟",
    a: "نسبة الارتجاع قليلة مع الالتزام بالتعليمات.",
  },
  {
    q: "هل التردد الحراري بديل للعملية؟",
    a: "في حالات كثيرة نعم، ويحدد الطبيب ذلك بعد الفحص.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const DiscService = () => {
  useEffect(() => {
    document.title =
      "علاج الانزلاق الغضروفي بدون جراحة | د. فريد الحفناوي – منظار وتردد حراري";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent =
      "علاج الانزلاق الغضروفي مع د. فريد الحفناوي – استشاري جراحة العمود الفقري. علاج بدون جراحة، تردد حراري، عملية بالمنظار. احجز الآن.";
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
      medicalSpecialty: "جراحة العمود الفقري والمخ والأعصاب",
      description:
        "استشاري جراحة المخ والأعصاب والعمود الفقري – متخصص في علاج الانزلاق الغضروفي بالمنظار والتردد الحراري",
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
                  ألم أسفل الظهر أو عرق النسا يمنعك من الجلوس أو النوم؟
                  <br />
                  <span className="text-primary">تنميل في الساق؟ ألم ممتد للقدم؟</span>
                </h1>
                <p className="mb-4 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                  قد يكون السبب انزلاق غضروفي وليس مجرد شد عضلي.
                </p>
                <p className="mb-6 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                  مع التشخيص الصحيح يمكن علاج معظم الحالات بدون جراحة، وفي الحالات المتقدمة يمكن التدخل المحدود بالمنظار أو التردد الحراري بنتائج ممتازة.
                </p>

                <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
                  <p className="mb-1 font-cairo text-sm text-muted-foreground">مع</p>
                  <p className="font-cairo text-xl font-extrabold text-heading">د. فريد الحفناوي</p>
                  <p className="mb-4 font-cairo text-sm font-semibold text-primary">
                    استشاري جراحة المخ والأعصاب والعمود الفقري
                  </p>
                  <ul className="space-y-2">
                    {[
                      "تشخيص دقيق لسبب الألم",
                      "علاج تحفظي أو تداخلي حسب الحالة",
                      "عمليات الغضروف بالمنظار بدون جراحة كبيرة",
                      "متابعة حتى اختفاء الألم",
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
                  src={spineImg}
                  alt="علاج الانزلاق الغضروفي - العمود الفقري مع د. فريد الحفناوي"
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
                هل هذه الأعراض لديك؟
              </h2>
              <p className="mx-auto max-w-2xl font-cairo text-muted-foreground">
                إذا كنت تعاني من أحد هذه الأعراض فغالبًا لديك انزلاق غضروفي:
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
                كثير من المرضى يظنها "برد في الظهر"…
              </p>
              <p className="font-cairo text-base font-bold text-destructive">
                لكن التأخر في العلاج قد يؤدي إلى ضعف دائم في العصب.
              </p>
            </motion.div>

            <div className="mt-8 flex justify-center">
              <CTAButtons />
            </div>
          </div>
        </section>

        {/* ===== WHAT IS DISC HERNIATION ===== */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp}>
              <h2 className="mb-6 font-cairo text-2xl font-extrabold text-heading md:text-3xl">
                ما هو الانزلاق الغضروفي؟
              </h2>
              <p className="mb-4 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                بين كل فقرتين يوجد غضروف يعمل كوسادة لامتصاص الحركة.
              </p>
              <p className="mb-6 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                عند حدوث قطع أو بروز في الغضروف يضغط على العصب، وهنا يظهر الألم والتنميل وعرق النسا.
              </p>

              <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6">
                <p className="font-cairo text-lg font-bold text-heading">المعلومة المهمة:</p>
                <p className="mt-2 font-cairo text-base font-bold text-primary">
                  ليس كل انزلاق غضروفي يحتاج عملية.
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
                طرق علاج الانزلاق الغضروفي
              </h2>
              <p className="font-cairo text-muted-foreground">
                يتم تحديد العلاج حسب درجة الضغط على العصب.
              </p>
            </motion.div>

            {/* 1) Conservative */}
            <motion.div {...fadeUp} className="mb-6 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-cairo text-lg font-bold text-heading">١) العلاج التحفظي</h3>
              </div>
              <p className="mb-4 font-cairo text-sm text-muted-foreground">في الحالات البسيطة والمتوسطة:</p>
              <ul className="mb-4 space-y-2">
                {["أدوية مضادة للالتهاب", "أدوية للأعصاب", "جلسات علاج طبيعي", "تعديل أسلوب الحياة"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-cairo text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-cairo text-sm font-bold text-primary">كثير من الحالات تتحسن تمامًا بهذه المرحلة.</p>
            </motion.div>

            {/* 2) Radiofrequency */}
            <motion.div {...fadeUp} className="mb-6 rounded-2xl border-2 border-primary bg-card p-6 shadow-card md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-cairo text-lg font-bold text-heading">٢) التردد الحراري للأعصاب</h3>
              </div>
              <p className="mb-4 font-cairo text-sm text-muted-foreground">
                أحد أفضل الحلول الحديثة بدون جراحة.
              </p>
              <p className="mb-4 font-cairo text-sm text-muted-foreground">
                يتم إدخال إبرة دقيقة موجهة بالأشعة لعلاج العصب المسبب للألم، ويؤدي إلى:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "تقليل الألم بشكل كبير",
                  "نفس اليوم خروج من المستشفى",
                  "بدون جراحة أو شق جراحي",
                  "مناسب لكبار السن",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-xl bg-primary/5 p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <p className="font-cairo text-sm font-semibold text-heading">{b}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3) Endoscopic */}
            <motion.div {...fadeUp} className="mb-6 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <Microscope className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-cairo text-lg font-bold text-heading">٣) عملية الغضروف بالمنظار</h3>
              </div>
              <p className="mb-4 font-cairo text-sm text-muted-foreground">
                إذا استمر الضغط على العصب أو ظهر ضعف في القدم، هنا نلجأ للتدخل المحدود.
              </p>
              <p className="mb-3 font-cairo text-sm font-semibold text-heading">عملية استئصال الغضروف بالمنظار:</p>
              <ul className="space-y-2">
                {[
                  "فتحة صغيرة جدًا",
                  "لا تحتاج شق جراحي كبير",
                  "مغادرة المستشفى خلال 24 ساعة غالبًا",
                  "عودة سريعة للحياة الطبيعية",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-cairo text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 4) Spinal Fusion */}
            <motion.div {...fadeUp} className="mb-6 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-cairo text-lg font-bold text-heading">٤) تثبيت الفقرات (في الحالات المتقدمة)</h3>
              </div>
              <p className="mb-3 font-cairo text-sm text-muted-foreground">في بعض الحالات مثل:</p>
              <ul className="mb-3 space-y-2">
                {["تكرار الانزلاق", "عدم ثبات الفقرات", "ضيق القناة العصبية"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-cairo text-sm text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-cairo text-sm text-muted-foreground">قد يحتاج المريض تثبيت فقرات لحماية الأعصاب.</p>
            </motion.div>

            <div className="mt-8 flex justify-center">
              <CTAButtons size="large" />
            </div>
          </div>
        </section>

        {/* ===== EMERGENCY SYMPTOMS ===== */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp}>
              <div className="rounded-2xl border-2 border-destructive bg-destructive/5 p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <AlertCircle className="h-7 w-7 text-destructive" />
                  <h2 className="font-cairo text-xl font-extrabold text-destructive md:text-2xl">
                    متى يكون الانزلاق الغضروفي خطير؟
                  </h2>
                </div>
                <p className="mb-4 font-cairo text-sm font-semibold text-heading">راجع الطبيب فورًا إذا ظهر:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {emergencySymptoms.map((s, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-xl bg-destructive/5 p-3">
                      <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                      <p className="font-cairo text-sm font-semibold text-heading">{s}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 font-cairo text-sm font-bold text-destructive">
                  هذه حالات تحتاج تدخل سريع لحماية العصب.
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
                    تكلفة عملية الانزلاق الغضروفي في مصر
                  </h2>
                </div>
                <p className="mb-4 font-cairo text-sm text-muted-foreground">تختلف تكلفة العملية حسب:</p>
                <ul className="mb-4 space-y-2">
                  {[
                    "نوع التدخل (منظار – تثبيت فقرات – تردد حراري)",
                    "درجة الانزلاق",
                    "المستشفى",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-cairo text-sm text-muted-foreground">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mb-2 font-cairo text-sm text-muted-foreground">
                  يتم تحديد السعر المناسب بعد الكشف وعمل الأشعة اللازمة.
                </p>
                <div className="mt-4">
                  <CTAButtons />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== WHY CHOOSE DOCTOR ===== */}
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
                لا تنتظر حتى يتحول الألم إلى ضعف دائم في العصب.
              </h2>
              <p className="mx-auto mb-4 max-w-2xl font-cairo text-lg text-primary-foreground/85">
                التشخيص المبكر يوفر عليك عملية كبيرة.
              </p>
              <p className="mx-auto mb-8 max-w-2xl font-cairo text-lg font-bold text-primary-foreground">
                احجز الآن مع د. فريد الحفناوي استشاري جراحة العمود الفقري
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

export default DiscService;
