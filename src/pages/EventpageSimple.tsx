import { useEvents } from "../context/EventContext";
import EventGrid from "../components/events/EventGrid";
import EventHero from "../components/events/EventHero";

export default function EventPage() {
  const { events, loading } = useEvents();

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
