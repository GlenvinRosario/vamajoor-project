import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Heart, Users, ChevronDown, ArrowUpRight } from "lucide-react";

export default function ProgramsPage() {
  // Sets default view explicitly to medical as requested by your framework settings
  const [expandedSection, setExpandedSection] = useState<string | null>("medical");

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <main className="bg-[#fcfdfc] min-h-screen pb-24 overflow-hidden antialiased">
      {/* Premium Split Tint Hero Grid Banner */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-[#cfe7d8] border-b border-[#b5dbbe]">
        {/* Fine Grain Grid Mesh Dot Matrix Accent */}
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
              {/* Category Header Row */}
              <AccordionHeader 
                category={category} 
                isExpanded={isExpanded} 
                onToggle={() => toggleSection(category.id)} 
              />

              {/* Collapsible Content Area */}
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
  return (
    <motion.a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      whileHover={{ y: -6 }}
      className="group block bg-[#f4faf6] rounded-2xl border border-[#e1f0e7] overflow-hidden shadow-sm hover:shadow-[0_12px_30px_rgba(26,77,46,0.08)] hover:border-[#1a4d2e]/30 transition-all duration-300 relative"
    >
      {/* Image Container with Aspect Ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eaf4ee]">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Premium Myntra-esque Tag Overlay */}
        <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-[#1a4d2e] font-bold text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm border border-[#e1f0e7]">
          {card.tag}
        </span>
        
        {/* Quick Link Floating Button Indicator */}
        <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm text-[#1a4d2e]">
          <ArrowUpRight size={14} />
        </div>
      </div>

      {/* Card Metadata Details */}
      <div className="p-4 bg-[#f4faf6]">
        <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug group-hover:text-[#1a4d2e] transition-colors line-clamp-2 min-h-[44px]">
          {card.title}
        </h3>
        <div className="mt-3 pt-3 border-t border-[#e1f0e7] flex items-center text-[12px] font-bold text-[#2e6f47] gap-1 opacity-90 group-hover:opacity-100">
          View Details 
          <span className="inline-block transform translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200 text-xs">
            ↗
          </span>
        </div>
      </div>
    </motion.a>
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
      { title: "Maria Giri Health Centre, Kuppepadavu", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Health Centre", url: "#" },
      { title: "Maria Giri Geriatric Care Unit, Kuppepadavu", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Geriatric Care", url: "#" },
      { title: "Dharma Jyothi Dispensary, Madangeri", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Dispensary", url: "#" },
      { title: "Maria Kripa Dispensary, Santhpur, Bidar", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Dispensary", url: "#" },
      { title: "Goretti Hospital, Kallianpur, Udupi", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Hospital", url: "#" },
      { title: "St. Ignatius Hospital, Honavar", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Hospital", url: "#" },
      { title: "St. Ignatius Institute of Health Sciences, Honavar", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Health Institute", url: "#" },
      { title: "Cynthia Fernandes Palliative Care Centre, Kallianpur, Udupi", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Palliative Care", url: "#" },
      { title: "Old Age Home / Senior Citizens Home, Kallianpur", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Senior Home", url: "#" },
      { title: "Premdham Home for Psychiatric Care, Honavar", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Psychiatric Care", url: "#" },
      { title: "Hostel for Nursing Students", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Student Housing", url: "#" },
      { title: "Working Women’s Hostel", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Womens Hostel", url: "#" }
    ]
  },
  {
    id: "education",
    title: "Educational Frameworks",
    summary: "Primary schooling systems, active high schools, boardings, and play spaces.",
    icon: BookOpen,
    color: "from-[#2e6f47] to-[#3f935d]",
    cards: [
      { title: "Vidya Jyothi English Medium Primary & High School, Vamanjoor", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Primary & High School", url: "#" },
      { title: "Institutional Boardings Group", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Boarding Home", url: "#" },
      { title: "Asha Kiran Play School", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Play School", url: "#" }
    ]
  },
  {
    id: "social",
    title: "Social Welfare & Outreach Centres",
    summary: "Regional social centres, skill training, legal aid, and empowerment modules.",
    icon: Users,
    color: "from-[#3f935d] to-[#55b376]",
    cards: [
      { title: "Dharma Jyothi Social Centre, Vamanjoor, Mangalore", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Social Centre", url: "#" },
      { title: "Pragati Social Centre, Khanapur, Belgavi", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Social Centre", url: "#" },
      { title: "Deepalaya Vocational Training Centre, Santhpur, Bidar", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Vocational Center", url: "#" },
      { title: "Sneha Jyothi Social Centre, Sorab", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Social Centre", url: "#" },
      { title: "Child Sponsorship Programme", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Outreach Sponsorship", url: "#" },
      { title: "Community Outreach & Skill Training Programmes", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Skill Development", url: "#" },
      { title: "Women Empowerment Programme Networks", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Empowerment Guild", url: "#" },
      { title: "Institutional Legal Aid Programmes", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Legal Aid Support", url: "#" },
      { title: "Asha Kiran Working Women Hostel, Hebbagodi, Bangalore", image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg", tag: "Womens Hostel", url: "#" }
    ]
  }
];
