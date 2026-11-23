"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, Calendar } from "lucide-react";
import { TEAM_MEMBERS } from "@/constants/team";

const getRoleRank = (designation: string) => {
  const d = designation.toLowerCase();
  if (d.includes("president")) return 1;
  if (d.includes("secretary") || d.includes("treasurer")) return 2;
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
// 2023–2024
const HISTORICAL_MEMBERS_2023_2024 = [
  { name: "Leena Valookarna Jose", designation: "President", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1781374622/by8itbqnyumwuvbstbh8.jpg" },
  {
    name: "Laura Rodrigues",
    designation: "Secretary/Treasurer",
    image:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1794224476/mvpvspqygawiw80gn2so.jpg",
  },
  { name: "Doreen Pinto", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227183/gqcz6z0zaotjtnpgzufg.jpg" },
  { name: "Zarina Lobo", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1781374636/bjxmwsz54xivddtfqsks.jpg" },
  { name: "Mary Lissy", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227016/krnzxl7wtzhsss3ziljj.jpg" },
  { name: "Maria Kutty", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227003/lx4m6nkh7q55c2d8jnmr.jpg" },
  { name: "Ancilla Roshni D’Mello", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1781374565/n9qe2iatfzdl0spsn1zi.jpg" },
];

// 2021–2022
const HISTORICAL_MEMBERS_2021_2022 = [
  { name: "Juliet Lobo", designation: "President", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227020/nf8acwbkzrbcsi553rzn.jpg" },
  {
    name: "Laura Rodrigues",
    designation: "Secretary/Treasurer",
    image:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1794224476/mvpvspqygawiw80gn2so.jpg",
  },
  { name: "Ancilla Roshni D’Mello", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1781374565/n9qe2iatfzdl0spsn1zi.jpg" },
  { name: "Doreen Pinto", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227183/gqcz6z0zaotjtnpgzufg.jpg" },
  { name: "Mary Lissy", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227016/krnzxl7wtzhsss3ziljj.jpg" },
  { name: "Maria Kutty", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227003/lx4m6nkh7q55c2d8jnmr.jpg" },
  { name: "Zarina Lobo", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1781374636/bjxmwsz54xivddtfqsks.jpg" },
];

// 2019–2020
const HISTORICAL_MEMBERS_2019_2020 = [
  { name: "Juliet Lobo", designation: "President", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227020/nf8acwbkzrbcsi553rzn.jpg" },
  {
    name: "Laura Rodrigues",
    designation: "Secretary/Treasurer",
    image:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1794224476/mvpvspqygawiw80gn2so.jpg",
  },
  { name: "Ancilla Roshni D’Mello", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1781374565/n9qe2iatfzdl0spsn1zi.jpg" },
  { name: "Doreen Pinto", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227183/gqcz6z0zaotjtnpgzufg.jpg" },
  { name: "Mary Lissy", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227016/krnzxl7wtzhsss3ziljj.jpg" },
  { name: "Maria Kutty", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794227003/lx4m6nkh7q55c2d8jnmr.jpg" },
  { name: "Zarina Lobo", designation: "Member", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1781374636/bjxmwsz54xivddtfqsks.jpg" },
];

// // 2015–2020
// const HISTORICAL_MEMBERS_2015_2020 = [
//   { name: "Dr. Anil Kumar", designation: "Former Medical Director", image: "" },
//   {
//     name: "Juliet Lobo",
//     designation: "SRA- President",
//     image:
//       "https://cloudinary.com",
//   },
//   { name: "Sister Silfa Rodriguez", designation: "Past Treasurer", image: "" },
//   {
//     name: "MariaKutty",
//     designation: "Member",
//     image:
//       "https://cloudinary.com",
//   },
//   {
//     name: "Mary Lissy",
//     designation: "Member",
//     image:
//       "https://cloudinary.com",
//   },
//   {
//     name: "Thankamma",
//     designation: "Member",
//     image:
//       "https://cloudinary.com",
//   },
//   { name: "Ancilla", designation: "Member", image: "" },
//   { name: "Zarina", designation: "Member", image: "" },
// ];

interface Member {
  name: string;
  designation: string;
  image: string;
}

interface HistoricalTerm {
  id: string;
  period: string;
  title: string;
  members: Member[];
}

// Add any future year sets right here—the UI renders them automatically!
const HISTORICAL_TERMS: HistoricalTerm[] = [
  {
    id: "term-2023-2024",
    period: "2023 – 2024",
    title: "Governing Board",
    members: HISTORICAL_MEMBERS_2023_2024,
  },
  {
    id: "term-2021-2022",
    period: "2021 – 2022",
    title: "Governing Board",
    members: HISTORICAL_MEMBERS_2021_2022,
  },
  {
    id: "term-2019-2020",
    period: "2019 – 2020",
    title: "Governing Board",
    members: HISTORICAL_MEMBERS_2019_2020,
  },
  // {
  //   id: "term-2015-2020",
  //   period: "2015–2020",
  //   title: "Foundational Leadership & Board",
  //   members: HISTORICAL_MEMBERS_2015_2020,
  // },
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

  const fallbackAvatar =
    "https://ui-avatars.com" +
    encodeURIComponent(member.name.trim()) +
    "&background=2E7D52&color=fff&size=520";

  const imageSrc =
    member.image && member.image.trim() !== ""
      ? member.image.trim()
      : fallbackAvatar;

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

      <div
        className={`relative overflow-hidden bg-gradient-to-br ${colors.photoBg} ${photoHeight}`}
      >
        <img
          src={imageSrc}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: "center 5%" }}
          onError={(e) => {
            e.currentTarget.src = fallbackAvatar;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 text-center">
        {tier === "President" && colors.badge && (
          <span
            className={`inline-block rounded-full px-4 py-1 text-[10px] font-semibold tracking-[2px] uppercase mb-2 ${colors.badge}`}
          >
            President
          </span>
        )}
        <h3
          className={`font-semibold text-gray-900 ${large ? "text-[15px]" : "text-[14px]"}`}
        >
          {member.name.trim()}
        </h3>
        <div
          className={`mx-auto mt-2 mb-2 h-[3px] w-8 rounded-full ${colors.divider}`}
        />
        <p
          className={`text-[10px] font-semibold tracking-[2px] uppercase ${colors.role}`}
        >
          {member.designation}
        </p>
      </div>
    </motion.div>
  );
};
const HistoricalTermAccordion = ({
  term,
  isOpen,
  onToggle,
}: {
  term: HistoricalTerm;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const sortedMembers = [...term.members].sort(
    (a, b) => getRoleRank(a.designation) - getRoleRank(b.designation),
  );

  return (
    <div className="rounded-3xl bg-white/90 backdrop-blur-md border border-[#c4ebd1] shadow-[0_6px_24px_rgba(26,77,46,0.05)] overflow-hidden transition-all duration-300">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 md:px-8 md:py-6 text-left hover:bg-[#f4fbf6] transition-colors duration-200 group"
      >
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#e2f5e9] border border-[#c4ebd1] text-sm md:text-base font-extrabold text-[#1a4d2e]">
            <Calendar size={15} className="text-[#2e6f47]" />
            {term.period}
          </span>
          <div>
            <h4 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[#1a4d2e] transition-colors">
              {term.title}
            </h4>
            <p className="text-xs text-[#2e6f47] font-medium">
              {term.members.length} Board Members
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-[#2e6f47]">
            {isOpen ? "Hide" : "View Board"}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-9 h-9 rounded-full bg-[#eaf6ec] border border-[#c4ebd1] text-[#1a4d2e] flex items-center justify-center group-hover:bg-[#1a4d2e] group-hover:text-white transition-colors"
          >
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-8 pt-6 md:px-8 border-t border-[#e2f5e9] bg-[#f9fdfb]">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedMembers.map((member, idx) => {
                  const roleLower = member.designation.toLowerCase();
                  const cardTier: Tier = roleLower.includes("president")
                    ? "President"
                    : roleLower.includes("secretary") ||
                        roleLower.includes("treasurer")
                      ? "Executive"
                      : "Historical";

                  return (
                    <TeamCard
                      key={`${term.id}-${member.name}-${idx}`}
                      member={member}
                      tier={cardTier}
                      index={idx}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default function OurTeam() {
  // First historical term (2023–2024) opens by default; click any year to expand/collapse
  const [openTermId, setOpenTermId] = useState<string | null>(
    HISTORICAL_TERMS[0]?.id ?? null,
  );

  const sorted = [...TEAM_MEMBERS].sort(
    (a, b) => getRoleRank(a.designation) - getRoleRank(b.designation),
  );

  const president = sorted.filter((m) => m.designation === "President");
  const executives = sorted.filter(
    (m) => m.designation === "Secretary" || m.designation === "Treasurer",
  );
  const members = sorted.filter((m) => m.designation === "Member");

  const toggleTerm = (id: string) => {
    setOpenTermId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0faf4] via-[#e8f5e9] to-[#eaf6ec] py-24">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#5D8A66]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[#1D9E75]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* Heading Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Clean, Modern Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a4d2e] leading-tight">
            Governing Board Members
            <span className="block mt-2 text-2xl md:text-3xl font-medium tracking-wide text-[#2e6f47] opacity-90">
              <span className="relative inline-block px-3 py-1 font-bold text-[#1a4d2e] bg-[#e2f5e9] rounded-lg border border-[#c4ebd1]">
                2024–2027
              </span>
            </span>
          </h2>

          {/* Subtle Decorative Underline Accent */}
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#1a4d2e] to-[#2e6f47]" />
        </motion.div>

        {/* ── ROW 1: Leadership Team ── */}
        {executives.length > 0 && (
          <>
            <RowLabel tier="Executive" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {executives.map((m, i) => (
                <TeamCard key={m.name} member={m} tier="Executive" index={i} />
              ))}
            </div>
          </>
        )}

        {/* ── ROW 2: MEMBERS ── */}
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

        {/* ── PREVIOUS GOVERNING BOARDS (REUSABLE ACCORDION ARCHIVE) ── */}
        {HISTORICAL_TERMS.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#c4ebd1]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e2f5e9] border border-[#c4ebd1] text-xs font-bold uppercase tracking-[2px] text-[#1a4d2e] mb-3">
                <Users size={14} />
                <span>Leadership Archive</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-[#1a4d2e] tracking-tight">
                Previous Governing Boards
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#2e6f47] max-w-xl mx-auto">
                Honoring the dedicated leaders and members who guided Dharma
                Jyothi Charitable Society across past tenures.
              </p>
            </motion.div>

            <div className="space-y-4">
              {HISTORICAL_TERMS.map((term) => (
                <HistoricalTermAccordion
                  key={term.id}
                  term={term}
                  isOpen={openTermId === term.id}
                  onToggle={() => toggleTerm(term.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
