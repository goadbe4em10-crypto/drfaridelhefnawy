import CTAButtons from "./CTAButtons";
import doctorImg from "@/assets/doctor-portrait.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-section-alt pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <p className="mb-3 inline-block rounded-full bg-primary-light px-4 py-1 font-cairo text-sm font-semibold text-primary">
              جراحة مخ وأعصاب وظيفية لعلاج شلل الرعاش والصرع وجراحات التدخل المحدود للعمود الفقري
            </p>
            <h1 className="mb-4 font-cairo text-3xl font-extrabold leading-tight text-heading md:text-5xl">
              د. فريد الحفناوي
            </h1>
            <p className="mb-2 font-cairo text-xl font-bold text-primary md:text-2xl">
              خبرة تطمئنك.. ورعاية تستحقها
            </p>
            <p className="mb-6 max-w-lg font-cairo text-base leading-relaxed text-muted-foreground md:text-lg">
              متخصص في أحدث تقنيات جراحة المخ والأعصاب والعمود الفقري. نقدم لك أعلى مستوى من الرعاية الطبية مع خطة علاجية مخصصة لحالتك.
            </p>
            <CTAButtons size="large" />
            <p className="mt-4 font-cairo text-sm text-muted-foreground">
              للحجز والاستفسار: <span className="font-bold text-heading" dir="ltr">01006074000</span>
            </p>
          </div>

          <div className="order-1 flex justify-center md:order-2 animate-fade-in-scale">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <img
                src={doctorImg}
                alt="د. فريد الحفناوي - استشاري جراحة المخ والأعصاب"
                className="relative z-10 h-auto w-64 rounded-2xl object-cover shadow-card md:w-80"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
