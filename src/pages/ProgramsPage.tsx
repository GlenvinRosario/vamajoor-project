import { BookOpen, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    id: "education",
    icon: BookOpen,
    title: "Education Program",
    description:
      "We support underprivileged children with scholarships, school supplies, digital learning, and educational opportunities for a brighter future.",
    initiatives: [
      "Scholarship Support",
      "School Supplies",
      "Digital Learning",
      "Career Guidance",
    ],
    color: "from-[#355E3B] to-green-600",
  },

  {
    id: "health",
    icon: Heart,
    title: "Health Program",
    description:
      "Healthcare initiatives including free medical camps, medicine distribution, health check-ups, and awareness programs for rural communities.",
    initiatives: [
      "Medical Camps",
      "Health Check-ups",
      "Medicine Support",
      "Health Awareness",
    ],
    color: "from-green-600 to-emerald-500",
  },

  {
    id: "social",
    icon: Users,
    title: "Social Outreach Programme",
    description:
      "Community outreach initiatives supporting families, women, senior citizens, and vulnerable communities through welfare activities.",
    initiatives: [
      "Community Support",
      "Food Distribution",
      "Women Empowerment",
      "Social Welfare",
    ],
    color: "from-emerald-500 to-green-500",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-[#f8faf8] overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden py-28 bg-gradient-to-br from-[#355E3B] via-green-700 to-emerald-600">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-green-300/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md mb-6"
          >
            🌱 Community Welfare Initiatives
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            Our Programs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed"
          >
            Empowering communities through impactful initiatives focused on
            education, healthcare, and social outreach.
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f3faf4] via-[#eef8f0] to-[#ffffff]">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-green-200/40 blur-3xl animate-pulse" />

          <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-emerald-100/50 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full bg-[radial-gradient(#355E3B_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 backdrop-blur-md px-5 py-2 text-sm text-[#355E3B] shadow-sm mb-5"
            >
              ✨ Transforming Lives Through Service
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-[#1f2937] mb-5"
            >
              Programs That Matter
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed"
            >
              We create meaningful social impact through education, healthcare,
              and outreach initiatives that uplift communities and empower lives.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, index) => (
              <motion.div
                key={prog.id}
                id={prog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl hover:shadow-[0_25px_80px_rgba(53,94,59,0.15)] transition-all duration-500"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute -top-24 right-0 h-52 w-52 rounded-full bg-green-200 blur-3xl" />
                </div>

                {/* Top */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-r ${prog.color} p-10`}
                >
                  <div className="absolute inset-0 bg-black/10" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      className="mb-5 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg"
                    >
                      <prog.icon size={42} className="text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-black text-white">
                      {prog.title}
                    </h3>
                  </div>

                  {/* Floating decoration */}
                  <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <p className="text-slate-600 leading-relaxed text-sm mb-6">
                    {prog.description}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {prog.initiatives.map((init) => (
                      <span
                        key={init}
                        className="rounded-full border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 text-xs font-semibold text-[#355E3B] shadow-sm"
                      >
                        {init}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#355E3B] to-green-600 py-4 font-semibold text-white shadow-lg"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Learn More
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </span>

                    <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-green-700 to-emerald-500 transition-transform duration-500 group-hover/btn:translate-y-0" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}