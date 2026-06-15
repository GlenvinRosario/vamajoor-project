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
    <section className="relative py-28 md:py-20 text-center overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dapmnkke3/image/upload/v1781442885/kyldmlqkjfaqhekrm59y.png"
          alt="Contact Background"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#0a1711]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1711] via-transparent to-transparent" />
      </div>

      {/* glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-300/15 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300/10 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 relative z-10"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs tracking-[3px] uppercase text-white/80">
            Get In Touch
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Contact <span className="text-emerald-300">Us</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg">
          We'd love to connect with you and support your journey
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+910000000000"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full px-5 py-3 backdrop-blur-md transition-all"
          >
            <Phone size={16} className="text-emerald-300" />
            Call Us
          </a>

          <a
            href="mailto:info@example.org"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full px-5 py-3 backdrop-blur-md transition-all"
          >
            <Mail size={16} className="text-emerald-300" />
            Email Us
          </a>

          <a
            href="#location"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full px-5 py-3 backdrop-blur-md transition-all"
          >
            <MapPin size={16} className="text-emerald-300" />
            Visit Us
          </a>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10"
      >
        <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center animate-bounce hover:bg-white/20 transition-colors">
          <ArrowDown size={16} className="text-white/70" />
        </div>
      </button>

      {/* bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-emerald-400 to-sky-300" />
    </section>
  );
}