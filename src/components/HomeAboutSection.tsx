
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Users,
  Leaf,
  ChevronRight,
} from "lucide-react";

import hero1 from "@/assets/hero1.jpg";

const programs = [
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Providing medical care, health camps, and outreach services for vulnerable communities.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Supporting children and youth through quality education and skill development.",
  },
  {
    icon: Users,
    title: "Social Outreach",
    description:
      "Serving marginalized communities through social and welfare initiatives.",
  },
  {
    icon: Leaf,
    title: "Women Empowerment",
    description:
      "Creating opportunities through training, self-help groups, and leadership programs.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      {/* ========================================= */}
      {/* HERO */}
      {/* ========================================= */}

      <section className="relative min-h-screen flex items-center">
        <img
          src={hero1}
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#16351E]/90 via-[#16351E]/75 to-[#16351E]/50" />

        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#4F8A5B]/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md mb-6">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-white text-sm">
                Serving Humanity Since 1976
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Serving Humanity
              <span className="block text-[#9ED9A8]">
                With Compassion
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
              Dharma Jyothi Charitable Society is dedicated to education,
              healthcare, empowerment, and social transformation through faith,
              service, and compassion.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-[#355E3B] hover:scale-105 transition-all duration-300"
              >
                Discover Our Story
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

              <Link
                to="/contact"
                className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md px-7 py-4 font-semibold text-white hover:bg-white hover:text-[#355E3B] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* IMPACT STATS */}
      {/* ========================================= */}

      <section className="relative -mt-24 z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-5">
            {[
              {
                value: "50+",
                label: "Years of Service",
              },
              {
                value: "500+",
                label: "Children Supported",
              },
              {
                value: "120+",
                label: "Health Camps",
              },
              {
                value: "1000+",
                label: "Lives Impacted",
              },
            ].map((item) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={item.label}
                className="rounded-[28px] border border-white/20 bg-white/90 backdrop-blur-xl p-8 shadow-xl"
              >
                <h3 className="text-4xl font-bold text-[#355E3B]">
                  {item.value}
                </h3>

                <p className="mt-2 text-gray-500">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* ABOUT */}
      {/* ========================================= */}

      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={hero1}
                alt="About"
                className="w-full h-[550px] object-cover rounded-[32px] shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#355E3B] font-semibold uppercase tracking-[3px]">
                About Us
              </span>

              <h2 className="mt-4 text-5xl font-bold text-[#1B2A1E] leading-tight">
                Lighting Lives Through
                Service & Compassion
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Dharma Jyothi Charitable Society has been serving communities
                through education, healthcare, women empowerment, and social
                outreach programs since 1976.
              </p>

              <p className="mt-4 text-gray-600 leading-8">
                Inspired by faith and committed to human dignity, we work to
                uplift the vulnerable and create opportunities for sustainable
                development.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 bg-[#355E3B] text-white px-6 py-4 rounded-2xl hover:bg-[#28482D] transition"
              >
                Learn More
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SERVICES */}
      {/* ========================================= */}

      <section className="bg-[#F7FBF8] py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#355E3B] uppercase tracking-[3px] font-semibold">
              What We Do
            </span>

            <h2 className="text-5xl font-bold mt-4 text-[#1B2A1E]">
              Our Focus Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {programs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group bg-white rounded-[28px] p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#355E3B]/10 flex items-center justify-center text-[#355E3B] mb-6 group-hover:bg-[#355E3B] group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-[#1B2A1E]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* WHY CHOOSE US */}
      {/* ========================================= */}

      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#355E3B] to-[#4D7B54] rounded-[40px] overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16 text-white">
                <span className="uppercase tracking-[3px] text-green-200">
                  Why Choose Us
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                  Creating Meaningful Impact
                </h2>

                <div className="mt-10 space-y-6">
                  {[
                    "50+ Years of Service",
                    "Community-Centered Approach",
                    "Education & Healthcare Focus",
                    "Transparent & Sustainable Initiatives",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >
                      <div className="w-3 h-3 rounded-full bg-green-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <img
                src={hero1}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* GALLERY */}
      {/* ========================================= */}

      <section className="bg-[#F7FBF8] py-28">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <span className="text-[#355E3B] uppercase tracking-[3px] font-semibold">
                Gallery
              </span>

              <h2 className="text-5xl font-bold mt-3">
                Moments Of Impact
              </h2>
            </div>

            <Link
              to="/gallery"
              className="hidden md:flex items-center gap-2 text-[#355E3B] font-semibold"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((item) => (
              <motion.img
                whileHover={{
                  scale: 1.04,
                }}
                key={item}
                src={hero1}
                alt=""
                className="h-64 w-full object-cover rounded-[24px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* CTA */}
      {/* ========================================= */}

      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="bg-[#355E3B] rounded-[40px] p-12 md:p-20 text-center text-white">
            <h2 className="text-5xl font-bold">
              Join Us In Making A Difference
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-white/80 text-lg">
              Together we can create opportunities, empower communities,
              and bring hope to those who need it most.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/contact"
                className="bg-white text-[#355E3B] px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Get Involved
              </Link>

              <Link
                to="/donations"
                className="border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#355E3B] transition"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

