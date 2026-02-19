import { BookOpen, Heart, Users, Leaf, Award, Home } from "lucide-react";

const programs = [
  {
    id: "education",
    icon: BookOpen,
    title: "Child Education Support",
    description: "We provide scholarships, free books, uniforms, and coaching to thousands of underprivileged children ensuring they get the education they deserve.",
    initiatives: ["Scholarship Program", "Free Coaching Classes", "Digital Literacy", "Library Access"],
    color: "gradient-saffron",
  },
  {
    id: "health",
    icon: Heart,
    title: "Health & Medical Aid",
    description: "Regular medical camps, free medicines, and health awareness programs are conducted across villages to ensure basic healthcare reaches all.",
    initiatives: ["Free Medical Camps", "Health Check-ups", "Medicine Distribution", "Mental Health Support"],
    color: "gradient-maroon",
  },
  {
    id: "women",
    icon: Users,
    title: "Women Empowerment",
    description: "Empowering women with skill training, self-help groups, and microfinance support to achieve financial independence and social dignity.",
    initiatives: ["Skill Development", "Self-Help Groups", "Micro Finance", "Legal Awareness"],
    color: "bg-amber-500",
  },
  {
    id: "rural",
    icon: Leaf,
    title: "Rural Development",
    description: "Building infrastructure, providing clean water, and enabling sustainable farming practices for rural communities across Karnataka.",
    initiatives: ["Clean Water Access", "Sustainable Farming", "Infrastructure", "Sanitation"],
    color: "bg-green-600",
  },
  {
    id: "skills",
    icon: Award,
    title: "Skill Development",
    description: "Vocational training programs that equip youth with marketable skills, opening doors to employment and entrepreneurship.",
    initiatives: ["Vocational Training", "Entrepreneurship", "Job Placement", "Apprenticeships"],
    color: "bg-blue-600",
  },
  {
    id: "seniors",
    icon: Home,
    title: "Senior Citizen Care",
    description: "Dedicated support programs for elderly citizens including health check-ups, recreational activities, and social support.",
    initiatives: ["Elder Care", "Medical Aid", "Social Activities", "Financial Support"],
    color: "bg-purple-600",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <section className="py-24 bg-maroon text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl font-bold text-white mb-4">Our Programs</h1>
          <p className="font-body text-white/70 text-lg">Comprehensive initiatives for community welfare</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog) => (
              <div key={prog.id} id={prog.id} className="bg-card rounded-2xl shadow-card border border-border overflow-hidden hover-lift">
                <div className={`h-32 ${prog.color} flex items-center justify-center`}>
                  <prog.icon size={48} className="text-white/80" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-foreground font-bold text-xl mb-3">{prog.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">{prog.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {prog.initiatives.map((init) => (
                      <span key={init} className="px-3 py-1 bg-saffron/10 text-saffron font-body text-xs font-medium rounded-full">
                        {init}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
