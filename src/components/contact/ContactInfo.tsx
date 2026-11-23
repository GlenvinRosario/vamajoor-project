import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/constants/contact";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#355E3B] tracking-tight leading-tight">
          Get In Touch
        </h2>

        <p className="mt-4 text-gray-600 text-lg sm:text-xl leading-relaxed font-medium">
          Whether you want to volunteer, donate, or collaborate with us, we
          welcome you to be part of our mission.
        </p>
      </div>

      <div className="space-y-4 pt-2">
        {CONTACT_INFO.map((c, i) => {
          const Icon = c.icon;

          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 sm:gap-5 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-[#355E3B]/15 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-13 h-13 p-3.5 rounded-xl bg-gradient-to-br from-[#355E3B] to-[#1f2d24] flex items-center justify-center shrink-0 shadow-sm">
                <Icon size={22} className="text-white" />
              </div>

              <div>
                <p className="font-bold text-[#355E3B] text-base sm:text-lg">
                  {c.label}
                </p>

                <p className="mt-1 text-gray-600 text-base sm:text-[17px] leading-relaxed whitespace-pre-line">
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
