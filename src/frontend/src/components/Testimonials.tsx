import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Agartala, Tripura",
    course: "MBBS – Medical College",
    review:
      "Admission Host made my dream of becoming a doctor a reality. Their guidance through the entire process was invaluable. Got admission in a top medical college within just 2 weeks!",
    initials: "PS",
    rating: 5,
    color: "oklch(0.35 0.16 255)",
    bg: "oklch(0.35 0.16 255 / 0.1)",
  },
  {
    name: "Rahul Das",
    location: "Dharmanagar, Tripura",
    course: "B.Tech – Engineering College",
    review:
      "Very helpful consultancy. The team was professional, transparent about all charges, and helped me get into my preferred engineering branch. Highly recommend to all students!",
    initials: "RD",
    rating: 5,
    color: "oklch(0.59 0.24 34)",
    bg: "oklch(0.59 0.24 34 / 0.1)",
  },
  {
    name: "Sneha Roy",
    location: "Silchar, Assam",
    course: "B.Sc Nursing – Nursing College",
    review:
      "I was confused about which college to choose for nursing. Admission Host counselled me perfectly and helped me secure a seat in a reputed college. Exceptional service!",
    initials: "SR",
    rating: 5,
    color: "oklch(0.35 0.16 255)",
    bg: "oklch(0.35 0.16 255 / 0.1)",
  },
  {
    name: "Amit Chakraborty",
    location: "Guwahati, Assam",
    course: "MBA – Management College",
    review:
      "The scholarship assistance was a game changer for me. They found a scholarship I didn't even know about and helped me save a significant amount on my MBA fees.",
    initials: "AC",
    rating: 5,
    color: "oklch(0.59 0.24 34)",
    bg: "oklch(0.59 0.24 34 / 0.1)",
  },
  {
    name: "Meghna Paul",
    location: "Tripura",
    course: "B.Pharm – Pharmacy College",
    review:
      "Excellent career counselling! They took time to understand my situation and recommended the best pharmacy college within my budget. Process was completely transparent.",
    initials: "MP",
    rating: 5,
    color: "oklch(0.35 0.16 255)",
    bg: "oklch(0.35 0.16 255 / 0.1)",
  },
  {
    name: "Sourav Deb",
    location: "Agartala, Tripura",
    course: "BDS – Dental College",
    review:
      "From document preparation to final admission, Admission Host was with me at every step. Their network of colleges is impressive. Got admission faster than I expected!",
    initials: "SD",
    rating: 5,
    color: "oklch(0.59 0.24 34)",
    bg: "oklch(0.59 0.24 34 / 0.1)",
  },
];

function StarRating({ count, name }: { count: number; name: string }) {
  const stars = Array.from({ length: count }, (_, i) => `${name}-${i + 1}`);
  return (
    <div className="flex gap-0.5">
      {stars.map((key) => (
        <Star
          key={key}
          className="w-4 h-4 fill-current"
          style={{ color: "oklch(0.72 0.22 34)" }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
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
            Student Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't just take our word for it — hear from the students we've
            helped achieve their academic dreams.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="testimonials-grid"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-smooth flex flex-col"
              data-ocid={`testimonial-${t.initials.toLowerCase()}`}
            >
              <Quote
                className="w-8 h-8 mb-4"
                style={{ color: "oklch(0.35 0.16 255 / 0.3)" }}
              />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold"
                  style={{ background: t.bg, color: t.color }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-sm truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.course}
                  </div>
                </div>
                <div className="ml-auto shrink-0">
                  <StarRating count={t.rating} name={t.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
