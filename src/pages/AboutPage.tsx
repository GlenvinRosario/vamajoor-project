import { BookOpen, Heart, Leaf, Users, Star, Award } from "lucide-react";
import hero2 from "@/assets/hero2.jpg";

const values = [
  { icon: Heart, title: "Compassion", desc: "We serve every individual with love and empathy" },
  { icon: Star, title: "Integrity", desc: "Transparent operations and accountable governance" },
  { icon: Users, title: "Community", desc: "Building strong bonds that uplift everyone" },
  { icon: Award, title: "Excellence", desc: "Delivering the highest quality in all our programs" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 bg-maroon overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${hero2})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-maroon/70" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="font-body text-white/70 text-lg">Learn about our mission, vision, and values</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background" id="mission">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-saffron/10 rounded-full px-4 py-1.5 mb-5">
                <span className="font-body text-saffron text-sm font-semibold uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Lighting the Path of <span className="text-saffron">Dharma</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">
                Dharma Jyothi Social Centre is a registered non-profit organization operating as a wing of Dharma Jyothi Charitable Society. Founded with the vision of creating an equitable society, we work tirelessly to bring education, healthcare, and opportunity to the marginalized.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Over the past 15+ years, we have impacted thousands of lives across Karnataka through sustained programs in education, health, women empowerment, and rural development.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Children Supported", value: "5000+" },
                  { label: "Villages Reached", value: "100+" },
                  { label: "Programs Active", value: "50+" },
                  { label: "Years of Service", value: "15+" },
                ].map((s) => (
                  <div key={s.label} className="p-4 bg-cream rounded-xl border border-border text-center">
                    <p className="font-display text-saffron font-bold text-2xl">{s.value}</p>
                    <p className="font-body text-muted-foreground text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img src={hero2} alt="Our Community" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-cream" id="vision">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Vision & Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-left">
                <div className="w-12 h-12 rounded-xl gradient-saffron flex items-center justify-center mb-4">
                  <Star size={22} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  A just, equitable, and compassionate society where every individual has access to education, healthcare, and the opportunity to lead a dignified life.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-left">
                <div className="w-12 h-12 rounded-xl gradient-maroon flex items-center justify-center mb-4">
                  <Heart size={22} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To empower underprivileged communities through sustainable programs in education, healthcare, skills, and welfare, guided by the principles of Dharma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-12">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-cream border border-border hover-lift text-center shadow-card">
                <div className="w-14 h-14 rounded-2xl gradient-saffron flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display text-foreground font-bold text-lg mb-2">{v.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
