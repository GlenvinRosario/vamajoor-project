"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users } from "lucide-react";
import { TEAM_MEMBERS } from "@/constants/team";

const getRoleRank = (designation: string) => {
  const d = designation.toLowerCase();
  if (d === "president") return 1;
  if (d === "secretary" || d === "treasurer") return 2;
  return 3;
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};
type Tier = "President" | "Executive" | "Member" | "Historical";

const TIER_COLORS: Record<
  Tier,
  {
    border: string;
    divider: string;
    role: string;
    photoBg: string;
    badge?: string;
  }
> = {
  President: {
    border: "border-[#9FE1CB] border-[1.5px]",
    divider: "bg-[#7F77DD]",
    role: "text-[#534AB7]",
    photoBg: "from-[#d0f0da] to-[#a8e6bc]",
    badge: "bg-[#EEEDFE] text-[#3C3489]",
  },
  Executive: {
    border: "border-[#5DCAA5] border-[1.5px]",
    divider: "bg-[#1D9E75]",
    role: "text-[#0F6E56]",
    photoBg: "from-[#e1f5ee] to-[#9FE1CB]",
  },
  Member: {
    border: "border-[#FAC775] border-[0.5px]",
    divider: "bg-[#EF9F27]",
    role: "text-[#854F0B]",
    photoBg: "from-[#fff8ee] to-[#fae4b0]",
  },
  Historical: {
    border: "border-emerald-900/10 border-[0.5px]",
    divider: "bg-emerald-600",
    role: "text-emerald-700",
    photoBg: "from-[#f4faf5] to-[#d0f0da]",
  },
};

const ROW_LABELS: Record<string, { label: string; className: string }> = {
  President: {
    label: "✦ President",
    className: "bg-[#d4e8ff] text-[#1a4580]",
  },
  Executive: {
    label: "✦ Executive Board",
    className: "bg-[#d0f0da] text-[#0F6E56]",
  },
  Member: {
    label: "✦ Members",
    className: "bg-[#FAEEDA] text-[#854F0B]",
  },
};

// Hardcoded sample data for older terms using exact same interface types
const HISTORICAL_MEMBERS_2020_2025 = [
  { name: "Sister Leena V.J", designation: "Former Executive Member", image: "" },
  { name: "Sister Maria D'Souza", designation: "Past Secretary", image: "" },
  { name: "Father Gregary Rosario", designation: "Advisory Council", image: "" }
];

const HISTORICAL_MEMBERS_2015_2020 = [
  { name: "Dr. Anil Kumar", designation: "Former Medical Director", image: "" },
  { name: "Sister Silfa Rodriguez", designation: "Past Treasurer", image: "" }
];
const RowLabel = ({ tier }: { tier: keyof typeof ROW_LABELS }) => {
  const { label, className } = ROW_LABELS[tier];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center my-10"
    >
      <span
        className={`inline-block rounded-full px-5 py-1.5 text-[11px] font-semibold tracking-[2.5px] uppercase ${className}`}
      >
        {label}
      </span>
    </motion.div>
  );
};

interface Member {
  name: string;
  designation: string;
  image: string;
}

const TeamCard = ({
  member,
  tier,
  index,
  large = false,
}: {
  member: Member;
  tier: Tier;
  index: number;
  large?: boolean;
}) => {
  const colors = TIER_COLORS[tier];
  const photoHeight = large ? "h-[420px]" : "h-[300px]";

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative overflow-hidden rounded-2xl bg-white border ${colors.border} shadow-sm hover:shadow-xl transition-shadow duration-300 w-full`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent z-10" />

      <div className={`relative overflow-hidden bg-gradient-to-br ${colors.photoBg} ${photoHeight}`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: "center 5%" }}
          onError={(e) => {
            e.currentTarget.src =
              "https://ui-avatars.com/api/?name=" +
              encodeURIComponent(member.name) +
              "&background=2E7D52&color=fff&size=520";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 text-center">
        {tier === "President" && colors.badge && (
          <span className={`inline-block rounded-full px-4 py-1 text-[10px] font-semibold tracking-[2px] uppercase mb-2 ${colors.badge}`}>
            President
          </span>
        )}
        <h3 className={`font-semibold text-gray-900 ${large ? "text-[15px]" : "text-[14px]"}`}>
          {member.name}
        </h3>
        <div className={`mx-auto mt-2 mb-2 h-[3px] w-8 rounded-full ${colors.divider}`} />
        <p className={`text-[10px] font-semibold tracking-[2px] uppercase ${colors.role}`}>
          {member.designation}
        </p>
      </div>
    </motion.div>
  );
};
export default function OurTeam() {
  const [open2020, setOpen2020] = useState(false);
  const [open2015, setOpen2015] = useState(false);

  const sorted = [...TEAM_MEMBERS].sort(
    (a, b) => getRoleRank(a.designation) - getRoleRank(b.designation)
  );

  const president = sorted.filter((m) => m.designation === "President");
  const executives = sorted.filter(
    (m) => m.designation === "Secretary" || m.designation === "Treasurer"
  );
  const members = sorted.filter((m) => m.designation === "Member");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0faf4] via-[#e8f5e9] to-[#eaf6ec] py-24">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#5D8A66]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[#1D9E75]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block rounded-full bg-[#d0f0da] px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-[#1a6b3a] mb-4">
            Meet Our Team
          </span>
          <h2 className="text-5xl font-bold text-[#1a4d2e]">
            Our Leadership Team
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500 text-sm leading-relaxed">
            Dedicated individuals working together to drive positive change and serve the community with compassion, commitment, and integrity.
          </p>
        </motion.div>

        {/* ── ROW 1: PRESIDENT ── */}
        {president.length > 0 && (
          <>
            <RowLabel tier="President" />
            <div className="flex justify-center">
              <div className="w-full max-w-[320px]">
                <TeamCard member={president[0]} tier="President" index={0} large />
              </div>
            </div>
          </>
        )}

        {/* ── ROW 2: EXECUTIVE BOARD ── */}
        {executives.length > 0 && (
          <>
            <RowLabel tier="Executive" />
            <div className="grid grid-cols-2 gap-6 max-w-[580px] mx-auto">
              {executives.map((m, i) => (
                <TeamCard key={m.name} member={m} tier="Executive" index={i} />
              ))}
            </div>
          </>
        )}

        {/* ── ROW 3: MEMBERS ── */}
        {members.length > 0 && (
          <>
            <RowLabel tier="Member" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {members.map((m, i) => (
                <TeamCard key={m.name} member={m} tier="Member" index={i} />
              ))}
            </div>
          </>
        )}
        {/* ================= HISTORICAL SECTIONS ================= */}
        <div className="mt-24 space-y-6 max-w-5xl mx-auto">
          
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#1a4d2e] tracking-tight">Historical Operational Terms</h3>
            <p className="text-xs text-gray-400 mt-1">Click to view past organizational serving cohorts</p>
          </div>

          {/* ── SECTION: 2020 - 2025 TERM ── */}
          <div className="rounded-2xl border border-emerald-950/5 bg-white/40 backdrop-blur-sm overflow-hidden shadow-sm">
            <button
              onClick={() => setOpen2020(!open2020)}
              className="w-full px-6 py-5 flex items-center justify-between font-semibold text-[#1a4d2e] hover:bg-emerald-50/40 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Users size={18} className="text-emerald-700" />
                <span>Term Cohort: 2020 – 2025 Members</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open2020 ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence initial={false}>
              {open2020 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-6 border-t border-emerald-950/5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {HISTORICAL_MEMBERS_2020_2025.map((m, i) => (
                      <TeamCard key={m.name} member={m} tier="Historical" index={i} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── SECTION: 2015 - 2020 TERM ── */}
          <div className="rounded-2xl border border-emerald-950/5 bg-white/40 backdrop-blur-sm overflow-hidden shadow-sm">
            <button
              onClick={() => setOpen2015(!open2015)}
              className="w-full px-6 py-5 flex items-center justify-between font-semibold text-[#1a4d2e] hover:bg-emerald-50/40 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Users size={18} className="text-emerald-700" />
                <span>Term Cohort: 2015 – 2020 Members</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open2015 ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence initial={false}>
              {open2015 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-6 border-t border-emerald-950/5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {HISTORICAL_MEMBERS_2015_2020.map((m, i) => (
                      <TeamCard key={m.name} member={m} tier="Historical" index={i} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
