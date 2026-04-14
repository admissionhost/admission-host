import {
  ArrowRight,
  Briefcase,
  Cpu,
  Heart,
  Pill,
  Stethoscope,
} from "lucide-react";

const courses = [
  {
    icon: Stethoscope,
    title: "Medical",
    description:
      "MBBS, BDS, BAMS & more in top medical colleges across India with expert guidance.",
    badge: "High Demand",
    badgeColor: "oklch(0.55 0.22 25)",
    badgeBg: "oklch(0.55 0.22 25 / 0.12)",
  },
  {
    icon: Cpu,
    title: "Engineering",
    description:
      "B.Tech in CSE, ECE, Civil & Mechanical at reputed engineering institutions.",
    badge: "Popular",
    badgeColor: "oklch(0.35 0.16 255)",
    badgeBg: "oklch(0.35 0.16 255 / 0.1)",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description:
      "B.Pharm & D.Pharm programs in renowned pharmacy colleges with strong placements.",
    badge: "Growing Field",
    badgeColor: "oklch(0.45 0.18 165)",
    badgeBg: "oklch(0.45 0.18 165 / 0.1)",
  },
  {
    icon: Heart,
    title: "Nursing",
    description:
      "B.Sc & GNM Nursing programs in professional nursing colleges and hospitals.",
    badge: "Always in Demand",
    badgeColor: "oklch(0.55 0.22 25)",
    badgeBg: "oklch(0.55 0.22 25 / 0.1)",
  },
  {
    icon: Briefcase,
    title: "Management",
    description:
      "BBA, MBA & PGDM programs in top business schools for future leaders.",
    badge: "Career Booster",
    badgeColor: "oklch(0.59 0.24 34)",
    badgeBg: "oklch(0.59 0.24 34 / 0.1)",
  },
];

interface CoursesProps {
  openModal: () => void;
}

export default function Courses({ openModal }: CoursesProps) {
  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: "oklch(0.35 0.16 255 / 0.1)",
              color: "oklch(0.35 0.16 255)",
            }}
          >
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Courses We Specialise In
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From medical to management — we help you secure a seat in the field
            that matches your passion and potential.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="courses-grid"
        >
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <button
                key={course.title}
                type="button"
                onClick={openModal}
                className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-smooth text-left w-full"
                data-ocid={`course-${course.title.toLowerCase()}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth"
                    style={{ background: "oklch(0.35 0.16 255 / 0.08)" }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: "oklch(0.35 0.16 255)" }}
                    />
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: course.badgeBg,
                      color: course.badgeColor,
                    }}
                  >
                    {course.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {course.description}
                </p>
                <div
                  className="flex items-center gap-1 text-sm font-semibold transition-smooth"
                  style={{ color: "oklch(0.59 0.24 34)" }}
                >
                  Apply Now{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </div>
              </button>
            );
          })}

          {/* CTA card — dark blue background, all text must be white */}
          <div
            className="rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.35 0.16 255), oklch(0.25 0.14 260))",
            }}
          >
            <p className="text-sm mb-3" style={{ color: "#E0E0E0" }}>
              Not sure which course is right for you?
            </p>
            <p className="text-white font-bold text-lg mb-4">
              Get Free Career Counselling
            </p>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-smooth hover:opacity-90"
              style={{
                background: "oklch(0.59 0.24 34)",
                color: "oklch(0.98 0 0)",
              }}
              data-ocid="courses-counselling-cta"
            >
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
