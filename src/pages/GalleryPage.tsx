"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowLeft,
  GraduationCap,
  HeartPulse,
  HandHeart,
  Users,
  Images,
} from "lucide-react";

interface GalleryImage {
  id: string;
  title?: string;
  image_url: string;
  category?: string;
}

// ================= COMMUNITY (UNCHANGED) =================
const communityImages: GalleryImage[] = [
  {
    id: "community-1",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430868/b6ej7dwvxqrczx3fu8zf.jpg",
    category: "Social Outreach",
  },
  {
    id: "community-2",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430867/rmjwssaswomzrixffbjm.jpg",
    category: "Social Outreach",
  },
  {
    id: "community-3",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430866/eodi71aqz5i4i21zaous.jpg",
    category: "Social Outreach",
  },
  {
    id: "community-4",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430865/kzk2prohjpm74xfhmd22.jpg",
    category: "Social Outreach",
  },
  {
    id: "community-5",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430864/kvvnv0dhbzmwrnjp78su.jpg",
    category: "Social Outreach",
  },
  {
    id: "community-6",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430863/qi6vhjhc6fvmtpvlriju.jpg",
    category: "Social Outreach",
  },
  {
    id: "community-8",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430862/adpobdumgolm1t5toulx.jpg",
    category: "Social Outreach",
  },
  {
    id: "community-9",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430860/xy1awwduege3qixttjmg.jpg",
    category: "Social Outreach",
  },
  {
    id: "community-10",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430850/wzogf7lzglgygsb2scpd.jpg",
    category: "Social Outreach",
  },
];

// ================= EVENTS (UNCHANGED) =================
const eventsImages: GalleryImage[] = [
  {
    id: "event-1",
    title: "Event Moment 1",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435686/posho6ujzqhcyw9x74om.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-2",
    title: "Event Moment 2",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/flqgr745bvd4do7yqmhc.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-3",
    title: "Event Moment 3",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/ahopwxj5ilkgng4nkab5.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-4",
    title: "Event Moment 4",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/fyv2ftsul3ows0e3ukcl.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-5",
    title: "Event Moment 5",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/lerbluyxolpkfhqsmyz7.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-6",
    title: "Event Moment 6",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/rel8vmqcdvb1djymretg.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-7",
    title: "Event Moment 7",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435684/j8eu0ptv5tzvhj1spme8.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-8",
    title: "Event Moment 8",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435684/ccrmcaqezaa4hurlagqx.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-9",
    title: "Event Moment 9",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435684/rqdyqusdurfsawwkssk4.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-10",
    title: "Event Moment 10",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435684/ethus5mcmsii0w3jj5rz.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-11",
    title: "Event Moment 11",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435684/ghcqp82tjl1auwch1v61.jpg",
    category: "Social Outreach",
  },
];

// ================= HEALTH (NEW ADDED) =================
const healthImages: GalleryImage[] = [
  {
    id: "event-12",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430868/b6ej7dwvxqrczx3fu8zf.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-13",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430867/rmjwssaswomzrixffbjm.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-14",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430866/eodi71aqz5i4i21zaous.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-15",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430865/kzk2prohjpm74xfhmd22.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-16",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430864/kvvnv0dhbzmwrnjp78su.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-17",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430863/qi6vhjhc6fvmtpvlriju.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-18",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430862/qvvt6mbucyrhsstu6i1b.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-19",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430862/adpobdumgolm1t5toulx.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-20",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430860/xy1awwduege3qixttjmg.jpg",
    category: "Social Outreach",
  },
  {
    id: "event-21",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430850/wzogf7lzglgygsb2scpd.jpg",
    category: "Social Outreach",
  },
];

const educationImages: GalleryImage[] = [
  {
    id: "education-1",
    title: "Education Program 1",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274063/quexba4wwqbbj1ovglcz.jpg",
    category: "Education",
  },
  {
    id: "education-2",
    title: "Education Program 2",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274059/emqd31vs7f36mlr0s9os.jpg",
    category: "Education",
  },
  {
    id: "education-3",
    title: "Education Program 3",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274057/l8gwgknlk7c2uggazyx8.jpg",
    category: "Education",
  },
  {
    id: "education-4",
    title: "Education Program 4",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274054/cpqd4pqjieagjh8l6apf.jpg",
    category: "Education",
  },
  {
    id: "education-5",
    title: "Education Program 5",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274049/jj1mnyf1toyhqzu4pw6j.jpg",
    category: "Education",
  },
  {
    id: "education-6",
    title: "Education Program 6",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274044/gry3nxtj8fjexunkfxra.jpg",
    category: "Education",
  },
  {
    id: "education-7",
    title: "Education Program 7",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274039/ndwtc8kzfcixnnplzlui.jpg",
    category: "Education",
  },
  {
    id: "education-9",
    title: "Education Program 9",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274033/x83pb52dv3uzcaatwu2j.jpg",
    category: "Education",
  },
  {
    id: "education-10",
    title: "Education Program 10",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274024/k8uxwcbzzcg59pshmr7d.jpg",
    category: "Education",
  },
  {
    id: "education-11",
    title: "Education Program 11",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274020/vnk9bo6rya9h7y8kjucq.jpg",
    category: "Education",
  },
  {
    id: "education-11",
    title: "Education Program 11",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274012/jqfcaordbudyjelpdbv9.jpg",
    category: "Education",
  },
  //here
  {
    id: "education-11",
    title: "Education Program 11",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795289546/nwejcbwocj6cvjbrprni.jpg",
    category: "Education",
  },

  {
    id: "education-11",
    title: "Education Program 11",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795289472/mf56qg7ygaks9cizve1r.jpg",
    category: "Education",
  },
  {
    id: "education-11",
    title: "Education Program 11",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795286811/diwzb54dpqeeqxesmc0q.jpg",
    category: "Education",
  },
  {
    id: "education-11",
    title: "Education Program 11",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795286751/kolffc54zuh61xibbbpd.jpg",
    category: "Education",
  },
  {
    id: "education-11",
    title: "Education Program 11",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1795286797/ubkkva1jxeatc98kbbdg.jpg",
    category: "Education",
  },
];

type DivisionId = "education" | "medical" | "social" | "community" | null;

interface DivisionCard {
  id: Exclude<DivisionId, null>;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  count: number;
  icon: React.ReactNode;
  accent: string;
}
export default function GalleryPage() {
  const [activeDivision, setActiveDivision] = useState<DivisionId>(null);
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const divisions: DivisionCard[] = useMemo(
    () => [
      {
        id: "education",
        title: "Education",
        subtitle: "Empowering Young Minds",
        description:
          "School programs, SSLC milestones, student mentorship, and educational workshops.",
        coverImage:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795421894/qwmo0uxtv5xn6cxctuyt.jpg",
        count: educationImages.length,
        icon: <GraduationCap className="w-6 h-6 text-emerald-300" />,
        accent: "from-emerald-950/90 via-emerald-950/50 to-transparent",
      },
      {
        id: "medical",
        title: "Medical",
        subtitle: "Healthcare & Wellness",
        description:
          "Patient care, clinical checkups, free health camps, and medical support.",
        coverImage:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436387/m1vlaxvecczqqkcqdbse.jpg",
        count: healthImages.length,
        icon: <HeartPulse className="w-6 h-6 text-amber-300" />,
        accent: "from-teal-950/90 via-emerald-950/50 to-transparent",
      },
      {
        id: "social",
        title: "Social Outreach",
        subtitle: "Events & Drives",
        description:
          "Special outreach programs, environmental drives, and awareness initiatives.",
        coverImage:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/ahopwxj5ilkgng4nkab5.jpg",
        count: eventsImages.length,
        icon: <HandHeart className="w-6 h-6 text-emerald-300" />,
        accent: "from-[#0d3320]/90 via-emerald-950/50 to-transparent",
      },
    ],
    [],
  );

  const divisionImages = useMemo(() => {
    switch (activeDivision) {
      case "education":
        return educationImages;
      case "medical":
        return healthImages;
      case "social":
        return eventsImages;
      case "community":
        return communityImages;
      default:
        return [];
    }
  }, [activeDivision]);

  const currentDivisionInfo = divisions.find((d) => d.id === activeDivision);

  return (
    <main className="min-h-screen bg-[#f5faf7] text-[#0f1f14] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-28 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dapmnkke3/image/upload/f_auto,q_auto,w_1920/v1781555326/bh6nuscxzlnlazoh7vej.png"
            alt="Gallery Background"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#0a1711]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1711] via-transparent to-transparent" />
        </div>

        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400/15 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 relative z-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs font-medium tracking-widest uppercase text-emerald-200 mb-5">
            Our Journey in Frames
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight align-middle">
            {currentDivisionInfo ? (
              <>
                {currentDivisionInfo.title}{" "}
                <span className="text-emerald-300">Gallery</span>
              </>
            ) : (
              <>
                Photo <span className="text-emerald-300">Gallery</span>
              </>
            )}
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm md:text-base">
            {currentDivisionInfo
              ? currentDivisionInfo.description
              : "Choose one of our four divisions below to view dedicated photos from our initiatives."}
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#355E3B] to-[#f59e0b]" />
      </section>
      {/* ================= MAIN CONTENT ================= */}
      <AnimatePresence mode="wait">
        {!activeDivision ? (
          /* ================= 4 DIVISION CARDS VIEW ================= */
          <motion.section
            key="divisions-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-4 md:px-6 py-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {divisions.map((div, index) => (
                <motion.div
                  key={div.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setActiveDivision(div.id)}
                  className="group relative h-[410px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-emerald-950/25 border border-emerald-900/10 bg-[#0d3320]"
                >
                  <img
                    src={div.coverImage}
                    alt={div.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${div.accent}`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      {div.icon}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-xs font-medium text-white">
                      <Images className="w-3.5 h-3.5 text-emerald-300" />
                      {div.count} Photos
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-[11px] uppercase tracking-widest text-emerald-300 font-semibold mb-1">
                      {div.subtitle}
                    </p>
                    <h2 className="text-2xl font-bold tracking-tight mb-2">
                      {div.title}
                    </h2>
                    <p className="text-xs text-white/75 line-clamp-2 mb-4">
                      {div.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-white/15 group-hover:bg-emerald-600 px-4 py-2 rounded-full backdrop-blur-sm transition-colors duration-300">
                      <span>View Photos</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ) : (
          /* ================= SELECTED DIVISION GALLERY VIEW ================= */
          <motion.section
            key="gallery-grid-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="sticky top-0 z-30 bg-[#f5faf7]/90 backdrop-blur-md border-b border-emerald-900/10 py-4 px-4 md:px-6">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setActiveDivision(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-emerald-900 bg-white border border-emerald-900/15 hover:bg-emerald-900 hover:text-white transition-all shadow-sm self-start md:self-auto"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>All Divisions</span>
                </button>

                <div className="flex flex-wrap justify-center gap-2">
                  {divisions.map((div) => (
                    <button
                      key={div.id}
                      onClick={() => setActiveDivision(div.id)}
                      className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                        activeDivision === div.id
                          ? "text-white shadow-md shadow-emerald-900/20"
                          : "text-emerald-900/70 bg-white border border-emerald-900/10 hover:text-emerald-900"
                      }`}
                    >
                      {activeDivision === div.id && (
                        <motion.span
                          layoutId="activeDivisionPill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#355E3B] to-[#1c3f2c]"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{div.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-4 md:px-6 py-10 max-w-7xl mx-auto">
              <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
                {divisionImages.map((img, i) => (
                  <motion.div
                    key={img.id || i}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelected(img)}
                    className="relative group cursor-pointer rounded-2xl overflow-hidden break-inside-avoid mb-3 md:mb-4 border border-black/5 shadow-sm hover:shadow-xl hover:shadow-emerald-900/15 transition-shadow duration-300 bg-white"
                  >
                    <img
                      src={img.image_url}
                      alt={img.title || currentDivisionInfo?.title || ""}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d3320]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {img.category && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold rounded-full bg-white/90 backdrop-blur-sm text-emerald-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {img.category}
                      </div>
                    )}
                    {img.title && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <p className="text-white font-semibold text-sm drop-shadow-sm">
                          {img.title}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-50"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image_url}
                alt={selected.title || ""}
                className="max-h-[78vh] max-w-full rounded-2xl shadow-2xl border border-white/10 object-contain"
              />

              {selected.title && (
                <div className="mt-4 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-center">
                  <p className="text-white font-medium text-sm md:text-base">
                    {selected.title}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
