import { Building2, Clock, Trophy, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Students Placed",
    description: "Successfully admitted in top colleges",
    color: "oklch(0.35 0.16 255)",
    bg: "oklch(0.35 0.16 255 / 0.08)",
  },
  {
    icon: Building2,
    value: "50+",
    label: "College Network",
    description: "Partnered institutions across India",
    color: "oklch(0.59 0.24 34)",
    bg: "oklch(0.59 0.24 34 / 0.08)",
  },
  {
    icon: Clock,
    value: "9+",
    label: "Years Experience",
    description: "Trusted guidance since 2015",
    color: "oklch(0.35 0.16 255)",
    bg: "oklch(0.35 0.16 255 / 0.08)",
  },
  {
    icon: Trophy,
    value: "High",
    label: "Success Rate",
    description: "Proven track record of admissions",
    color: "oklch(0.59 0.24 34)",
    bg: "oklch(0.59 0.24 34 / 0.08)",
  },
];

export default function TrustStats() {
  return (
    <section id="trust" className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          data-ocid="trust-stats-grid"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-smooth text-center group"
                data-ocid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth"
                  style={{ background: stat.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground leading-snug">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
