import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { INPUT_CLASS } from "@/constants/contact";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-[#355E3B]/10 p-8 space-y-4"
    >
      <h3 className="text-xl font-bold text-[#355E3B]">
        Send a Message
      </h3>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        className={INPUT_CLASS}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="+91 XXXXX"
        value={formData.phone}
        onChange={handleChange}
        className={INPUT_CLASS}
      />

      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={handleChange}
        className={INPUT_CLASS}
        required
      />

      <textarea
        rows={5}
        name="message"
        placeholder="How can we help you?"
        value={formData.message}
        onChange={handleChange}
        className={`${INPUT_CLASS} resize-none`}
        required
      />

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#355E3B] to-[#1f2d24] text-white font-semibold py-3.5 rounded-xl"
      >
        <Send size={16} />
        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
}