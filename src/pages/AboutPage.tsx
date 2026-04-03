import { motion } from "framer-motion";
import { Heart, Users, Star, Award } from "lucide-react";
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
    desc: "Committed to transparency, honesty, and accountability.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Strengthening communities through unity and shared purpose.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Striving for quality and impact in every initiative.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-[#eef3ef] via-white to-[#eef3ef]">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-[#355E3B] via-[#2f4f34] to-[#1f2d24] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${hero2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-[#355E3B]/80" />

        {/* Premium glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-white/70 text-lg">
            Serving humanity with compassion since 1976
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="relative py-20">
        {/* subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(53,94,59,0.05),transparent_40%)]"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-[#355E3B] mb-6">
                Lighting Lives Through Service
              </h2>

              <p className="text-gray-600 mb-5 leading-relaxed">
                Dharma Jyothi Charitable Society, established in 1976, is
                dedicated to uplifting marginalized communities through
                education, healthcare, and social outreach initiatives.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                With decades of service, we have impacted thousands of lives
                across Karnataka, Goa, and Manipur through sustainable programs.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Lives Impacted", value: "1000+" },
                  { label: "Years of Service", value: "45+" },
                  { label: "Programs Active", value: "50+" },
                  { label: "States Served", value: "3" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white rounded-xl border border-[#355E3B]/10 text-center shadow-md hover:shadow-xl transition"
                  >
                    <p className="text-[#355E3B] font-bold text-2xl">
                      {s.value}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <img
                src={hero2}
                alt="Community"
                className="w-full h-[420px] object-cover"
              />

              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-16 bg-gradient-to-b from-[#f4f7f5] to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#355E3B] mb-10">
            Our Vision & Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Our Vision",
                desc: "A just and compassionate society where every individual has dignity and opportunity.",
                icon: Star,
              },
              {
                title: "Our Mission",
                desc: "Empowering communities through education, healthcare, and sustainable development.",
                icon: Heart,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#355E3B]/10 hover:shadow-2xl transition"
              >
                <item.icon className="text-[#355E3B] mb-4" />
                <h3 className="text-xl font-bold text-[#355E3B] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 bg-[#eef3ef]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#355E3B] mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl bg-white border border-[#355E3B]/10 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#355E3B] to-[#1f2d24] flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-white" />
                </div>

                <h3 className="text-[#355E3B] font-bold text-lg mb-2">
                  {v.title}
                </h3>

                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
