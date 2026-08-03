import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User, AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulated login for now
    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        localStorage.setItem("adminToken", "bmj-token-xyz");
        navigate("/admin");
      } else {
        setError("Kredensial salah. Gunakan admin / admin123 untuk masuk.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <SEO title="Login Admin CMS" description="Portal login administrator untuk mengelola konten website PT. Budi Mulya Jaya." />

      <div className="min-h-[70svh] flex items-center justify-center bg-muted/20 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md w-full space-y-8 bg-card border rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="text-center space-y-2">
            <div className="flex h-12 w-12 items-center justify-center bg-primary rounded-xl text-primary-foreground font-black text-xl tracking-tighter mx-auto">
              BMJ
            </div>
            <h1 className="text-2xl font-black uppercase tracking-tight text-foreground">CMS Portal Admin</h1>
            <p className="text-xs text-muted-foreground">Silakan masuk menggunakan kredensial Anda.</p>
          </div>

          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs p-3.5 rounded-lg flex items-center gap-2">
              <AlertCircle className="size-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Username</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                  <User className="size-4" />
                </span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary"
                  placeholder="Masukkan username"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                  <Lock className="size-4" />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary"
                  placeholder="Masukkan password"
                />
              </div>
            </div>

            <Button type="submit" disabled={loading} className="w-full font-bold py-5 cursor-pointer">
              {loading ? "Menghubungkan..." : "Masuk ke Dashboard"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
