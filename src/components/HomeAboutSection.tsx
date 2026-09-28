"use client";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Users,
  Leaf,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import hero1 from "@/assets/hero1.jpg";

/* ─── DATA ──────────────────────────────────────────────── */
const stats = [
  { value: "50+", label: "Years of Service" },
  { value: "500+", label: "Children Supported" },
  { value: "120+", label: "Health Camps" },
  { value: "1000+", label: "Lives Impacted" },
];

const programs = [
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Providing medical care, health camps, and outreach services for vulnerable communities.",
    color: "#22c55e",
    colorLight: "#dcfce7",
    colorMid: "#16a34a",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Supporting children and youth through quality education and skill development.",
    color: "#34d399",
    colorLight: "#d1fae5",
    colorMid: "#059669",
  },
  {
    icon: Users,
    title: "Social Outreach",
    description:
      "Serving marginalized communities through social and welfare initiatives.",
    color: "#4ade80",
    colorLight: "#bbf7d0",
    colorMid: "#15803d",
  },
  {
    icon: Leaf,
    title: "Women Empowerment",
    description:
      "Creating opportunities through training, self-help groups, and leadership programs.",
    color: "#86efac",
    colorLight: "#f0fdf4",
    colorMid: "#166534",
  },
];

const whyUs = [
  "50+ Years of Dedicated Service",
  "Community-Centered Approach",
  "Education & Healthcare Focus",
  "Transparent & Sustainable Initiatives",
];

/* ─── ANIMATION VARIANTS ────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── SECTION LABEL ─────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[3px]"
      style={{ background: "#dcfce7", color: "#15803d" }}
    >
      <Sparkles size={10} />
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   HOME
═══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
  
    

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ABOUT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="py-32"
        style={{
          background: "linear-gradient(160deg, #e8f5e9, #f0faf4 60%, #e8f5e9)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-full h-full rounded-[36px]" />
              <img
                src="https://res.cloudinary.com/dapmnkke3/image/upload/v1781383642/a0itfm5tpqfh6tumlpqs.png"
                alt="About"
                className="relative z-10 w-full h-[520px] object-cover rounded-[32px] shadow-2xl"
              />
              {/* floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 z-20 rounded-3xl px-6 py-4 shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #0d3320, #16a34a)",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              >
                <p className="text-white font-bold text-2xl">1976</p>
                <p className="text-emerald-300 text-xs tracking-widest uppercase">
                  Founded
                </p>
              </motion.div>
            </motion.div>

            {/* text side */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Label>About Us</Label>

              <h2 className="text-5xl font-bold text-[#0d3320] leading-tight">
                Lighting Lives Through
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #16a34a, #22c55e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Service & Compassion
                </span>
              </h2>

              <p className="text-gray-500 leading-8 text-[15px]">
                Dharma Jyothi Charitable Society has been serving communities
                through education, healthcare, women empowerment, and social
                outreach programs since 1976.
              </p>
              <p className="text-gray-500 leading-8 text-[15px]">
                Inspired by faith and committed to human dignity, we work to
                uplift the vulnerable and create opportunities for sustainable
                development.
              </p>

              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #0d3320, #16a34a)",
                  boxShadow: "0 6px 20px rgba(22,163,74,0.3)",
                }}
              >
                Learn More
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          GALLERY
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <Label>Gallery</Label>
              <h2 className="text-5xl font-bold text-[#0d3320]">
                Moments Of Impact
              </h2>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to="/gallery"
                className="hidden md:inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold text-sm transition-all hover:scale-105"
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                  border: "1.5px solid #86efac",
                }}
              >
                View All <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* masonry-style grid */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5" style ={{background: "linear-gradient(160deg, #f0faf4, #e8f5e9)" }}>
  {[
    "https://res.cloudinary.com/dapmnkke3/image/upload/v1781438019/brpkrcclfgzv8uj9ntyi.png",
    "https://res.cloudinary.com/dapmnkke3/image/upload/v1781438016/bybdjd373tlvimxflpin.jpg",
    "https://res.cloudinary.com/dapmnkke3/image/upload/v1781438015/jvzvbw2ytbxot7shqzzq.jpg",
    "https://res.cloudinary.com/dapmnkke3/image/upload/v1781438013/fju0ihov7rxofw7rscsj.jpg",
  ].map((src, i) => (
    <motion.div
      key={i}
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-3xl group cursor-pointer
        border border-white/10
        shadow-[0_8px_30px_rgba(13,51,32,0.15)]
        hover:shadow-[0_20px_50px_rgba(13,51,32,0.35)]
        transition-shadow duration-500"
      style={{ height: "260px" }}
    >
      {/* Image */}
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
      />

      {/* Base gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d3320]/80 via-[#0d3320]/0 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Glow ring on hover */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-white/30 transition-all duration-500" />

      {/* Animated shine sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />

      {/* Bottom accent bar */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#355E3B] to-[#f59e0b]"
      />

      {/* Corner accent dot */}
      <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* <section
        className="py-32"
        style={{ background: "linear-gradient(160deg, #f0faf4, #e8f5e9)" }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] p-14 md:p-24 text-center"
            style={{
              background:
                "linear-gradient(135deg, #0d3320 0%, #155c35 50%, #1a7a45 100%)",
              boxShadow: "0 32px 80px rgba(13,51,32,0.3)",
            }}
          >
            {/* decorative rings */}
            {/* <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-white/5" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full border border-white/5" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-8 right-8 w-24 h-24 rounded-full border border-emerald-400/20"
            />

            <div className="relative z-10 space-y-6">
              <Label>Get Involved</Label>

              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Join Us In Making
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(90deg, #86efac, #22c55e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  A Difference
                </span>
              </h2>

              <p className="max-w-xl mx-auto text-white/65 text-[16px] leading-relaxed">
                Together we can create opportunities, empower communities, and
                bring hope to those who need it most.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-[#0d3320] hover:scale-105 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #ffffff, #f0fdf4)",
                    boxShadow: "0 8px 24px rgba(255,255,255,0.15)",
                  }}
                >
                  Get Involved <ArrowRight size={16} />
                </Link>

                <Link
                  to="/donations"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all"
                >
                  Donate Now <Heart size={16} className="text-emerald-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */} 
    </main>
  );
}
