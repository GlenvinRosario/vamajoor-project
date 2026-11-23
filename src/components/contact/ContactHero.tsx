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
    <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 md:py-24 text-center bg-[#cfe7d8] overflow-hidden border-b border-[#b5dbbe]">
      {/* Modern Large Dot Matrix Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a4d2e_2px,transparent_2px)] [background-size:24px_24px] sm:[background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Clean Ambient Accent Layer */}
      <div className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 h-64 sm:h-80 w-[22rem] sm:w-[36rem] rounded-full bg-white/25 blur-[90px] sm:blur-[100px] pointer-events-none" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 sm:px-6 relative z-10 max-w-4xl mx-auto"
      >
        {/* Micro-badge */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#1a4d2e] border border-[#143d24] shadow-sm mb-5 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-white">
            Get In Touch
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0a2614] leading-[1.15]">
          Contact{" "}
          <span className="text-[#1a4d2e] bg-white/45 px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl border border-white/30 shadow-sm inline-block">
            Us
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-[#1c4228] max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed px-1">
          We&apos;d love to connect with you and support your journey. Reach out
          through any of our primary channels below.
        </p>

        {/* Responsive Buttons / Quick Links (Full width on small phones, inline on tablet+) */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href="tel:+917019249483"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white text-[#1a4d2e] border border-[#b5dbbe] text-sm sm:text-base md:text-lg font-bold px-6 sm:px-7 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:scale-95"
          >
            <Phone size={18} className="shrink-0" />
            <span>Call Us</span>
          </a>

          <a
            href="mailto:dharmajyothicharitablesociety@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white text-[#1a4d2e] border border-[#b5dbbe] text-sm sm:text-base md:text-lg font-bold px-6 sm:px-7 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:scale-95"
          >
            <Mail size={18} className="shrink-0" />
            <span>Email Us</span>
          </a>

          <a
            href="#location"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white text-[#1a4d2e] border border-[#b5dbbe] text-sm sm:text-base md:text-lg font-bold px-6 sm:px-7 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:scale-95"
          >
            <MapPin size={18} className="shrink-0" />
            <span>Visit Us</span>
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator (Hidden on extra-small screens so it never overlaps buttons) */}
      <button
        type="button"
        onClick={handleScrollDown}
        aria-label="Scroll down"
        className="hidden sm:flex absolute bottom-5 left-1/2 -translate-x-1/2 cursor-pointer z-10"
      >
        <div className="w-10 h-10 rounded-full bg-white/45 border border-white/30 backdrop-blur-md flex items-center justify-center animate-bounce hover:bg-white/70 transition-colors shadow-sm text-[#1a4d2e]">
          <ArrowDown size={18} />
        </div>
      </button>
    </section>
  );
}
