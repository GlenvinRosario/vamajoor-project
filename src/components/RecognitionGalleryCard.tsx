import { motion } from "framer-motion";
import { Camera, Sparkles, ZoomIn } from "lucide-react";

interface AwardPhoto {
  id: string;
  image_url: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

export function RecognitionGalleryCard({
  title,
  subtitle = "Highlights from our award ceremonies and healthcare milestones",
  photos,
  onSelectPhoto,
}: {
  title: string;
  subtitle?: string;
  photos: AwardPhoto[];
  onSelectPhoto: (url: string) => void;
}) {
  // Compact centered width for single-photo galleries; standard 4-column card size for multi-photo galleries
  const cardWidthClass =
    photos.length === 1
      ? "w-full sm:w-1/2 lg:w-[34%]"
      : "w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative mt-10 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#e5f5eb] via-[#dcf2e4] to-[#cfead9] border border-[#a9d9bc] p-6 md:p-9 shadow-[0_14px_40px_rgba(26,77,46,0.09)] hover:shadow-[0_22px_54px_rgba(26,77,46,0.14)] transition-shadow duration-500"
    >
      {/* Top Emerald Accent Strip & Decorative Ambient Orbs */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#1a4d2e] via-[#2e6f47] to-[#55b376]" />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/45 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-16 w-60 h-60 rounded-full bg-[#8fd1a8]/30 blur-3xl pointer-events-none" />

      {/* Header Row */}
      <div className="relative z-10 flex items-center gap-4 mb-8 pb-5 border-b border-[#1a4d2e]/12">
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.06 }}
          transition={{ duration: 0.4 }}
          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1a4d2e] to-[#2e6f47] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#1a4d2e]/20 ring-4 ring-white/50"
        >
          <Camera size={21} />
        </motion.div>
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[2px] text-[#2e6f47] mb-0.5">
            <Sparkles size={11} />
            <span>Gallery Showcase</span>
          </div>
          <h3 className="text-lg md:text-2xl font-black text-[#0a2614] tracking-tight">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-[#1c4228]/80 font-medium mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Centered Flex Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-5 md:gap-6">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            onClick={() => onSelectPhoto(photo.image_url)}
            className={`group relative aspect-[4/3] ${cardWidthClass} rounded-2xl overflow-hidden cursor-pointer bg-[#d5eee0] p-1.5 border border-white/80 shadow-[0_8px_24px_rgba(16,48,28,0.1)] hover:shadow-[0_20px_38px_rgba(26,77,46,0.22)] transition-shadow duration-300`}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#eaf6ee]">
              <img
                src={photo.image_url}
                alt={`${title} ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Glossy Sheen Sweep on Hover */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

              {/* Bottom Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081f11]/75 via-transparent to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Quick View Pill (Bottom Right) */}
              <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-[#1a4d2e]/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wide opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                View
              </span>

              {/* Zoom Icon Badge (Top Right) */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-white/95 text-[#1a4d2e] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md">
                <ZoomIn size={15} />
              </div>

              {/* Bottom Green Accent Bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-lime-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
