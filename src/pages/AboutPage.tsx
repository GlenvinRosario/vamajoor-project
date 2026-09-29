import { motion } from "framer-motion";
import { Compass, Target, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#f6fbf8] text-[#102018] overflow-hidden w-full min-h-screen antialiased">
      {/* ================= HERO & NARRATIVE SECTION ================= */}
      <section className="relative py-24 px-4 md:px-6">
        {/* Signature Mesh Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(#1a4d2e_2px,transparent_2px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(26,77,46,0.06),transparent_45%)]" />
        
        <div className="relative container mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Narrative Block & Performance Counters */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eaf4ee] shadow-sm mb-5 border border-[#e1f0e7]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#1a4d2e]">
                Established 1973
              </span>
            </div>

            <h2 className="text-4xl font-black text-[#0a2313] mb-6 tracking-tight leading-tight">
              A Remarkable Legacy <br />of Compassion & Service
            </h2>
            
            <p className="text-slate-600 leading-relaxed mb-4 text-base font-medium">
              Dharma Jyothi Charitable Society, Mangalore is a non-profit organization that strives to empower and uplift marginalized communities in the Indian states of Karnataka. 
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8 text-base">
              Founded in 1973, the society has established a remarkable legacy of service through its multifaceted initiatives in education, healthcare, women's empowerment, community development, and environmental protection. Guided by the values of compassion, empowerment, and social justice, we continue to illuminate hope and transform lives as a beacon of resilience.
            </p>

            {/* Dynamic Metric Grid Up To Year 2026 */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years of Stewardship", value: "53 Years" },
                { label: "Active Operational State", value: "Karnataka" },
                { label: "Core Impact Frameworks", value: "5 Pillars" },
                { label: "Community Status", value: "100% Direct" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, border: "1px solid #1a4d2e" }}
                  className="rounded-2xl bg-white border border-[#e1f0e7] shadow-sm p-5 text-center transition-all duration-300"
                >
                  <p className="text-2xl font-black text-[#1a4d2e] tracking-tight">{s.value}</p>
                  <p className="text-[11px] text-slate-500 mt-1 font-bold uppercase tracking-wider">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Historical Media Showcase (Preserving your exact requested single cloud image structure) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative justify-self-center w-full max-w-md lg:max-w-none"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-white group">
              <img
                src="https://res.cloudinary.com/dapmnkke3/image/upload/v1790708896/c9fsj5izvmvfdrejx33b.jpg"
                className="h-[460px] w-full object-cover group-hover:scale-102 transition-transform duration-700"
                alt="Dharma Jyothi Community Initiative Showcase"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent pointer-events-none" />
            </div>

            {/* Dynamic Date Tag Updated strictly to 1973 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-[#e1f0e7] min-w-[130px] text-center"
            >
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Founded</p>
              <p className="text-3xl font-black text-[#1a4d2e]">1973</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* ================= CORE STRATEGIC PILLARS (VISION & MISSION) ================= */}
      <section className="py-24 bg-[#eaf4ee] border-t border-b border-[#e1f0e7] px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest uppercase text-[#2e6f47] block">
              Strategic Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a2313] tracking-tight mt-2">
              Vision & Mission Framework
            </h2>
            <div className="h-1 w-16 bg-[#1a4d2e] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-[#e1f0e7] p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="p-3.5 bg-[#eaf4ee] text-[#1a4d2e] rounded-2xl mb-6 self-start shadow-inner">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#0a2313] mb-4 tracking-tight">Our Vision</h3>
              <p className="text-slate-700 text-lg font-bold leading-relaxed italic text-[#1a4d2e]">
                “Empowering Lives, Transforming Communities, Building a Better Society.”
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[#e1f0e7] p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="p-3.5 bg-[#eaf4ee] text-[#1a4d2e] rounded-2xl mb-6 self-start shadow-inner">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#0a2313] mb-4 tracking-tight">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                To serve and empower individuals and communities, especially those who are vulnerable and underserved, through quality education, accessible healthcare, social development and charitable initiatives, while promoting equality, dignity, compassion, responsible participation in society, and care for creation through environmental awareness, sustainable practices and responsible stewardship of natural resources.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= COMPREHENSIVE OBJECTIVES SECTION ================= */}
      <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#1a4d2e] border border-[#e1f0e7] shadow-sm mb-3">
            <ShieldCheck size={14} /> Constitutional Scope
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0a2313]">
            Institutional Objectives
          </h2>
        </div>

        {/* Structured Row Blueprint for your Bullet Requirements */}
        <div className="grid grid-cols-1 gap-4">
          {objectivesData.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 6 }}
              className="group flex items-start gap-4 p-5 bg-white border border-[#e1f0e7] hover:border-[#1a4d2e]/30 rounded-2xl transition-all duration-300 shadow-sm"
            >
              <div className="mt-0.5 text-[#2e6f47] group-hover:text-[#1a4d2e] transition-colors flex-shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <p className="text-slate-700 text-sm md:text-base font-semibold leading-relaxed">
                {obj}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

// Constitutional objective metrics parsed cleanly from documentation text
const objectivesData = [
  "To take over, manage, administer, carry on, conduct, develop, improve and equip such of the educational and medical institutions works and activities presently conducted and carried on in India.",
  "To support and promote the advancement of educational activities in all its branches and to encourage medical assistance irrespective of religion, race, caste, community or social status.",
  "To provide, support and administer social centres and other charitable, social works, hospitals and health centres."
];
