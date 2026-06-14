import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface GalleryImage {
  id: string;
  title: string | null;
  image_url: string;
  category: string | null;
}

const categories = ["All", "Education", "Health", "Events", "Community"];

// ================= COMMUNITY (UNCHANGED) =================
const communityImages: GalleryImage[] = [
  {
    id: "community-1",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430868/b6ej7dwvxqrczx3fu8zf.jpg",
    category: "Community",
  },
  {
    id: "community-2",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430867/rmjwssaswomzrixffbjm.jpg",
    category: "Community",
  },
  {
    id: "community-3",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430866/eodi71aqz5i4i21zaous.jpg",
    category: "Community",
  },
  {
    id: "community-4",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430865/kzk2prohjpm74xfhmd22.jpg",
    category: "Community",
  },
  {
    id: "community-5",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430864/kvvnv0dhbzmwrnjp78su.jpg",
    category: "Community",
  },
  {
    id: "community-6",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430863/qi6vhjhc6fvmtpvlriju.jpg",
    category: "Community",
  },
  {
    id: "community-7",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430862/qvvt6mbucyrhsstu6i1b.jpg",
    category: "Community",
  },
  {
    id: "community-8",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430862/adpobdumgolm1t5toulx.jpg",
    category: "Community",
  },
  {
    id: "community-9",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430860/xy1awwduege3qixttjmg.jpg",
    category: "Community",
  },
  {
    id: "community-10",
    title: "Community Outreach",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781430850/wzogf7lzglgygsb2scpd.jpg",
    category: "Community",
  },
];

// ================= EVENTS (UNCHANGED) =================
const eventsImages: GalleryImage[] = [
  {
    id: "event-1",
    title: "Event Moment 1",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435686/posho6ujzqhcyw9x74om.jpg",
    category: "Events",
  },
  {
    id: "event-2",
    title: "Event Moment 2",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/flqgr745bvd4do7yqmhc.jpg",
    category: "Events",
  },
  {
    id: "event-3",
    title: "Event Moment 3",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/ahopwxj5ilkgng4nkab5.jpg",
    category: "Events",
  },
  {
    id: "event-4",
    title: "Event Moment 4",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/fyv2ftsul3ows0e3ukcl.jpg",
    category: "Events",
  },
  {
    id: "event-5",
    title: "Event Moment 5",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/lerbluyxolpkfhqsmyz7.jpg",
    category: "Events",
  },
  {
    id: "event-6",
    title: "Event Moment 6",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435685/rel8vmqcdvb1djymretg.jpg",
    category: "Events",
  },
  {
    id: "event-7",
    title: "Event Moment 7",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435684/j8eu0ptv5tzvhj1spme8.jpg",
    category: "Events",
  },
  {
    id: "event-8",
    title: "Event Moment 8",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435684/ccrmcaqezaa4hurlagqx.jpg",
    category: "Events",
  },
  {
    id: "event-9",
    title: "Event Moment 9",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435684/rqdyqusdurfsawwkssk4.jpg",
    category: "Events",
  },
  {
    id: "event-10",
    title: "Event Moment 10",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435684/ethus5mcmsii0w3jj5rz.jpg",
    category: "Events",
  },
  {
    id: "event-11",
    title: "Event Moment 11",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781435684/ghcqp82tjl1auwch1v61.jpg",
    category: "Events",
  },
];

// ================= HEALTH (NEW ADDED) =================
const healthImages: GalleryImage[] = [
  {
    id: "health-1",
    title: "Health Camp 1",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436402/rixwnyicpjuxdnv2ggtu.jpg",
    category: "Health",
  },
  {
    id: "health-2",
    title: "Health Camp 2",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436400/wt4c1g8mjo2wwnndhyqm.jpg",
    category: "Health",
  },
  {
    id: "health-3",
    title: "Health Camp 3",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436399/zhw2oscejmbn1i17lac5.jpg",
    category: "Health",
  },
  {
    id: "health-4",
    title: "Health Camp 4",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436397/lklivstenwmeghv2w1ei.jpg",
    category: "Health",
  },
  {
    id: "health-5",
    title: "Health Camp 5",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436395/kt2uqijc2lexdh45gi5u.jpg",
    category: "Health",
  },
  {
    id: "health-6",
    title: "Health Camp 6",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436393/ktq2hih2qqibcm5qm8dx.jpg",
    category: "Health",
  },
  {
    id: "health-7",
    title: "Health Camp 7",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436391/owkwrut3wnj1y4g7qezs.jpg",
    category: "Health",
  },
  {
    id: "health-8",
    title: "Health Camp 8",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436389/ccux34dwid5f5e5wjwnp.jpg",
    category: "Health",
  },
  {
    id: "health-9",
    title: "Health Camp 9",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436387/m1vlaxvecczqqkcqdbse.jpg",
    category: "Health",
  },
  {
    id: "health-10",
    title: "Health Camp 10",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781436385/t4w9ffsxyrk2cep00xq4.jpg",
    category: "Health",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  // ================= MERGED DATA =================
  const images = useMemo(
    () => [...communityImages, ...eventsImages, ...healthImages],
    []
  );

  const filtered = useMemo(() => {
    if (filter === "All") return images;
    return images.filter(
      (img) => img.category?.toLowerCase() === filter.toLowerCase()
    );
  }, [filter, images]);

  return (
    <main className="bg-[#f5faf7] text-[#0f1f14] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-28 text-center bg-gradient-to-br from-[#0f2a1c] via-[#1c3f2c] to-[#0a1711] text-white overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 relative z-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs font-medium tracking-widest uppercase text-emerald-200 mb-5">
            Our Journey in Frames
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Photo <span className="text-emerald-300">Gallery</span>
          </h1>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm md:text-base">
            Moments of compassion, community, and care — captured across our outreach programs
          </p>
        </motion.div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="py-10 sticky top-0 z-30 bg-[#f5faf7]/80 backdrop-blur-md border-b border-emerald-900/5">
        <div className="flex flex-wrap justify-center gap-2.5 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "text-white shadow-lg shadow-emerald-900/20"
                  : "text-emerald-900/60 bg-white border border-emerald-900/10 hover:border-emerald-900/30 hover:text-emerald-900"
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="activeFilterPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#355E3B] to-[#1c3f2c]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="px-4 md:px-6 py-10">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 max-w-7xl mx-auto space-y-3 md:space-y-4">

          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(img)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden break-inside-avoid mb-3 md:mb-4
                  border border-black/5 shadow-sm hover:shadow-xl hover:shadow-emerald-900/15
                  transition-shadow duration-400 bg-white"
              >
                <img
                  src={img.image_url}
                  alt={img.title || ""}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3320]/80 via-[#0d3320]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* inner ring */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/15 transition-all duration-400" />

                {/* category badge */}
                <div className="absolute top-3 left-3 px-3 py-1 text-[11px] font-semibold rounded-full bg-white/90 backdrop-blur-sm text-emerald-800 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                  {img.category}
                </div>

                {/* title */}
                {img.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-white font-semibold text-sm drop-shadow-sm">
                      {img.title}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-16">No images available</p>
        )}
      </section>

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
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative max-w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image_url}
                alt={selected.title || ""}
                className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl border border-white/10"
              />

              {selected.title && (
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm border border-white/10"
                >
                  {selected.title}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}