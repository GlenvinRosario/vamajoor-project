import { Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  DollarSign,
  Users,
  Leaf,
  Building2,
} from "lucide-react";
import childrenImg from "@/assets/children.jpg";
import donateImg from "@/assets/donate.jpg";
import hero2 from "@/assets/hero2.jpg";

const quickLinks = [
  {
    icon: BookOpen,
    title: "Education Programs",
    description:
      "Supporting schools, child sponsorship programs, and skill development initiatives for marginalized communities.",
    image: childrenImg,
    href: "/programs",
  },
  {
    icon: Heart,
    title: "Healthcare Services",
    description:
      "Providing quality care through hospitals, dispensaries, mental health support, and outreach medical camps.",
    image: hero2,
    href: "/programs",
  },
  {
    icon: Users,
    title: "Community & Women Empowerment",
    description:
      "Empowering women and communities through self-help groups, training, and social development programs.",
    image: donateImg,
    href: "/programs",
  },
];

const stats = [
  { value: "45+", label: "Years of Service", icon: Heart },
  { value: "3", label: "States Served", icon: Leaf },
  { value: "10+", label: "Institutions & Centres", icon: Building2 },
  { value: "1000+", label: "Lives Impacted", icon: Users },
];

export default function HomeQuickLinks() {
  return (
    <section className="bg-gradient-to-b from-[#f4f7f5] via-white to-[#eef3ef]">
      {/* QUICK CARDS */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#355E3B] mb-3">
            Our Key Initiatives
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Dharma Jyothi Charitable Society works across education, healthcare,
            and social empowerment to uplift marginalized communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 block"
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2d24]/90 via-[#355E3B]/70 to-transparent opacity-90 group-hover:opacity-100 transition duration-300" />

              {/* ICON */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <item.icon size={18} className="text-white" />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="bg-gradient-to-r from-[#1f2d24] via-[#355E3B] to-[#2f4f34] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition">
                    <stat.icon size={20} className="text-white" />
                  </div>
                </div>

                <p className="text-white text-3xl font-bold">{stat.value}</p>

                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
