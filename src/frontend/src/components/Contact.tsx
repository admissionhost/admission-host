import { Button } from "@/components/ui/button";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "917628954403";
const PHONE_NUMBER = "7628954403";
const ADDRESS =
  "Opp. of Sanghati Club, near Sankar Chowmuhani, Krishna Nagar, Agartala, Tripura 799001";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: PHONE_NUMBER,
    link: `tel:${PHONE_NUMBER}`,
    color: "oklch(0.35 0.16 255)",
    bg: "oklch(0.35 0.16 255 / 0.08)",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    link: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20want%20to%20know%20more%20about%20admissions`,
    color: "oklch(0.5 0.18 145)",
    bg: "oklch(0.5 0.18 145 / 0.08)",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: ADDRESS,
    link: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
    color: "oklch(0.59 0.24 34)",
    bg: "oklch(0.59 0.24 34 / 0.08)",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
    link: null,
    color: "oklch(0.35 0.16 255)",
    bg: "oklch(0.35 0.16 255 / 0.08)",
  },
];

interface ContactProps {
  openModal: () => void;
}

export default function Contact({ openModal }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-background">
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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have questions? Our counsellors are ready to help you take the first
            step towards your dream college.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            data-ocid="contact-info-grid"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              if (info.link) {
                return (
                  <a
                    key={info.label}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="bg-card rounded-2xl p-5 shadow-card border border-border hover:shadow-elevated transition-smooth flex items-start gap-4"
                    data-ocid={`contact-${info.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: info.bg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      <div className="text-sm font-medium text-foreground leading-snug break-words">
                        {info.value}
                      </div>
                    </div>
                  </a>
                );
              }
              return (
                <div
                  key={info.label}
                  className="bg-card rounded-2xl p-5 shadow-card border border-border flex items-start gap-4"
                  data-ocid={`contact-${info.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: info.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: info.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="text-sm font-medium text-foreground leading-snug break-words">
                      {info.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick CTA panel */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.96 0.02 255), oklch(0.98 0.01 34))",
            }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground text-sm">
                Take the first step today. Fill out our quick form or reach out
                directly — we'll get back to you within a few hours.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <Button
                onClick={openModal}
                className="w-full gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-smooth"
                data-ocid="contact-apply-btn"
              >
                Apply Now — Fill Registration Form
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full font-semibold border-2 transition-smooth"
                style={{
                  borderColor: "oklch(0.5 0.18 145 / 0.4)",
                  color: "oklch(0.4 0.16 145)",
                }}
                data-ocid="contact-whatsapp-btn"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20want%20to%20know%20more%20about%20admissions`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Map embed placeholder */}
            <div
              className="rounded-xl overflow-hidden border border-border h-40 flex items-center justify-center"
              style={{ background: "oklch(0.93 0 0)" }}
            >
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-center px-4"
                data-ocid="contact-map-link"
              >
                <MapPin
                  className="w-8 h-8"
                  style={{ color: "oklch(0.35 0.16 255)" }}
                />
                <span className="text-sm font-medium text-foreground">
                  View on Google Maps
                </span>
                <span className="text-xs text-muted-foreground">
                  Krishna Nagar, Agartala, Tripura
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
