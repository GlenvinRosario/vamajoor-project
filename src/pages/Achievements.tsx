import { motion } from "framer-motion";
import { Award, Trophy, Star, Sparkles } from "lucide-react";

const institutionalAwards = [
  {
    title: "St. Ignatius Hospital",
    points: [
      "NABH Kayakalpa Certified (2019–20)",
      "SPANDANA Award for de-addiction service",
      "Recognized for COVID-19 patient care",
    ],
    color: "from-emerald-400/10 to-teal-400/10 border-emerald-300/30",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Goretti Hospital, Kallianpur",
    points: ["EPFO Best Performance Award under small establishments"],
    color: "from-sky-400/10 to-blue-400/10 border-blue-300/30",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    title: "Maria Giri Health Centre",
    points: [
      "COVID-19 Service Recognition",
      "Awarded for selfless service across communities",
    ],
    color: "from-lime-400/10 to-green-400/10 border-green-300/30",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
];



const groupedAwards = [
  {
    recipient: "Sr. Maria Goretti Quadros",
    role: "Founding Legacy Initiatives",
    awards: [
      { year: "2000", text: "Sandesha Award" },
      { year: "2004", text: "Gratias Agit – Govt. of Czech Republic" },
      { year: "2011", text: "Rachana Award for outstanding service" },
      { year: "2017", text: "Velvin Excellence Recognition" },
    ],
  },
  {
    recipient: "Sr. M. Melania D’Souza",
    role: "Healthcare & Prevention Advocacy",
    awards: [
      { 
        year: "2023", 
        text: "Award from District HIV Control Board, Government of Karnataka, recognizing the contribution towards the cause of prevention of HIV & AIDS and for collaborating with the Government." 
      },
    ],
  },
  {
    recipient: "Sr. Janice Leadership",
    role: "Crisis Response & Governance",
    awards: [
      { year: "2020", text: "COVID Special Service Award" }
    ],
  },
];



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Achievements() {
  return (
    <main className="bg-[#f4fbf6] text-[#102018] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-28 md:py-33 text-center text-white overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dapmnkke3/image/upload/v1781442371/spcama1gsubvzhz7v8rq.png"
            alt="Achievements Background"
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
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-lime-300/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="px-4 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <Sparkles size={14} className="text-lime-300" />
            <span className="text-xs tracking-[3px] uppercase text-white/80">
              Legacy • Recognition • Impact
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Achievements & <span className="text-lime-300">Impact</span>
          </h1>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg">
            Celebrating decades of service, compassion, and transformation
            across communities.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-emerald-400 to-lime-300" />
      </section>

      {/* ================= INSTITUTIONAL ================= */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-900/5 px-5 py-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            <span className="text-sm font-semibold tracking-[2px] uppercase text-emerald-800">
              Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Institutional Excellence
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Recognitions earned through service and compassion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {institutionalAwards.map((a, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`
                relative overflow-hidden
                rounded-[28px]
                border
                p-7
                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_50px_rgba(16,32,24,0.12)]
                bg-gradient-to-br ${a.color}
                backdrop-blur-xl
                transition-shadow duration-500
              `}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 blur-2xl rounded-full" />

              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-2xl ${a.iconBg}`}
                >
                  <Award size={20} className={a.iconColor} />
                </div>
                <h3 className="font-bold text-lg leading-snug">{a.title}</h3>
              </div>

              <ul className="space-y-3 text-sm text-gray-700">
                {a.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              {/* bottom accent bar */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-lime-400"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <div className="relative max-w-2xl mx-auto px-4 py-8">
        {/* Central Vertical Tracking Line */}
        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-600 via-[#cfe7d8] to-transparent" />

        {groupedAwards.map((group, groupIdx) => (
          <div key={groupIdx} className="relative mb-12 last:mb-0">
            {/* Recipient Profile Anchor Node */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center gap-4 ml-10 mb-6"
            >
              {/* Visual Icon Node on Main Line */}
              <span className="absolute -left-[33px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1a4d2e] ring-4 ring-[#eef7f2] z-10" />

              <div className="bg-[#f4faf6] border border-[#e1f0e7] px-4 py-2 rounded-xl shadow-sm">
                <h3 className="text-base font-black text-[#0a2313] tracking-tight">
                  {group.recipient}
                </h3>
                <p className="text-[11px] font-bold text-[#2e6f47] uppercase tracking-wider mt-0.5">
                  {group.role}
                </p>
              </div>
            </motion.div>

            {/* Nested Award Event Cards */}
            <div className="space-y-4 ml-14">
              {group.awards.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (groupIdx * 3 + itemIdx) * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Micro Connector Node to the profile track */}
                  <span className="absolute -left-[23px] top-6 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-white" />

                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-2xl bg-white border border-[#e1f0e7] shadow-sm hover:shadow-md p-4 transition-all duration-300"
                  >
                    <span className="inline-block bg-[#eaf4ee] text-[#1a4d2e] text-xs font-black px-2.5 py-0.5 rounded-md mb-2">
                      {item.year}
                    </span>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
