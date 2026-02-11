import { useState } from "react";
import CTAButtons from "./CTAButtons";
import { Send } from "lucide-react";

const FinalCTASection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim().slice(0, 100);
    const trimmedPhone = phone.trim().slice(0, 20);
    const trimmedMessage = message.trim().slice(0, 500);
    if (!trimmedName || !trimmedPhone) return;

    const subject = encodeURIComponent(`استفسار من ${trimmedName}`);
    const body = encodeURIComponent(
      `الاسم: ${trimmedName}\nرقم التواصل: ${trimmedPhone}\n${trimmedMessage ? `الرسالة: ${trimmedMessage}` : ""}`
    );
    window.location.href = `mailto:go.ad.be4em10@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24" id="contact">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-transparent" />
      <div className="container relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-right">
            <h2 className="mb-4 font-cairo text-3xl font-extrabold text-primary-foreground md:text-4xl">
              لا تؤجل صحتك.. احجز استشارتك الآن
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-cairo text-lg text-primary-foreground/80 md:mx-0">
              تواصل معنا اليوم للحصول على تشخيص دقيق وخطة علاجية متكاملة مع د. فريد الحفناوي
            </p>
            <div className="flex justify-center md:justify-start">
              <CTAButtons size="large" />
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-background/10 p-6 backdrop-blur-sm md:p-8"
            >
              <h3 className="mb-5 text-center font-cairo text-xl font-bold text-primary-foreground">
                أرسل استفسارك
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 font-cairo text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={20}
                  required
                  dir="ltr"
                  className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 font-cairo text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 focus:outline-none"
                />
                <textarea
                  placeholder="رسالتك (اختياري)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={500}
                  rows={3}
                  className="w-full resize-none rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 font-cairo text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-foreground py-3 font-cairo text-sm font-bold text-primary transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  أرسل
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
