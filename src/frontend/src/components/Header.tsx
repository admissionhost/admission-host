import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type Page = "home" | "fees";

const homeNavLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

interface HeaderProps {
  openModal: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({
  openModal,
  currentPage,
  onNavigate,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHomeNavClick = (href: string) => {
    setMobileOpen(false);
    if (currentPage !== "home") {
      onNavigate("home");
      // Wait for page switch then scroll
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFeesClick = () => {
    setMobileOpen(false);
    onNavigate("fees");
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    onNavigate("home");
    setTimeout(() => {
      const el = document.querySelector("#home");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const handleCTAClick = () => {
    setMobileOpen(false);
    openModal();
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
          onClick={handleLogoClick}
          className="flex items-center group"
          aria-label="Admission Host - Home"
        >
          <div className="logo-container">
            <img
              src="/assets/logo-full.png"
              alt="Admission Host Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {homeNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleHomeNavClick(link.href);
              }}
              className="nav-link-white px-4 py-2 text-sm rounded-md"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={handleFeesClick}
            className={`nav-link-white px-4 py-2 text-sm rounded-md${
              currentPage === "fees" ? " active" : ""
            }`}
            data-ocid="nav-fees-desktop"
          >
            Fees Structure
          </button>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            onClick={openModal}
            className="gradient-accent text-primary-foreground font-semibold px-5 hover:opacity-90 transition-smooth shadow-card"
            data-ocid="header-cta"
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md transition-smooth"
          style={{ color: "#ffffff" }}
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
        <div
          className="md:hidden border-t border-border shadow-elevated animate-slide-down"
          style={{ background: "#1F3C88" }}
        >
          <nav className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {homeNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleHomeNavClick(link.href);
                }}
                className="nav-link-white px-4 py-3 text-sm rounded-md"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleFeesClick}
              className={`nav-link-white px-4 py-3 text-sm text-left rounded-md${
                currentPage === "fees" ? " active" : ""
              }`}
              data-ocid="nav-fees-mobile"
            >
              Fees Structure
            </button>
            <Button
              onClick={handleCTAClick}
              className="mt-3 gradient-accent text-primary-foreground font-semibold"
              data-ocid="mobile-cta"
            >
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
