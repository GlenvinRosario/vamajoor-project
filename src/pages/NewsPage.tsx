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
      <section className="relative min-h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">
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

    </main>
  );
}
