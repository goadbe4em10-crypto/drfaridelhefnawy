const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-8 pb-24 md:pb-8">
      <div className="container text-center">
        <p className="font-cairo text-sm font-bold text-heading">د. فريد الحفناوي</p>
        <p className="mt-1 font-cairo text-xs text-muted-foreground">
          استشاري جراحة المخ والأعصاب
        </p>
        <p className="mt-3 font-cairo text-xs text-muted-foreground">
          جميع الحقوق محفوظة © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
