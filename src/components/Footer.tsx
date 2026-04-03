import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import dharmaLogo from "@/assets/dharmaLogo.png";

export default function Footer() {
  return (
    <footer className="bg-[#355E3B] text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {/* ✅ ONLY LOGO CLICKABLE */}
            <Link to="/">
              <img
                src={dharmaLogo}
                alt="Dharma Jyothi"
                className="h-14 w-14 object-contain bg-white p-1.5 rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Text (not clickable) */}
            <div>
              <p className="font-display font-bold text-gold text-lg leading-tight">
                DHARMA JYOTHI
              </p>
              <p className="font-display font-semibold text-white/90 text-base leading-tight">
                CHARITABLE SOCIETY
              </p>
            </div>
          </div>

          <p className="font-body text-white/70 text-sm leading-relaxed">
            Founded in 1976, Dharma Jyothi Charitable Society is committed to
            proclaiming the compassionate love of God through education,
            healthcare, and social outreach programs across Karnataka, Goa, and
            Manipur.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-gold font-semibold text-lg mb-5">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Mission", href: "/about#mission" },
              { label: "Our Vision", href: "/about#vision" },
              { label: "Our Work", href: "/programs" },
              { label: "Gallery", href: "/gallery" },
              { label: "Achievements", href: "/achievements" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-body text-white/70 text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Work */}
        <div>
          <h3 className="font-display text-gold font-semibold text-lg mb-5">
            Our Work
          </h3>
          <ul className="space-y-2.5">
            {[
              "Education & Formation",
              "Healthcare Services",
              "Women Empowerment",
              "Social Outreach Programs",
              "Community Development",
            ].map((item) => (
              <li
                key={item}
                className="font-body text-white/70 text-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold/60"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-gold font-semibold text-lg mb-5">
            Contact Us
          </h3>

          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <p className="font-body text-white/70 text-sm">
                Dharma Jyothi Social Centre,
                <br />
                Vamanjoor, Karnataka, India
              </p>
            </div>

            <div className="flex gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <a
                href="tel:+916360143936"
                className="font-body text-white/70 text-sm hover:text-gold transition-colors"
              >
                +91 63601-43936
              </a>
            </div>

            <div className="flex gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <a
                href="mailto:info@dharmajyothisc.org"
                className="font-body text-white/70 text-sm hover:text-gold transition-colors"
              >
                info@dharmajyothisc.org
              </a>
            </div>
          </div>

          {/* Donate Box */}
          <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="font-display text-gold font-semibold text-sm mb-2">
              Support Our Mission
            </p>
            <p className="font-body text-white/60 text-xs mb-3">
              Your contribution helps transform lives
            </p>
            <Link
              to="/donations"
              className="inline-flex items-center gap-2 bg-gold text-maroon font-body font-semibold text-sm px-4 py-2 rounded-lg hover:bg-saffron hover:text-white transition-all duration-200"
            >
              <Heart size={14} />
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="font-body text-white/50 text-xs">
            © {new Date().getFullYear()} Dharma Jyothi Charitable Society. All
            rights reserved.
          </p>

          {/* 🚀 CREATIVE PERSONAL BRAND */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="text-white/60">Crafted with ❤️ by</span>

            {/* Name + LinkedIn */}
            <a
              href="https://www.linkedin.com/in/glenvin-anil-rosario/"
              target="_blank"
              rel="noreferrer"
              className="text-gold font-semibold hover:text-white transition-colors"
            >
              Glenvin Rosario
            </a>

            {/* Divider */}
            <span className="text-white/30">|</span>

            {/* Phone clickable */}
            <a
              href="tel:9741053341"
              className="text-white/70 hover:text-gold transition-colors"
            >
              📞 97410 53341
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
