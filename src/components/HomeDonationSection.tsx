import { Link } from "react-router-dom";
import { Heart, ArrowRight, CheckCircle } from "lucide-react";

const donationOptions = [
  { amount: "₹500", label: "Feed a child for a month" },
  { amount: "₹1,500", label: "Books & stationery for a student" },
  { amount: "₹5,000", label: "Medical aid for a family" },
  { amount: "₹10,000", label: "Sponsor a child's education" },
];

const benefits = [
  "80G Tax Exemption on all donations",
  "Transparent fund utilization reports",
  "Regular impact updates sent to donors",
  "CSR compliance documentation available",
];

export default function HomeDonationSection() {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-saffron" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-maroon" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-saffron/10 rounded-full px-4 py-1.5 mb-5">
              <Heart size={14} className="text-saffron" />
              <span className="font-body text-saffron text-sm font-semibold uppercase tracking-wider">Make a Difference</span>
            </div>

            <h2 className="font-display text-4xl font-bold text-foreground mb-6 leading-tight">
              Sponsor a <span className="text-saffron">Child</span> &<br />
              Change a <span className="text-maroon">Life Forever</span>
            </h2>

            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              Your generous donation directly supports children's education, healthcare, and overall well-being. Every rupee you contribute brings hope and opportunity to a deserving child.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 font-body text-foreground text-sm">
                  <CheckCircle size={18} className="text-saffron shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <Link
              to="/donations"
              className="inline-flex items-center gap-2 gradient-saffron text-white font-body font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-glow group"
            >
              Donate Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Donation card */}
          <div className="bg-card rounded-3xl shadow-lg border border-border p-8">
            <h3 className="font-display text-foreground font-bold text-2xl mb-2">Select Donation Amount</h3>
            <p className="font-body text-muted-foreground text-sm mb-7">Choose an amount or enter your own</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {donationOptions.map((opt) => (
                <Link
                  key={opt.amount}
                  to="/donations"
                  className="group p-4 rounded-xl border-2 border-border hover:border-saffron hover:bg-saffron/5 transition-all duration-200 text-center cursor-pointer"
                >
                  <p className="font-display text-saffron font-bold text-2xl group-hover:scale-110 transition-transform">{opt.amount}</p>
                  <p className="font-body text-muted-foreground text-xs mt-1">{opt.label}</p>
                </Link>
              ))}
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className="font-body text-muted-foreground font-semibold">₹</span>
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-border focus:border-saffron outline-none font-body text-foreground bg-background transition-colors"
                readOnly
                onClick={() => window.location.href = "/donations"}
              />
            </div>

            <Link
              to="/donations"
              className="w-full flex items-center justify-center gap-2 gradient-saffron text-white font-body font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Heart size={18} />
              Donate with Heart
            </Link>

            <p className="font-body text-muted-foreground text-xs text-center mt-4">
              100% Secure • 80G Tax Benefit • Transparent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
