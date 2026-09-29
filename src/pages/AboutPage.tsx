import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Users, 
  Star, 
  Award, 
  Eye, 
  Target, 
  Compass 
} from "lucide-react";
const values = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "Serving every individual with dignity, love, and empathy.",
  },
  {
    icon: Star,
    title: "Integrity",
    desc: "Transparency, honesty, and ethical service in all actions.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Building stronger societies through unity and collaboration.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Delivering impactful, high-quality service consistently.",
  },
];

const pillars = [
  {
    tag: "The Future",
    title: "Vision",
    desc: "To establish a just, harmonious, and self-reliant society where marginalized groups are empowered to live with authentic dignity, health, and equal opportunity.",
    icon: Eye,
  },
  {
    tag: "The Action",
    title: "Mission",
    desc: "To deploy dedicated healthcare resources, premium educational initiatives, and strategic livelihood training programs that directly eliminate generational cycles of poverty.",
    icon: Target,
  },
  {
    tag: "The Standard",
    title: "Objectives",
    desc: "To drive systemic social elevation by supporting sustainable grassroot community leadership clusters and scaling real impact effectively across all rural zones.",
    icon: Compass,
  },
];

const objectivesList = [
  {
    num: "01",
    title: "Holistic Health Access",
    text: "Provide premium medical diagnostics, critical clinical assistance, and healthcare interventions to rural populations via established base hospital nodes.",
  },
  {
    num: "02",
    title: "Empowerment via Quality Education",
    text: "Enable accessible primary schooling systems alongside child play homes designed to break socioeconomic learning constraints effortlessly.",
  },
  {
    num: "03",
    title: "Sustainable Social Inclusivity",
    text: "Run dedicated community welfare clusters that nurture self-reliance, promote gender equality, and guard ancestral artisan crafts from extinction.",
  },
];
export default function AboutPage() {
  return (
    <main className="bg-[#f6fbf8] text-[#102018] overflow-hidden w-full min-h-screen">
      {/* ================= HERO SECTION ================= */}
      {/* ================= ABOUT CONTENT & STATS ================= */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),transparent_45%)]" />
        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Narrative Block & Performance Counters */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#1f3d2a] mb-6 tracking-tight">
              A Legacy of Compassion
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-base">
              Dharma Jyothi Charitable Society works across education, healthcare, and social upliftment programs empowering marginalized communities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Our mission is not just service — it is transformation, dignity, and sustainable impact across generations.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Lives Impacted", value: "1000+" },
                { label: "Years Service", value: "45+" },
                { label: "Programs", value: "50+" },
                { label: "States", value: "3" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl bg-white border border-emerald-100 shadow-md p-5 text-center hover:shadow-xl transition duration-300"
                >
                  <p className="text-2xl font-bold text-emerald-700">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Historical Media Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[32px] overflow-hidden shadow-2xl group border-4 border-white">
              <img
                src="https://res.cloudinary.com/dapmnkke3/image/upload/v1781385896/lg551uypqaeanwshjtef.png"
                className="h-[450px] w-full object-cover group-hover:scale-105 transition duration-700"
                alt="Community service activity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent pointer-events-none" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-emerald-100 min-w-[120px] text-center"
            >
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Since</p>
              <p className="text-2xl font-black text-emerald-700">1976</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* ================= CORE STRATEGIC PILLARS (TEXT BASE) ================= */}
      <section className="py-24 bg-[#f4f8f5] border-t border-b border-emerald-100/40 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest uppercase text-emerald-700 block">
              Strategic Foundation
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#1e3b28] tracking-tight mt-3">
              Core Strategic Pillars
            </h2>
            <div className="h-1 w-16 bg-emerald-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-emerald-100/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-start"
                >
                  <div className="p-3 bg-emerald-50 rounded-xl mb-5 text-emerald-700">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase mb-1">
                    {p.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1f3d2a] mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-normal">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
