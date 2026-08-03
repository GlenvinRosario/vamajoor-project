import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";
import { getEvents } from "../services/eventService";
import { Event } from "../types/event";

export default function EventDetailsPage() {
  const { id } = useParams();

  const [event, setEvent] = useState<Event>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((events) => {
        const found = events.find((e) => e.id === id);
        setEvent(found);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/30">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/30">
        <p className="text-lg text-gray-500">Event not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/30 text-neutral-900 selection:bg-emerald-100 selection:text-emerald-900 pb-24">
      {/* Top Navigation bar */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <motion.a
          whileHover={{ x: -4 }}
          href="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 hover:text-emerald-900 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-100 shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Community Events</span>
        </motion.a>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
            {event.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {event.summary}
          </p>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {event.images?.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white p-4 rounded-3xl shadow-xl shadow-emerald-950/5 border border-emerald-100/80 group transition-all duration-300"
            >
              <div className="overflow-hidden rounded-2xl bg-gray-100 relative">
                <img
                  src={image}
                  alt={`${event.title}-${index}`}
                  className="w-full h-80 object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-br from-white via-white to-emerald-50/40 rounded-3xl shadow-2xl shadow-emerald-950/10 p-8 md:p-14 border border-emerald-100/80 max-w-4xl mx-auto relative overflow-hidden backdrop-blur-xl"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-50/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-emerald-100/80 text-emerald-800 rounded-2xl shadow-inner">
                <Sparkles className="w-5 h-5" />
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                About this Event
              </h2>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-emerald-200/60 via-emerald-100/30 to-transparent mb-8" />

            <div className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line font-light tracking-wide">
              {event.description}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        />
      </div>
    </div>
  );
}
