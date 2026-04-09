import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeFu7RpltnY1Nzkf31b9MOe6g6uk51EpSjc6WljVaVeopve2w/viewform";

const steps = [
  {
    step: "01",
    label: "Fill the Registration Form",
    desc: "Takes just 2 minutes",
  },
  {
    step: "02",
    label: "Free Consultation Call",
    desc: "With our expert counsellor",
  },
  { step: "03", label: "College Selection", desc: "Tailored to your profile" },
  {
    step: "04",
    label: "Secure Your Seat",
    desc: "Fast-track admission process",
  },
];

export default function Registration() {
  return (
    <section id="register" className="py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Steps */}
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{
                background: "oklch(0.35 0.16 255 / 0.1)",
                color: "oklch(0.35 0.16 255)",
              }}
            >
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Admitted in <br />
              <span style={{ color: "oklch(0.35 0.16 255)" }}>
                4 Simple Steps
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Our streamlined process ensures you secure your dream college
              admission without stress or confusion.
            </p>
            <div className="space-y-4" data-ocid="admission-steps">
              {steps.map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm text-white"
                    style={{ background: "oklch(0.35 0.16 255)" }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {s.label}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" /> {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div
            className="rounded-3xl p-8 md:p-10 text-center shadow-elevated relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.35 0.16 255), oklch(0.22 0.14 260))",
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
                style={{ background: "oklch(0.59 0.24 34)" }}
              />
            </div>
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                style={{
                  background: "oklch(0.59 0.24 34 / 0.2)",
                  color: "oklch(0.9 0.12 34)",
                }}
              >
                ⚡ Limited Seats for 2025 Batch
              </div>

              <h3
                className="text-2xl md:text-3xl font-extrabold text-white mb-3"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
              >
                Register Now & Secure Your Future
              </h3>
              <p
                className="text-sm mb-6 max-w-sm mx-auto leading-relaxed"
                style={{ color: "#E0E0E0" }}
              >
                Join 500+ students who have already secured their dream college
                admission with Admission Host.
              </p>

              <ul className="space-y-2 mb-8 text-left max-w-xs mx-auto">
                {[
                  "Free initial consultation",
                  "No hidden charges",
                  "Quick admission process",
                  "Post-admission support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-white"
                  >
                    <CheckCircle
                      className="w-4 h-4 shrink-0"
                      style={{ color: "oklch(0.72 0.22 34)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full font-bold py-6 text-base rounded-xl transition-smooth hover:opacity-90 hover:scale-105 shadow-elevated"
                style={{
                  background: "oklch(0.59 0.24 34)",
                  color: "oklch(0.98 0 0)",
                }}
                data-ocid="registration-cta-btn"
              >
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now — It's Free{" "}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <p
                className="text-xs mt-4"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                No spam. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
