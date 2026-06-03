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

export default function AboutPage() {
  return (
    <main className="bg-[#f6fbf8] text-[#102018] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-28 text-center text-white overflow-hidden bg-gradient-to-br from-[#0f2b1c] via-[#1d4a31] to-[#08140d]">

        {/* animated glow blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${hero2})`,
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
            A journey of compassion, service, and transformation since 1976
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
                src={hero2}
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

      {/* ================= VALUES ================= */}
      <section className="py-20 bg-gradient-to-b from-[#f3fbf6] to-white">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-14 text-[#1f3d2a]">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative p-6 rounded-3xl bg-white border border-emerald-100 shadow-md hover:shadow-2xl transition overflow-hidden"
              >
                {/* glow */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-200/40 blur-2xl rounded-full" />

                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg">
                  <v.icon className="text-white" />
                </div>

                <h3 className="font-bold text-lg text-[#1f3d2a]">
                  {v.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}