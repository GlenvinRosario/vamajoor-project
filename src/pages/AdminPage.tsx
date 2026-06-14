import { useState } from "react";
import {
  Upload,
  Trash2,
  LogOut,
  Image,
  Newspaper,
  Loader2,
  Plus,
} from "lucide-react";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = "church_upload";

export default function AdminPage() {
  const [tab, setTab] = useState<"gallery" | "news">("gallery");
  const [uploading, setUploading] = useState(false);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [newsForm, setNewsForm] = useState({
    title: "",
    content: "",
    category: "news",
    event_date: "",
  });

  // ---------------------------
  // UPLOAD IMAGE TO CLOUDINARY
  // ---------------------------
  const uploadGalleryImage = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    const newImage = {
      id: data.public_id,
      image_url: data.secure_url,
      title: file.name,
      category: "general",
    };

    setGalleryImages((prev) => [newImage, ...prev]);
    setUploading(false);
  };

  // ---------------------------
  // DELETE (LOCAL ONLY)
  // ---------------------------
  const deleteGallery = (id: string) => {
    setGalleryImages((prev) => prev.filter((img) => img.id !== id));
  };

  // ---------------------------
  // ADD NEWS (LOCAL ONLY)
  // ---------------------------
  const submitNews = () => {
    if (!newsForm.title) return;

    setNewsItems((prev) => [
      {
        id: Date.now().toString(),
        ...newsForm,
      },
      ...prev,
    ]);

    setNewsForm({
      title: "",
      content: "",
      category: "news",
      event_date: "",
    });
  };

  // ---------------------------
  // LOGOUT (SIMPLE)
  // ---------------------------
  const signOut = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* HEADER */}
      <div className="bg-maroon text-white px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">Admin Dashboard</h1>
        <button onClick={signOut} className="flex items-center gap-2">
          <LogOut size={14} />
          Exit
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* TABS */}
        <div className="flex gap-3 mb-8">
          <button onClick={() => setTab("gallery")} className="px-4 py-2 bg-saffron text-white rounded">
            <Image size={14} /> Gallery
          </button>

          <button onClick={() => setTab("news")} className="px-4 py-2 bg-gray-200 rounded">
            <Newspaper size={14} /> News
          </button>
        </div>

        {/* ---------------- GALLERY ---------------- */}
        {tab === "gallery" && (
          <div>
            <label className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer">
              {uploading ? <Loader2 className="animate-spin" /> : <Upload size={14} />}
              Upload Image
              <input type="file" hidden onChange={uploadGalleryImage} />
            </label>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {galleryImages.map((img) => (
                <div key={img.id} className="relative">
                  <img src={img.image_url} className="rounded-xl" />
                  <button
                    onClick={() => deleteGallery(img.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- NEWS ---------------- */}
        {tab === "news" && (
          <div className="space-y-3">
            <input
              placeholder="Title"
              value={newsForm.title}
              onChange={(e) =>
                setNewsForm({ ...newsForm, title: e.target.value })
              }
              className="border p-2 w-full"
            />

            <textarea
              placeholder="Content"
              value={newsForm.content}
              onChange={(e) =>
                setNewsForm({ ...newsForm, content: e.target.value })
              }
              className="border p-2 w-full"
            />

            <button
              onClick={submitNews}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              <Plus size={14} /> Add News
            </button>

            <div>
              {newsItems.map((n) => (
                <div key={n.id} className="border p-3 mt-2 rounded">
                  <h3 className="font-bold">{n.title}</h3>
                  <p>{n.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}