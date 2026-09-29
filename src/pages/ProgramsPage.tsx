import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Heart, Users, ChevronDown, ArrowUpRight } from "lucide-react";

const programData = [
  {
    id: "education",
    title: "Educational Initiatives",
    summary: "Scholarships, structural aid, and tech-driven digital toolkits.",
    icon: BookOpen,
    color: "from-[#1a4d2e] to-[#2e6f47]",
    cards: [
      {
        title: "National Merit Scholarships 2026",
        image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
        tag: "Scholarship",
        url: "https://www.youtube.com/",
      },
      {
        title: "Digital Classrooms Deployment Project",
        image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
        tag: "Digital Tech",
        url: "https://example.com",
      },
      {
        title: "Primary School Kit Distribution Hub",
        image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
        tag: "Supplies",
        url: "https://example.com",
      },
    ],
  },
  {
    id: "medical",
    title: "Healthcare & Medical Camps",
    summary: "Rural primary check-ups, pharmacy support, and critical outreach.",
    icon: Heart,
    color: "from-[#2e6f47] to-[#3f935d]",
    cards: [
      {
        title: "Rural Diagnostics & Health Camps",
        image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
        tag: "Medical Camps",
        url: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
      },
      {
        title: "Free Essential Pharmacy Support",
        image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
        tag: "Medicine Aid",
        url: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
      },
    ],
  },
  {
    id: "social",
    title: "Social Welfare & Outreach",
    summary: "Community kitchen frameworks and targeted women empowerment groups.",
    icon: Users,
    color: "from-[#3f935d] to-[#55b376]",
    cards: [
      {
        title: "Integrated Family Support Networks",
        image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
        tag: "Community",
        url: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
      },
      {
        title: "Women Micro-Entrepreneurship Guild",
        image: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
        tag: "Empowerment",
        url: "https://res.cloudinary.com/dapmnkke3/image/upload/v1786964103/l7xgyg0rntvkyiursirg.jpg",
      },
    ],
  },
];

export default function ProgramsPage() {
  // Keeps track of which main program section is expanded
  const [expandedSection, setExpandedSection] = useState<string | null>("education");

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <main className="bg-[#fcfdfc] min-h-screen pb-24 overflow-hidden antialiased">
      {/* Hero Header Section */}
<section className="relative pt-24 pb-20 overflow-hidden bg-[#cfe7d8] border-b border-[#b5dbbe]">
  {/* Modern Geometric Overlays */}
  <div className="absolute inset-0 bg-[radial-gradient(#1a4d2e_2px,transparent_2px)] [background-size:32px_32px] opacity-15" />

  <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-white/30 blur-2xl pointer-events-none" />

  <div className="container mx-auto px-6 relative z-10 text-center">
    {/* Clean Badge Over Light Surface */}
  

    {/* Primary Heading */}
    <motion.h1 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-4xl md:text-5xl font-black tracking-tight text-[#0a2614] mb-4"
    >
      Our Initiatives
    </motion.h1>

    {/* Subtitle */}
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
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-[#1a4d2e] transition-colors">
            {category.title}
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1 line-clamp-1 max-w-xl">
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
      transition={{ duration: 0.4, delay: index * 0.05 }}
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
        {/* Sleek Myntra-esque Tag Overlay */}
        <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-[#1a4d2e] font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm border border-[#e1f0e7]">
          {card.tag}
        </span>
        
        {/* Quick Link Floating Button Indicator */}
        <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm text-[#1a4d2e]">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Card Metadata Details */}
      <div className="p-4 bg-[#f4faf6]">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug group-hover:text-[#1a4d2e] transition-colors line-clamp-2">
            {card.title}
          </h3>
        </div>
        <div className="mt-3 flex items-center text-[13px] font-bold text-[#2e6f47] gap-1 opacity-90 group-hover:opacity-100">
          Visit Site 
          <span className="inline-block transform translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200 text-xs">
            ↗
          </span>
        </div>
      </div>
    </motion.a>
  );
}

