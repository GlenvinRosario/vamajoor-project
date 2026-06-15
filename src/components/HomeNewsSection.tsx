import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Tag, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NewsEvent {
  id: string;
  title: string;
  content: string | null;
  image_url: string | null;
  event_date: string | null;
  category: string | null;
  created_at: string;
}

const fallbackNews: NewsEvent[] = [
  {
    id: "1",
    title: "Annual Education Scholarship Drive 2024",
    content:
      "We are proud to announce the annual scholarship program providing financial assistance to deserving students.",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781439260/nkgew01ybaagmiiwdmcl.png",
    event_date: "2024-12-15",
    category: "event",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Free Health Camp at Rural Villages",
    content:
      "Our medical team conducted free health check-ups for hundreds of villagers across Karnataka.",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781439265/t4ushiuhnpmuv1giaz7m.png",
    event_date: "2024-11-20",
    category: "news",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Women Empowerment Workshop Series",
    content:
      "A month-long skill development initiative empowering women through training and entrepreneurship.",
    image_url:
      "https://res.cloudinary.com/dapmnkke3/image/upload/v1781439263/hac8xbfwbdvnbilpqnwd.png",
    event_date: "2025-01-10",
    category: "event",
    created_at: new Date().toISOString(),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HomeNewsSection() {
  const [news, setNews] = useState<NewsEvent[]>([]);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const { data } = await supabase
  //       .from("news_events")
  //       .select("*")
  //       .eq("is_published", true)
  //       .order("created_at", { ascending: false })
  //       .limit(3);

  //     setNews(data && data.length > 0 ? data : fallbackNews);
  //   };

  //   fetchNews();
  // }, []);

  const displayNews = news.length > 0 ? news : fallbackNews;

  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-b from-[#F7FBF8] via-white to-[#F7FBF8]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#5D8A66]/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#355E3B]/10 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#f59e0b]/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#355E3B]/10 bg-[#355E3B]/5 backdrop-blur-md px-5 py-2">
            <Sparkles size={14} className="text-[#355E3B]" />
            <span className="text-sm font-semibold tracking-[2px] uppercase text-[#355E3B]">
              Latest Updates
            </span>
          </div>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-[#1B2A1E] tracking-tight">
            News & <span className="text-[#5D8A66]">Events</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-lg">
            Discover our latest activities, achievements, outreach programs, and
            community initiatives.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayNews.map((item, index) => (
            <motion.article
              key={item.id}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="
                group relative flex flex-col
                overflow-hidden
                rounded-[28px]
                bg-white
                border border-black/5
                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                hover:shadow-[0_25px_60px_rgba(53,94,59,0.18)]
                transition-shadow duration-500
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {item.image_url ? (
                  <>
                    <img
                      src={item.image_url}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* shine sweep */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
                  </>
                ) : (
                  <div className="relative h-full bg-gradient-to-br from-[#355E3B] via-[#4D7B54] to-[#6B9B72] flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/10" />
                    <Calendar
                      size={70}
                      className="text-white/30 relative z-10"
                    />
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute left-4 top-4">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-[#355E3B] shadow-sm">
                    <Tag size={11} />
                    {item.category === "event" ? "Event" : "News"}
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                {item.event_date && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar size={14} />
                    {new Date(item.event_date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#1B2A1E] leading-snug mb-4 group-hover:text-[#355E3B] transition-colors">
                  {item.title}
                </h3>

                {item.content && (
                  <p className="text-gray-600 leading-7 line-clamp-3 flex-1">
                    {item.content}
                  </p>
                )}

                <Link
                  to="/news"
                  className="mt-6 flex items-center gap-2 font-semibold text-[#355E3B] hover:text-[#28482D] transition-colors"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* Bottom accent bar */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#355E3B] to-[#f59e0b]"
              />

              {/* Decorative glow */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#355E3B]/5 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/news"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-[#355E3B]
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              shadow-[#355E3B]/20
              hover:scale-105
              hover:bg-[#28482D]
              hover:shadow-xl
              hover:shadow-[#355E3B]/30
              transition-all
              duration-300
            "
          >
            View All News & Events
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
