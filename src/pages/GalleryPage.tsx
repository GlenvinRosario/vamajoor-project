import { useState, useEffect } from "react";
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
      const { data } = await supabase.from("gallery_images").select("*").order("created_at", { ascending: false });
      setImages(data && data.length > 0 ? data : []);
    };
    fetch();
  }, []);

  const display = images.length > 0
    ? images.filter((i) => filter === "All" || i.category?.toLowerCase() === filter.toLowerCase())
    : placeholders;

  const placeholderBgs = ["gradient-saffron", "gradient-maroon", "bg-amber-500", "bg-amber-600", "gradient-saffron", "gradient-maroon", "bg-orange-500", "gradient-saffron", "gradient-maroon"];

  return (
    <main>
      <section className="py-24 bg-maroon text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="font-body text-white/70 text-lg">Moments that tell our story</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-body font-semibold text-sm transition-all ${filter === cat ? "bg-saffron text-white shadow-glow" : "bg-muted text-muted-foreground hover:bg-saffron/10 hover:text-saffron"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {display.map((img, i) => (
              <div
                key={img.id}
                onClick={() => img.image_url ? setSelected(img) : null}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-card hover-lift cursor-pointer group"
              >
                {img.image_url ? (
                  <img src={img.image_url} alt={img.title || ""} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className={`w-full h-48 ${placeholderBgs[i % placeholderBgs.length]} flex items-center justify-center`}>
                    <Image size={32} className="text-white/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {images.length === 0 && (
            <p className="text-center font-body text-muted-foreground text-sm mt-8">
              Gallery images will appear here once the admin uploads them.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <X size={20} />
          </button>
          <img
            src={selected.image_url}
            alt={selected.title || ""}
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {selected.title && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white font-body px-6 py-2 rounded-full text-sm backdrop-blur-sm">
              {selected.title}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
