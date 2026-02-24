import { useEffect, useState } from "react";
import { getAllEvents } from "../../services/eventService";
import EventCard from "../../components/events/EventCard";
import RecentEventsTable from "../../components/events/RecentEventsTable";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  // 🔥 Get user from localStorage instead of Redux
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
  loadEvents();
}, []);

const loadEvents = async () => {
  try {
    const response = await getAllEvents();
    setEvents(response.data.events);
  } catch (error) {
    console.error(error);
  }
};

const upcomingEvents = events.filter(
  (e) => new Date(e.date) >= new Date()
);

  return (
    <div className="p-6">
      {/* Header */}
      {/* <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Events</h1>

        {user?.role === "ADMIN" && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            + Create Event
          </button>
        )}
      </div> */}

      {/* Upcoming Events */}
      <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {upcomingEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>

      {/* Recent Events */}
      <RecentEventsTable events={events} />
    </div>
  );
};

export default EventsPage;