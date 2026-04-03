import { motion } from "framer-motion";

const highlights = [
  {
    title: "Empowering Communities Since 1976",
    desc: "Dharma Jyothi Charitable Society has transformed lives across Karnataka, Goa, and Manipur through education, healthcare, and outreach.",
  },
  {
    title: "Global Missionary Network",
    desc: "Part of the Missionary Sisters of the Queen of the Apostles (SRA), serving across India, Europe, Africa, and beyond.",
  },
  {
    title: "Women & Child Upliftment",
    desc: "Focused initiatives supporting marginalized women, children, and youth for a better future.",
  },
];

const programs = [
  "Medical Camps & Rural Healthcare",
  "Child Sponsorship Programs",
  "Women Empowerment & Skill Training",
  "Environmental Protection Initiatives",
  "Anti Human Trafficking Programs",
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
    <main className="bg-gradient-to-b from-[#eaf4ee] via-white to-[#eaf4ee]">
      {/* HERO */}
      <section className="relative py-24 text-center bg-gradient-to-br from-[#355E3B] via-[#2f4f34] to-[#1f2d24] text-white overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-300/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-200/10 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4">News & Impact</h1>
          <p className="text-white/70 text-lg">
            Real stories of service, compassion, and transformation
          </p>
        </motion.div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-[#355E3B]/10 shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-[#355E3B] font-bold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 bg-gradient-to-br from-[#f4f9f6] to-[#eaf4ee]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-[#355E3B] mb-6">
              Our Key Initiatives
            </h2>

            <ul className="space-y-3 text-gray-600">
              {programs.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Gradient card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#355E3B] via-[#2f4f34] to-[#1f2d24] text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5"></div>

            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              To proclaim the compassionate love of God and empower marginalized
              communities to build a just and dignified society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INSTITUTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#355E3B] mb-12 text-center">
            Our Institutions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {institutions.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-xl bg-gradient-to-br from-[#eaf4ee] to-white border border-[#355E3B]/10 shadow-sm hover:shadow-md"
              >
                <p className="text-[#355E3B] font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-20 bg-gradient-to-br from-[#eef5f0] to-[#f8fbf9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#355E3B] mb-10">
            Recognitions & Awards
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {awards.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="p-5 rounded-xl bg-white shadow-md border border-[#355E3B]/10"
              >
                {a}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE NEEDS */}
      <section className="py-20 bg-gradient-to-br from-[#355E3B] to-[#1f2d24] text-white text-center relative overflow-hidden">
        <div className="absolute -top-10 right-10 w-60 h-60 bg-white/10 blur-3xl rounded-full"></div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-4">Future Vision</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Expanding our mission with new initiatives to serve the vulnerable.
          </p>

          <ul className="space-y-2 text-white/80 text-sm">
            <li>• New psychiatric block at St. Ignatius Hospital</li>
            <li>• Care center for destitute</li>
            <li>• New pre-primary schools</li>
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
