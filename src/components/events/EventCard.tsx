import { motion } from "framer-motion";
import { Event } from "../../types/event";
import { Link } from "react-router-dom";

export default function EventCard({ event }: { event: Event }) {
  return (
    <Link to={`/events/${event.id}`}>
      <motion.div
        whileHover={{
          scale: 1.04,
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="
bg-white
rounded-3xl
overflow-hidden
shadow-md
hover:shadow-2xl
cursor-pointer
"
      >
        <div
          className="
h-64
overflow-hidden
"
        >
          <img
            loading="lazy"
            src={event.cover_image}
            alt={event.title}
            className="
    w-full
    h-full
    object-cover
    hover:scale-110
    transition
    duration-500
  "
          />
        </div>

        <div
          className="
p-5
"
        >
          <h2
            className="
font-semibold
text-xl
line-clamp-2
"
          >
            {event.title}
          </h2>

          <p
            className="
text-gray-500
mt-3
line-clamp-3
"
          >
            {event.summary}
          </p>

          <button
            className="
mt-5
text-sm
font-semibold
text-pink-600
"
          >
            View Details →
          </button>
        </div>
      </motion.div>
    </Link>
  );
}
