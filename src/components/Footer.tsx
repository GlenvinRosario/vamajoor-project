import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-maroon text-maroon-foreground">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-14 w-14 object-contain brightness-200" />
            <div>
              <p className="font-display font-bold text-gold text-lg leading-tight">DHARMA JYOTHI</p>
              <p className="font-display font-semibold text-white/90 text-base leading-tight">SOCIAL CENTRE</p>
            </div>
          </div>
          <p className="font-body text-white/70 text-sm leading-relaxed">
            A Wing of Dharma Jyothi Charitable Society. Dedicated to serving humanity through education, health, and community welfare programs.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-200">
              <Facebook size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-200">
              <Instagram size={15} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-200">
              <Linkedin size={15} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-200">
              <Twitter size={15} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-gold font-semibold text-lg mb-5">Quick Links</h3>
          <ul className="space-y-2.5">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Team", href: "/team" },
              { label: "Programs", href: "/programs" },
              { label: "News & Events", href: "/news" },
              { label: "Gallery", href: "/gallery" },
              { label: "E-Magazine", href: "/magazine" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-body text-white/70 text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-display text-gold font-semibold text-lg mb-5">Our Programs</h3>
          <ul className="space-y-2.5">
            {[
              "Child Education Support",
              "Health & Medical Aid",
              "Women Empowerment",
              "Rural Development",
              "Skill Development",
              "Senior Citizen Care",
              "Environmental Drives",
              "Disaster Relief",
            ].map((prog) => (
              <li key={prog} className="font-body text-white/70 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron/60"></span>
                {prog}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-gold font-semibold text-lg mb-5">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <p className="font-body text-white/70 text-sm">
                Dharma Jyothi Social Centre,<br />
                Karnataka, India
              </p>
            </div>
            <div className="flex gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+916360143936" className="font-body text-white/70 text-sm hover:text-gold transition-colors">
                +91 63601-43936
              </a>
            </div>
            <div className="flex gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <a href="mailto:info@dharmajyothisc.org" className="font-body text-white/70 text-sm hover:text-gold transition-colors">
                info@dharmajyothisc.org
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="font-display text-gold font-semibold text-sm mb-2">Support Our Cause</p>
            <p className="font-body text-white/60 text-xs mb-3">Your donation changes lives</p>
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
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-center">
          <p className="font-body text-white/50 text-xs">
            © {new Date().getFullYear()} Dharma Jyothi Social Centre. All rights reserved.
          </p>
          <p className="font-body text-white/40 text-xs">
            A Wing of Dharma Jyothi Charitable Society
          </p>
        </div>
      </div>
    </footer>
  );
}
