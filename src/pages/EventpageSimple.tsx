import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";
import { Event } from "../types/event";

import EventGrid from "../components/events/EventGrid";
import EventHero from "../components/events/EventHero";

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

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafafa]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <EventHero />

      <EventGrid events={events} loading={false} />
    </div>
  );
}
