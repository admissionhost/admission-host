import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917628954403";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20want%20to%20know%20more%20about%20college%20admissions`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-elevated transition-smooth hover:scale-105 hover:shadow-[0_25px_30px_-5px_rgba(0,0,0,0.2)] animate-float"
      style={{ background: "oklch(0.5 0.18 145)", color: "oklch(0.98 0 0)" }}
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp-floating-btn"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
