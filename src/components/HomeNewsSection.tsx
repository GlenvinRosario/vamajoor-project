import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { useEffect, useState } from "react";
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

// Fallback data for display when no DB data
const fallbackNews: NewsEvent[] = [
  {
    id: "1",
    title: "Annual Education Scholarship Drive 2024",
    content: "We are proud to announce the annual scholarship program providing financial assistance to 500 deserving students.",
    image_url: null,
    event_date: "2024-12-15",
    category: "event",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Free Health Camp at Rural Villages",
    content: "Our medical team conducted free health check-ups for over 1,200 villagers across 8 villages in Karnataka.",
    image_url: null,
    event_date: "2024-11-20",
    category: "news",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Women Empowerment Workshop Series",
    content: "A month-long skill development workshop series empowering rural women with vocational training and entrepreneurship skills.",
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-maroon/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-maroon"></span>
            <span className="font-body text-maroon text-sm font-semibold uppercase tracking-wider">Latest Updates</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            News & <span className="text-saffron">Events</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Stay updated with our latest activities, events, and community initiatives
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayNews.map((item, i) => (
            <article
              key={item.id}
              className="bg-card rounded-2xl shadow-card border border-border overflow-hidden hover-lift group"
            >
              {/* Image placeholder */}
              <div className="h-48 overflow-hidden relative">
                {item.image_url ? (
                  <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${i === 0 ? "gradient-saffron" : i === 1 ? "gradient-maroon" : "bg-gradient-to-br from-amber-400 to-orange-600"}`}>
                    <Calendar size={48} className="text-white/40" />
                  </div>
                )}
                <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold font-body ${
                  item.category === "event" ? "bg-saffron text-white" : "bg-maroon text-white"
                }`}>
                  <Tag size={10} />
                  {item.category === "event" ? "Event" : "News"}
                </div>
              </div>

              <div className="p-6">
                {item.event_date && (
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-3">
                    <Calendar size={13} />
                    <span>{new Date(item.event_date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                  </div>
                )}
                <h3 className="font-display font-semibold text-foreground text-lg mb-3 line-clamp-2 group-hover:text-saffron transition-colors">
                  {item.title}
                </h3>
                {item.content && (
                  <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {item.content}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 border-2 border-saffron text-saffron font-body font-semibold px-8 py-3 rounded-xl hover:bg-saffron hover:text-white transition-all duration-300 group"
          >
            View All News & Events
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
