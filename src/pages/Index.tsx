import HeroCarousel from "@/components/HeroCarousel";
import HomeQuickLinks from "@/components/HomeQuickLinks";
import HomeAboutSection from "@/components/HomeAboutSection";
import HomeNewsSection from "@/components/HomeNewsSection";
import HomeDonationSection from "@/components/HomeDonationSection";
import HomeGallerySection from "@/components/HomeGallerySection";

// Ticker/marquee for announcements
const announcements = [
  "🎉 Annual Scholarship Drive 2024 — Applications Open!",
  "❤️ Free Medical Camp — Register Now",
  "📚 Women Empowerment Workshop — Jan 10th, 2025",
  "🌿 Tree Plantation Drive — Join Us This Weekend",
  "🤝 Volunteer Registration Open — Be the Change!",
];

export default function Index() {
  return (
    <main>
      {/* News ticker */}
      <div className="fixed top-0 left-0 right-0 z-40 hidden">
        {/* Hidden — just below Navbar */}
      </div>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Ticker bar below carousel */}
      <div className="bg-maroon py-2.5 overflow-hidden">
        <div className="flex items-center">
          <div className="bg-saffron text-white font-body font-bold text-xs px-4 py-1 shrink-0 mr-4 rounded-r-full">
            LATEST
          </div>
          <div className="overflow-hidden flex-1 relative">
            <div className="marquee-content flex gap-12 whitespace-nowrap">
              {[...announcements, ...announcements].map((a, i) => (
                <span key={i} className="font-body text-white/90 text-sm">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <HomeQuickLinks />
      <HomeAboutSection />
      <HomeNewsSection />
      <HomeDonationSection />
      <HomeGallerySection />
    </main>
  );
}
