import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Loader2 } from "lucide-react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔐 SIMPLE ADMIN CREDENTIALS (you can change this)
  const ADMIN_EMAIL = "admin@church.com";
  const ADMIN_PASSWORD = "123456";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      } else {
        setError("Invalid credentials");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <p className="text-sm text-gray-500">
            Dharma Jyothi Social Centre
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="text-sm">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 py-3 border rounded-xl"
                  placeholder="admin@church.com"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={16} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 py-3 border rounded-xl"
                  placeholder="••••••"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-xl flex justify-center gap-2"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              Login
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}