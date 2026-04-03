import { motion } from "framer-motion";
import { BookOpen, Download, ExternalLink } from "lucide-react";

const magazines = [
  {
    id: 1,
    title: "Dharma Jyothi E-Magazine — Vol. 12",
    date: "January 2025",
    desc: "Annual report, success stories, and upcoming programs.",
  },
  {
    id: 2,
    title: "Dharma Jyothi E-Magazine — Vol. 11",
    date: "October 2024",
    desc: "Women empowerment stories and transformation journeys.",
  },
  {
    id: 3,
    title: "Dharma Jyothi E-Magazine — Vol. 10",
    date: "July 2024",
    desc: "Education initiatives changing thousands of lives.",
  },
  {
    id: 4,
    title: "Dharma Jyothi E-Magazine — Vol. 9",
    date: "April 2024",
    desc: "Medical camps, healthcare outreach & awareness programs.",
  },
];

export default function MagazinePage() {
  return (
    <main className="bg-gradient-to-b from-[#eef5f0] via-white to-[#eef5f0]">
      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-br from-[#355E3B] to-[#1f2d24] relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 relative"
        >
          <h1 className="text-5xl font-bold text-white mb-4">E-Magazine</h1>
          <p className="text-white/70 text-lg">
            Stories of impact, service, and transformation
          </p>
        </motion.div>
      </section>

      {/* MAGAZINE GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {magazines.map((mag, i) => (
              <motion.div
                key={mag.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden border border-[#355E3B]/10 bg-white/70 backdrop-blur-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* TOP BANNER */}
                <div className="h-40 bg-gradient-to-br from-[#355E3B] to-[#1f2d24] flex items-center justify-center relative">
                  <BookOpen size={60} className="text-white/20 absolute" />

                  {/* subtle glow */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-gray-500 text-xs mb-2">{mag.date}</p>

                  <h3 className="text-[#355E3B] font-bold text-lg mb-3 group-hover:underline">
                    {mag.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-5">{mag.desc}</p>

                  {/* ACTIONS */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#355E3B] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#2f4f34] transition">
                      <ExternalLink size={14} />
                      Read
                    </button>

                    <button className="flex items-center justify-center gap-2 border border-[#355E3B]/20 text-[#355E3B] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#355E3B]/10 transition">
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SUBSCRIBE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 bg-white/70 backdrop-blur-md border border-[#355E3B]/10 rounded-2xl p-10 text-center shadow-md"
          >
            <h3 className="text-2xl font-bold text-[#355E3B] mb-3">
              Stay Updated
            </h3>

            <p className="text-gray-600 mb-6">
              Get our latest magazine editions directly in your inbox
            </p>

            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl border border-[#355E3B]/20 focus:border-[#355E3B] outline-none text-sm bg-white"
              />

              <button className="bg-[#355E3B] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2f4f34] transition">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
