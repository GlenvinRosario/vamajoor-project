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
  { label: "Administration", href: "/our-team" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Achievements", href: "/achievements" },
  { label: "Events", href: "/events" },
  { label: "Donations", href: "/donations" },
  { label: "Contact", href: "/contact" },
  { label: "More", href: "/more" }
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

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
        animate={{
          paddingTop: scrolled ? "8px" : "14px",
          paddingBottom: scrolled ? "8px" : "14px",
        }}
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
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
          style={{
            background: "linear-gradient(180deg, #22c55e, #16a34a, #15803d)",
          }}
        />

        <div className="container mx-auto flex items-center justify-between ">
          {/* LOGO */}
          <div className="mr-auto flex justify-start pl-4">
            <Link to="/" className="flex items-center gap-4 group">
              <div
                className="p-2 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow shrink-0"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f0faf4)",
                  border: "1.5px solid rgba(34,197,94,0.2)",
                }}
              >
                <img
                  src={dharmaLogo}
                  className="h-16 w-16 object-contain"
                  alt="Dharma Jyothi Logo"
                />
              </div>

              <div className="text-left flex flex-col justify-center"
  style={{
            marginRight: "auto",
            textAlign: "left",
          }}
>
                  <h1
                  className="font-black leading-none text-3xl tracking-tight "
                  style={{
                    background: "linear-gradient(135deg, #0d3320, #1a7a45)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                               textAlign: "left",
                  }}
                >
                  Dharma Jyothi
                </h1>
                <p className="text-[11px] text-emerald-600/70 tracking-widest uppercase mt-1.5"   style={{ textAlign: "left" }}>
                  Charitable Society
                </p>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="relative px-4 py-3 text-base font-semibold tracking-wide transition-all duration-200 rounded-xl group"
                  style={{
                    color: active ? "#126630" : "#374151",
                    background: active ? "rgba(34,197,94,0.1)" : "transparent",
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
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #22c55e, #16a34a)",
                      opacity: active ? 1 : 0,
                    }}
                  />
                  {!active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </header>
  );
}