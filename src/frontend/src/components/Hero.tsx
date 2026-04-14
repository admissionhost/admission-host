import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Free Initial Consultation",
  "Expert Career Guidance",
  "100% Transparent Process",
];

interface HeroProps {
  openModal: () => void;
}

export default function Hero({ openModal }: HeroProps) {
  const handleLearnMore = () => {
    const el = document.querySelector("#courses");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.35 0.16 255) 0%, oklch(0.22 0.14 260) 60%, oklch(0.18 0.12 265) 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: "oklch(0.59 0.24 34)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
          style={{ background: "oklch(0.59 0.24 34)" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ background: "oklch(0.7 0.1 255)" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge
              className="mb-6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest border-none"
              style={{
                background: "oklch(0.59 0.24 34 / 0.25)",
                color: "oklch(0.95 0.12 34)",
              }}
            >
              ⚡ Limited Seats Available
            </Badge>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              Secure Your Admission in{" "}
              <span className="relative inline-block">
                <span style={{ color: "oklch(0.72 0.22 34)" }}>
                  Top Colleges
                </span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                  style={{ background: "oklch(0.59 0.24 34 / 0.5)" }}
                />
              </span>
            </h1>

            <p
              className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
              style={{ color: "#E8E8E8" }}
            >
              We guide you to the right career path with expert counselling —
              from choosing the right course to securing your seat in top
              institutions across India.
            </p>

            <ul className="space-y-2.5 mb-10">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm"
                  style={{ color: "#F0F0F0" }}
                >
                  <CheckCircle2
                    className="w-4 h-4 shrink-0"
                    style={{ color: "oklch(0.72 0.22 34)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4" data-ocid="hero-cta-group">
              <Button
                onClick={openModal}
                size="lg"
                className="font-bold px-8 py-6 text-base rounded-xl shadow-elevated hover:opacity-90 hover:scale-105 transition-smooth"
                style={{
                  background: "oklch(0.59 0.24 34)",
                  color: "oklch(0.98 0 0)",
                }}
                data-ocid="hero-apply-btn"
              >
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="btn-explore font-semibold px-8 py-6 text-base rounded-xl border-2"
                style={{}}
                onClick={handleLearnMore}
                data-ocid="hero-learn-btn"
              >
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 scale-95"
                style={{ background: "oklch(0.59 0.24 34)" }}
              />
              <div
                className="relative rounded-3xl overflow-hidden shadow-elevated border-2"
                style={{ borderColor: "oklch(0.98 0 0 / 0.15)" }}
              >
                <img
                  src="/assets/generated/hero-student.dim_800x900.jpg"
                  alt="Happy student holding books - ready for college admission"
                  className="w-full max-w-sm md:max-w-md object-cover object-top"
                  style={{ height: "460px" }}
                />
                {/* Overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.22 0.14 260), transparent)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl px-4 py-3 shadow-elevated animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">
                      9+
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      Years Experience
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Trusted consultancy
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-card rounded-2xl px-4 py-3 shadow-elevated">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "oklch(0.59 0.24 34 / 0.15)" }}
                  >
                    <span
                      style={{ color: "oklch(0.59 0.24 34)" }}
                      className="text-sm font-bold"
                    >
                      ✓
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      500+ Students
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Successfully placed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          role="presentation"
        >
          <path
            d="M0 60L1440 60L1440 20C1200 55 960 65 720 45C480 25 240 15 0 40L0 60Z"
            fill="oklch(0.99 0 0)"
          />
        </svg>
      </div>
    </section>
  );
}
