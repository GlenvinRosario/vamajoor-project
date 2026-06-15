import { motion } from "framer-motion";
import { Sparkles, Heart, Globe2, Users, Award, Building2 } from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "Empowering Communities Since 1976",
    desc: "Dharma Jyothi Charitable Society has transformed lives through education, healthcare and social outreach across multiple states.",
  },
  {
    icon: Globe2,
    title: "Global Mission Network",
    desc: "Part of a worldwide missionary ecosystem serving across continents with compassion and service.",
  },
  {
    icon: Users,
    title: "Women & Child Upliftment",
    desc: "Focused initiatives supporting women, children, and youth through sustainable empowerment programs.",
  },
];

const programs = [
  "Medical Camps & Rural Healthcare",
  "Child Sponsorship Programs",
  "Women Empowerment & Skill Training",
  "Environmental Sustainability Initiatives",
  "Humanitarian Outreach Programs",
];

const institutions = [
  "St. Ignatius Hospital (100 Beds)",
  "Goretti Hospital, Udupi",
  "Maria Giri Health Centre",
  "Vidya Jyothi School",
  "Asha Kiran Play Home",
];

const awards = [
  "SPANDANA Award for De-Addiction Services",
  "NABH Kayakalpa Certification",
  "COVID-19 Service Recognition",
  "Ayushman Bharat Excellence Award",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function NewsPage() {
  return (
    <main className="bg-[#f6fbf7] text-[#1b2a1e] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[65vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dapmnkke3/image/upload/f_auto,q_auto,w_1920/v1781439263/hac8xbfwbdvnbilpqnwd.png"
            alt="News Background"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#0a1711]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1711] via-transparent to-transparent" />
        </div>

        {/* glow blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-300/15 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f59e0b]/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="px-4 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
            <Sparkles size={14} className="text-emerald-300" />
            <span className="text-xs tracking-[3px] uppercase text-white/80">
              Impact & Updates
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            News & <span className="text-emerald-300">Impact</span>
          </h1>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg">
            Stories of transformation, service, and community development driven
            by compassion and action.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#355E3B] to-[#f59e0b]" />
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-900/5 px-5 py-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            <span className="text-sm font-semibold tracking-[2px] uppercase text-emerald-800">
              Who We Are
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Story in Brief
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="
                relative overflow-hidden
                rounded-[28px]
                bg-white/70
                backdrop-blur-xl
                border border-green-900/10
                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                hover:shadow-[0_25px_60px_rgba(46,125,78,0.15)]
                transition-shadow duration-500
                p-7
              "
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200/30 blur-2xl rounded-full" />

              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 mb-5">
                <item.icon size={22} />
              </div>

              <h3 className="text-[#2f5a3d] font-bold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-6">{item.desc}</p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-[#f59e0b]"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#eef7f0]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-900/5 px-5 py-2 mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              <span className="text-sm font-semibold tracking-[2px] uppercase text-emerald-800">
                Action Areas
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1f3b28] tracking-tight">
              Our Key Initiatives
            </h2>

            <ul className="space-y-3">
              {programs.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-gray-700 bg-white/60 hover:bg-white border border-emerald-900/5 hover:border-emerald-900/10 rounded-2xl px-5 py-3.5 transition-all duration-300"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 shrink-0" />
                  <span className="font-medium">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    relative
    rounded-[32px]
    overflow-hidden
    p-10 md:p-12
    text-white
    bg-gradient-to-br from-[#2f5a3d] via-[#1f3b28] to-[#0f1f16]
    shadow-2xl
  "
>
  {/* decorative quote mark */}
  <div className="absolute top-6 right-8 text-white/10 text-[120px] font-serif leading-none select-none">
    "
  </div>

  {/* subtle glow accents */}
  <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full" />
  <div className="absolute -top-16 -left-16 w-48 h-48 bg-lime-300/10 blur-3xl rounded-full" />

  <div className="relative z-10">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
      <Sparkles size={14} className="text-lime-300" />
      <span className="text-xs tracking-[3px] uppercase text-white/80">
        Our Purpose
      </span>
    </div>

    <h3 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight">
      Our Mission
    </h3>

    <p className="text-white/75 leading-8 text-lg md:text-xl max-w-md">
      To serve humanity through education, healthcare, and social
      upliftment while building a compassionate and just society.
    </p>

    {/* accent line */}
    <div className="mt-8 w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300" />
  </div>
</motion.div>
        </div>
      </section>

      {/* ================= INSTITUTIONS ================= */}
      <section className="py-20 md:py-28 bg-[#f6fbf7]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-900/5 px-5 py-2 mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              <span className="text-sm font-semibold tracking-[2px] uppercase text-emerald-800">
                Our Network
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f3b28] tracking-tight">
              Our Institutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {institutions.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="
                  relative overflow-hidden
                  rounded-[24px]
                  bg-white
                  border border-green-900/10
                  shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_20px_50px_rgba(16,32,24,0.12)]
                  transition-shadow duration-400
                  p-6
                "
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 mb-4 mx-auto">
                  <Building2 size={20} />
                </div>
                <p className="font-semibold text-[#2f5a3d]">{item}</p>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-[#f59e0b]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AWARDS ================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-900/5 px-5 py-2 mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              <span className="text-sm font-semibold tracking-[2px] uppercase text-emerald-800">
                Honours
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f3b28] tracking-tight">
              Recognitions & Awards
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((a, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="
                  relative overflow-hidden
                  flex items-center gap-4
                  rounded-[24px]
                  bg-[#f3faf5]
                  border border-green-900/10
                  p-6
                  shadow-sm
                  hover:shadow-[0_15px_40px_rgba(16,32,24,0.1)]
                  transition-shadow duration-400
                  text-left
                "
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white text-emerald-600 shrink-0 shadow-sm">
                  <Award size={20} />
                </div>
                <p className="font-medium text-[#1f3b28]">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FUTURE ================= */}
      <section className="py-24 md:py-28 text-center relative overflow-hidden bg-gradient-to-b from-[#f6fbf7] to-[#eef7f0] text-[#1f3b28]">
        <div className="absolute -top-20 right-10 w-96 h-96 bg-emerald-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#f59e0b]/10 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/5 border border-emerald-900/10 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs tracking-[3px] uppercase text-emerald-800/80">
              What's Next
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Future <span className="text-emerald-600">Vision</span>
          </h2>

          <p className="text-[#1f3b28]/60 max-w-2xl mx-auto mb-14 text-lg">
            Expanding our reach with new initiatives focused on healthcare,
            education, and social welfare.
          </p>

          <div className="relative max-w-3xl mx-auto">
            <div className="hidden sm:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />

            <div className="grid sm:grid-cols-3 gap-10 sm:gap-6">
              {[
                {
                  label: "Healthcare",
                  text: "New healthcare expansion projects",
                },
                { label: "Education", text: "Educational institution growth" },
                { label: "Welfare", text: "Care centers for the vulnerable" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border-2 border-emerald-200 shadow-[0_8px_25px_rgba(16,32,24,0.08)] flex items-center justify-center font-bold text-emerald-600 text-lg mb-5 group-hover:border-emerald-400 group-hover:shadow-[0_12px_35px_rgba(16,32,24,0.15)] transition-all duration-400">
                    0{i + 1}
                    <span className="absolute inset-0 rounded-2xl bg-emerald-400/0 group-hover:bg-emerald-400/5 transition-colors duration-400" />
                  </div>

                  <span className="text-xs font-semibold tracking-[2px] uppercase text-emerald-500 mb-2">
                    {item.label}
                  </span>

                  <p className="font-semibold text-[#1f3b28] leading-snug max-w-[200px]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
