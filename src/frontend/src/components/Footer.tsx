import { MapPin, MessageCircle, Phone } from "lucide-react";

type Page = "home" | "fees";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeFu7RpltnY1Nzkf31b9MOe6g6uk51EpSjc6WljVaVeopve2w/viewform";
const WHATSAPP_NUMBER = "917628954403";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const courses = ["Medical", "Engineering", "Pharmacy", "Nursing", "Management"];

interface FooterProps {
  onNavigate?: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleFeesClick = () => {
    if (onNavigate) {
      onNavigate("fees");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer
      className="pt-16 pb-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.22 0.13 262) 0%, oklch(0.16 0.1 264) 100%)",
      }}
    >
      {/* Decorative top wave */}
      <div
        className="absolute top-0 left-0 right-0 -translate-y-px"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          role="presentation"
        >
          <path
            d="M0 0L1440 0L1440 20C1200 5 960 -5 720 15C480 35 240 45 0 20L0 0Z"
            fill="oklch(0.99 0 0)"
          />
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img
                src="/assets/logo-full.png"
                alt="Admission Host Logo"
                className="h-14 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm mb-6"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Admission Host is a trusted education consultancy helping students
              get admission in top colleges across India. With 9+ years of
              experience and 500+ successful placements, we guide students to
              their dream careers.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-smooth hover:scale-110"
                style={{ background: "oklch(0.5 0.18 145 / 0.2)" }}
                aria-label="WhatsApp"
                data-ocid="footer-whatsapp"
              >
                <MessageCircle
                  className="w-4 h-4"
                  style={{ color: "oklch(0.7 0.18 145)" }}
                />
              </a>
              <a
                href="tel:7628954403"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-smooth hover:scale-110"
                style={{ background: "oklch(0.35 0.16 255 / 0.2)" }}
                aria-label="Phone"
                data-ocid="footer-phone"
              >
                <Phone
                  className="w-4 h-4"
                  style={{ color: "oklch(0.7 0.15 255)" }}
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm transition-smooth hover:text-white"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                    data-ocid={`footer-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={handleFeesClick}
                  className="text-sm transition-smooth hover:text-white text-left"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                  data-ocid="footer-fees-link"
                >
                  Fees Structure
                </button>
              </li>
              <li>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition-smooth hover:opacity-80"
                  style={{ color: "oklch(0.72 0.22 34)" }}
                  data-ocid="footer-apply-link"
                >
                  Apply Now →
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Our Courses
            </h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <button
                    type="button"
                    onClick={() => handleNavClick("#courses")}
                    className="text-sm transition-smooth hover:text-white"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                    data-ocid={`footer-course-${course.toLowerCase()}`}
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div
          className="rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ background: "oklch(0.98 0 0 / 0.07)" }}
        >
          <div className="flex items-start gap-3 flex-1">
            <MapPin
              className="w-4 h-4 shrink-0 mt-0.5"
              style={{ color: "oklch(0.59 0.24 34)" }}
            />
            <span
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Opp. of Sanghati Club, near Sankar Chowmuhani, Krishna Nagar,
              Agartala, Tripura 799001
            </span>
          </div>
          <a
            href="tel:7628954403"
            className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-smooth hover:opacity-80"
            style={{ color: "oklch(0.72 0.22 34)" }}
            data-ocid="footer-phone-link"
          >
            <Phone className="w-4 h-4" /> 7628954403
          </a>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "oklch(0.98 0 0 / 0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.48)" }}>
            © {year} Admission Host. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.48)" }}>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth underline hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
