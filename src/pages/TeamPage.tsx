import { Mail, Linkedin } from "lucide-react";

const team = [
  { name: "Sri. Ramesh Kumar", role: "Founder & Chairman", bio: "A visionary leader dedicated to community welfare for over 2 decades." },
  { name: "Dr. Priya Sharma", role: "Executive Director", bio: "Public health expert with extensive experience in rural healthcare programs." },
  { name: "Mr. Vijay Nair", role: "Program Director", bio: "Leads education and skill development initiatives across Karnataka." },
  { name: "Mrs. Lakshmi Devi", role: "Women Welfare Head", bio: "Champion of women empowerment and rural self-help groups." },
  { name: "Mr. Anand Rao", role: "Finance Director", bio: "Ensures transparent and accountable fund management." },
  { name: "Dr. Suresh Babu", role: "Medical Advisor", bio: "Oversees all healthcare programs and medical camps." },
];

const colors = ["gradient-saffron", "gradient-maroon", "bg-amber-500", "gradient-maroon", "gradient-saffron", "bg-amber-600"];
const initials = (name: string) => name.split(" ").map(n => n[0]).join("").slice(0, 2);

export default function TeamPage() {
  return (
    <main>
      <section className="py-24 bg-maroon text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl font-bold text-white mb-4">Our Team</h1>
          <p className="font-body text-white/70 text-lg">Dedicated leaders driving our mission forward</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={member.name} className="bg-card rounded-2xl shadow-card border border-border overflow-hidden hover-lift text-center">
                <div className={`h-40 ${colors[i]} flex items-center justify-center`}>
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="font-display text-white text-3xl font-bold">{initials(member.name)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-foreground font-bold text-xl mb-1">{member.name}</h3>
                  <p className="font-body text-saffron font-semibold text-sm mb-3">{member.role}</p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-3 mt-4">
                    <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-saffron hover:text-white transition-colors">
                      <Mail size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-saffron hover:text-white transition-colors">
                      <Linkedin size={14} />
                    </button>
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
