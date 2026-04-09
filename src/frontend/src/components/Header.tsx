import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeFu7RpltnY1Nzkf31b9MOe6g6uk51EpSjc6WljVaVeopve2w/viewform";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card shadow-elevated py-2"
          : "bg-card/95 backdrop-blur-sm shadow-subtle py-3"
      }`}
      data-ocid="header-nav"
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center group"
          aria-label="Admission Host - Home"
        >
          <img
            src="/assets/logo-full.png"
            alt="Admission Host Logo"
            className="h-12 w-auto object-contain group-hover:opacity-90 transition-smooth"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth rounded-md hover:bg-primary/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="gradient-accent text-primary-foreground font-semibold px-5 hover:opacity-90 transition-smooth shadow-card"
            data-ocid="header-cta"
          >
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              Book Consultation
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="mobile-menu-toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border shadow-elevated animate-slide-down">
          <nav className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-smooth"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-3 gradient-accent text-primary-foreground font-semibold"
              data-ocid="mobile-cta"
            >
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Consultation
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
