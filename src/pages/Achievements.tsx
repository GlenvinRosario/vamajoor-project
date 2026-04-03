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
  },
  {
    title: "Goretti Hospital, Kallianpur",
    points: ["EPFO Best Performance Award under small establishments"],
  },
  {
    title: "Maria Giri Health Centre",
    points: [
      "COVID-19 Service Recognition",
      "Awarded for selfless service irrespective of caste & creed",
    ],
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
    <div className="bg-gradient-to-b from-[#1f2d24] to-[#355E3B] min-h-screen text-white">
      {/* HEADER */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
          Achievements & Recognition
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Celebrating decades of service, compassion, and excellence in
          transforming lives across communities.
        </p>
      </section>

      {/* INSTITUTIONAL AWARDS */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl font-semibold text-gold mb-10 text-center">
          Institutional Excellence
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutionalAwards.map((award, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-gold" />
                <h3 className="font-semibold text-lg">{award.title}</h3>
              </div>

              <ul className="space-y-2 text-sm text-white/70">
                {award.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container mx-auto px-4 pb-24">
        <h2 className="text-2xl font-semibold text-gold mb-12 text-center">
          Individual Recognition
        </h2>

        <div className="relative border-l border-white/20 max-w-2xl mx-auto">
          {individualAwards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-10 ml-6"
            >
              <div className="absolute w-4 h-4 bg-gold rounded-full -left-2.5 border border-white"></div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-gold font-semibold text-sm mb-1">
                  {item.year}
                </p>
                <p className="text-white/80 text-sm">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#355E3B]/80 py-16">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Trophy, value: "10+", label: "Awards Received" },
            { icon: Star, value: "50+", label: "Years of Service" },
            { icon: Award, value: "3", label: "States Served" },
            { icon: Trophy, value: "1000+", label: "Lives Impacted" },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <stat.icon className="mx-auto text-gold" />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4">
        <h3 className="text-2xl font-semibold mb-4">
          Be a Part of Our Journey
        </h3>
        <p className="text-white/70 mb-6">
          Your support helps us continue this mission of compassion.
        </p>
        <a
          href="/donations"
          className="inline-block bg-gold text-[#355E3B] font-semibold px-6 py-3 rounded-xl hover:bg-white transition"
        >
          Support Us
        </a>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40"></div>
    </div>
  );
}
