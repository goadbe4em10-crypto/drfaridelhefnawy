import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const PHONE = "01006074000";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "عن الدكتور", href: "/#about" },
  {
    label: "الخدمات",
    href: "/#services",
    children: [
      { label: "علاج الشلل الرعاش", href: "/علاج-الشلل-الرعاش" },
      { label: "علاج الانزلاق الغضروفي", href: "/علاج-الانزلاق-الغضروفي" },
      { label: "علاج العصب الخامس", href: "/علاج-العصب-الخامس" },
    ],
  },
  { label: "آراء العملاء", href: "/#testimonials" },
  { label: "تواصل معنا", href: "/#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "bg-background/95 shadow-card backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="د. فريد الحفناوي" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 font-cairo text-sm font-semibold text-heading transition-colors hover:bg-primary-light hover:text-primary"
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 min-w-48 rounded-xl border border-border bg-card p-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-lg px-4 py-2.5 font-cairo text-sm text-heading transition-colors hover:bg-primary-light hover:text-primary"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.label}
                onClick={() => {
                  if (link.href === "/") {
                    window.location.href = "/";
                  } else {
                    handleNavClick(link.href);
                  }
                }}
                className="rounded-lg px-3 py-2 font-cairo text-sm font-semibold text-heading transition-colors hover:bg-primary-light hover:text-primary"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-cairo text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">اتصل</span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-heading transition-colors hover:bg-primary-light lg:hidden"
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-cairo text-sm font-semibold text-heading"
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="mr-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-lg px-4 py-2.5 font-cairo text-sm text-muted-foreground transition-colors hover:bg-primary-light hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.label}
                onClick={() => {
                  if (link.href === "/") {
                    window.location.href = "/";
                  } else {
                    handleNavClick(link.href);
                  }
                }}
                className="block w-full rounded-lg px-3 py-3 text-right font-cairo text-sm font-semibold text-heading transition-colors hover:bg-primary-light"
              >
                {link.label}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
