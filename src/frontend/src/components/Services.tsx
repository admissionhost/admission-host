import { Button } from "@/components/ui/button";
import { Award, BookOpen, Compass, School } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Admission Guidance",
    description:
      "Step-by-step support through the entire admission process — from form filling to final enrollment in your dream college.",
    features: ["Document preparation", "Form assistance", "Deadline tracking"],
  },
  {
    icon: Compass,
    title: "Career Counselling",
    description:
      "One-on-one career counselling sessions to identify your strengths and align them with the right course and career path.",
    features: ["Aptitude assessment", "Career mapping", "Industry insights"],
  },
  {
    icon: Award,
    title: "Scholarship Assistance",
    description:
      "Helping students discover and apply for merit-based, need-based, and government scholarships to reduce financial burden.",
    features: [
      "Scholarship search",
      "Application support",
      "Eligibility check",
    ],
  },
  {
    icon: School,
    title: "College Selection Support",
    description:
      "Expert comparison of colleges based on ranking, fees, placement records, and your academic profile to find the best fit.",
    features: [
      "College comparison",
      "Campus insights",
      "Fee structure analysis",
    ],
  },
];

interface ServicesProps {
  openModal: () => void;
}

export default function Services({ openModal }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: "oklch(0.59 0.24 34 / 0.1)",
              color: "oklch(0.59 0.24 34)",
            }}
          >
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive support at every step of your admission journey — we
            handle the complexity so you can focus on your future.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          data-ocid="services-grid"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isOdd = idx % 2 === 0;
            return (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-7 shadow-card border border-border hover:shadow-elevated transition-smooth flex gap-5"
                data-ocid={`service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-smooth"
                  style={{
                    background: isOdd
                      ? "oklch(0.35 0.16 255 / 0.08)"
                      : "oklch(0.59 0.24 34 / 0.08)",
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{
                      color: isOdd
                        ? "oklch(0.35 0.16 255)"
                        : "oklch(0.59 0.24 34)",
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            background: isOdd
                              ? "oklch(0.35 0.16 255)"
                              : "oklch(0.59 0.24 34)",
                          }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={openModal}
            size="lg"
            className="gradient-accent text-primary-foreground font-semibold px-8 hover:opacity-90 transition-smooth shadow-card"
            data-ocid="services-cta"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}
