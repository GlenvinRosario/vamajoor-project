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

const placeholders = Array.from({ length: 9 }, (_, i) => ({
  id: `p${i}`,
  title: `Gallery Image ${i + 1}`,
  image_url: "",
  category: "general",
}));

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

      setImages(data && data.length > 0 ? data : []);
    };
    fetch();
  }, []);

  const display =
    images.length > 0
      ? images.filter(
          (i) =>
            filter === "All" ||
            i.category?.toLowerCase() === filter.toLowerCase(),
        )
      : placeholders;

  return (
    <main className="bg-gradient-to-b from-[#f4f7f5] via-white to-[#eef3ef]">
      {/* HERO */}
      <section className="relative py-24 text-center bg-gradient-to-br from-[#355E3B] to-[#1f2d24] overflow-hidden">
        {/* glow */}
        <div className="absolute -top-20 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-white/70 text-lg">
            Moments of impact, service, and transformation
          </p>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md border transition-all ${
                  filter === cat
                    ? "bg-[#355E3B] text-white border-[#355E3B] shadow-md"
                    : "bg-white/60 text-gray-600 border-[#355E3B]/10 hover:bg-[#355E3B]/10 hover:text-[#355E3B]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* GRID */}
          <motion.div
            layout
            className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {display.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => img.image_url && setSelected(img)}
                className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer group"
              >
                {img.image_url ? (
                  <>
                    <img
                      src={img.image_url}
                      alt={img.title || ""}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1f2d24]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium">
                        {img.title || "View Image"}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-[#355E3B] to-[#1f2d24] flex items-center justify-center">
                    <Image size={32} className="text-white/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {images.length === 0 && (
            <p className="text-center text-gray-500 text-sm mt-10">
              Gallery images will appear here once uploaded.
            </p>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
              <X size={20} />
            </button>

            <motion.img
              src={selected.image_url}
              alt={selected.title || ""}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-full max-h-[90vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {selected.title && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-6 py-2 rounded-full text-sm backdrop-blur-sm"
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
