import { useState, useEffect } from "react";
import { Calendar, Tag, Search } from "lucide-react";
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

const fallback: NewsEvent[] = [
  { id: "1", title: "Annual Scholarship Drive 2024", content: "Applications open for our annual scholarship program providing financial aid to 500 deserving students across Karnataka.", image_url: null, event_date: "2024-12-15", category: "event", created_at: new Date().toISOString() },
  { id: "2", title: "Free Health Camp at Rural Villages", content: "Our medical team conducted free health check-ups for over 1,200 villagers across 8 villages in Karnataka.", image_url: null, event_date: "2024-11-20", category: "news", created_at: new Date().toISOString() },
  { id: "3", title: "Women Empowerment Workshop", content: "Month-long skill development workshop series empowering rural women with vocational training and entrepreneurship skills.", image_url: null, event_date: "2025-01-10", category: "event", created_at: new Date().toISOString() },
  { id: "4", title: "Tree Plantation Drive 2024", content: "Over 5,000 saplings planted across 15 villages to promote environmental awareness and sustainability.", image_url: null, event_date: "2024-10-05", category: "news", created_at: new Date().toISOString() },
  { id: "5", title: "Digital Literacy Program Launch", content: "Launched a new digital literacy initiative teaching basic computer and internet skills to rural youth.", image_url: null, event_date: "2025-02-01", category: "event", created_at: new Date().toISOString() },
  { id: "6", title: "Disaster Relief Fund Update", content: "Successfully distributed relief material to 300 families affected by floods in North Karnataka.", image_url: null, event_date: "2024-09-20", category: "news", created_at: new Date().toISOString() },
];

export default function NewsPage() {
  const [items, setItems] = useState<NewsEvent[]>([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await supabase.from("news_events").select("*").eq("is_published", true).order("created_at", { ascending: false });
      setItems(data && data.length > 0 ? data : fallback);
    };
    fetchNews();
  }, []);

  const display = items.filter((i) => {
    const matchFilter = filter === "all" || i.category === filter;
    const matchSearch = !search || i.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <main>
      <section className="py-24 bg-maroon text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl font-bold text-white mb-4">News & Events</h1>
          <p className="font-body text-white/70 text-lg">Stay updated with our latest activities</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background"
              />
            </div>
            <div className="flex gap-2">
              {["all", "news", "event"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-xl font-body font-semibold text-sm capitalize transition-all ${filter === f ? "bg-saffron text-white" : "bg-muted text-muted-foreground hover:bg-saffron/10 hover:text-saffron"}`}
                >
                  {f === "all" ? "All" : f === "news" ? "News" : "Events"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {display.map((item, i) => (
              <article key={item.id} className="bg-card rounded-2xl shadow-card border border-border overflow-hidden hover-lift group">
                <div className="h-48 overflow-hidden relative">
                  {item.image_url ? (
                    <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${i % 2 === 0 ? "gradient-saffron" : "gradient-maroon"}`}>
                      <Calendar size={40} className="text-white/30" />
                    </div>
                  )}
                  <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold font-body ${item.category === "event" ? "bg-saffron text-white" : "bg-maroon text-white"}`}>
                    <Tag size={10} />
                    {item.category === "event" ? "Event" : "News"}
                  </div>
                </div>
                <div className="p-6">
                  {item.event_date && (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-3">
                      <Calendar size={13} />
                      {new Date(item.event_date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                    </div>
                  )}
                  <h3 className="font-display font-semibold text-foreground text-lg mb-3 line-clamp-2 group-hover:text-saffron transition-colors">{item.title}</h3>
                  {item.content && <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-3">{item.content}</p>}
                </div>
              </article>
            ))}
          </div>

          {display.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-muted-foreground">No results found.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
