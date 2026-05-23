import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/constants/contact";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-[#355E3B]">
        Get In Touch
      </h2>

      <p className="text-gray-600 leading-relaxed">
        Whether you want to volunteer, donate, or collaborate with us,
        we welcome you to be part of our mission.
      </p>

      {CONTACT_INFO.map((c, i) => {
        const Icon = c.icon;

        return (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-[#355E3B]/10 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#355E3B] to-[#1f2d24] flex items-center justify-center shrink-0">
              <Icon size={20} className="text-white" />
            </div>

            <div>
              <p className="font-semibold text-[#355E3B] text-sm">
                {c.label}
              </p>

              <p className="text-gray-600 text-sm whitespace-pre-line">
                {c.value}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}