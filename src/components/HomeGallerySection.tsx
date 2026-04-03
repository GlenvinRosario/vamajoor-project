import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Image } from "lucide-react";
import { motion } from "framer-motion";

interface GalleryImage {
  id: string;
  title: string | null;
  image_url: string;
  category: string | null;
}

export default function HomeGallerySection() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await supabase
        .from("gallery_images")
        .select("id, title, image_url, category")
        .order("created_at", { ascending: false })
        .limit(6);

      if (data && data.length > 0) setImages(data);
    };
    fetchImages();
  }, []);

  const placeholderBgs = [
    "bg-gradient-to-br from-[#355E3B] to-[#1f2d24]",
    "bg-gradient-to-br from-[#4e7c59] to-[#2f4f34]",
    "bg-gradient-to-br from-[#2f4f34] to-[#1f2d24]",
    "bg-gradient-to-br from-[#355E3B] to-[#2f4f34]",
    "bg-gradient-to-br from-[#4e7c59] to-[#1f2d24]",
    "bg-gradient-to-br from-[#355E3B] to-[#1f2d24]",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f4f7f5] via-white to-[#eef3ef] relative overflow-hidden">
      {/* subtle glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#355E3B]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#355E3B]/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#355E3B]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#355E3B]"></span>
            <span className="text-[#355E3B] text-sm font-semibold uppercase tracking-wider">
              Our Moments
            </span>
          </div>

          <h2 className="text-4xl font-bold text-[#355E3B] mb-4">
            Photo Gallery
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            A glimpse into our programs, events, and the lives we touch every
            day
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.length > 0
            ? images.map((img, i) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition ${
                    i === 0 || i === 3 ? "md:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`w-full overflow-hidden ${
                      i === 0 || i === 3 ? "min-h-[300px]" : "h-48"
                    }`}
                  >
                    <img
                      src={img.image_url}
                      alt={img.title || "Gallery image"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2d24]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  {img.title && (
                    <div className="absolute bottom-4 left-4 right-4 text-white text-sm opacity-0 group-hover:opacity-100 transition">
                      {img.title}
                    </div>
                  )}
                </motion.div>
              ))
            : placeholderBgs.map((bg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`group overflow-hidden rounded-2xl shadow-md ${
                    i === 0 || i === 3 ? "md:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`w-full ${bg} ${
                      i === 0 || i === 3 ? "min-h-[300px]" : "h-48"
                    } flex items-center justify-center`}
                  >
                    <Image size={36} className="text-white/30" />
                  </div>
                </motion.div>
              ))}
        </div>

        {images.length === 0 && (
          <p className="text-center text-gray-500 text-sm mt-6">
            Gallery images will appear here once uploaded by the admin
          </p>
        )}

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#355E3B] text-white font-semibold hover:bg-[#2f4f34] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
