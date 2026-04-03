import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-[#f4f7f5] via-white to-[#f4f7f5]">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-[#355E3B] via-[#2f4f34] to-[#1f2d24] text-center overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg">
            We’d love to connect with you and support your journey
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
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
                we welcome you to be part of our mission. Reach out and let’s
                create meaningful impact together.
              </p>

              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value:
                    "Dharma Jyothi Social Centre, Vamanjoor, Mangalore, Karnataka, India",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 63601-43936",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@dharmajyothisc.org",
                },
              ].map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-[#355E3B]/10 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#355E3B] to-[#1f2d24] flex items-center justify-center shrink-0">
                    <c.icon size={20} className="text-white" />
                  </div>

                  <div>
                    <p className="font-semibold text-[#355E3B] text-sm">
                      {c.label}
                    </p>
                    <p className="text-gray-600 text-sm mt-0.5">{c.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-[#355E3B]/10 p-8"
            >
              <h3 className="text-xl font-bold text-[#355E3B] mb-6">
                Send a Message
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#355E3B] mb-1 block">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-[#355E3B]/20 focus:border-[#355E3B] outline-none text-sm bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#355E3B] mb-1 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-[#355E3B]/20 focus:border-[#355E3B] outline-none text-sm bg-white"
                      placeholder="+91 XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#355E3B] mb-1 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-[#355E3B]/20 focus:border-[#355E3B] outline-none text-sm bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#355E3B] mb-1 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#355E3B]/20 focus:border-[#355E3B] outline-none text-sm bg-white resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#355E3B] to-[#1f2d24] text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition"
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXTRA CTA STRIP */}
      <section className="py-16 bg-gradient-to-r from-[#355E3B] to-[#1f2d24] text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold mb-3">
            Together, We Can Make a Difference
          </h3>
          <p className="text-white/70 mb-6">
            Join us in creating a compassionate and empowered society.
          </p>
          <a
            href="/donations"
            className="bg-white text-[#355E3B] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Support Our Mission
          </a>
        </motion.div>
      </section>
    </main>
  );
}
