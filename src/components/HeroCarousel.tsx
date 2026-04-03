import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

const slides = [
  {
    image: hero1,
    title: "Serving Humanity with Compassion and Love",
    subtitle:
      "Dharma Jyothi Charitable Society, Vamanjoor — founded in 1976, empowering marginalized communities through education, healthcare, and social outreach across Karnataka, Goa, and Manipur.",
    cta: "Explore Our Mission",
    ctaHref: "/about",
    secondCta: "Contact Us",
    secondCtaHref: "/contact",
  },
  {
    image: hero2,
    title: "A Mission Rooted in Faith and Service",
    subtitle:
      "Inspired by the Missionary Sisters of the Queen of the Apostles, we proclaim the compassionate love of God by uplifting women, children, and the vulnerable in society.",
    cta: "Our Services",
    ctaHref: "/programs",
    secondCta: "Join Us",
    secondCtaHref: "/contact",
  },
  {
    image: hero3,
    title: "Transforming Lives Across Communities",
    subtitle:
      "Through hospitals, schools, social centres, and empowerment programs, we bring hope, dignity, and a better future to those in need.",
    cta: "View Our Work",
    ctaHref: "/gallery",
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
      {/* Background Image */}
      <div
        key={current}
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#355E3B] to-[#f59e0b]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white text-sm font-medium tracking-wide">
                Since 1976 • Serving with Compassion
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-3 max-w-2xl">
              {slide.subtitle}
            </p>

            {/* Spiritual Sub-line */}
            <p className="text-white/60 text-sm mb-8">
              Inspired by faith • Empowering the marginalized • Building a just
              society
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to={slide.ctaHref}
                className="bg-[#355E3B] hover:bg-green-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {slide.cta}
              </Link>

              <Link
                to={slide.secondCtaHref}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#355E3B] border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#355E3B] border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
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
              i === current ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
