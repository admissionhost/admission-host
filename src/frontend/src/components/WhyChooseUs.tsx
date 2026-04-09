import { Eye, IndianRupee, ShieldCheck, UserCheck } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Expert Guidance",
    description:
      "Our team of experienced counsellors have placed 500+ students in top colleges. We know what works and guide you accordingly.",
    stat: "500+ placements",
  },
  {
    icon: UserCheck,
    title: "Personalized Support",
    description:
      "Every student is unique. We provide one-on-one counselling tailored to your academic background, interests, and career goals.",
    stat: "1-on-1 sessions",
  },
  {
    icon: IndianRupee,
    title: "Affordable Colleges",
    description:
      "We help you find quality education at colleges that fit your budget — without compromising on academic standards or placements.",
    stat: "Budget-friendly options",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "No hidden fees, no false promises. We maintain complete transparency at every step so you and your family stay informed.",
    stat: "Zero hidden charges",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.35 0.16 255) 0%, oklch(0.28 0.15 258) 50%, oklch(0.22 0.13 262) 100%)",
      }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "oklch(0.59 0.24 34)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "oklch(0.59 0.24 34)" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{
              background: "oklch(0.59 0.24 34 / 0.25)",
              color: "oklch(0.9 0.12 34)",
            }}
          >
            Why Admission Host
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}
          >
            Why Choose Us?
          </h2>
          <p className="text-gray-200 max-w-xl mx-auto leading-relaxed">
            We've spent over 9 years perfecting the art of helping students find
            their ideal colleges with confidence and clarity.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="why-us-grid"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group rounded-2xl p-6 border transition-smooth hover:-translate-y-1"
                style={{
                  background: "oklch(0.98 0 0 / 0.07)",
                  borderColor: "oklch(0.98 0 0 / 0.15)",
                }}
                data-ocid={`why-${reason.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth"
                  style={{ background: "oklch(0.59 0.24 34 / 0.2)" }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "oklch(0.85 0.18 34)" }}
                  />
                </div>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#E0E0E0" }}
                >
                  {reason.description}
                </p>
                <div
                  className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block"
                  style={{
                    background: "oklch(0.59 0.24 34 / 0.2)",
                    color: "oklch(0.9 0.12 34)",
                  }}
                >
                  {reason.stat}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
