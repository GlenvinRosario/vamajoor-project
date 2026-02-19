import { BookOpen, Download, ExternalLink } from "lucide-react";

const magazines = [
  { id: 1, title: "Dharma Jyothi E-Magazine — Vol. 12", date: "January 2025", desc: "Latest edition featuring our annual report, success stories, and upcoming programs." },
  { id: 2, title: "Dharma Jyothi E-Magazine — Vol. 11", date: "October 2024", desc: "Special edition on Women Empowerment featuring inspiring stories of transformation." },
  { id: 3, title: "Dharma Jyothi E-Magazine — Vol. 10", date: "July 2024", desc: "Education special: How our scholarship programs are changing thousands of lives." },
  { id: 4, title: "Dharma Jyothi E-Magazine — Vol. 9", date: "April 2024", desc: "Community health drive coverage, medical camp reports, and health awareness stories." },
];

const colors = ["gradient-saffron", "gradient-maroon", "bg-amber-500", "bg-orange-600"];

export default function MagazinePage() {
  return (
    <main>
      <section className="py-24 bg-maroon text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl font-bold text-white mb-4">E-Magazine</h1>
          <p className="font-body text-white/70 text-lg">Our quarterly digital magazine featuring stories of impact</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {magazines.map((mag, i) => (
              <div key={mag.id} className="bg-card rounded-2xl shadow-card border border-border overflow-hidden hover-lift group">
                <div className={`h-40 ${colors[i]} flex items-center justify-center`}>
                  <BookOpen size={64} className="text-white/40" />
                </div>
                <div className="p-6">
                  <p className="font-body text-muted-foreground text-xs mb-2">{mag.date}</p>
                  <h3 className="font-display text-foreground font-bold text-lg mb-3 group-hover:text-saffron transition-colors">{mag.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">{mag.desc}</p>
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-saffron text-white font-body font-semibold text-sm py-2.5 rounded-xl hover:bg-saffron-light transition-colors">
                      <ExternalLink size={14} />
                      Read Online
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-border text-foreground font-body font-semibold text-sm px-4 py-2.5 rounded-xl hover:border-saffron hover:text-saffron transition-colors">
                      <Download size={14} />
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cream rounded-2xl p-8 text-center border border-border">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Subscribe to Our Magazine</h3>
            <p className="font-body text-muted-foreground mb-6">Get each new edition delivered straight to your inbox</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background" />
              <button className="bg-saffron text-white font-body font-semibold px-6 py-3 rounded-xl hover:bg-saffron-light transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
