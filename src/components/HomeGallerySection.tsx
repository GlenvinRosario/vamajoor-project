import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Image } from "lucide-react";

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
    "gradient-saffron",
    "gradient-maroon",
    "bg-amber-400",
    "gradient-maroon",
    "gradient-saffron",
    "bg-amber-500",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gold/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="font-body text-amber-700 text-sm font-semibold uppercase tracking-wider">Our Moments</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Photo <span className="text-saffron">Gallery</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            A glimpse into our programs, events, and the lives we touch every day
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.length > 0
            ? images.map((img, i) => (
                <div
                  key={img.id}
                  className={`group overflow-hidden rounded-2xl shadow-card hover-lift ${i === 0 || i === 3 ? "md:row-span-2" : ""}`}
                >
                  <div className={`w-full overflow-hidden ${i === 0 || i === 3 ? "min-h-[300px]" : "h-48"}`}>
                    <img
                      src={img.image_url}
                      alt={img.title || "Gallery image"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))
            : placeholderBgs.map((bg, i) => (
                <div
                  key={i}
                  className={`group overflow-hidden rounded-2xl shadow-card hover-lift ${i === 0 || i === 3 ? "md:row-span-2" : ""}`}
                >
                  <div className={`w-full ${bg} ${i === 0 || i === 3 ? "min-h-[300px]" : "h-48"} flex items-center justify-center`}>
                    <Image size={36} className="text-white/30" />
                  </div>
                </div>
              ))}
        </div>

        {images.length === 0 && (
          <p className="text-center font-body text-muted-foreground text-sm mt-6">
            Gallery images will appear here once uploaded by the admin
          </p>
        )}

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border-2 border-saffron text-saffron font-body font-semibold px-8 py-3 rounded-xl hover:bg-saffron hover:text-white transition-all duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
