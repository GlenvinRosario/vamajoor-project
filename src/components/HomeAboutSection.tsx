import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Heart, Leaf, Users } from "lucide-react";
import hero1 from "@/assets/hero1.jpg";

const programs = [
  {
    icon: BookOpen,
    title: "Child Education",
    description: "Providing scholarships, books, and mentoring to children from underprivileged families to ensure they receive quality education.",
    color: "bg-saffron/10 text-saffron",
  },
  {
    icon: Heart,
    title: "Health & Medical Aid",
    description: "Free medical camps, health check-ups, and medicines for those who cannot afford healthcare.",
    color: "bg-maroon/10 text-maroon",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Skill development workshops, self-help groups, and microfinance support to empower women across rural communities.",
    color: "bg-gold/20 text-amber-700",
  },
  {
    icon: Leaf,
    title: "Rural Development",
    description: "Infrastructure development, clean water initiatives, and sustainable farming programs for rural communities.",
    color: "bg-green-100 text-green-700",
  },
];

export default function HomeAboutSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img src={hero1} alt="About Dharma Jyothi Social Centre" className="w-full h-[480px] object-cover" />
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-4 bg-card rounded-2xl p-5 shadow-lg border border-border">
              <p className="font-display text-saffron font-bold text-3xl">15+</p>
              <p className="font-body text-muted-foreground text-sm">Years of Service</p>
            </div>
            {/* Accent dot pattern */}
            <div className="absolute -top-4 -left-4 w-24 h-24 grid grid-cols-4 gap-1.5 opacity-20">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-saffron" />
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-saffron/10 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-saffron"></span>
              <span className="font-body text-saffron text-sm font-semibold uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="font-display text-4xl font-bold text-foreground mb-6 leading-tight">
              Serving Humanity with <span className="text-saffron">Compassion</span> & <span className="text-maroon">Dedication</span>
            </h2>

            <p className="font-body text-muted-foreground text-base leading-relaxed mb-6">
              Dharma Jyothi Social Centre is a wing of Dharma Jyothi Charitable Society, established with a mission to uplift underprivileged communities through education, health, and sustainable development programs across Karnataka.
            </p>

            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              For over 15 years, we have been the light of hope for thousands of families, working tirelessly to ensure that no child goes without education, no family lacks healthcare, and no community is left behind.
            </p>

            {/* Programs grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {programs.map((prog) => (
                <div key={prog.title} className="flex items-start gap-3 p-3 rounded-xl bg-card shadow-sm border border-border">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${prog.color}`}>
                    <prog.icon size={16} />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">{prog.title}</p>
                    <p className="font-body text-muted-foreground text-xs leading-snug mt-0.5 line-clamp-2">{prog.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-saffron text-white font-body font-semibold px-7 py-3 rounded-xl hover:bg-saffron-light transition-all duration-300 hover:-translate-y-1 shadow-glow group"
            >
              Learn More About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
