import { createActor } from "@/backend";
import type { CollegeFile } from "@/backend.d";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  ImageIcon,
  Lock,
  Search,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CollegeEntry {
  id: string;
  collegeName: string;
  fileUrl: string;
  fileType: "pdf" | "image";
  source: "static" | "backend";
}

// ─── Static real-uploaded assets ─────────────────────────────────────────────

function extractCollegeName(filename: string): string {
  const base =
    filename
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "") ?? filename;
  const noUuid = base.replace(
    /-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    "",
  );
  const spaced = noUuid.replace(/[_-]/g, " ");
  return spaced
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const REAL_FILES: { filename: string; fileType: "pdf" | "image" }[] = [
  {
    filename: "acharya_institute-019d760c-433b-7264-ae49-8d09dd1f92b7.pdf",
    fileType: "pdf",
  },
  {
    filename: "brainware_university-019d760c-587e-76f1-be18-5f79d3a4b449.pdf",
    fileType: "pdf",
  },
  {
    filename:
      "christian_college_bangalore-019d760c-72cd-741b-b372-6234171dc58c.pdf",
    fileType: "pdf",
  },
  {
    filename:
      "krupanidhi_group_of_institutions-019d760c-578e-73fd-b06e-4ed20164846d.pdf",
    fileType: "pdf",
  },
  {
    filename:
      "nitte_ug_pg_domestic_nri_lateral_entry-019d760c-5924-738d-8bd7-1e4e238f4452.pdf",
    fileType: "pdf",
  },
  {
    filename: "presidency_university-019d760c-4aa4-754b-9148-c4dc7c9fbfae.pdf",
    fileType: "pdf",
  },
  {
    filename:
      "sapthagiri_institute_of_medical_sciences_and_research_centre-019d760c-3d43-7226-8cf8-47d93d9a3aca.pdf",
    fileType: "pdf",
  },
  {
    filename:
      "sapthagiri_institute_of_medical_sciences_research_centre-019d760c-49a7-71ba-a893-8c021f570ce5.pdf",
    fileType: "pdf",
  },
  {
    filename:
      "techno_india_university-019d760c-4628-7463-ba3d-5f6f6de6b041.pdf",
    fileType: "pdf",
  },
  {
    filename:
      "manjushree_institutions-019d760c-4209-7160-b2a7-2cae4a69ee30.jpg",
    fileType: "image",
  },
  {
    filename:
      "shridevi_medical_college-019d760c-42a9-7561-9a8a-b3cc280eb2c5.jpg",
    fileType: "image",
  },
];

const STATIC_ENTRIES: CollegeEntry[] = REAL_FILES.map((f, i) => ({
  id: `static-${i + 1}`,
  collegeName: extractCollegeName(f.filename),
  fileUrl: `/assets/${f.filename}`,
  fileType: f.fileType,
  source: "static",
}));

// ─── Backend → CollegeEntry mapper ───────────────────────────────────────────

function mapBackendEntry(cf: CollegeFile): CollegeEntry {
  const ext = cf.fileName.split(".").pop()?.toLowerCase() ?? "";
  const isImage = ["jpg", "jpeg", "png", "gif", "webp"].includes(ext);
  return {
    id: `backend-${cf.id}`,
    collegeName: cf.name,
    fileUrl: cf.fileUrl,
    fileType: isImage ? "image" : "pdf",
    source: "backend",
  };
}

// ─── College Card ─────────────────────────────────────────────────────────────

function CollegeCard({ college }: { college: CollegeEntry }) {
  const isImage = college.fileType === "image";
  return (
    <article
      className="bg-card rounded-xl shadow-card border border-border hover:shadow-elevated transition-smooth group flex flex-col"
      data-ocid={`fees-card-${college.id}`}
    >
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background: isImage
                ? "oklch(0.59 0.24 34 / 0.1)"
                : "oklch(0.35 0.16 255 / 0.1)",
            }}
            aria-hidden="true"
          >
            {isImage ? (
              <ImageIcon
                className="w-5 h-5"
                style={{ color: "oklch(0.59 0.24 34)" }}
              />
            ) : (
              <FileText
                className="w-5 h-5"
                style={{ color: "oklch(0.35 0.16 255)" }}
              />
            )}
          </div>
          <Badge
            variant="secondary"
            className="text-xs font-semibold mt-0.5"
            style={
              isImage
                ? {
                    background: "oklch(0.59 0.24 34 / 0.12)",
                    color: "oklch(0.59 0.24 34)",
                  }
                : {
                    background: "oklch(0.35 0.16 255 / 0.1)",
                    color: "oklch(0.35 0.16 255)",
                  }
            }
          >
            {isImage ? "Fee Chart" : "PDF"}
          </Badge>
        </div>

        <h3
          className="text-sm font-bold leading-snug mb-auto min-w-0"
          style={{ color: "oklch(0.35 0.16 255)" }}
        >
          {college.collegeName}
        </h3>

        <a
          href={college.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-smooth hover:opacity-85 active:scale-95"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.59 0.24 34), oklch(0.52 0.22 34))",
            color: "white",
          }}
          data-ocid={`fees-view-btn-${college.id}`}
          aria-label={`View fee structure for ${college.collegeName}`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          {isImage ? "View Fee Chart" : "View PDF"}
        </a>
      </div>
    </article>
  );
}

// ─── Card Skeleton ────────────────────────────────────────────────────────────

function CardSkeleton() {
  return (
    <div className="bg-card rounded-xl border border-border p-5 space-y-4">
      <div className="flex items-start gap-3">
        <Skeleton className="w-10 h-10 rounded-lg shrink-0" />
        <Skeleton className="h-5 w-14 rounded-full mt-0.5" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface FeesStructureProps {
  onNavigateHome: () => void;
  onOpenModal: () => void;
  onNavigateAdmin?: () => void;
}

export default function FeesStructure({
  onNavigateHome,
  onOpenModal,
  onNavigateAdmin,
}: FeesStructureProps) {
  const [query, setQuery] = useState("");

  const { actor, isFetching: actorLoading } = useActor(createActor);

  const { data: backendFiles, isLoading: backendLoading } = useQuery({
    queryKey: ["college-files"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listCollegeFiles();
    },
    enabled: !!actor && !actorLoading,
  });

  // Merge: backend first, then static (no duplicates by fileUrl)
  const allEntries = useMemo(() => {
    const backendEntries: CollegeEntry[] = (backendFiles ?? []).map(
      mapBackendEntry,
    );
    const backendUrls = new Set(backendEntries.map((e) => e.fileUrl));
    const dedupedStatic = STATIC_ENTRIES.filter(
      (s) => !backendUrls.has(s.fileUrl),
    );
    return [...backendEntries, ...dedupedStatic];
  }, [backendFiles]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allEntries;
    return allEntries.filter((c) => c.collegeName.toLowerCase().includes(q));
  }, [query, allEntries]);

  const isLoading = actorLoading || backendLoading;

  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section
        className="pt-28 pb-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.35 0.16 255) 0%, oklch(0.25 0.14 260) 100%)",
        }}
        data-ocid="fees-header"
      >
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "oklch(0.59 0.24 34)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-10 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "oklch(0.59 0.24 34)" }}
          aria-hidden="true"
        />

        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-smooth hover:opacity-80"
              style={{
                color: "rgba(255,255,255,0.85)",
                background: "oklch(0.98 0 0 / 0.12)",
              }}
              data-ocid="fees-back-btn"
              aria-label="Back to home"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>

            {/* Hidden admin button — not in nav */}
            <button
              type="button"
              onClick={() => onNavigateAdmin?.()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-smooth hover:opacity-80"
              style={{
                color: "rgba(255,255,255,0.45)",
                background: "oklch(0.98 0 0 / 0.06)",
              }}
              data-ocid="admin-trigger-btn"
              aria-label="Admin panel"
            >
              <Lock className="w-3 h-3" />
              Admin
            </button>
          </div>

          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
              style={{
                background: "oklch(0.59 0.24 34 / 0.25)",
                color: "oklch(0.85 0.18 34)",
              }}
            >
              <FileText className="w-3.5 h-3.5" />
              Fee Structure Directory
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              College Fee Structures
            </h1>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Browse and view official fee PDFs and charts from top colleges
            </p>
            <div
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: "oklch(0.98 0 0 / 0.15)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {isLoading
                ? "Loading…"
                : `${allEntries.length} college${allEntries.length !== 1 ? "s" : ""} listed`}
            </div>
          </div>
        </div>
      </section>

      {/* ── Search Bar ──────────────────────────────────────────────────────── */}
      <section className="py-8 bg-background sticky top-16 z-30 shadow-subtle border-b border-border">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="relative max-w-xl mx-auto">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
              style={{ color: "oklch(0.59 0.24 34)" }}
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by college name…"
              className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm font-medium focus:outline-none focus:ring-2 transition-smooth"
              style={
                {
                  "--tw-ring-color": "oklch(0.35 0.16 255 / 0.4)",
                } as React.CSSProperties
              }
              data-ocid="fees-search-input"
              aria-label="Search colleges"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {query && !isLoading && (
            <p className="text-center text-xs mt-3 text-muted-foreground">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for
              &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </section>

      {/* ── Cards Grid ──────────────────────────────────────────────────────── */}
      <section className="py-12" data-ocid="fees-cards-section">
        <div className="container max-w-5xl mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"] as const).map(
                (k) => (
                  <CardSkeleton key={k} />
                ),
              )}
            </div>
          ) : filtered.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-24 text-center"
              data-ocid="fees-empty-state"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "oklch(0.35 0.16 255 / 0.08)" }}
              >
                <Search
                  className="w-7 h-7"
                  style={{ color: "oklch(0.35 0.16 255)" }}
                />
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "oklch(0.35 0.16 255)" }}
              >
                No colleges found
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs mb-6">
                Try a different college name or clear the search filter.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-sm font-semibold transition-smooth hover:opacity-70"
                style={{ color: "oklch(0.59 0.24 34)" }}
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "oklch(0.96 0.01 255)" }}>
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "oklch(0.35 0.16 255)" }}
          >
            Need Help Choosing the Right College?
          </h2>
          <p className="text-muted-foreground mb-7 max-w-md mx-auto">
            Our expert counsellors will guide you to the perfect college that
            fits your budget and career goals.
          </p>
          <Button
            onClick={onOpenModal}
            className="font-semibold px-8 py-3 h-auto shadow-card transition-smooth hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.59 0.24 34), oklch(0.52 0.22 34))",
              color: "white",
            }}
            data-ocid="fees-cta-btn"
          >
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
