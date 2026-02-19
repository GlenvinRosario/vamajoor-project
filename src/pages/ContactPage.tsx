import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className="py-24 bg-maroon text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="font-body text-white/70 text-lg">We'd love to hear from you</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">Get In Touch</h2>
              <p className="font-body text-muted-foreground leading-relaxed">Whether you want to volunteer, donate, or collaborate with us, we'd love to connect. Reach out through any of the channels below.</p>
              {[
                { icon: MapPin, label: "Address", value: "Dharma Jyothi Social Centre, Karnataka, India" },
                { icon: Phone, label: "Phone", value: "+91 63601-43936" },
                { icon: Mail, label: "Email", value: "info@dharmajyothisc.org" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 p-5 bg-cream rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-saffron flex items-center justify-center shrink-0">
                    <c.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">{c.label}</p>
                    <p className="font-body text-muted-foreground text-sm mt-0.5">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-card rounded-2xl shadow-card border border-border p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Send a Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background" placeholder="+91 XXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background resize-none" placeholder="How can we help you?" />
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-saffron text-white font-body font-semibold py-3.5 rounded-xl hover:bg-saffron-light transition-colors">
                  <Send size={16} />Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
