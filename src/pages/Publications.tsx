"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Calendar } from "lucide-react";

export interface Publication {
  id: string;
  title: string;
  excerpt: string;
  category: "Annual Report" | "Newsletter" | "Research";
  date: string;
  fileSize: string;
  author: string;
  downloadUrl: string;
}
const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "pub-1",
    title: "Annual Impact & Financial Report 2025",
    excerpt: "A comprehensive breakdown of our social welfare metrics, audited balance sheets, rural medical diagnostic investments, and generational poverty elimination achievements.",
    category: "Annual Report",
    date: "January 2026",
    fileSize: "4.8 MB",
    author: "Executive Audit Committee",
    downloadUrl: "#",
  },
  {
    id: "pub-2",
    title: "Rural Education Infrastructure Review",
    excerpt: "A data-driven study outlining the quantitative success rates of our child play homes and primary schooling nodes over socioeconomic constraints in southern rural sectors.",
    category: "Research",
    date: "November 2025",
    fileSize: "2.3 MB",
    author: "Dr. H. R. Subramanian",
    downloadUrl: "#",
  },
  {
    id: "pub-3",
    title: "Dharma Jyothi Quarterly Newsletter - Q4",
    excerpt: "Catch up on local community grassroot stories, tribal artisan heritage restoration projects, upcoming base hospital schedules, and volunteer drive spotlights.",
    category: "Newsletter",
    date: "December 2025",
    fileSize: "1.2 MB",
    author: "Media & Comms Cell",
    downloadUrl: "#",
  },
];
interface PublicationCardProps {
  pub: Publication;
}

const PublicationCard = ({ pub }: PublicationCardProps) => {
  const badgeColors = {
    "Annual Report": "bg-blue-50 text-blue-800 border-blue-100",
    "Newsletter": "bg-amber-50 text-amber-800 border-amber-100",
    "Research": "bg-purple-50 text-purple-800 border-purple-100",
  }[pub.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl border border-emerald-100/60 p-6 flex flex-col justify-between hover:shadow-xl hover:border-emerald-200 transition duration-300 relative group"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${badgeColors}`}>
            {pub.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
            <Calendar size={13} />
            <span>{pub.date}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-emerald-700 transition-colors tracking-tight">
          {pub.title}
        </h3>
        <p className="text-sm text-gray-500 font-normal leading-relaxed mb-6">
          {pub.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs">
        <div>
          <p className="text-gray-400 font-medium">Published by</p>
          <p className="font-bold text-[#1f3d2a] mt-0.5">{pub.author}</p>
        </div>

        {/* <a
          href={pub.downloadUrl}
          className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-bold px-4 py-2.5 rounded-xl transition duration-200 group/btn"
        >
          <span>PDF ({pub.fileSize})</span>
          <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
        </a> */}
      </div>
    </motion.div>
  );
};
export default function SimplePublications() {
  return (
    <section className="relative bg-gradient-to-br from-[#f3faf5] via-[#eaf6ec] to-[#f4fbf7] py-24">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Section Heading Titles */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-800 mb-4">
            Resource Center
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a4d2e] tracking-tight">
            Publications & Audit Reports
          </h2>
          <p className="mt-4 text-gray-500 text-sm leading-relaxed font-normal">
            Access transparent governance documentation, validated social audit reports, academic research evaluations, and quarterly newsletters.
          </p>
        </div>

        {/* Clean Static Publications Display Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {PUBLICATIONS_DATA.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
        </div>

      </div>
    </section>
  );
}
