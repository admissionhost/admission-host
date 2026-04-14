import { createActor } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AlertCircle,
  CheckCircle2,
  FileText,
  Info,
  Lock,
  LogOut,
  Plus,
  Trash2,
  UploadCloud,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ─── Constants ────────────────────────────────────────────────────────────────

const ADMIN_PASSWORD = "admissionhost2024";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fileNameFromUrl(url: string): string {
  return url.split("/").pop() ?? url;
}

// ─── Login Screen ─────────────────────────────────────────────────────────────

interface LoginProps {
  onLogin: () => void;
}

function LoginScreen({ onLogin }: LoginProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setError(false);
      onLogin();
    } else {
      setError(true);
      setPassword("");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.35 0.16 255) 0%, oklch(0.25 0.14 260) 100%)",
      }}
    >
      <div className="bg-card w-full max-w-sm rounded-2xl shadow-elevated border border-border overflow-hidden">
        {/* Header */}
        <div
          className="px-8 py-7 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.35 0.16 255), oklch(0.25 0.14 260))",
          }}
        >
          {/* Logo placeholder using brand colors */}
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: "oklch(0.98 0 0 / 0.15)" }}
          >
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white mb-1">Admin Login</h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            Admission Host — Fees Manager
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="admin-pw"
              className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Password
            </label>
            <Input
              id="admin-pw"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter admin password"
              autoFocus
              className={
                error
                  ? "border-destructive focus-visible:ring-destructive/30"
                  : ""
              }
              data-ocid="admin-login-password-input"
            />
            {error && (
              <div className="flex items-center gap-1.5 text-xs text-destructive">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                Incorrect password. Please try again.
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full h-11 font-semibold"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.35 0.16 255), oklch(0.45 0.18 255))",
              color: "white",
            }}
            data-ocid="admin-login-btn"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

interface DashboardProps {
  onLogout: () => void;
}

function Dashboard({ onLogout }: DashboardProps) {
  const { actor, isFetching: actorLoading } = useActor(createActor);
  const queryClient = useQueryClient();

  // ── Form state ──
  const [collegeName, setCollegeName] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [formError, setFormError] = useState("");

  // ── Fetch college list ──
  const {
    data: colleges,
    isLoading: listLoading,
    isError: listError,
  } = useQuery({
    queryKey: ["admin-college-list"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listCollegeFiles();
    },
    enabled: !!actor && !actorLoading,
  });

  // ── Add mutation ──
  const addMutation = useMutation({
    mutationFn: async ({
      name,
      fileUrl: url,
    }: {
      name: string;
      fileUrl: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      const fileName = fileNameFromUrl(url);
      return actor.addCollegeFile(ADMIN_PASSWORD, name, fileName, url);
    },
    onSuccess: () => {
      toast.success("College added successfully!", {
        description: "The fee structure is now live on the Fees page.",
        icon: <CheckCircle2 className="w-4 h-4 text-green-600" />,
      });
      setCollegeName("");
      setFileUrl("");
      setFormError("");
      queryClient.invalidateQueries({ queryKey: ["admin-college-list"] });
      queryClient.invalidateQueries({ queryKey: ["college-files"] });
    },
    onError: () => {
      toast.error("Failed to add college. Please try again.");
    },
  });

  // ── Delete mutation ──
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.deleteCollegeFile(ADMIN_PASSWORD, id);
    },
    onSuccess: () => {
      toast.success("College removed successfully.");
      queryClient.invalidateQueries({ queryKey: ["admin-college-list"] });
      queryClient.invalidateQueries({ queryKey: ["college-files"] });
    },
    onError: () => {
      toast.error("Failed to delete. Please try again.");
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!collegeName.trim()) {
      setFormError("College name is required.");
      return;
    }
    if (!fileUrl.trim()) {
      setFormError("File URL is required.");
      return;
    }
    setFormError("");
    addMutation.mutate({ name: collegeName.trim(), fileUrl: fileUrl.trim() });
  }

  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── Top Bar ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between border-b border-border shadow-subtle"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.35 0.16 255), oklch(0.25 0.14 260))",
        }}
        data-ocid="admin-header"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "oklch(0.98 0 0 / 0.15)" }}
          >
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-white text-sm leading-tight">
              Admin — Fees Structure Manager
            </h1>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
              Admission Host
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          onClick={onLogout}
          className="gap-2 text-xs font-semibold h-9 px-4 hover:bg-white/10"
          style={{ color: "rgba(255,255,255,0.85)" }}
          data-ocid="admin-logout-btn"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </header>

      <main className="container max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* ── Upload Form ───────────────────────────────────────────────────── */}
        <section
          className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
          data-ocid="admin-upload-section"
        >
          <div
            className="px-6 py-5 border-b border-border flex items-center gap-3"
            style={{ background: "oklch(0.35 0.16 255 / 0.05)" }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "oklch(0.35 0.16 255 / 0.12)" }}
            >
              <UploadCloud
                className="w-5 h-5"
                style={{ color: "oklch(0.35 0.16 255)" }}
              />
            </div>
            <div>
              <h2 className="font-bold text-foreground text-sm">
                Upload New College PDF
              </h2>
              <p className="text-xs text-muted-foreground">
                Add a college fee structure to the public listing
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Info note */}
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-xl text-xs"
              style={{
                background: "oklch(0.35 0.16 255 / 0.07)",
                color: "oklch(0.35 0.16 255)",
              }}
            >
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                Files must be uploaded to{" "}
                <code className="font-mono font-semibold">
                  src/frontend/public/assets/
                </code>{" "}
                before adding here. Use the format:{" "}
                <code className="font-mono font-semibold">
                  /assets/filename.pdf
                </code>
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="college-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  College Name
                </label>
                <Input
                  id="college-name"
                  type="text"
                  value={collegeName}
                  onChange={(e) => {
                    setCollegeName(e.target.value);
                    setFormError("");
                  }}
                  placeholder="e.g. Presidency University"
                  data-ocid="admin-college-name-input"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="file-url"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  File URL
                </label>
                <Input
                  id="file-url"
                  type="text"
                  value={fileUrl}
                  onChange={(e) => {
                    setFileUrl(e.target.value);
                    setFormError("");
                  }}
                  placeholder="/assets/college-fees.pdf"
                  data-ocid="admin-file-url-input"
                />
              </div>
            </div>

            {formError && (
              <div className="flex items-center gap-2 text-xs text-destructive">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {formError}
              </div>
            )}

            <Button
              type="submit"
              className="gap-2 font-semibold h-11 px-8"
              disabled={addMutation.isPending || actorLoading}
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.59 0.24 34), oklch(0.52 0.22 34))",
                color: "white",
              }}
              data-ocid="admin-submit-btn"
            >
              <Plus className="w-4 h-4" />
              {addMutation.isPending ? "Adding…" : "Add College"}
            </Button>
          </form>
        </section>

        {/* ── Current Colleges ──────────────────────────────────────────────── */}
        <section
          className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
          data-ocid="admin-list-section"
        >
          <div
            className="px-6 py-5 border-b border-border flex items-center justify-between"
            style={{ background: "oklch(0.35 0.16 255 / 0.05)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.35 0.16 255 / 0.12)" }}
              >
                <FileText
                  className="w-5 h-5"
                  style={{ color: "oklch(0.35 0.16 255)" }}
                />
              </div>
              <div>
                <h2 className="font-bold text-foreground text-sm">
                  Current Colleges
                </h2>
                <p className="text-xs text-muted-foreground">
                  Manage backend-stored fee structure listings
                </p>
              </div>
            </div>
            {colleges && !listLoading && (
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: "oklch(0.35 0.16 255 / 0.1)",
                  color: "oklch(0.35 0.16 255)",
                }}
              >
                {colleges.length} entr{colleges.length === 1 ? "y" : "ies"}
              </span>
            )}
          </div>

          <div className="p-6">
            {actorLoading || listLoading ? (
              <div className="space-y-3" data-ocid="admin-list-skeleton">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border"
                  >
                    <Skeleton className="w-9 h-9 rounded-lg shrink-0" />
                    <div className="flex-1 space-y-2 min-w-0">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-3 w-64" />
                    </div>
                    <Skeleton className="h-8 w-20 rounded-lg" />
                  </div>
                ))}
              </div>
            ) : listError ? (
              <div
                className="flex items-center gap-3 px-4 py-4 rounded-xl text-sm"
                style={{
                  background: "oklch(0.6 0.22 25 / 0.08)",
                  color: "oklch(0.5 0.22 25)",
                }}
                data-ocid="admin-list-error"
              >
                <AlertCircle className="w-5 h-5 shrink-0" />
                Failed to load colleges. Please refresh the page.
              </div>
            ) : !colleges || colleges.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center py-12 text-center"
                data-ocid="admin-list-empty"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.35 0.16 255 / 0.08)" }}
                >
                  <FileText
                    className="w-6 h-6"
                    style={{ color: "oklch(0.35 0.16 255)" }}
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  No colleges added yet
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Use the form above to add your first college fee structure.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {colleges.map((college) => (
                  <div
                    key={college.id}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-border hover:border-opacity-70 bg-muted/30 transition-smooth"
                    data-ocid={`admin-college-row-${college.id}`}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "oklch(0.35 0.16 255 / 0.1)" }}
                    >
                      <FileText
                        className="w-4 h-4"
                        style={{ color: "oklch(0.35 0.16 255)" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {college.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate font-mono mt-0.5">
                        {college.fileUrl}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteMutation.mutate(college.id)}
                      disabled={deleteMutation.isPending}
                      className="gap-1.5 text-xs h-8 px-3 hover:bg-destructive/10 hover:text-destructive transition-smooth shrink-0"
                      data-ocid={`admin-delete-btn-${college.id}`}
                      aria-label={`Delete ${college.name}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

// ─── Admin Upload (main export) ───────────────────────────────────────────────

export default function AdminUpload() {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <LoginScreen onLogin={() => setAuthenticated(true)} />;
  }

  return <Dashboard onLogout={() => setAuthenticated(false)} />;
}
