import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";
import { Event } from "../types/event";

import EventGrid from "../components/events/EventGrid";
import EventHero from "../components/events/EventHero";
import NewsPage from "./NewsPage";

export default function EventPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* These will load instantly without waiting for the API */}
      <NewsPage />
      <EventHero />

      {/* The loader is localized strictly to the grid area */}
      {loading ? (
        <div className="flex py-20 items-center justify-center bg-[#fafafa]">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#1a4d2e]" />
        </div>
      ) : (
        <EventGrid events={events} loading={false} />
      )}
    </div>
  );
}
