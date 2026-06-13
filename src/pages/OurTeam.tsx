import { TEAM_MEMBERS } from "@/constants/team";
import { motion } from "framer-motion";

export default function OurTeam() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FDF8F0] via-white to-[#EEF6EF] py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#5D8A66]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="rounded-full bg-[#D4AF37]/15 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#355E3B]">
            Meet Our Team
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#355E3B]">
            Our Leadership Team
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Dedicated individuals working together to drive positive change and
            serve the community with compassion, commitment, and integrity.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS?.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#F8FAF8]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-contain object-top p-4 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://ui-avatars.com/api/?name=" +
                      encodeURIComponent(member.name) +
                      "&background=355E3B&color=fff&size=512";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#355E3B]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#355E3B]">
                  {member.name}
                </h3>

                <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#D4AF37]" />

                <p className="mt-3 text-sm font-medium uppercase tracking-wide text-[#5D8A66]">
                  {member.designation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}