import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Our Vision", href: "/about#vision" },
      { label: "Our History", href: "/about#history" },
    ],
  },

  {
    label: "Our Work",
    href: "/programs",
    children: [
      { label: "Education Services", href: "/programs#education" },
      { label: "Healthcare Services", href: "/programs#health" },
      { label: "Women Empowerment", href: "/programs#women" },
      { label: "Social Outreach", href: "/programs#social" },
    ],
  },

  // {
  //   label: "Institutions",
  //   href: "/institutions",
  //   children: [
  //     { label: "Schools", href: "/institutions#schools" },
  //     { label: "Hospitals", href: "/institutions#hospitals" },
  //     { label: "Social Centres", href: "/institutions#centres" },
  //   ],
  // },

  { label: "News & Events", href: "/news" },

  { label: "Gallery", href: "/gallery" },

  { label: "E-Magazine", href: "/magazine" },

  {
    label: "Donate",
    href: "/donations",
    highlight: true,
  },

  { label: "Contact", href: "/contact" },
  { label: "Achievements", href: "/achievements" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-[#355E3B] text-white py-1.5 px-4 hidden md:flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <a
            href="mailto:info@dharmajyothisc.org"
            className="flex items-center gap-1.5 hover:text-gray-200"
          >
            <Mail size={12} />
            <span>info@dharmajyothisc.org</span>
          </a>

          <a
            href="tel:+916360143936"
            className="flex items-center gap-1.5 hover:text-gray-200"
          >
            <Phone size={12} />
            <span>+91 63601-43936</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#">
            <Facebook size={13} />
          </a>
          <a href="#">
            <Instagram size={13} />
          </a>
          <a href="#">
            <Linkedin size={13} />
          </a>
          <a href="#">
            <Twitter size={13} />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* 🔥 LOGO (Improved) */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white p-1.5 rounded-xl shadow-sm group-hover:shadow-md transition">
              <img
                src={dharmaLogo}
                alt="Dharma Jyothi"
                className="h-11 w-11 object-contain group-hover:scale-105 transition"
              />
            </div>

            <div className="leading-tight">
              <p className="text-[#355E3B] font-bold text-base tracking-wide">
                Dharma Jyothi
              </p>
              <p className="text-gray-600 text-xs font-medium">
                Charitable Society
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    item.highlight
                      ? "bg-[#355E3B] text-white hover:bg-green-800"
                      : location.pathname === item.href
                        ? "text-[#355E3B] bg-[#355E3B]/10"
                        : "text-gray-700 hover:text-[#355E3B] hover:bg-[#355E3B]/5"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={13} />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border overflow-hidden z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#355E3B]/10 hover:text-[#355E3B]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-2.5 rounded-md text-sm font-medium ${
                      item.highlight
                        ? "bg-[#355E3B] text-white"
                        : location.pathname === item.href
                          ? "text-[#355E3B] bg-[#355E3B]/10"
                          : "text-gray-700 hover:text-[#355E3B] hover:bg-[#355E3B]/5"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-xs text-gray-500 hover:text-[#355E3B]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
