import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Heart, Leaf, Users } from "lucide-react";
import hero1 from "@/assets/hero1.jpg";

const programs = [
  {
    icon: Heart,
    title: "Healthcare Services",
    description:
      "Providing medical care through hospitals, dispensaries, and outreach programs serving the sick and vulnerable.",
    color: "bg-maroon/10 text-maroon",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Empowering children and youth through schools and educational initiatives for a better future.",
    color: "bg-saffron/10 text-saffron",
  },
  {
    icon: Users,
    title: "Social Outreach",
    description:
      "Supporting marginalized communities through social programs, child care, and awareness initiatives.",
    color: "bg-gold/20 text-amber-700",
  },
  {
    icon: Leaf,
    title: "Women Empowerment",
    description:
      "Helping women become independent through skill training and self-help group initiatives.",
    color: "bg-green-100 text-green-700",
  },
];

export default function Home() {
  return (
    <div>

      {/* 🔹 HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src={hero1}
          alt="Church"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Serving Humanity with Compassion & Faith
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Dharma Jyothi Charitable Society, Vamanjoor — empowering lives
            through education, healthcare, and social service since 1976.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              to="/about"
              className="bg-saffron px-6 py-3 rounded-xl font-semibold hover:bg-saffron-light transition"
            >
              Explore More
            </Link>
            <Link
              to="/contact"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 ABOUT SECTION */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <img
            src={hero1}
            alt="About"
            className="rounded-3xl shadow-lg h-[450px] object-cover w-full"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-muted-foreground mb-6">
              Dharma Jyothi Charitable Society is a non-profit organization
              dedicated to uplifting marginalized communities through
              education, healthcare, and social outreach. Founded in 1976,
              the society continues to serve with compassion and faith.
            </p>

            <p className="text-muted-foreground mb-8">
              Inspired by the Missionary Sisters, our work reaches across
              communities supporting women, children, and the needy through
              various ministries and outreach programs.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-saffron text-white px-6 py-3 rounded-xl"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 SERVICES */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog) => (
              <div key={prog.title} className="p-6 rounded-2xl shadow border bg-white">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${prog.color}`}>
                  <prog.icon />
                </div>
                <h3 className="font-semibold mb-2">{prog.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {prog.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 STATS */}
      <section className="py-16 bg-saffron text-white text-center">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-6">

          <div>
            <h3 className="text-3xl font-bold">950+</h3>
            <p>Sisters Worldwide</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">7</h3>
            <p>Countries Served</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">45+</h3>
            <p>Years of Service</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">1000+</h3>
            <p>Lives Impacted</p>
          </div>

        </div>
      </section>

      {/* 🔹 GALLERY PREVIEW */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Our Work in Action
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={hero1}
                className="rounded-xl h-40 w-full object-cover"
              />
            ))}
          </div>

          <Link to="/gallery" className="text-saffron font-semibold">
            View Full Gallery →
          </Link>
        </div>
      </section>

      {/* 🔹 CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="container mx-auto px-4">

          <h2 className="text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>

          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Be a part of our mission to uplift lives and build a better society
            through compassion, service, and faith.
          </p>

          <Link
            to="/contact"
            className="bg-saffron text-white px-8 py-3 rounded-xl"
          >
            Get Involved
          </Link>
        </div>
      </section>

    </div>
  );
}