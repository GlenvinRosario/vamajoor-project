import { motion } from "framer-motion";

export default function EventSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-md
      "
    >

      <div
        className="
          h-64
          bg-gray-200
          animate-pulse
        "
      />

      <div className="p-5 space-y-3">

        <div
          className="
            h-6
            bg-gray-200
            rounded
            animate-pulse
          "
        />

        <div
          className="
            h-4
            bg-gray-200
            rounded
            animate-pulse
          "
        />

        <div
          className="
            h-4
            bg-gray-200
            rounded
            w-3/4
            animate-pulse
          "
        />

      </div>

    </motion.div>
  );
}