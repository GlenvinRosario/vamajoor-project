import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";

export default function ContactHero() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.45,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-24 md:py-17 text-center bg-[#cfe7d8] overflow-hidden border-b border-[#b5dbbe]">
      {/* Modern Large Dot Matrix Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a4d2e_2px,transparent_2px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      
      {/* Clean Ambient Accent Layer */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[36rem] rounded-full bg-white/20 blur-[100px] pointer-events-none" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 relative z-10 max-w-4xl mx-auto"
      >
        {/* Micro-badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a4d2e] border border-[#143d24] shadow-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold tracking-wider uppercase text-white">
            Get In Touch
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#0a2614] leading-tight">
          Contact <span className="text-[#1a4d2e] bg-white/40 px-3 py-1 rounded-2xl border border-white/20 shadow-sm inline-block">Us</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-[#1c4228] max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
          We'd love to connect with you and support your journey. Reach out through any of our primary channels below.
        </p>

        {/* Buttons / Quick Links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+7019249483"
            className="flex items-center gap-2 bg-white/80 hover:bg-white text-[#1a4d2e] border border-[#b5dbbe] font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-0.5"
          >
            <Phone size={16} />
            Call Us
          </a>

          <a
            href="dharmajyothicharitablesociety@gmail.com"
            className="flex items-center gap-2 bg-white/80 hover:bg-white text-[#1a4d2e] border border-[#b5dbbe] font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Email Us
          </a>

          <a
            href="#location"
            className="flex items-center gap-2 bg-white/80 hover:bg-white text-[#1a4d2e] border border-[#b5dbbe] font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-0.5"
          >
            <MapPin size={16} />
            Visit Us
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10"
      >
        <div className="w-9 h-9 rounded-full bg-white/40 border border-white/20 backdrop-blur-md flex items-center justify-center animate-bounce hover:bg-white/60 transition-colors shadow-sm text-[#1a4d2e]">
          <ArrowDown size={16} />
        </div>
      </button>
    </section>
  );
}
