import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButtons from "@/components/CTAButtons";
import StickyWhatsAppButton from "@/components/StickyWhatsAppButton";
import FinalCTASection from "@/components/FinalCTASection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Brain,
  Zap,
  Pill,
  CheckCircle2,
  HelpCircle,
  Stethoscope,
  Activity,
  Shield,
  Settings,
  DollarSign,
} from "lucide-react";
import brainImg from "@/assets/brain-illustration.jpg";

const PHONE = "01006074000";

const parkinsonVideos = [
  { id: "ysD5ie-9yNE", title: "فيديو توعوي ١" },
  { id: "y9KqHgqtVSk", title: "فيديو توعوي ٢" },
  { id: "xMWYDFtduzE", title: "فيديو توعوي ٣" },
];

const symptoms = [
  "رعشة في اليدين أثناء الراحة",
  "بطء واضح في الحركة",
  "تيبس في الذراعين أو الساقين",
  "صعوبة في المشي أو فقدان التوازن",
  "تغير في نبرة الصوت أو الكتابة أصبحت أصغر",
  "بطء في ردود الأفعال",
  "تجمد مفاجئ أثناء المشي",
];

const dbsBenefits = [
  "تقليل الرعشة بشكل كبير",
  "تحسين القدرة على الحركة",
  "تقليل الاعتماد على الأدوية",
  "تحسين جودة الحياة",
];

const dbsCandidates = [
  "الأدوية لم تعد فعالة",
  "الرعشة شديدة",
  "المريض لا يستطيع أداء حياته اليومية",
  "ظهور أعراض جانبية قوية للأدوية",
];

const whyChoose = [
  { icon: Brain, text: "متخصص في جراحات المخ والأعصاب الوظيفية" },
  { icon: Stethoscope, text: "خبرة في علاج حالات الشلل الرعاش" },
  { icon: Activity, text: "تقييم دقيق لتحديد هل تحتاج أدوية أم تدخل جراحي" },
  { icon: Zap, text: "استخدام أحدث التقنيات في التحفيز الدماغي العميق" },
  { icon: Settings, text: "متابعة مستمرة بعد العملية وضبط الجهاز" },
];

const faqs = [
  {
    q: "هل مرض باركنسون خطير؟",
    a: "ليس خطيرًا إذا تم علاجه مبكرًا والسيطرة على الأعراض.",
  },
  {
    q: "هل عملية DBS مؤلمة؟",
    a: "لا، تتم تحت تخدير مناسب والمريض لا يشعر بالألم أثناءها.",
  },
  {
    q: "هل الرعشة تختفي نهائيًا؟",
    a: "في أغلب الحالات تقل بشكل كبير جدًا ويستعيد المريض القدرة على الحركة الطبيعية.",
  },
  {
    q: "هل المريض يظل على الأدوية بعد العملية؟",
    a: "غالبًا تقل جرعات الأدوية بشكل واضح بعد العملية.",
  },
  {
    q: "هل كبار السن يمكنهم إجراء العملية؟",
    a: "نعم، يتم تقييم الحالة الصحية أولًا لتحديد مدى ملاءمتها.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ParkinsonService = () => {
  useEffect(() => {
    document.title =
      "علاج الشلل الرعاش (باركنسون) في مصر | د. فريد الحفناوي – DBS";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent =
      "علاج الشلل الرعاش مع د. فريد الحفناوي – استشاري جراحة المخ والأعصاب. تشخيص دقيق وعملية التحفيز العميق للدماغ DBS في مصر. احجز الآن.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    // MedicalDoctor Schema
    const doctorSchema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: "د. فريد الحفناوي",
      medicalSpecialty: "جراحة المخ والأعصاب",
      description:
        "استشاري جراحة المخ والأعصاب والعمود الفقري – متخصص في علاج الشلل الرعاش وعملية التحفيز العميق للدماغ DBS",
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
                  علاج الشلل الرعاش (باركنسون)
                </h1>
                <p className="mb-4 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                  هل تعاني أنت أو أحد والديك من رعشة مستمرة في اليد أو بطء في
                  الحركة أو تيبس في العضلات؟
                </p>
                <p className="mb-2 font-cairo text-lg font-bold text-primary md:text-xl">
                  لا تقلق…
                </p>
                <p className="mb-4 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                  الشلل الرعاش (باركنسون) لم يعد مرضًا بدون حل.
                </p>
                <p className="mb-6 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                  مع التشخيص الدقيق والعلاج الحديث مثل التحفيز العميق للدماغ
                  (DBS) يمكن السيطرة على الأعراض بشكل كبير واستعادة القدرة على
                  ممارسة الحياة بصورة طبيعية.
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
                  src={brainImg}
                  alt="علاج الشلل الرعاش - التحفيز العميق للدماغ DBS مع د. فريد الحفناوي"
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
              <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
                هل هذه الأعراض تظهر على المريض؟
              </h2>
              <p className="mx-auto max-w-2xl font-cairo text-muted-foreground">
                إذا لاحظت واحد أو أكثر من الأعراض التالية فلا تهملها:
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="grid gap-3 md:grid-cols-2">
              {symptoms.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
                >
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                  <p className="font-cairo text-sm font-semibold text-heading">
                    {s}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp}
              className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center"
            >
              <p className="font-cairo text-base leading-relaxed text-muted-foreground">
                كثير من المرضى يعتقد أنها أعراض الشيخوخة… لكنها غالبًا مرض
                باركنسون ويمكن علاجه والسيطرة عليه إذا تم التدخل مبكرًا.
              </p>
            </motion.div>

            <div className="mt-8 flex justify-center">
              <CTAButtons />
            </div>
          </div>
        </section>

        {/* ===== WHAT IS PARKINSON ===== */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp}>
              <h2 className="mb-6 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
                ما هو الشلل الرعاش (باركنسون)؟
              </h2>
              <p className="mb-4 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                الشلل الرعاش هو اضطراب عصبي يحدث نتيجة نقص مادة الدوبامين في
                المخ، وهي المسؤولة عن التحكم في الحركة.
              </p>
              <p className="mb-6 font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
                لذلك تظهر الرعشة وبطء الحركة وعدم الاتزان.
              </p>

              <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6">
                <p className="font-cairo text-lg font-bold text-heading">
                  المهم أن تعرفه:
                </p>
                <p className="mt-2 font-cairo text-base leading-relaxed text-muted-foreground">
                  المرض لا يعني فقدان الحركة أو العجز…
                </p>
                <p className="font-cairo text-base font-bold text-primary">
                  المشكلة الحقيقية هي تأخر العلاج فقط.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== TREATMENT OPTIONS ===== */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp} className="mb-10">
              <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
                طرق علاج مرض باركنسون
              </h2>
              <p className="font-cairo text-muted-foreground">
                يتم تحديد العلاج حسب مرحلة المرض وعمر المريض والحالة الصحية.
              </p>
            </motion.div>

            {/* Drug treatment */}
            <motion.div
              {...fadeUp}
              className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-cairo text-xl font-bold text-heading">
                  ١) العلاج الدوائي
                </h3>
              </div>
              <p className="mb-4 font-cairo text-base leading-relaxed text-muted-foreground">
                في المراحل المبكرة يمكن السيطرة على الأعراض بالأدوية التي تعوض
                نقص الدوبامين وتقلل الرعشة والتيبس.
              </p>
              <p className="mb-2 font-cairo font-semibold text-heading">
                لكن مع الوقت قد:
              </p>
              <ul className="space-y-2">
                {[
                  "تقل استجابة الجسم للأدوية",
                  "تزيد الرعشة",
                  "تظهر حركات لا إرادية",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 font-cairo text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-cairo text-base font-bold text-primary">
                وهنا ننتقل للحل الأهم…
              </p>
            </motion.div>

            {/* DBS Section */}
            <motion.div
              {...fadeUp}
              className="rounded-2xl border-2 border-primary bg-card p-6 shadow-card md:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-cairo text-xl font-bold text-heading">
                  ٢) التحفيز العميق للدماغ (DBS) – أحدث علاج للشلل الرعاش
                </h3>
              </div>
              <p className="mb-4 font-cairo text-base leading-relaxed text-muted-foreground">
                يعد التحفيز العميق للدماغ من أحدث وأفضل طرق علاج الشلل الرعاش
                في العالم.
              </p>
              <p className="mb-4 font-cairo font-semibold text-heading">
                الفكرة ببساطة:
              </p>
              <p className="mb-6 font-cairo text-base leading-relaxed text-muted-foreground">
                يتم زرع جهاز دقيق داخل المخ يرسل إشارات كهربائية منتظمة لمراكز
                الحركة في الدماغ مما يؤدي إلى:
              </p>

              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                {dbsBenefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-xl bg-primary/5 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="font-cairo text-sm font-semibold text-heading">
                      {b}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-primary/5 p-5">
                <p className="font-cairo text-base leading-relaxed text-muted-foreground">
                  العملية ليست جراحة خطيرة كما يعتقد البعض
                </p>
                <p className="font-cairo text-base font-bold text-heading">
                  والمريض غالبًا يعود لمنزله خلال أيام قليلة.
                </p>
              </div>
            </motion.div>

            <div className="mt-8 flex justify-center">
              <CTAButtons size="large" />
            </div>
          </div>
        </section>

        {/* ===== WHEN DBS? ===== */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp}>
              <h2 className="mb-6 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
                متى يحتاج المريض عملية باركنسون (DBS)؟
              </h2>
              <p className="mb-6 font-cairo text-muted-foreground">
                قد يرشح الطبيب العملية إذا:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {dbsCandidates.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
                  >
                    <HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="font-cairo text-sm font-semibold text-heading">
                      {c}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-cairo text-base text-muted-foreground">
                كل حالة يتم تقييمها بدقة قبل القرار.
              </p>

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
                  <h2 className="font-cairo text-2xl font-extrabold text-heading md:text-3xl">
                    تكلفة عملية التحفيز العميق للدماغ في مصر
                  </h2>
                </div>
                <p className="mb-4 font-cairo text-base leading-relaxed text-muted-foreground">
                  تكلفة العملية تختلف حسب:
                </p>
                <ul className="mb-4 space-y-2">
                  {["نوع الجهاز", "حالة المريض", "مدة الإقامة بالمستشفى"].map(
                    (item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-cairo text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <p className="mb-2 font-cairo text-base text-muted-foreground">
                  لذلك يتم تحديد السعر بعد الكشف والتقييم الطبي.
                </p>
                <p className="mb-6 font-cairo text-base font-bold text-heading">
                  ويمكنك التواصل لمعرفة التفاصيل المناسبة لحالتك.
                </p>
                <CTAButtons />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== WHY CHOOSE DOCTOR ===== */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp} className="mb-10 text-center">
              <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
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
                  <p className="font-cairo text-base font-semibold text-heading">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <CTAButtons size="large" />
            </div>
          </div>
        </section>

        {/* ===== VIDEOS ===== */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <VideoCarousel
              title="فيديوهات عن الشلل الرعاش"
              videos={parkinsonVideos}
            />
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="bg-section-alt py-16 md:py-24">
          <div className="container max-w-3xl">
            <motion.div {...fadeUp} className="mb-10 text-center">
              <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
                أسئلة شائعة
              </h2>
            </motion.div>
            <motion.div {...fadeUp}>
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

        {/* ===== TESTIMONIALS ===== */}
        <TestimonialsCarousel />


        <FinalCTASection />
      </main>
      <Footer />
      <StickyWhatsAppButton />
    </>
  );
};

export default ParkinsonService;
