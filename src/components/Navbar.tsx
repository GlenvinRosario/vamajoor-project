import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Our Vision", href: "/about#vision" },
    ],
  },
  { label: "Our Team", href: "/team" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Education", href: "/programs#education" },
      { label: "Health & Welfare", href: "/programs#health" },
      { label: "Women Empowerment", href: "/programs#women" },
      { label: "Rural Development", href: "/programs#rural" },
    ],
  },
  { label: "News & Events", href: "/news" },
  { label: "Donations", href: "/donations" },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Video Gallery", href: "/gallery#videos" },
    ],
  },
  { label: "E-Magazine", href: "/magazine" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
      <div className="bg-maroon text-maroon-foreground py-1.5 px-4 hidden md:flex items-center justify-between text-xs font-body">
        <div className="flex items-center gap-4">
          <a href="mailto:info@dharmajyothisc.org" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Mail size={12} />
            <span>info@dharmajyothisc.org</span>
          </a>
          <a href="tel:+916360143936" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone size={12} />
            <span>+91 63601-43936</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Facebook size={13} /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Instagram size={13} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Linkedin size={13} /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Twitter size={13} /></a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-card py-2"
            : "bg-card py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Dharma Jyothi Social Centre" className="h-12 w-12 object-contain" />
            <div>
              <p className="font-display font-bold text-saffron text-lg leading-tight">DHARMA JYOTHI</p>
              <p className="font-display font-semibold text-maroon text-base leading-tight">SOCIAL CENTRE</p>
              <p className="font-body text-muted-foreground text-[9px] uppercase tracking-widest">A Wing of Dharma Jyothi Charitable Society</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium font-body transition-all duration-200 ${
                    location.pathname === item.href
                      ? "text-saffron bg-saffron/10"
                      : "text-foreground hover:text-saffron hover:bg-saffron/5"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={13} className="opacity-60" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-card rounded-lg shadow-lg border border-border overflow-hidden animate-fade-in z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-saffron/10 hover:text-saffron transition-colors"
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
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-2.5 rounded-md text-sm font-medium font-body transition-colors ${
                      location.pathname === item.href
                        ? "text-saffron bg-saffron/10"
                        : "text-foreground hover:text-saffron hover:bg-saffron/5"
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
                          className="block px-4 py-2 text-xs font-body text-muted-foreground hover:text-saffron transition-colors"
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
