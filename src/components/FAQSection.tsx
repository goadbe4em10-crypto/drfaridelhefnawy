import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "ما هي تخصصات د. فريد الحفناوي؟",
    a: "د. فريد الحفناوي استشاري متخصص في جراحة المخ والأعصاب والعمود الفقري، بما يشمل علاج الشلل الرعاش، الانزلاق الغضروفي، وآلام العصب الخامس.",
  },
  {
    q: "هل يمكن علاج الانزلاق الغضروفي بدون جراحة؟",
    a: "نعم، نوفر تقنية التردد الحراري لعلاج الانزلاق الغضروفي بدون جراحة تقليدية، وهي تقنية آمنة وفعالة بفترة تعافي قصيرة.",
  },
  {
    q: "كيف يمكنني حجز موعد؟",
    a: "يمكنك الاتصال مباشرة على الرقم 01006074000 أو إرسال رسالة عبر واتساب للحجز والاستفسار.",
  },
  {
    q: "هل تتوفر متابعة بعد العملية؟",
    a: "بالتأكيد، نوفر متابعة طبية شاملة بعد أي إجراء جراحي لضمان أفضل نتائج وتعافي سريع وآمن.",
  },
  {
    q: "ما هي مدة التعافي بعد جراحة الانزلاق الغضروفي؟",
    a: "تختلف مدة التعافي حسب نوع الإجراء. التردد الحراري قد يحتاج أيام قليلة فقط، بينما الجراحة الميكروسكوبية تحتاج من أسبوعين إلى شهر تقريباً.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-cairo text-3xl font-extrabold text-heading md:text-4xl">
            أسئلة شائعة
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-card px-5 shadow-sm"
            >
              <AccordionTrigger className="font-cairo text-base font-bold text-heading hover:no-underline md:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-cairo leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
