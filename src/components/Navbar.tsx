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
  ChevronDown,
} from "lucide-react";
import dharmaLogo from "@/assets/dharmaLogo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Administration", href: "/our-team" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Donations", href: "/donations" },
  { label: "Contact", href: "/contact" },
];

const dropdownItems = [
  { label: "Upcoming Events", href: "/events" },
  { label: "Wishes", href: "/wishes" },
  { label: "Achievements", href: "/achievements" },
  { label: "Publications", href: "/publications" },
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans">
      {/* ── TOP CONTACT INFO BAR ── */}
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
          // Increased padding top/bottom to allow the expanded logo and text to breathe
          paddingTop: scrolled ? "12px" : "20px",
          paddingBottom: scrolled ? "12px" : "20px",
        }}
        transition={{ duration: 0.3 }}
        className="relative px-2 md:px-4"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.95)"
            : "linear-gradient(135deg, rgba(240,250,244,0.97) 0%, rgba(232,245,233,0.97) 50%, rgba(244,253,246,0.97) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(21,92,53,0.12)"
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

        <div className="container mx-auto max-w-[99%] flex items-center justify-between">
          {/* LOGO BRAND BLOCK */}
          <div className="mr-auto flex justify-start pl-0">
            <Link to="/" className="flex items-center gap-5 group">
              <div
                className="p-2 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow shrink-0"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f0faf4)",
                  border: "1.5px solid rgba(34,197,94,0.2)",
                }}
              >
                {/* Scaled logo back to h-16 w-16 */}
                <img
                  src={dharmaLogo}
                  className="h-16 w-16 object-contain"
                  alt="Dharma Jyothi Logo"
                />
              </div>

              <div className="text-left flex flex-col justify-center">
                <h1 className="font-black leading-none text-4xl tracking-tight whitespace-nowrap bg-gradient-to-br from-[#0d3320] to-[#1a7a45] bg-clip-text text-transparent pb-2">
                  Dharma Jyothi
                </h1>
                <p className="font-medium text-lg uppercase tracking-widest text-emerald-800 opacity-90 matches-prominent">
                  Charitable Society
                </p>
              </div>
            </Link>
          </div>
          {/* DESKTOP LINKS TRACKS */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="relative px-4 py-3 text-base font-semibold tracking-wide transition-all duration-200 rounded-xl"
                  style={{
                    color: active ? "#126630" : "#374151",
                    background: active ? "rgba(34,197,94,0.1)" : "transparent",
                  }}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-4 right-4 h-[2.5px] rounded-full bg-gradient-to-r from-emerald-500 to-green-600"
                    />
                  )}
                </Link>
              );
            })}

            {/* ── "MORE" HOVER DROPDOWN CONTAINER ── */}
            <div
              className="relative py-4"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-3 text-base font-semibold tracking-wide text-gray-700 hover:text-emerald-800 rounded-xl transition-colors"
                style={{
                  background: dropdownOpen
                    ? "rgba(34,197,94,0.06)"
                    : "transparent",
                }}
              >
                <span>More</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-emerald-700" : ""}`}
                />
              </button>

              {/* FLOATING DROPDOWN OPTIONS CARD */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-1 w-56 rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl z-50"
                  >
                    {dropdownItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block w-full px-4 py-2.5 text-sm font-semibold text-gray-600 rounded-xl hover:bg-emerald-50/60 hover:text-emerald-800 transition-all text-left"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
