import { Award, Cpu, HeartHandshake, UserCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "خبرة طويلة",
    description: "سنوات من الخبرة في جراحات المخ والأعصاب والشلل الرعاش بأعلى معدلات نجاح.",
  },
  {
    icon: Cpu,
    title: "تقنيات متطورة",
    description: "استخدام أحدث الأجهزة والتقنيات الطبية العالمية في التشخيص والعلاج.",
  },
  {
    icon: HeartHandshake,
    title: "رعاية شخصية",
    description: "خطة علاجية مخصصة لكل مريض مع متابعة مستمرة قبل وبعد العلاج.",
  },
  {
    icon: UserCheck,
    title: "راحة المريض أولاً",
    description: "بيئة طبية مريحة وفريق متعاون يضع راحة المريض في المقام الأول.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="bg-section-alt py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
            لماذا تختار د. فريد الحفناوي؟
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-2xl bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-cairo text-lg font-bold text-heading">{reason.title}</h3>
              <p className="font-cairo text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
