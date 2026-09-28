import { motion } from "framer-motion";
import { Heart, Users, Star, Award, Eye, Target, Compass, CheckCircle2 } from "lucide-react";
import hero2 from "@/assets/hero2.jpg";

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
    title: "Our Vision",
    desc: "To establish a just, harmonious, and self-reliant society where marginalized groups are empowered to live with authentic dignity, health, and equal opportunity.",
    icon: Eye,
    image: "https://unsplash.com",
  },
  {
    tag: "The Action",
    title: "Our Mission",
    desc: "To deploy dedicated healthcare resources, premium educational initiatives, and strategic livelihood training programs that directly eliminate generational cycles of poverty.",
    icon: Target,
    image: "https://unsplash.com",
  },
  {
    tag: "The Standard",
    title: "Our Goal",
    desc: "To drive systemic social elevation by supporting sustainable grassroot community leadership clusters and scaling real impact effectively across all rural zones.",
    icon: Compass,
    image: "https://unsplash.com",
  },
];

const objectives = [
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
    <main className="bg-[#f6fbf8] text-[#102018] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center text-white overflow-hidden bg-gradient-to-br from-[#0f2b1c] via-[#1d4a31] to-[#08140d]">

        {/* animated glow blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dapmnkke3/image/upload/v1781386506/zhjqerwalfzqcnmyw84r.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            <span className="text-xs tracking-[3px] uppercase text-white/80">
              About Our Mission
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Building Lives With{" "}
            <span className="text-emerald-300">Purpose</span>
          </h1>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg">
            A journey of compassion, service, and transformation
          </p>
        </motion.div>
      </section>
      {/* ================= ABOUT CONTENT ================= */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),transparent_45%)]" />

        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#1f3d2a] mb-6">
              A Legacy of Compassion
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              Dharma Jyothi Charitable Society works across education,
              healthcare, and social upliftment programs empowering
              marginalized communities.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our mission is not just service — it is transformation, dignity,
              and sustainable impact across generations.
            </p>

            {/* STATS CARDS */}
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
                  className="rounded-2xl bg-white border border-emerald-100 shadow-md p-5 text-center hover:shadow-xl transition"
                >
                  <p className="text-2xl font-bold text-emerald-700">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[32px] overflow-hidden shadow-2xl group">
              <img
                src="https://res.cloudinary.com/dapmnkke3/image/upload/v1781385896/lg551uypqaeanwshjtef.png"
                className="h-[450px] w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
            </div>

            {/* floating card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-emerald-100"
            >
              <p className="text-sm text-gray-500">Since</p>
              <p className="text-xl font-bold text-emerald-700">1976</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
 
      {/* ================= VISION, MISSION & GOAL ================= */}
      <section className="py-24 bg-[#f4f8f5] border-t border-b border-emerald-100/40 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest uppercase text-emerald-700">
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white rounded-3xl overflow-hidden border border-emerald-100/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(15,40,25,0.06)] transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="h-44 w-full relative overflow-hidden bg-gray-100 shrink-0">
                    <img
                      // src={p.image}
                      src="https://res.cloudinary.com/dapmnkke3/image/upload/v1781385896/lg551uypqaeanwshjtef.png"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      // alt={p.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-800 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {p.tag}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                          <IconComp size={18} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                          {p.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pt-2">
                        {p.desc}
                      </p>
                    </div>
                    <div className="h-1 w-full bg-gray-50 mt-6 overflow-hidden rounded-full">
                      <div className="h-full w-12 bg-emerald-600 rounded-full transition-all duration-300 group-hover:w-full" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
      {/* ================= OUR OBJECTIVES ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4 h-fit">

            <h2 className="text-3xl md:text-4xl font-black text-[#1e3b28] tracking-tight">
              Our Objectives
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Clear developmental tracks engineered explicitly to turn our high organizational vision models into verifiable physical local transformations.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:border-emerald-700/20 hover:bg-emerald-50/10 transition-all duration-300 group"
              >
                <div className="text-2xl font-black text-emerald-700/30 group-hover:text-emerald-700 tracking-tight shrink-0 transition-colors">
                  {obj.num}
                </div>
                
                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2 group-hover:text-emerald-900 transition-colors">
                    <CheckCircle2 size={16} className="text-emerald-600/40 group-hover:text-emerald-600 transition-colors shrink-0" />
                    {obj.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {obj.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

    </main>
  );
}
