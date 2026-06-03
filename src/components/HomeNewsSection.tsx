import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

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
    image_url: null,
    event_date: "2024-12-15",
    category: "event",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Free Health Camp at Rural Villages",
    content:
      "Our medical team conducted free health check-ups for hundreds of villagers across Karnataka.",
    image_url: null,
    event_date: "2024-11-20",
    category: "news",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Women Empowerment Workshop Series",
    content:
      "A month-long skill development initiative empowering women through training and entrepreneurship.",
    image_url: null,
    event_date: "2025-01-10",
    category: "event",
    created_at: new Date().toISOString(),
  },
];

export default function HomeNewsSection() {
  const [news, setNews] = useState<NewsEvent[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await supabase
        .from("news_events")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .limit(3);

      setNews(data && data.length > 0 ? data : fallbackNews);
    };

    fetchNews();
  }, []);

  const displayNews = news.length > 0 ? news : fallbackNews;

  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-b from-[#F7FBF8] via-white to-[#F7FBF8]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#5D8A66]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#355E3B]/10 blur-3xl" />

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
            <span className="h-2 w-2 rounded-full bg-[#355E3B]" />
            <span className="text-sm font-semibold tracking-[2px] uppercase text-[#355E3B]">
              Latest Updates
            </span>
          </div>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-[#1B2A1E]">
            News & Events
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-lg">
            Discover our latest activities, achievements, outreach programs,
            and community initiatives.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-white/80
                backdrop-blur-xl
                border border-white
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(53,94,59,0.15)]
                transition-all duration-500
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative h-full bg-gradient-to-br from-[#355E3B] via-[#4D7B54] to-[#6B9B72] flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/10" />

                    <Calendar
                      size={70}
                      className="text-white/30 relative z-10"
                    />
                  </div>
                )}

                {/* Category */}
                <div className="absolute left-4 top-4">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-[#355E3B]">
                    <Tag size={11} />
                    {item.category === "event" ? "Event" : "News"}
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* Content */}
              <div className="p-7">
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
                  <p className="text-gray-600 leading-7 line-clamp-3">
                    {item.content}
                  </p>
                )}

                <div className="mt-6 flex items-center gap-2 font-semibold text-[#355E3B]">
                  Read More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#355E3B]/5 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/news"
            className="
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
              hover:scale-105
              hover:bg-[#28482D]
              transition-all
              duration-300
            "
          >
            View All News & Events

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

