import qr from "@/assets/qr.png";
import { Copy, Heart, ShieldCheck, BadgeCheck, HandHeart } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const bankDetails = [
  { label: "Account Name", value: "Dharma Jyothi Charitable Trust" },
  { label: "Bank Name", value: "State Bank of India" },
  { label: "Account Number", value: "123456789012" },
  { label: "IFSC Code", value: "SBIN0001234" },
  { label: "Branch", value: "Bangalore Main Branch" },
  { label: "UPI ID", value: "dharmajyothi@upi" },
];

const stats = [
  { count: "500+", label: "Children Supported" },
  { count: "120+", label: "Medical Camps" },
  { count: "50+", label: "Villages Reached" },
];

export default function Donations() {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FDF8F0] via-[#F8F5EE] to-[#EEF6EF] py-20">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#5D8A66]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <span className="inline-block rounded-full bg-[#D4AF37]/15 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#355E3B]">
            Make A Difference
          </span>

          <h1 className="mt-5 font-display text-5xl font-bold text-[#355E3B] md:text-6xl">
            Support Our Mission
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Every contribution helps us create lasting impact through education,
            healthcare, community development, and uplifting those who need it
            the most.
          </p>
        </motion.div>

        {/* Main Donation Card */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[32px] border border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        >
          <div className="grid md:grid-cols-2">
            {/* QR Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#355E3B] via-[#46714C] to-[#5D8A66] p-10 text-white">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
              <div className="absolute -left-16 -bottom-16 h-52 w-52 rounded-full bg-white/10" />

              <div className="relative flex h-full flex-col items-center justify-center">
                <h2 className="mb-6 text-2xl font-semibold text-[#F8D775]">
                  Scan & Donate
                </h2>

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="rounded-3xl bg-white p-5 shadow-2xl"
                >
                  <img
                    src={qr}
                    alt="Donation QR"
                    className="h-64 w-64 object-contain"
                  />
                </motion.div>

                <p className="mt-6 text-center text-sm text-white/80">
                  Scan using any UPI app such as Google Pay, PhonePe, Paytm or
                  BHIM and support our initiatives.
                </p>
              </div>
            </div>

            {/* Bank Details Section */}
            <div className="p-10">
              <h2 className="mb-8 text-2xl font-semibold text-[#355E3B]">
                Bank Transfer Details
              </h2>

              <div className="space-y-4">
                {bankDetails.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="group flex items-center justify-between rounded-2xl border border-green-100 bg-green-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-green-100 hover:shadow-md"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        {item.label}
                      </p>

                      <p className="mt-1 font-medium text-gray-800">
                        {item.value}
                      </p>
                    </div>

                    <button
                      onClick={() => copyText(item.value)}
                      className="rounded-full bg-white p-2 shadow transition-all hover:bg-[#355E3B] hover:text-white"
                    >
                      <Copy size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#355E3B] to-[#5D8A66] py-4 font-semibold text-white shadow-lg"
              >
                <Heart size={18} />
                Thank You For Supporting
              </motion.button>

              {/* Trust Badges */}
              <div className="mt-8 grid gap-3">
                <div className="flex items-center gap-3 rounded-xl bg-[#F7FAF7] p-3 text-sm text-gray-700">
                  <ShieldCheck
                    size={18}
                    className="text-[#355E3B]"
                  />
                  Secure & Trusted Donations
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-[#F7FAF7] p-3 text-sm text-gray-700">
                  <BadgeCheck
                    size={18}
                    className="text-[#355E3B]"
                  />
                  Complete Transparency
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-[#F7FAF7] p-3 text-sm text-gray-700">
                  <HandHeart
                    size={18}
                    className="text-[#355E3B]"
                  />
                  Direct Impact On Communities
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Section */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-green-100 bg-white p-8 text-center shadow-lg"
            >
              <h3 className="text-5xl font-bold text-[#355E3B]">
                {item.count}
              </h3>

              <p className="mt-3 text-gray-500">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#355E3B] to-[#5D8A66] p-10 text-center text-white shadow-xl"
        >
          <Heart
            size={34}
            className="mx-auto mb-4 text-[#F8D775]"
          />

          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            "No act of kindness, no matter how small, is ever wasted. Your
            support helps us touch lives, create opportunities, and build a
            brighter future for communities in need."
          </p>
        </motion.div>
      </div>
    </main>
  );
}