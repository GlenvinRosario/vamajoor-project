import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import dharmaLogo from "@/assets/dharmaLogo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/our-team" },
  { label: "Work", href: "/programs" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* TOP BAR */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-gradient-to-r from-[#0f2f1c] to-[#1e4a2f] text-white text-xs tracking-wide">
        <div className="flex gap-4 items-center opacity-80">
          <span className="flex items-center gap-1">
            <Mail size={12} /> dharmajyothi@gmail.com
          </span>
          <span className="flex items-center gap-1">
            <Phone size={12} /> +91 70192 49483
          </span>
        </div>

        <div className="flex gap-3 opacity-80">
          <Facebook size={14} />
          <Instagram size={14} />
          <Linkedin size={14} />
          <Twitter size={14} />
        </div>
      </div>

      {/* NAVBAR */}
      <motion.nav
        animate={{
          padding: scrolled ? "10px 0" : "16px 0",
        }}
        className={`backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-white/80 shadow-lg border-b border-green-100"
            : "bg-white/60"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-xl shadow-md">
              <img src={dharmaLogo} className="h-10 w-10" />
            </div>

            <div>
              <h1 className="text-[#1e4a2f] font-bold leading-tight">
                Dharma Jyothi
              </h1>
              <p className="text-xs text-gray-500">
                Charitable Society
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.href;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1e4a2f] transition group"
                >
                  {item.label}

                  {/* underline animation */}
                  <span
                    className={`absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-green-600 to-emerald-400 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                      active ? "w-full left-0" : ""
                    }`}
                  />
                </Link>
              );
            })}

            {/* CTA BUTTON */}
            <Link
              to="/donations"
              className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-green-700 to-emerald-500 text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Donate
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg bg-green-50"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  to="/donations"
                  className="block text-center mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-700 to-emerald-500 text-white font-semibold"
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}