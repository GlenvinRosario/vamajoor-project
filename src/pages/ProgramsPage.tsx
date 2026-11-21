import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Heart,
  Users,
  ChevronDown,
  ArrowUpRight,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const programData = [
  {
    id: "medical",
    title: "Medical & Healthcare Operations",
    summary:
      "Hospitals, specialized palliative units, clinics, and psychiatric care homes.",
    icon: Heart,
    color: "from-[#1a4d2e] to-[#2e6f47]",
    cards: [
      {
        title: "St. Ignatius Hospital",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207487/l0fusi4ykh2cdrwdsa9i.png",
        tag: "Hospital",
        url: "www.stignatiushospital.org",
      },
      {
        title: "St. Ignatius Institute of Health Sciences",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207515/gotucnjtycajb6zztdhd.jpg",
        tag: "Health Institute",
        url: "https://www.ignatiusnursing.org/",
      },
      {
        title: "Dharma Jyothi Clinic Madangeri",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207413/oscddd6ssvzonbt3aits.jpg",
        tag: "Health Centre",
        url: "#",
      },
      {
        title: "Goretti Hospital",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207465/xkvij2oeycm20luv6rts.jpg",
        tag: "Hospital",
        url: "#",
        gallery: ["https://res.cloudinary.com/dapmnkke3/image/upload/v1795287624/jw5iucedreczdbbeet3n.jpg"],
      },
      {
        title: "Maria Giri Geriatric Care Unit, Kuppepadavu",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795243546/axp6twjhpiprwmkzlggj.jpg",
        tag: "Geriatric Care",
        url: "#",
      },
      {
        title: "Maria Giri Health Centre, Kuppepadavu",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207474/rnli4mqhl9ubswjg3l8i.jpg",
        tag: "Geriatric Care",
        url: "#",
      },
      {
        title: "Maria Kripa Chikisthalaya",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207481/fno686ptl5mdhyt3onsr.jpg",
        tag: "Dispensary",
        url: "#",
      },
      {
        title: "Prem Dham",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207483/trqkg8azbtfxx5tthkfp.png",
        tag: "Dispensary",
        url: "#",
      },
    ],
  },
  {
    id: "education",
    title: "Educational Institutions",
    summary:
      "Primary schooling systems, active high schools, boardings, and play spaces.",
    icon: BookOpen,
    color: "from-[#2e6f47] to-[#3f935d]",
    cards: [
      {
        title: "Asha Kiran Play School",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207771/ds7xkuxh7bkad2syus1r.jpg",
        tag: "Play School",
        url: "#",
        gallery: [
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795286811/diwzb54dpqeeqxesmc0q.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795286806/vmkjmhsymgedybgvagko.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795286801/l58grva4c0bwojo9g2jh.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795286797/ubkkva1jxeatc98kbbdg.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795286751/kolffc54zuh61xibbbpd.jpg",
        ],
      },
      {
        title: "Vidya Jyothi English Medium Primary & High School, Vamanjoor",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207777/ipdsr8o18jrwdtebawam.jpg",
        tag: "Primary & High School",
        url: "#",
        gallery: [
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274063/quexba4wwqbbj1ovglcz.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274059/emqd31vs7f36mlr0s9os.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274057/l8gwgknlk7c2uggazyx8.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274054/cpqd4pqjieagjh8l6apf.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274049/jj1mnyf1toyhqzu4pw6j.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274044/gry3nxtj8fjexunkfxra.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274039/ndwtc8kzfcixnnplzlui.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274033/x83pb52dv3uzcaatwu2j.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274024/k8uxwcbzzcg59pshmr7d.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274020/vnk9bo6rya9h7y8kjucq.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795274012/jqfcaordbudyjelpdbv9.jpg",
        ],
      },
    ],
  },
  {
    id: "social",
    title: "Social Welfare & Outreach Centres",
    summary:
      "Regional social centres, skill training, legal aid, and empowerment modules.",
    icon: Users,
    color: "from-[#3f935d] to-[#55b376]",
    cards: [
      {
        title: "Deepalaya Social Centre",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207829/rbfqeqrdes8vqaovtjzu.jpg",
        tag: "Vocational Center",
        url: "#",
      },
      {
        title: "Dharma Jyothi Social Centre",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207833/i9uwhhlu3eypodkvqawh.jpg",
        tag: "Social Centre",
        url: "https://share.google/Cn2ET3STAEtsm8ZAM",
      },
      {
        title: "Pragati Social Centre",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207841/piaswkacvhxne3jtk61u.jpg",
        tag: "Social Centre",
        url: "#",
      },
      {
        title: "Sneha Jyothi Social Centre",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207841/piaswkacvhxne3jtk61u.jpg",
        tag: "Social Centre",
        url: "#",
        gallery: [
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795287277/k8jhgglwqsxixsebrzh8.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795287338/ecovt2vlezwuspaaocms.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795287400/vlka0tsve9whphwneqbf.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795287271/talumtsxf92vfkwg9mnc.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795287267/ew9xbsudogsr6cvsr4di.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795287256/nxxuvtckzkfsy8wktvnc.jpg",
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1795287251/goiykv6rowncfd6ftmfw.jpg"

        ]
      },
    ],
  },
];


export default function ProgramsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "medical",
  );
  const [activeGallery, setActiveGallery] = useState<{
    title: string;
    images: string[];
    currentIndex: number;
  } | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <main className="bg-[#fcfdfc] min-h-screen pb-24 overflow-hidden antialiased">
      {/* Premium Split Tint Hero Grid Banner */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-[#cfe7d8] border-b border-[#b5dbbe]">
        <div className="absolute inset-0 bg-[radial-gradient(#1a4d2e_2px,transparent_2px)] [background-size:32px_32px] opacity-15" />
        <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-white/30 blur-2xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-[#0a2614] mb-4"
          >
            Our Initiatives
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-[#1c4228] text-base md:text-lg font-semibold leading-relaxed"
          >
            Explore our dedicated portfolios structured across three primary
            pillars of sustainable social impact.
          </motion.p>
        </div>
      </section>

      {/* Accordion Wrapper Container (Expanded to max-w-6xl for larger visuals) */}
      <section className="container mx-auto max-w-6xl px-4 mt-12 space-y-6">
        {programData.map((category) => {
          const isExpanded = expandedSection === category.id;
          return (
            <motion.div
              key={category.id}
              layout="position"
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300"
            >
              <AccordionHeader
                category={category}
                isExpanded={isExpanded}
                onToggle={() => toggleSection(category.id)}
              />

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <div className="p-6 md:p-8 bg-[#fcfdfc] border-t border-gray-100">
                      {/* 2-Column Featured Grid for Bigger, Bolder Photos */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {category.cards.map((card, cardIdx) => (
                          <InitiativeCard
                            key={card.title}
                            card={card}
                            index={cardIdx}
                            onOpenGallery={(title, images) =>
                              setActiveGallery({
                                title,
                                images,
                                currentIndex: 0,
                              })
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </section>

      {/* Interactive Same-Page Photo Gallery Lightbox */}
      <AnimatePresence>
        {activeGallery && (
          <PhotoGalleryModal
            gallery={activeGallery}
            onClose={() => setActiveGallery(null)}
            onSelectIndex={(idx) =>
              setActiveGallery({ ...activeGallery, currentIndex: idx })
            }
          />
        )}
      </AnimatePresence>
    </main>
  );
}

interface AccordionHeaderProps {
  category: (typeof programData)[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function AccordionHeader({
  category,
  isExpanded,
  onToggle,
}: AccordionHeaderProps) {
  const Icon = category.icon;

  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-gray-50/50 transition-colors duration-200 group"
    >
      <div className="flex items-center gap-4 md:gap-6">
        <div
          className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-md shadow-emerald-900/10`}
        >
          <Icon size={24} />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-black text-slate-800 group-hover:text-[#1a4d2e] transition-colors">
            {category.title}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1 line-clamp-1 max-w-xl font-medium">
            {category.summary}
          </p>
        </div>
      </div>

      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="p-2.5 rounded-full bg-gray-50 border border-gray-200/70 text-slate-600 group-hover:border-[#1a4d2e]/30 group-hover:text-[#1a4d2e] transition-colors"
      >
        <ChevronDown size={20} />
      </motion.div>
    </button>
  );
}

interface CardItem {
  title: string;
  image: string;
  tag: string;
  url: string;
  gallery?: string[];
}
function InitiativeCard({
  card,
  index,
  onOpenGallery,
}: {
  card: CardItem;
  index: number;
  onOpenGallery: (title: string, images: string[]) => void;
}) {
  const hasValidUrl = card.url && card.url !== "#";
  const hasGallery = Boolean(card.gallery && card.gallery.length > 0);

  const externalUrl = hasValidUrl
    ? card.url.startsWith("http://") || card.url.startsWith("https://")
      ? card.url
      : `https://${card.url}`
    : "";

  const CardContent = (
    <div className="group block bg-white rounded-2xl border border-slate-200/70 overflow-hidden shadow-md hover:shadow-[0_20px_40px_rgba(26,77,46,0.12)] hover:border-[#1a4d2e]/30 transition-all duration-300 relative">
      {/* Full-Bleed Tall Image Container */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-br from-[#f1f7f3] to-[#e4efe7]">
        {/* Deep Contrast Scrim for Crisp Text & Rich Colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10 transition-opacity duration-300" />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl z-20 pointer-events-none" />

        <img
          src={card.image}
          alt={card.title}
          decoding="async"
          loading="lazy"
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Top Row: Tag Badge & Action Icon */}
        <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between">
          <span className="bg-white/95 backdrop-blur-md text-[#1a4d2e] font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-sm border border-white/40">
            {card.tag}
          </span>

          {hasValidUrl && (
            <div className="p-2.5 rounded-full bg-white/90 backdrop-blur-md group-hover:bg-[#1a4d2e] text-[#1a4d2e] group-hover:text-white transition-all duration-300 shadow-md">
              <ArrowUpRight size={16} />
            </div>
          )}

          {!hasValidUrl && hasGallery && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md group-hover:bg-[#1a4d2e] text-[#1a4d2e] group-hover:text-white transition-all duration-300 shadow-md text-[11px] font-extrabold">
              <Images size={14} />
              <span>{card.gallery!.length} Photos</span>
            </div>
          )}
        </div>

        {/* Bottom Overlay: Larger Title & Action Bar */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-20 flex flex-col justify-end">
          <h3 className="font-extrabold text-white text-lg sm:text-xl leading-snug tracking-tight drop-shadow-md">
            {card.title}
          </h3>

          {hasValidUrl && (
            <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-emerald-300">
              <span>Visit Official Site</span>
              <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200">
                →
              </span>
            </div>
          )}

          {!hasValidUrl && hasGallery && (
            <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-emerald-300">
              <span>View Photo Gallery ({card.gallery!.length})</span>
              <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200">
                →
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (hasValidUrl) {
    return (
      <motion.a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ y: -6 }}
        className="block cursor-pointer"
      >
        {CardContent}
      </motion.a>
    );
  }

  if (hasGallery) {
    return (
      <motion.div
        role="button"
        tabIndex={0}
        onClick={() => onOpenGallery(card.title, card.gallery!)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenGallery(card.title, card.gallery!);
          }
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ y: -6 }}
        className="block cursor-pointer"
      >
        {CardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="block"
    >
      {CardContent}
    </motion.div>
  );
}

function PhotoGalleryModal({
  gallery,
  onClose,
  onSelectIndex,
}: {
  gallery: { title: string; images: string[]; currentIndex: number };
  onClose: () => void;
  onSelectIndex: (idx: number) => void;
}) {
  const total = gallery.images.length;
  const currentSrc = gallery.images[gallery.currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((gallery.currentIndex - 1 + total) % total);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((gallery.currentIndex + 1) % total);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
    >
      {/* Sleek Custom Green Scrollbar Styling */}
      <style>{`
        .green-gallery-scroll {
          scrollbar-width: thin;
          scrollbar-color: #3f935d rgba(255, 255, 255, 0.12);
        }
        .green-gallery-scroll::-webkit-scrollbar {
          height: 5px;
        }
        .green-gallery-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
        }
        .green-gallery-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #2e6f47, #55b376);
          border-radius: 9999px;
        }
        .green-gallery-scroll::-webkit-scrollbar-thumb:hover {
          background: #3f935d;
        }
      `}</style>

      {/* Top Bar: Title, Green Counter & Close Button */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl w-full mx-auto flex items-center justify-between text-white gap-4"
      >
        <div>
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-emerald-400">
            Photo {gallery.currentIndex + 1} of {total}
          </span>
          <h3 className="text-base sm:text-xl font-extrabold leading-snug">
            {gallery.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="p-2.5 rounded-full bg-white/10 hover:bg-[#1a4d2e] text-white transition-colors shrink-0"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image Viewer with Green-Hover Prev / Next Controls */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full mx-auto flex-1 flex items-center justify-center my-4 min-h-0"
      >
        <button
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-[#1a4d2e] text-white border border-white/15 hover:border-emerald-400/50 transition-all shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        <motion.img
          key={currentSrc}
          initial={{ opacity: 0.4, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          src={currentSrc}
          alt={`${gallery.title} - ${gallery.currentIndex + 1}`}
          className="max-h-[60vh] sm:max-h-[66vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-emerald-500/20"
        />

        <button
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-[#1a4d2e] text-white border border-white/15 hover:border-emerald-400/50 transition-all shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom 10-Photo Thumbnail Strip with Thin Green Scrollbar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full mx-auto"
      >
        <div className="green-gallery-scroll flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-2.5 pt-1 px-1 snap-x">
          {gallery.images.map((imgSrc, idx) => {
            const isActive = idx === gallery.currentIndex;
            return (
              <button
                key={idx}
                onClick={() => onSelectIndex(idx)}
                className={`relative h-14 w-16 sm:h-16 sm:w-20 rounded-xl overflow-hidden shrink-0 snap-center transition-all duration-200 ${
                  isActive
                    ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-black/80 scale-105 opacity-100"
                    : "opacity-50 hover:opacity-90"
                }`}
              >
                <img
                  src={imgSrc}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
