import { motion } from "framer-motion";

const highlights = [
  {
    title: "Empowering Communities Since 1976",
    desc: "Dharma Jyothi Charitable Society has transformed lives through education, healthcare and social outreach across multiple states.",
  },
  {
    title: "Global Mission Network",
    desc: "Part of a worldwide missionary ecosystem serving across continents with compassion and service.",
  },
  {
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

export default function NewsPage() {
  return (
    <main className="bg-[#f6fbf7] text-[#1b2a1e] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center bg-gradient-to-br from-[#1f3b28] via-[#2f5a3d] to-[#163022] text-white overflow-hidden">

        {/* glow blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-300/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-green-300" />
            <span className="text-xs tracking-[3px] uppercase text-white/80">
              Impact & Updates
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            News & <span className="text-green-300">Impact</span>
          </h1>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg">
            Stories of transformation, service, and community development
            driven by compassion and action.
          </p>
        </motion.div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="
                rounded-[28px]
                bg-white/70
                backdrop-blur-xl
                border border-green-900/10
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                hover:shadow-[0_25px_60px_rgba(46,125,78,0.15)]
                transition-all duration-500
                p-7
              "
            >
              <h3 className="text-[#2f5a3d] font-bold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-[#eef7f0]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-[#1f3b28]">
              Our Key Initiatives
            </h2>

            <ul className="space-y-4">
              {programs.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-2 h-2 w-2 rounded-full bg-green-600 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              relative
              rounded-[32px]
              overflow-hidden
              p-10
              text-white
              bg-gradient-to-br from-[#1f3b28] via-[#2f5a3d] to-[#163022]
              shadow-2xl
            "
          >
            <div className="absolute inset-0 bg-white/5" />

            <h3 className="text-2xl font-semibold mb-4">
              Our Mission
            </h3>

            <p className="text-white/75 leading-7">
              To serve humanity through education, healthcare, and social
              upliftment while building a compassionate and just society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= INSTITUTIONS ================= */}
      <section className="py-20 bg-[#f6fbf7]">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-12 text-[#1f3b28]">
            Our Institutions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {institutions.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="
                  rounded-[24px]
                  bg-white
                  border border-green-900/10
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  p-6
                "
              >
                <p className="font-semibold text-[#2f5a3d]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AWARDS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-12 text-[#1f3b28]">
            Recognitions & Awards
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                className="
                  rounded-[24px]
                  bg-[#f3faf5]
                  border border-green-900/10
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                "
              >
                <p className="font-medium text-[#1f3b28]">
                  {a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FUTURE ================= */}
      <section className="py-24 text-center relative overflow-hidden bg-gradient-to-br from-[#1f3b28] to-[#0f1f16] text-white">

        <div className="absolute -top-20 right-10 w-96 h-96 bg-green-300/10 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Future Vision
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Expanding our reach with new initiatives focused on healthcare,
            education, and social welfare.
          </p>

          <ul className="space-y-2 text-white/80">
            <li>New healthcare expansion projects</li>
            <li>Educational institution growth</li>
            <li>Care centers for the vulnerable</li>
          </ul>
        </motion.div>
      </section>

    </main>
  );
}

