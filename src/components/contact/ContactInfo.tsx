import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/constants/contact";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-5 sm:space-y-6"
    >
      <div className="text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#355E3B] tracking-tight leading-tight">
          Get In Touch
        </h2>

        <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
          Whether you want to volunteer, donate, or collaborate with us, we
          welcome you to be part of our mission.
        </p>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 cols on tablet (md), 1 col stacked on desktop (lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 pt-1 sm:pt-2">
        {CONTACT_INFO.map((c, i) => {
          const Icon = c.icon;

          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3.5 sm:gap-5 p-4 sm:p-6 bg-white/85 backdrop-blur-md rounded-2xl border border-[#355E3B]/15 shadow-sm hover:shadow-md transition-shadow min-w-0"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 p-2.5 sm:p-3.5 rounded-xl bg-gradient-to-br from-[#355E3B] to-[#1f2d24] flex items-center justify-center shrink-0 shadow-sm">
                <Icon size={20} className="text-white" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-bold text-[#355E3B] text-sm sm:text-base md:text-lg">
                  {c.label}
                </p>

                <p className="mt-1 text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line break-words">
                  {c.value}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
