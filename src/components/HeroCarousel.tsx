import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

const slides = [
  {
    image: hero1,
    title: "Empowering Children Through Education",
    subtitle: "Providing quality education and support to underprivileged children across Karnataka",
    cta: "Our Programs",
    ctaHref: "/programs",
    secondCta: "Donate Now",
    secondCtaHref: "/donations",
  },
  {
    image: hero2,
    title: "Building Stronger Communities Together",
    subtitle: "Uniting volunteers and beneficiaries in a shared mission of compassion and service",
    cta: "About Us",
    ctaHref: "/about",
    secondCta: "Join Us",
    secondCtaHref: "/contact",
  },
  {
    image: hero3,
    title: "Your Generosity Transforms Lives",
    subtitle: "Every contribution makes a difference — sponsor a child, support a family, change a future",
    cta: "Donate Today",
    ctaHref: "/donations",
    secondCta: "Learn More",
    secondCtaHref: "/about",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setCurrent((c) => (c + 1) % slides.length);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const prev = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[90vh] min-h-[560px] overflow-hidden">
      {/* Background image */}
      <div
        key={current}
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 carousel-enter"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-saffron opacity-80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in" key={`content-${current}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="font-body text-gold text-sm font-medium tracking-wide">Dharma Jyothi Charitable Society</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {slide.title}
            </h1>
            <p className="font-body text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to={slide.ctaHref}
                className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-light text-white font-body font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-glow"
              >
                {slide.cta}
              </Link>
              <Link
                to={slide.secondCtaHref}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-body font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                {slide.secondCta}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-saffron border border-white/20 flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-saffron border border-white/20 flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-2.5 bg-gold" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
