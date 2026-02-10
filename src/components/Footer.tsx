import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-8 pb-24 md:pb-8">
      <div className="container text-center">
        <p className="font-cairo text-sm font-bold text-heading">د. فريد الحفناوي</p>
        <p className="mt-1 font-cairo text-xs text-muted-foreground">
          استشاري جراحة المخ والأعصاب والشلل الرعاش
        </p>
        <a
          href="https://maps.app.goo.gl/CVHdzYRvx8FD4ujC8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded-lg px-4 py-2 font-cairo text-xs text-primary transition-colors hover:bg-primary-light"
        >
          <MapPin className="h-4 w-4" />
          التجمع الخامس – ميفيدا – ايترنا هيلث – عيادة 16
        </a>
        <p className="mt-3 font-cairo text-xs text-muted-foreground">
          جميع الحقوق محفوظة © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
