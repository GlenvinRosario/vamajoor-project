import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const videoIds = [
  "CNJMqc16XCQ", // Your custom video link
  "CNJMqc16XCQ", 
  "CNJMqc16XCQ",
  "CNJMqc16XCQ"
];

export default function MediaVideoSection() {
  return (
    <section className="bg-[#fcfdfc] py-20 px-4 md:px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf4ee] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1a4d2e] mb-4">
            🎥 Video Hub
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Featured Broadcasts
          </h2>
          <p className="max-w-xl mx-auto text-slate-500 text-sm md:text-base">
            Watch our latest project updates and media directly inside the high-fidelity gallery grid below.
          </p>
        </div>

        {/* Video Grid Layout Matrix (3 Columns per Row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoIds.map((youtubeId, index) => (
            <div
              key={index}
              className="bg-[#f4faf6] rounded-2xl border border-[#e1f0e7] overflow-hidden shadow-sm hover:shadow-[0_12px_24px_rgba(26,77,46,0.05)] transition-all duration-300 relative aspect-video w-full bg-black shadow-inner"
            >
              <iframe
                className="w-full h-full object-cover"
                src={`https://youtube.com/watch?v={youtubeId}`}
                title={`Gallery Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
