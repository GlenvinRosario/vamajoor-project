import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#355E3B] via-[#2f4f34] to-[#1f2d24] text-center overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>

        <p className="text-white/70 text-lg">
          We’d love to connect with you and support your journey
        </p>
      </motion.div>
    </section>
  );
}