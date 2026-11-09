import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Heart, Users, ChevronDown, ArrowUpRight } from "lucide-react";

export default function ProgramsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("medical");

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
            Explore our dedicated portfolios structured across three primary pillars of sustainable social impact.
          </motion.p>
        </div>
      </section>

      {/* Accordion Wrapper Container */}
      <section className="container mx-auto max-w-5xl px-4 mt-12 space-y-6">
        {programData.map((category) => {
          const isExpanded = expandedSection === category.id;
          return (
            <motion.div
              key={category.id}
              layout="position"
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300"
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
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="p-6 md:p-8 bg-[#fcfdfc] border-t border-gray-50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.cards.map((card, cardIdx) => (
                          <InitiativeCard key={card.title} card={card} index={cardIdx} />
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
  category: typeof programData[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function AccordionHeader({ category, isExpanded, onToggle }: AccordionHeaderProps) {
  const Icon = category.icon;
  
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-gray-50/50 transition-colors duration-200 group"
    >
      <div className="flex items-center gap-4 md:gap-6">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-md shadow-emerald-900/10`}>
          <Icon size={24} />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-black text-slate-800 group-hover:text-[#1a4d2e] transition-colors">
            {category.title}
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1 line-clamp-1 max-w-xl font-medium">
            {category.summary}
          </p>
        </div>
      </div>
      
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="p-2 rounded-full bg-gray-50 border border-gray-100 text-slate-500"
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
  // Checks if the card has a valid, actionable external website URL link path
  const hasValidUrl = card.url && card.url !== "#";

  // Automatically ensures the link has a protocol so it opens externally instead of relatively
  const externalUrl = hasValidUrl 
    ? (card.url.startsWith("http://") || card.url.startsWith("https://") ? card.url : `https://${card.url}`)
    : "";

  // Base card element wrapper
  const CardContent = (
    <div className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-[0_16px_36px_rgba(26,77,46,0.06)] hover:border-[#1a4d2e]/20 transition-all duration-300 relative">
      {/* High-Fidelity Studio Image Framing Container */}
      <div className="p-3 bg-white">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#f1f7f3] to-[#e4efe7]">
          {/* Studio Vignette Overlay for High-Contrast Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20 opacity-90 z-10 transition-opacity duration-300 group-hover:opacity-100" />
          
          <img
            src={card.image}
            alt={card.title}
            decoding="async"
            loading="lazy"
            className="w-full h-full object-cover transform scale-100 group-hover:scale-104 transition-transform duration-700 ease-out"
          />

          {/* Premium Floating Typography System */}
          <div className="absolute inset-x-0 bottom-0 p-4 z-20 flex flex-col justify-end">
            <span className="self-start mb-2 bg-white/90 backdrop-blur-md text-[#1a4d2e] font-extrabold text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-md shadow-sm border border-white/20">
              {card.tag}
            </span>
            <h3 className="font-extrabold text-white text-sm md:text-base leading-tight tracking-tight line-clamp-2 drop-shadow-md">
              {card.title}
            </h3>
          </div>
          
          {/* Quick Link Floating Button Indicator - Only visible if valid URL exists */}
          {hasValidUrl && (
            <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm text-[#1a4d2e] z-20 transform translate-y-1 group-hover:translate-y-0">
              <ArrowUpRight size={14} />
            </div>
          )}
        </div>
      </div>

      {/* Interactive Bottom Bar - Only displays if valid URL exists */}
      {hasValidUrl && (
        <div className="px-5 pb-4 pt-1 bg-white flex items-center justify-between text-[11px] font-bold tracking-wide uppercase text-[#2e6f47]">
          <span>Visit Site</span>
          <span className="text-xs transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
            ➔
          </span>
        </div>
      )}
    </div>
  );

  // Render as an interactive link if valid url exists, otherwise render as a stylized static motion div
  if (hasValidUrl) {
    return (
      <motion.a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.03 }}
        whileHover={{ y: -6 }}
        className="cursor-pointer"
      >
        {CardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="pointer-events-none"
    >
      {CardContent}
    </motion.div>
  );
}




const programData = [
  {
    id: "medical",
    title: "Medical & Healthcare Operations",
    summary: "Hospitals, specialized palliative units, clinics, and psychiatric care homes.",
    icon: Heart,
    color: "from-[#1a4d2e] to-[#2e6f47]",
    cards: [
      { title: "Dharma Jyothi Clinic Madangeri", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207413/oscddd6ssvzonbt3aits.jpg", tag: "Health Centre", url: "#" },
      { title: "Goretti Hospital", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207465/xkvij2oeycm20luv6rts.jpg", tag: "Hospital", url: "#" },
      { title: "Maria Giri Geriatric Care Unit, Kuppepadavu", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207471/arfkb4fmqwevdhwp5q1b.jpg", tag: "Geriatric Care", url: "#" },
      { title: "Maria Giri Health Centre, Kuppepadavu", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207474/rnli4mqhl9ubswjg3l8i.jpg", tag: "Geriatric Care", url: "#" },
      { title: "Maria Kripa Chikisthalaya", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207481/fno686ptl5mdhyt3onsr.jpg", tag: "Dispensary", url: "#" },
      { title: "Prem Dham", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207483/trqkg8azbtfxx5tthkfp.png", tag: "Dispensary", url: "#" },
      { title: "St. Ignatius Hospital", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207487/l0fusi4ykh2cdrwdsa9i.png", tag: "Hospital", url: "www.stignatiushospital.org" },
      { title: "St. Ignatius Institute of Health Sciences", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207515/gotucnjtycajb6zztdhd.jpg", tag: "Health Institute", url: "#" },
    ]
  },
  {
    id: "education",
    title: "Educational Frameworks",
    summary: "Primary schooling systems, active high schools, boardings, and play spaces.",
    icon: BookOpen,
    color: "from-[#2e6f47] to-[#3f935d]",
    cards: [
      { title: "Asha Kiran Play School", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207771/ds7xkuxh7bkad2syus1r.jpg", tag: "Play School", url: "#" },
      { title: "Vidya Jyothi English Medium Primary & High School, Vamanjoor", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207777/ipdsr8o18jrwdtebawam.jpg", tag: "Primary & High School", url: "#" },
    ]
  },
  {
    id: "social",
    title: "Social Welfare & Outreach Centres",
    summary: "Regional social centres, skill training, legal aid, and empowerment modules.",
    icon: Users,
    color: "from-[#3f935d] to-[#55b376]",
    cards: [
      { title: "Deepalaya Social Centre", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207829/rbfqeqrdes8vqaovtjzu.jpg", tag: "Vocational Center", url: "#" },
      { title: "Dharma Jyothi Social Centre", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207833/i9uwhhlu3eypodkvqawh.jpg", tag: "Social Centre", url: "#" },
      { title: "Pragati Social Centre", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207841/piaswkacvhxne3jtk61u.jpg", tag: "Social Centre", url: "#" },
      { title: "Sneha Jyothi Social Centre", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1794207841/piaswkacvhxne3jtk61u.jpg", tag: "Social Centre", url: "#" },
    ]
  }
];
