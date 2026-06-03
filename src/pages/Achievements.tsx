import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";

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
  },
  {
    title: "Goretti Hospital, Kallianpur",
    points: ["EPFO Best Performance Award under small establishments"],
    color: "from-sky-400/10 to-blue-400/10 border-blue-300/30",
    iconColor: "text-blue-600",
  },
  {
    title: "Maria Giri Health Centre",
    points: [
      "COVID-19 Service Recognition",
      "Awarded for selfless service across communities",
    ],
    color: "from-lime-400/10 to-green-400/10 border-green-300/30",
    iconColor: "text-green-600",
  },
];

const individualAwards = [
  { year: "2000", text: "Sandesha Award – Sr. Maria Goretti Quadros" },
  { year: "2004", text: "Gratias Agit – Govt. of Czech Republic" },
  { year: "2011", text: "Rachana Award for outstanding service" },
  { year: "2017", text: "Velvin Excellence Recognition" },
  { year: "2020", text: "COVID Special Service – Sr. Janice Leadership" },
];

export default function Achievements() {
  return (
    <main className="bg-[#f4fbf6] text-[#102018] overflow-hidden">

      {/* HERO */}
      <section className="relative py-24 text-center bg-gradient-to-br from-[#16351e] via-[#1f4d33] to-[#0f2417] text-white overflow-hidden">

        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-300/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-lime-300/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-lime-300 animate-pulse" />
            <span className="text-xs tracking-[3px] uppercase text-white/80">
              Legacy • Recognition • Impact
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold">
            Achievements & <span className="text-lime-300">Impact</span>
          </h1>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg">
            Celebrating decades of service, compassion, and transformation across communities.
          </p>
        </motion.div>
      </section>

      {/* INSTITUTIONAL */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Institutional Excellence
          </h2>
          <p className="text-gray-500 mt-2">
            Recognitions earned through service and compassion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutionalAwards.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`
                relative overflow-hidden
                rounded-[28px]
                border
                p-7
                shadow-lg
                bg-gradient-to-br ${a.color}
                backdrop-blur-xl
                transition-all
              `}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/30 blur-2xl rounded-full" />

              <div className="flex items-center gap-3 mb-4">
                <Award className={`${a.iconColor}`} />
                <h3 className="font-semibold text-lg">
                  {a.title}
                </h3>
              </div>

              <ul className="space-y-2 text-sm text-gray-700">
                {a.points.map((p, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-gradient-to-b from-white to-[#f0fbf4] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">
            Individual Recognition
          </h2>

          <div className="relative max-w-2xl mx-auto border-l-2 border-emerald-200">
            {individualAwards.map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ delay: i * 0.1 }}
                className="mb-10 ml-6"
              >
                <div className="absolute -left-2.5 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 shadow-lg" />

                <div className="rounded-2xl bg-white border shadow-md p-5 hover:shadow-xl transition">
                  <p className="text-emerald-600 font-semibold text-sm">
                    {item.year}
                  </p>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 via-green-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {[
            { icon: Trophy, value: "10+", label: "Awards" },
            { icon: Star, value: "50+", label: "Years" },
            { icon: Award, value: "3", label: "States" },
            { icon: Trophy, value: "1000+", label: "Lives Impacted" },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="space-y-2"
            >
              <s.icon className="mx-auto text-lime-300" />
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="text-white/70 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-[#f6fbf7]">
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <h3 className="text-3xl font-bold mb-4">
            Be Part of Something Bigger
          </h3>

          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Your support helps us continue building real impact across communities.
          </p>

          <a
            href="/donations"
            className="inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:scale-105 transition"
          >
            Support Our Mission
          </a>
        </motion.div>
      </section>

    </main>
  );
}