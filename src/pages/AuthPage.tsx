import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import logo from "@/assets/logo.png";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
      } else {
        navigate("/admin");
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin },
      });
      if (error) {
        setError(error.message);
      } else {
        setMessage("Check your email to confirm your account.");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground">Admin Login</h1>
          <p className="font-body text-muted-foreground text-sm mt-1">Dharma Jyothi Social Centre</p>
        </div>

        <div className="bg-card rounded-2xl shadow-card border border-border p-8">
          <div className="flex rounded-xl overflow-hidden border border-border mb-8">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2.5 font-body font-semibold text-sm transition-colors ${mode === "login" ? "bg-saffron text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2.5 font-body font-semibold text-sm transition-colors ${mode === "signup" ? "bg-saffron text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-foreground bg-background transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-foreground bg-background transition-colors text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-body">
                {error}
              </div>
            )}
            {message && (
              <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-body">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-light text-white font-body font-semibold py-3 rounded-xl transition-all duration-200 disabled:opacity-60"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
