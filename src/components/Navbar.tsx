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

const socialLinks = [
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Twitter, href: "#" },
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
      {/* ── TOP BAR ── */}
      <div
        className="hidden md:flex justify-between items-center px-8 py-2 text-white text-xs tracking-wide"
        style={{
          background:
            "linear-gradient(90deg, #0d3320 0%, #155c35 40%, #1a7a45 70%, #0f4a28 100%)",
        }}
      >
        <div className="flex gap-5 items-center">
          <a
            href="mailto:dharmajyothi@gmail.com"
            className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
          >
            <Mail size={12} className="text-emerald-300" />
            <span>dharmajyothi@gmail.com</span>
          </a>
          <span className="w-px h-3 bg-white/20" />
          <a
            href="tel:+917019249483"
            className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
          >
            <Phone size={12} className="text-emerald-300" />
            <span>+91 70192 49483</span>
          </a>
        </div>

        <div className="flex gap-3 items-center">
          {socialLinks.map(({ Icon, href }) => (
            <a
              key={href}
              href={href}
              className="p-1 rounded-full opacity-70 hover:opacity-100 hover:bg-white/10 transition-all"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <motion.nav
        animate={{ paddingTop: scrolled ? "8px" : "14px", paddingBottom: scrolled ? "8px" : "14px" }}
        transition={{ duration: 0.3 }}
        className="relative px-4"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.92)"
            : "linear-gradient(135deg, rgba(240,250,244,0.97) 0%, rgba(232,245,233,0.97) 50%, rgba(244,253,246,0.97) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(21,92,53,0.12), 0 1px 0 rgba(21,92,53,0.08)"
            : "0 2px 12px rgba(21,92,53,0.06)",
          borderBottom: "1px solid rgba(21,92,53,0.08)",
        }}
      >
        {/* subtle left accent stripe */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
          style={{
            background: "linear-gradient(180deg, #22c55e, #16a34a, #15803d)",
          }}
        />

        <div className="container mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="p-1.5 rounded-xl shadow-md group-hover:shadow-lg transition-shadow"
              style={{
                background: "linear-gradient(135deg, #ffffff, #f0faf4)",
                border: "1.5px solid rgba(34,197,94,0.2)",
              }}
            >
              <img src={dharmaLogo} className="h-10 w-10" alt="Dharma Jyothi Logo" />
            </div>
            <div>
              <h1
                className="font-bold leading-tight text-base"
                style={{
                  background: "linear-gradient(135deg, #0d3320, #1a7a45)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Dharma Jyothi
              </h1>
              <p className="text-[11px] text-emerald-600/70 tracking-wide">
                Charitable Society
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group"
                  style={{
                    color: active ? "#15803d" : "#374151",
                    background: active ? "rgba(34,197,94,0.08)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(34,197,94,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                  }}
                >
                  {item.label}

                  {/* animated underline */}
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #22c55e, #16a34a)",
                      opacity: active ? 1 : 0,
                    }}
                  />

                  {/* hover dot */}
                  {!active && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </Link>
              );
            })}

            {/* DONATE CTA */}
            <Link
              to="/donations"
              className="ml-3 px-5 py-2 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              style={{
                background:
                  "linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #15803d 100%)",
                boxShadow: "0 4px 14px rgba(22,163,74,0.35)",
              }}
            >
              Donate
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl transition-colors"
            style={{
              background: open
                ? "rgba(34,197,94,0.12)"
                : "rgba(34,197,94,0.06)",
              border: "1px solid rgba(34,197,94,0.15)",
            }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X className="text-green-700" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu className="text-green-700" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, #f0faf4 0%, #e8f5e9 60%, #f5fff7 100%)",
              borderBottom: "1px solid rgba(34,197,94,0.15)",
              boxShadow: "0 8px 24px rgba(21,92,53,0.1)",
            }}
          >
            <div className="px-5 py-5 space-y-1">
              {navItems.map((item, i) => {
                const active = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      to={item.href}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                      style={{
                        color: active ? "#15803d" : "#374151",
                        background: active
                          ? "rgba(34,197,94,0.1)"
                          : "transparent",
                        borderLeft: active
                          ? "3px solid #22c55e"
                          : "3px solid transparent",
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.04, duration: 0.2 }}
                className="pt-2"
              >
                <Link
                  to="/donations"
                  className="block text-center px-4 py-3 rounded-2xl text-white font-semibold text-sm shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #16a34a 0%, #22c55e 60%, #15803d 100%)",
                    boxShadow: "0 4px 14px rgba(22,163,74,0.3)",
                  }}
                >
                  Donate Now
                </Link>
              </motion.div>

              {/* mobile social + contact */}
              <div className="pt-3 border-t border-green-100 flex justify-between items-center px-2">
                <div className="flex gap-4 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <Phone size={10} className="text-emerald-500" />
                    +91 70192 49483
                  </span>
                </div>
                <div className="flex gap-2">
                  {socialLinks.map(({ Icon }, i) => (
                    <div
                      key={i}
                      className="p-1.5 rounded-full"
                      style={{ background: "rgba(34,197,94,0.08)" }}
                    >
                      <Icon size={13} className="text-green-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}