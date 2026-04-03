import { motion } from "framer-motion";
import HeroCarousel from "@/components/HeroCarousel";
import HomeQuickLinks from "@/components/HomeQuickLinks";
import HomeAboutSection from "@/components/HomeAboutSection";
import HomeNewsSection from "@/components/HomeNewsSection";
import HomeDonationSection from "@/components/HomeDonationSection";
import HomeGallerySection from "@/components/HomeGallerySection";
import Achievements from "@/pages/Achievements";

// 🔥 REAL ANNOUNCEMENTS (from PDF)
const announcements = [
  "🏥 Serving communities through hospitals, dispensaries & mental health care",
  "📚 Child Sponsorship Programme helping children achieve education",
  "👩‍👧 Women Empowerment through skill training & self-help groups",
  "🌿 Community Development: Medical camps, awareness & environmental programs",
  "🤝 Supporting marginalized communities across Karnataka, Goa & Manipur",
  "❤️ 45+ Years of compassionate service since 1976",
];

// Animation
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Index() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <HeroCarousel />

      {/* 🔥 PREMIUM + MEANINGFUL TICKER */}
      <div className="bg-gradient-to-r from-[#1f2d24] via-[#355E3B] to-[#2f4f34] py-2.5 overflow-hidden border-y border-white/10">
        <div className="flex items-center">
          {/* Label */}
          <div className="bg-white/10 backdrop-blur-md text-white font-semibold text-xs px-4 py-1 shrink-0 mr-4 rounded-r-full border border-white/20">
            OUR WORK
          </div>

          {/* Marquee */}
          <div className="overflow-hidden flex-1 relative">
            <div className="marquee-content flex gap-12 whitespace-nowrap animate-marquee">
              {[...announcements, ...announcements].map((a, i) => (
                <span key={i} className="text-white/90 text-sm tracking-wide">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 MISSION STRIP (NEW — from PDF) */}
      <div className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#355E3B] font-semibold text-lg max-w-4xl mx-auto leading-relaxed">
            “To proclaim the compassionate love of God and empower women, the
            marginalized, and the vulnerable to build a just and dignified
            society.”
          </p>
        </div>
      </div>

      {/* 🔥 SECTIONS */}

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HomeQuickLinks />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <HomeAboutSection />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <HomeNewsSection />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <HomeDonationSection />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <HomeGallerySection />
      </motion.div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Achievements />
      </motion.div>

      {/* 🔥 IMPACT STRIP (NEW — HIGH VALUE) */}
      <div className="bg-gradient-to-r from-[#355E3B] to-[#1f2d24] py-10 text-center">
        <p className="text-white text-lg font-medium max-w-3xl mx-auto px-4">
          Empowering lives through education, healthcare, and social outreach —
          reaching the unreached and transforming communities with compassion.
        </p>
      </div>
    </main>
  );
}
