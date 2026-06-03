import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Image, X } from "lucide-react";

interface GalleryImage {
  id: string;
  title: string | null;
  image_url: string;
  category: string | null;
}

const categories = ["All", "Education", "Health", "Events", "Community"];

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("gallery_images")
        .select("*")
        .order("created_at", { ascending: false });

      setImages(data || []);
    };
    fetch();
  }, []);

  const filtered =
    filter === "All"
      ? images
      : images.filter(
          (i) => i.category?.toLowerCase() === filter.toLowerCase()
        );

  return (
    <main className="bg-[#f5faf7] text-[#0f1f14] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-24 text-center bg-gradient-to-br from-[#0f2a1c] via-[#1c3f2c] to-[#0a1711] text-white overflow-hidden">

        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Photo <span className="text-emerald-300">Gallery</span>
          </h1>

          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Moments of impact, compassion, and transformation captured through our journey
          </p>
        </motion.div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="py-10">
        <div className="flex flex-wrap justify-center gap-3 px-4">

          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`
                px-6 py-2 rounded-full text-sm font-semibold transition-all
                border backdrop-blur-md
                ${
                  filter === cat
                    ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg"
                    : "bg-white/70 text-gray-600 border-emerald-100 hover:bg-emerald-50"
                }
              `}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* ================= GRID (EDITORIAL STYLE) ================= */}
      <section className="px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">

          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(img)}
              className="
                relative group cursor-pointer
                rounded-3xl overflow-hidden
                bg-white shadow-md hover:shadow-xl
                border border-emerald-50
              "
            >
              {img.image_url ? (
                <>
                  <img
                    src={img.image_url}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {img.title || "Untitled Moment"}
                      </p>
                      <p className="text-white/60 text-xs">
                        {img.category || "General"}
                      </p>
                    </div>
                  </div>

                  {/* top badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-white/80 backdrop-blur-md text-emerald-700 font-semibold">
                    {img.category || "Life"}
                  </div>
                </>
              ) : (
                <div className="h-64 flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-900">
                  <Image className="text-white/40" />
                </div>
              )}
            </motion.div>
          ))}

        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No images available
          </p>
        )}
      </section>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >

            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
            >
              <X size={18} />
            </button>

            <motion.img
              src={selected.image_url}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {selected.title && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-8 bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm"
              >
                {selected.title}
              </motion.div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}