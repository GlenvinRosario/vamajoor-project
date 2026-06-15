"use client";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { BookOpen, Heart, Users } from "lucide-react";

const quickLinks = [
  {
    icon: BookOpen,
    title: "Education Programs",
    description:
      "Supporting schools, child sponsorship programs, and skill development initiatives for marginalized communities.",
    image:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781381319/henhosvmlzidl7xj1qre.jpg",
    href: "/programs",
    accent: "#22c55e",
    accentLight: "#dcfce7",
    accentMid: "#16a34a",
    label: "Education",
    number: "01",
  },
  {
    icon: Heart,
    title: "Healthcare Services",
    description:
      "Providing quality care through hospitals, dispensaries, mental health support, and outreach medical camps.",
    image:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781381330/i7jgvldeqms2i0wt2byw.jpg",
    href: "/programs",
    accent: "#34d399",
    accentLight: "#d1fae5",
    accentMid: "#059669",
    label: "Healthcare",
    number: "02",
  },
  {
    icon: Users,
    title: "Community & Women Empowerment",
    description:
      "Empowering women and communities through self-help groups, training, and social development programs.",
    image:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781381313/ytoqk6oh8igeno8kfq77.jpg",
    href: "/programs",
    accent: "#4ade80",
    accentLight: "#bbf7d0",
    accentMid: "#15803d",
    label: "Community",
    number: "03",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function Card({ item, index }: { item: (typeof quickLinks)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Link
        to={item.href}
        className="group relative flex flex-col md:flex-row overflow-hidden rounded-3xl"
        style={{
          background: "#fff",
          boxShadow: `0 4px 32px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)`,
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        {/* ── NUMBER BADGE ── */}
        <div
          className="absolute top-5 z-20"
          style={{ [isEven ? "left" : "right"]: "20px" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${item.accent}, ${item.accentMid})`,
              boxShadow: `0 4px 12px ${item.accent}55`,
            }}
          >
            {item.number}
          </div>
        </div>

        {/* ── IMAGE (always left on desktop for even, right for odd) ── */}
        <div
          className={`w-full md:w-[52%] h-[280px] md:h-[340px] overflow-hidden flex-shrink-0 ${
            !isEven ? "md:order-2" : ""
          }`}
        >
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          {/* colour wash overlay on hover */}
          <div
            className="absolute inset-0 opacity-0  transition-opacity duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${item.accent}, ${item.accentMid})`,
            }}
          />
        </div>

        {/* ── CONTENT ── */}
        <div
          className={`flex-1 flex flex-col justify-center gap-4 p-8 md:p-10 ${
            !isEven ? "md:order-1" : ""
          }`}
          style={{
            background: `linear-gradient(160deg, ${item.accentLight}55 0%, #ffffff 60%)`,
          }}
        >
          {/* top label pill */}
          <div>
            <span
              className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-[2px] uppercase"
              style={{
                background: item.accentLight,
                color: item.accentMid,
              }}
            >
              {item.label}
            </span>
          </div>

          {/* icon + title */}
          <div className="flex items-start gap-4">
            <div
              className="mt-0.5 w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm"
              style={{
                background: `linear-gradient(135deg, ${item.accentLight}, ${item.accent}33)`,
                border: `1.5px solid ${item.accent}44`,
              }}
            >
              <item.icon size={20} style={{ color: item.accentMid }} />
            </div>
            <h3 className="text-[22px] font-bold text-gray-900 leading-tight">
              {item.title}
            </h3>
          </div>

          <p className="text-gray-500 text-[15px] leading-relaxed">
            {item.description}
          </p>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-2 text-sm font-semibold mt-1"
            style={{ color: item.accentMid }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span>Explore Initiative</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* decorative corner blob */}
          <div
            className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-10 pointer-events-none"
            style={{ background: item.accent }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default function HomeQuickLinks() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(160deg, #f0faf4 0%, #e8f5e9 40%, #f5fff7 70%, #eaf6ec 100%)",
      }}
    >
      {/* background blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #86efac, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4ade80, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span
            className="inline-block rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] mb-4"
            style={{ background: "#dcfce7", color: "#15803d" }}
          >
            What We Do
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{
              background: "linear-gradient(135deg, #0d3320, #16a34a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Key Initiatives
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-[15px] leading-relaxed">
            Dharma Jyothi Charitable Society works across education, healthcare,
            and community empowerment to create lasting change.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 max-w-5xl mx-auto"
        >
          {quickLinks.map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}