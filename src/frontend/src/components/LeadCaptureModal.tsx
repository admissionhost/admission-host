import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeFu7RpltnY1Nzkf31b9MOe6g6uk51EpSjc6WljVaVeopve2w/viewform?embedded=true";

interface LeadCaptureModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({
  open,
  onClose,
}: LeadCaptureModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="p-0 overflow-hidden rounded-[10px] max-w-lg w-[calc(100%-2rem)] sm:w-full border-0 shadow-2xl"
        data-ocid="lead-modal"
      >
        {/* Custom Header */}
        <DialogHeader
          className="px-6 pt-6 pb-4 gap-1 text-left"
          style={{ background: "oklch(0.99 0.005 255)" }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            data-ocid="lead-modal-close"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Urgency badge */}
          <span
            className="inline-flex self-start text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
            style={{
              background: "oklch(0.59 0.24 34 / 0.12)",
              color: "oklch(0.48 0.22 34)",
            }}
          >
            ⚡ Free Guidance — Limited Slots
          </span>

          <DialogTitle
            className="text-xl sm:text-2xl font-extrabold leading-tight"
            style={{ color: "oklch(0.28 0.14 255)" }}
          >
            Get Free Admission Guidance
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1">
            Fill this form &amp; our expert will contact you within{" "}
            <span
              className="font-semibold"
              style={{ color: "oklch(0.48 0.22 34)" }}
            >
              10 minutes
            </span>
          </DialogDescription>
        </DialogHeader>

        {/* Divider */}
        <div className="h-px bg-border mx-6" />

        {/* Scrollable iframe container */}
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "min(500px, 65vh)" }}
          data-ocid="lead-modal-form-area"
        >
          {open && (
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              width="100%"
              height="520"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Admission Guidance Registration Form"
              loading="lazy"
              className="block"
              style={{ minHeight: "480px" }}
            >
              Loading form…
            </iframe>
          )}
        </div>

        {/* Footer note */}
        <div
          className="px-6 py-3 text-center text-xs text-muted-foreground border-t border-border"
          style={{ background: "oklch(0.99 0.005 255)" }}
        >
          🔒 Your information is secure. We never share your data.
        </div>
      </DialogContent>
    </Dialog>
  );
}
