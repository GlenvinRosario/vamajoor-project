import { Link } from "react-router-dom";
import { Globe, Heart, DollarSign, BookOpen, Users, Leaf } from "lucide-react";
import childrenImg from "@/assets/children.jpg";
import donateImg from "@/assets/donate.jpg";
import hero2 from "@/assets/hero2.jpg";

const quickLinks = [
  {
    icon: Globe,
    title: "Our Children",
    description: "Support the education and growth of underprivileged children",
    image: childrenImg,
    href: "/donations",
    color: "from-saffron to-gold",
  },
  {
    icon: Heart,
    title: "Support Us",
    description: "Join hands with us to make a difference in someone's life",
    image: hero2,
    href: "/about",
    color: "from-maroon to-maroon-light",
  },
  {
    icon: DollarSign,
    title: "Donate Now",
    description: "Your generosity helps us reach more families in need",
    image: donateImg,
    href: "/donations",
    color: "from-saffron to-maroon",
  },
];

const stats = [
  { value: "5000+", label: "Children Supported", icon: BookOpen },
  { value: "50+", label: "Active Programs", icon: Leaf },
  { value: "200+", label: "Volunteers", icon: Users },
  { value: "15+", label: "Years of Service", icon: Heart },
];

export default function HomeQuickLinks() {
  return (
    <section className="bg-background">
      {/* Quick action cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group relative overflow-hidden rounded-2xl shadow-card hover-lift block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <item.icon size={18} className="text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-white text-2xl font-bold mb-1">{item.title}</h3>
                <p className="font-body text-white/80 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="gradient-saffron py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <stat.icon size={18} className="text-white" />
                  </div>
                </div>
                <p className="font-display text-white text-3xl font-bold">{stat.value}</p>
                <p className="font-body text-white/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
