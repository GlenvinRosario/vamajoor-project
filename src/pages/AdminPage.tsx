import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Upload, Trash2, LogOut, Image, Newspaper, Loader2, Plus, X } from "lucide-react";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [tab, setTab] = useState<"gallery" | "news">("gallery");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [newsForm, setNewsForm] = useState({ title: "", content: "", category: "news", event_date: "" });
  const [newsFile, setNewsFile] = useState<File | null>(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!session) { navigate("/auth"); return; }
      setUser(session.user);
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).single();
      if (data?.role === "admin") {
        setIsAdmin(true);
        fetchData();
      }
      setLoading(false);
    });
  }, []);

  const fetchData = async () => {
    const [g, n] = await Promise.all([
      supabase.from("gallery_images").select("*").order("created_at", { ascending: false }),
      supabase.from("news_events").select("*").order("created_at", { ascending: false }),
    ]);
    if (g.data) setGalleryImages(g.data);
    if (n.data) setNewsItems(n.data);
  };

  const uploadGalleryImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    setUploading(true);
    const path = `gallery/${Date.now()}-${file.name}`;
    const { data: upload, error } = await supabase.storage.from("site-images").upload(path, file);
    if (error) { setMsg("Upload failed: " + error.message); setUploading(false); return; }
    const { data: urlData } = supabase.storage.from("site-images").getPublicUrl(path);
    await supabase.from("gallery_images").insert({ image_url: urlData.publicUrl, uploaded_by: user.id, category: "general" });
    setMsg("Image uploaded successfully!");
    fetchData();
    setUploading(false);
  };

  const deleteGallery = async (id: string, url: string) => {
    await supabase.from("gallery_images").delete().eq("id", id);
    const path = url.split("/site-images/")[1];
    if (path) await supabase.storage.from("site-images").remove([path]);
    fetchData();
  };

  const submitNews = async () => {
    if (!newsForm.title || !user) return;
    setUploading(true);
    let image_url = null;
    if (newsFile) {
      const path = `news/${Date.now()}-${newsFile.name}`;
      await supabase.storage.from("site-images").upload(path, newsFile);
      const { data } = supabase.storage.from("site-images").getPublicUrl(path);
      image_url = data.publicUrl;
    }
    await supabase.from("news_events").insert({ ...newsForm, image_url, uploaded_by: user.id, is_published: true });
    setMsg("News item added!");
    setNewsForm({ title: "", content: "", category: "news", event_date: "" });
    setNewsFile(null);
    fetchData();
    setUploading(false);
  };

  const deleteNews = async (id: string) => {
    await supabase.from("news_events").delete().eq("id", id);
    fetchData();
  };

  const signOut = async () => { await supabase.auth.signOut(); navigate("/"); };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-saffron" size={36} /></div>;

  if (!isAdmin) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <p className="font-body text-foreground text-lg">You don't have admin access.</p>
      <p className="font-body text-muted-foreground text-sm">Contact the site administrator to grant admin role.</p>
      <Link to="/" className="text-saffron font-body font-semibold hover:underline">← Back to Home</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream">
      {/* Admin header */}
      <div className="bg-maroon text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-xl">Admin Dashboard</h1>
          <p className="font-body text-white/60 text-xs">{user?.email}</p>
        </div>
        <button onClick={signOut} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-body text-sm transition-colors">
          <LogOut size={14} />Sign Out
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        {msg && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl font-body text-sm flex justify-between items-center">
            {msg}
            <button onClick={() => setMsg("")}><X size={14} /></button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          {[{ key: "gallery", label: "Gallery", icon: Image }, { key: "news", label: "News & Events", icon: Newspaper }].map((t) => (
            <button key={t.key} onClick={() => setTab(t.key as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm transition-all ${tab === t.key ? "bg-saffron text-white shadow-glow" : "bg-card text-muted-foreground border border-border hover:border-saffron hover:text-saffron"}`}>
              <t.icon size={16} />{t.label}
            </button>
          ))}
        </div>

        {/* Gallery Tab */}
        {tab === "gallery" && (
          <div>
            <div className="mb-6">
              <label className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm cursor-pointer transition-all ${uploading ? "bg-muted text-muted-foreground" : "bg-saffron text-white hover:bg-saffron-light"}`}>
                {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                {uploading ? "Uploading..." : "Upload Image"}
                <input type="file" accept="image/*" className="hidden" onChange={uploadGalleryImage} disabled={uploading} />
              </label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img) => (
                <div key={img.id} className="group relative rounded-2xl overflow-hidden shadow-card bg-card aspect-square">
                  <img src={img.image_url} alt={img.title || ""} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button onClick={() => deleteGallery(img.id, img.image_url)} className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {galleryImages.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <Image size={48} className="text-muted-foreground/30 mx-auto mb-3" />
                  <p className="font-body text-muted-foreground">No images yet. Upload your first image above.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* News Tab */}
        {tab === "news" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add form */}
            <div className="bg-card rounded-2xl shadow-card border border-border p-6">
              <h3 className="font-display font-bold text-lg text-foreground mb-5 flex items-center gap-2"><Plus size={18} className="text-saffron" />Add News/Event</h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Title *</label>
                  <input type="text" value={newsForm.title} onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background" placeholder="Event title" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Category</label>
                    <select value={newsForm.category} onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background">
                      <option value="news">News</option>
                      <option value="event">Event</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Date</label>
                    <input type="date" value={newsForm.event_date} onChange={(e) => setNewsForm({ ...newsForm, event_date: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background" />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Content</label>
                  <textarea rows={4} value={newsForm.content} onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border focus:border-saffron outline-none font-body text-sm bg-background resize-none" placeholder="Description..." />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Image (optional)</label>
                  <input type="file" accept="image/*" onChange={(e) => setNewsFile(e.target.files?.[0] || null)} className="w-full font-body text-sm text-muted-foreground file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-saffron file:text-white file:font-semibold file:text-xs cursor-pointer" />
                </div>
                <button onClick={submitNews} disabled={uploading || !newsForm.title} className="w-full flex items-center justify-center gap-2 bg-saffron text-white font-body font-semibold py-3 rounded-xl hover:bg-saffron-light transition-colors disabled:opacity-50">
                  {uploading ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                  {uploading ? "Saving..." : "Add Item"}
                </button>
              </div>
            </div>

            {/* List */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-foreground">Existing Items ({newsItems.length})</h3>
              {newsItems.map((item) => (
                <div key={item.id} className="bg-card rounded-xl shadow-card border border-border p-4 flex gap-4 items-start">
                  {item.image_url && <img src={item.image_url} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold font-body ${item.category === "event" ? "bg-saffron/20 text-saffron" : "bg-maroon/20 text-maroon"}`}>{item.category}</span>
                    </div>
                    <p className="font-body font-semibold text-foreground text-sm truncate">{item.title}</p>
                    {item.event_date && <p className="font-body text-muted-foreground text-xs mt-0.5">{new Date(item.event_date).toLocaleDateString("en-IN")}</p>}
                  </div>
                  <button onClick={() => deleteNews(item.id)} className="w-8 h-8 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive hover:text-white transition-colors shrink-0">
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              {newsItems.length === 0 && <p className="font-body text-muted-foreground text-sm py-8 text-center">No news items yet.</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
