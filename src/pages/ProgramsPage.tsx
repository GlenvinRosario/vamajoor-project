import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Heart,
  Users,
  ChevronDown,
  ArrowUpRight,
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
      },
      {
        title: "Vidya Jyothi English Medium Primary & High School, Vamanjoor",
        image:
          "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207777/ipdsr8o18jrwdtebawam.jpg",
        tag: "Primary & High School",
        url: "#",
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
        url: "#",
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
      },
    ],
  },
];


export default function ProgramsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "medical"
  );

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
}

function InitiativeCard({ card, index }: { card: CardItem; index: number }) {
  const hasValidUrl = card.url && card.url !== "#";

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

        {/* Top Row: Tag Badge & External Link Icon */}
        <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between">
          <span className="bg-white/95 backdrop-blur-md text-[#1a4d2e] font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-sm border border-white/40">
            {card.tag}
          </span>

          {hasValidUrl && (
            <div className="p-2.5 rounded-full bg-white/90 backdrop-blur-md group-hover:bg-[#1a4d2e] text-[#1a4d2e] group-hover:text-white transition-all duration-300 shadow-md">
              <ArrowUpRight size={16} />
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


