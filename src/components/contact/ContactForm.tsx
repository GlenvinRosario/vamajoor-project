import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { INPUT_CLASS } from "@/constants/contact";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState<{
    open: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        "service_dharma",
        "template_69jkvd5",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "riYQKk2AcIbbjf5EY"
      );

      setDialog({
        open: true,
        type: "success",
        title: "Message Sent Successfully!",
        message:
          "Thank you for reaching out to Dharma Jyothi Charitable Society. Our team will review your inquiry and get back to you shortly.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setDialog({
        open: true,
        type: "error",
        title: "Unable to Send Message",
        message:
          "Something went wrong while sending your message. Please check your internet connection or try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-[#355E3B]/15 p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-5"
      >
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#355E3B]">
            Send a Message
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1">
            Fill in your details below and we will get back to you soon.
          </p>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className={`${INPUT_CLASS} w-full text-base sm:text-lg py-3 sm:py-3.5 px-4`}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="+91 XXXXX XXXXX"
          value={formData.phone}
          onChange={handleChange}
          className={`${INPUT_CLASS} w-full text-base sm:text-lg py-3 sm:py-3.5 px-4`}
        />

        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          className={`${INPUT_CLASS} w-full text-base sm:text-lg py-3 sm:py-3.5 px-4`}
          required
        />

        <textarea
          rows={4}
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          className={`${INPUT_CLASS} w-full text-base sm:text-lg py-3 sm:py-3.5 px-4 resize-none`}
          required
        />

        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.01 }}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#355E3B] to-[#1f2d24] text-white text-base sm:text-lg font-bold py-3.5 sm:py-4 rounded-xl shadow-lg disabled:opacity-60 cursor-pointer"
        >
          <Send size={18} />
          <span>{loading ? "Sending..." : "Send Message"}</span>
        </motion.button>
      </motion.form>

      {/* Responsive Animated Dialog Modal */}
      <AnimatePresence>
        {dialog.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDialog((prev) => ({ ...prev, open: false }))}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 18 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm sm:max-w-md overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 text-center shadow-2xl border border-[#355E3B]/15"
            >
              <div
                className={`absolute top-0 inset-x-0 h-1.5 ${
                  dialog.type === "success"
                    ? "bg-gradient-to-r from-[#355E3B] via-emerald-500 to-lime-400"
                    : "bg-gradient-to-r from-red-500 to-rose-400"
                }`}
              />

              <button
                type="button"
                onClick={() => setDialog((prev) => ({ ...prev, open: false }))}
                aria-label="Close dialog"
                className="absolute top-3.5 right-3.5 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>

              <div
                className={`mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl shadow-sm ${
                  dialog.type === "success"
                    ? "bg-[#eaf6ee] text-[#355E3B]"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {dialog.type === "success" ? (
                  <CheckCircle2 size={32} />
                ) : (
                  <AlertCircle size={32} />
                )}
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                {dialog.title}
              </h4>

              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-gray-600">
                {dialog.message}
              </p>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setDialog((prev) => ({ ...prev, open: false }))}
                className={`mt-6 w-full rounded-xl py-3.5 text-sm sm:text-base font-bold text-white shadow-md transition-all cursor-pointer ${
                  dialog.type === "success"
                    ? "bg-gradient-to-r from-[#355E3B] to-[#1f2d24] hover:shadow-lg"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {dialog.type === "success" ? "Done" : "Try Again"}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
