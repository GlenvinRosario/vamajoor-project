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
    <footer className="relative text-white overflow-hidden">

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e2417] via-[#163b26] to-[#0b1710]" />

      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />

      {/* MAIN */}
      <div className="relative container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="space-y-5">

          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src={dharmaLogo}
                alt="logo"
                className="h-14 w-14 rounded-2xl bg-white p-2 shadow-lg hover:scale-105 transition"
              />
            </Link>

            <div>
              <h1 className="text-lg font-bold tracking-wide">
                DHARMA JYOTHI
              </h1>
              <p className="text-xs text-white/60 tracking-[3px]">
                CHARITABLE SOCIETY
              </p>
            </div>
          </div>

          <p className="text-sm text-white/60 leading-relaxed">
            Building stronger communities through compassion, education, and healthcare since 1976.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-emerald-300 font-semibold mb-5 tracking-wide">
            Explore
          </h3>

          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Our Team", href: "/our-team" },
              { label: "Gallery", href: "/gallery" },
              { label: "Achievements", href: "/achievements" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-white/60 hover:text-emerald-300 transition flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* WORK */}
        <div>
          <h3 className="text-emerald-300 font-semibold mb-5 tracking-wide">
            Our Work
          </h3>

          <ul className="space-y-3 text-sm text-white/60">
            {[
              "Education Programs",
              "Healthcare Services",
              "Women Empowerment",
              "Community Outreach",
              "Social Development",
            ].map((i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-emerald-300 font-semibold mb-5 tracking-wide">
            Connect
          </h3>

          <div className="space-y-4 text-sm text-white/60">

            <div className="flex gap-3">
              <MapPin size={16} className="text-emerald-300 mt-1" />
              <p>
                Queen of Apostles Convent, Vamanjoor, Mangaluru
              </p>
            </div>

            <div className="flex gap-3">
              <Phone size={16} className="text-emerald-300" />
              <a href="tel:+916360143936" className="hover:text-emerald-300">
                +91 7019249483
              </a>
            </div>

            <div className="flex gap-3">
              <Mail size={16} className="text-emerald-300" />
              <a
                href="mailto:dharmajyothicharitablesociety@gmail.com"
                className="hover:text-emerald-300 break-all"
              >
                dharmajyothicharitablesociety@gmail.com
              </a>
            </div>
          </div>

          {/* DONATE CARD */}
          <div className="mt-6 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-400/40 transition">

            <p className="text-emerald-300 font-semibold text-sm mb-1">
              Support Mission
            </p>

            <p className="text-xs text-white/50 mb-3">
              Your contribution creates real impact
            </p>

            <Link
              to="/donations"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:scale-105 transition"
            >
              <Heart size={14} />
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/10 py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">

          <p>
            © {new Date().getFullYear()} Dharma Jyothi Charitable Society
          </p>

          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart size={12} className="text-emerald-400" />
            <span>by</span>

            <a
              href="https://www.linkedin.com"
              className="text-emerald-300 hover:text-white font-semibold"
            >
              Glenvin Rosario
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}