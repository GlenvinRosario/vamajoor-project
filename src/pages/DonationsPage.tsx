import { Heart, CheckCircle, Phone, CreditCard } from "lucide-react";

const tiers = [
  { amount: "₹500", label: "Friend", desc: "Feed a child for a month" },
  { amount: "₹1,500", label: "Supporter", desc: "Books & stationery for a student" },
  { amount: "₹5,000", label: "Champion", desc: "Medical aid for a family" },
  { amount: "₹10,000", label: "Patron", desc: "Sponsor a child's full education" },
  { amount: "₹25,000", label: "Benefactor", desc: "Support 5 families for a year" },
  { amount: "₹1,00,000", label: "Guardian Angel", desc: "Fund an entire program for a year" },
];

export default function DonationsPage() {
  return (
    <main>
      <section className="py-24 bg-maroon text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl font-bold text-white mb-4">Make a Donation</h1>
          <p className="font-body text-white/70 text-lg">Your generosity changes lives — every rupee counts</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Why donate */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-cream rounded-2xl p-6 border border-border">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Why Donate?</h3>
                {[
                  "80G Income Tax Exemption",
                  "100% Transparent Fund Usage",
                  "Direct Impact on Beneficiaries",
                  "Monthly Impact Reports",
                  "CSR Compliance Support",
                  "Named Recognition Options",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                    <CheckCircle size={16} className="text-saffron shrink-0" />
                    <span className="font-body text-foreground text-sm">{b}</span>
                  </div>
                ))}
              </div>

              <div className="bg-maroon rounded-2xl p-6">
                <h3 className="font-display text-white font-bold text-lg mb-3">Bank Transfer</h3>
                <div className="space-y-2 font-body text-white/80 text-sm">
                  <p><span className="text-gold">Account Name:</span> Dharma Jyothi Charitable Society</p>
                  <p><span className="text-gold">Bank:</span> State Bank of India</p>
                  <p><span className="text-gold">Account No:</span> XXXX XXXX XXXX</p>
                  <p><span className="text-gold">IFSC:</span> SBIN0XXXXXX</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-white/60 text-xs">
                  <Phone size={12} />
                  <span>Call +91 63601-43936 for assistance</span>
                </div>
              </div>
            </div>

            {/* Right: Donation options */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Choose Your Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {tiers.map((t) => (
                  <div key={t.amount} className="group p-5 rounded-2xl border-2 border-border hover:border-saffron hover:bg-saffron/5 transition-all duration-200 cursor-pointer text-center hover-lift">
                    <p className="font-display text-saffron font-bold text-2xl mb-1">{t.amount}</p>
                    <p className="font-body text-foreground font-semibold text-sm mb-1">{t.label}</p>
                    <p className="font-body text-muted-foreground text-xs">{t.desc}</p>
                  </div>
                ))}
              </div>

              {/* Custom donation form */}
              <div className="bg-card rounded-2xl shadow-card border border-border p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Custom Donation</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background" placeholder="Ramesh" />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background" placeholder="Kumar" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Donation Amount (₹)</label>
                    <input type="number" className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background" placeholder="5000" />
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 gradient-saffron text-white font-body font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity">
                    <Heart size={18} />
                    Donate with Heart
                  </button>
                  <p className="text-center font-body text-muted-foreground text-xs">
                    Secure payment • 80G Tax Benefit • Receipt via email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
