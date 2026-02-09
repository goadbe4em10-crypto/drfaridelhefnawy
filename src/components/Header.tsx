import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const PHONE = "01006074000";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-card backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="font-cairo text-lg font-bold text-primary-foreground">د.ف</span>
          </div>
          <div>
            <p className="font-cairo text-sm font-bold text-heading">د. فريد الحفناوي</p>
            <p className="font-cairo text-xs text-muted-foreground">استشاري جراحة المخ والأعصاب والشلل الرعاش</p>
          </div>
        </div>

        <a
          href={`tel:${PHONE}`}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-cairo text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{PHONE}</span>
          <span className="sm:hidden">اتصل</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
