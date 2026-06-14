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
          HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://res.cloudinary.com/dapmnkke3/image/upload/v1781382629/lykwldkuxn2qatifjeip.png"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* floating decorative circle */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-1/3 w-[420px] h-[420px] rounded-full border border-white/10"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.15), transparent 70%)",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-3xl"
          >
            {/* badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md text-white text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Serving Humanity Since 1976
              </span>
            </motion.div>

            {/* heading */}
            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight"
            >
              Serving
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #86efac, #22c55e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Humanity
              </span>
              <br />
              <span className="text-white/75 text-5xl md:text-6xl font-semibold">
                With Compassion
              </span>
            </motion.h1>

            {/* description */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-[17px] text-white/70 leading-relaxed"
            >
              Dharma Jyothi Charitable Society is dedicated to education,
              healthcare, empowerment, and social transformation through faith,
              service, and compassion.
            </motion.p>

            {/* buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-[#0d3320] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f0fdf4)",
                  boxShadow: "0 8px 32px rgba(255,255,255,0.2)",
                }}
              >
                Discover Our Story
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative -mt-20 z-20 px-6">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-3xl p-8 text-center"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(34,197,94,0.12)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.8) inset",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{
                    background: "linear-gradient(90deg, #22c55e, #16a34a)",
                  }}
                />
                <h3
                  className="text-4xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #0d3320, #16a34a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.value}
                </h3>
                <p className="mt-2 text-sm text-gray-500 font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ABOUT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="py-32"
        style={{
          background:
            "linear-gradient(160deg, #f0faf4 0%, #ffffff 50%, #e8f5e9 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* image side */}
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
          SERVICES / FOCUS AREAS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <Label>What We Do</Label>
            <h2 className="text-5xl font-bold text-[#0d3320]">
              Our Focus Areas
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-[15px] leading-relaxed">
              Four pillars that define our mission and guide every initiative we
              undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {programs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl p-8 cursor-default"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                {/* top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${item.colorMid}, ${item.color})`,
                  }}
                />

                {/* bg blob on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, ${item.colorLight}, transparent 70%)`,
                  }}
                />

                <div
                  className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    background: item.colorLight,
                    border: `1.5px solid ${item.color}44`,
                  }}
                >
                  <item.icon size={24} style={{ color: item.colorMid }} />
                </div>

                <h3 className="relative z-10 text-[17px] font-bold text-[#0d3320] mb-3">
                  {item.title}
                </h3>
                <p className="relative z-10 text-gray-500 text-sm leading-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHY CHOOSE US
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="py-32"
        style={{
          background: "linear-gradient(160deg, #e8f5e9, #f0faf4 60%, #e8f5e9)",
        }}
      >
        <div className="container mx-auto px-6">
          <div
            className="overflow-hidden rounded-[40px]"
            style={{
              background:
                "linear-gradient(135deg, #0d3320 0%, #155c35 40%, #1a7a45 100%)",
              boxShadow: "0 32px 80px rgba(13,51,32,0.35)",
            }}
          >
            <div className="grid lg:grid-cols-2">
              {/* text */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-12 lg:p-16 text-white space-y-8"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[3px]"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "#d4e8d6",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Sparkles size={10} className="text-[#e8d9a8]" />
                  Why Choose Us
                </motion.span>

                <h2 className="text-4xl md:text-[3.4rem] font-bold leading-[1.08] tracking-tight">
                  <span className="text-white">Creating Meaningful</span>
                  <span className="relative inline-block mt-1">
                    <span
                      className="relative italic font-light"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        color: "#f4ecd8",
                      }}
                    >
                      Impact
                    </span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-0 -bottom-2 h-[2px] w-full origin-left"
                      style={{
                        background:
                          "linear-gradient(90deg, #e8d9a8, transparent)",
                      }}
                    />
                  </span>
                </h2>

                <div className="space-y-5">
                  {whyUs.map((item, i) => (
                    <motion.div
                      key={item}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{
                          background: "rgba(244,236,216,0.08)",
                          border: "1.5px solid rgba(232,217,168,0.3)",
                        }}
                      >
                        <span className="text-[#e8d9a8] text-xs font-bold">
                          ✓
                        </span>
                      </div>
                      <span className="text-white/85 text-[15px]">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Link
                  to="/about"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="group inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-semibold text-[#0d3320] hover:scale-105 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #f4ecd8, #e8d9a8)",
                    boxShadow: "0 8px 24px rgba(232,217,168,0.25)",
                  }}
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>

              {/* image */}
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden min-h-[400px]"
              >
                <img
                  src="https://res.cloudinary.com/dapmnkke3/image/upload/v1781385333/vesagempv8x5dhtuv2j1.png"
                  alt="Why choose us"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0d3320]/60" />
              </motion.div>
            </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                className="relative overflow-hidden rounded-3xl group"
                style={{ height: i % 2 === 0 ? "280px" : "220px" }}
              >
                <img
                  src={hero1}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3320]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
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
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-white/5" />
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
      </section>
    </main>
  );
}
