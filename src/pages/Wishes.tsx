"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cake, Award, Sparkles, Send, Inbox, Heart } from "lucide-react";

export type WishCategory = "All" | "Birthday" | "Congrats" | "General";

export interface Wish {
  id: string;
  sender: string;
  message: string;
  category: "Birthday" | "Congrats" | "General";
  timestamp: string;
  likes: number;
}
// Leave this array empty [] if you want to test the "No Special Wishes" empty state immediately
const INITIAL_WISHES: Wish[] = [
  {
    id: "1",
    sender: "Rahul Sharma",
    message: "Wishing the Dharma Jyothi Charitable Society a magnificent anniversary! Your devotion to community development transforms thousands of raw lives every single day.",
    category: "Congrats",
    timestamp: "Just now",
    likes: 12,
  },
  {
    id: "2",
    sender: "Ananya Iyer",
    message: "Happy Birthday to our incredible founder! Your visionary path and relentless compassion continue to serve as a bright guiding beacon for all of us.",
    category: "Birthday",
    timestamp: "2 hours ago",
    likes: 8,
  },
];

const CATEGORY_THEMES = {
  Birthday: {
    bg: "bg-amber-50/60 border-amber-200/60",
    text: "text-amber-800",
    badge: "bg-amber-100 text-amber-900",
    icon: Cake,
  },
  Congrats: {
    bg: "bg-purple-50/60 border-purple-200/60",
    text: "text-purple-800",
    badge: "bg-purple-100 text-purple-900",
    icon: Award,
  },
  General: {
    bg: "bg-emerald-50/60 border-emerald-200/60",
    text: "text-emerald-800",
    badge: "bg-emerald-100 text-emerald-900",
    icon: Sparkles,
  },
};
interface WishCardProps {
  wish: Wish;
  onLike: (id: string) => void;
}

const WishCard = ({ wish, onLike }: WishCardProps) => {
  const theme = CATEGORY_THEMES[wish.category];
  const IconComponent = theme.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`p-6 rounded-2xl border bg-white/70 backdrop-blur-xs shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${theme.bg}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${theme.badge} flex items-center gap-1.5`}>
            <IconComponent size={12} />
            {wish.category}
          </span>
          <span className="text-xs text-gray-400 font-medium">{wish.timestamp}</span>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed font-normal italic">
          "{wish.message}"
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100/60 flex items-center justify-between">
        <span className="text-xs font-bold text-gray-900">— {wish.sender}</span>
        <button
          onClick={() => onLike(wish.id)}
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-rose-500 transition-colors cursor-pointer group"
        >
          <Heart size={14} className="group-hover:scale-125 transition-transform text-rose-400 fill-transparent hover:fill-rose-400" />
          <span>{wish.likes}</span>
        </button>
      </div>
    </motion.div>
  );
};
const EmptyWishesState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center py-20 px-6 bg-white/40 backdrop-blur-xs rounded-3xl border border-dashed border-emerald-200 max-w-md mx-auto"
    >
      <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-5 shadow-xs">
        <Inbox size={28} className="animate-bounce" />
      </div>
      <h3 className="text-xl font-bold text-[#1a4d2e] tracking-tight">No Special Wishes for Now</h3>
      <p className="text-sm text-gray-500 mt-2 leading-relaxed font-normal">
        The wall is currently clear. Be the very first person to write a warm congratulatory note or birthday blessing below!
      </p>
    </motion.div>
  );
};
export default function WishesWall() {
  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES);
  const [activeFilter, setActiveFilter] = useState<WishCategory>("All");
  
  // Form submission state hooks
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState<"Birthday" | "Congrats" | "General">("General");

  const handleLike = (id: string) => {
    setWishes(wishes.map(w => w.id === id ? { ...w, likes: w.likes + 1 } : w));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sender.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      sender: sender.trim(),
      message: message.trim(),
      category,
      timestamp: "Just now",
      likes: 0,
    };

    setWishes([newWish, ...wishes]);
    setSender("");
    setMessage("");
    setCategory("General");
  };

  const filteredWishes = wishes.filter(w => activeFilter === "All" || w.category === activeFilter);
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f2faf5] via-[#eaf6ec] to-[#f5fbf7] py-24 min-h-screen">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* Component Intro Headings */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-800 mb-4">
            Community Board
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a4d2e] tracking-tight">Our Wishes Wall</h2>
          <p className="mt-4 text-gray-500 text-sm leading-relaxed font-normal">
            Drop celebration notes, warm milestone blessings, or birthday congrats directly to our team and global volunteer network.
          </p>
        </div>

        {/* Categories Filtering Bar Controls */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {(["All", "Birthday", "Congrats", "General"] as WishCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 tracking-wide cursor-pointer ${
                activeFilter === cat
                  ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-105"
                  : "bg-white hover:bg-emerald-50 text-gray-600 border border-emerald-100/50"
              }`}
            >
              {cat === "All" ? "✨ View All" : cat}
            </button>
          ))}
        </div>
        {/* Dynamic Board Array Conditional Render */}
        <div className="mb-20 min-h-[250px]">
          <AnimatePresence mode="popLayout">
            {filteredWishes.length === 0 ? (
              <EmptyWishesState key="empty" />
            ) : (
              <motion.div 
                key="grid"
                layout
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
              >
                {filteredWishes.map((wish) => (
                  <WishCard key={wish.id} wish={wish} onLike={handleLike} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Interactive Add Wish Form Block */}
        <div className="max-w-2xl mx-auto bg-white border border-emerald-100 p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">Leave a Wish</h3>
          <p className="text-xs text-gray-400 mb-6">Fill out your signature card to pin your message on the community wall.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Your Name</label>
                <input
                  type="text" required value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  placeholder="Enter name"
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Wish Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition cursor-pointer"
                >
                  <option value="General">✨ General Blessing</option>
                  <option value="Birthday">🎂 Birthday Wish</option>
                  <option value="Congrats">🎉 Congrats Announcement</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Your Message</label>
              <textarea
                rows={3} required value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your beautiful congratulations note or heartfelt greeting here..."
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none font-normal"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <Send size={14} />
              <span>Publish to Board</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
