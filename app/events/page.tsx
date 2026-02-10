import { events, Event } from "../../data/events";

export default function EventsPage() {
  const today = new Date();

  const upcomingEvents = events.filter(
    (event: Event) => new Date(event.date) >= today
  );
  const pastEvents = events.filter(
    (event: Event) => new Date(event.date) < today
  );

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold text-center">Events</h1>
        <p className="mt-2 text-center text-gray-700">
          Check out our upcoming sessions and past activities.
        </p>

        {/* Upcoming Events */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          {upcomingEvents.length === 0 ? (
            <p className="mt-2 text-gray-600">No upcoming events at the moment.</p>
          ) : (
            <div className="mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event: Event) => (
                <div
                  key={event.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                  <p className="mt-4 text-sm text-gray-400">Date: {event.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Past Events */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Past Events</h2>
          {pastEvents.length === 0 ? (
            <p className="mt-2 text-gray-600">No past events yet.</p>
          ) : (
            <div className="mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event: Event) => (
                <div
                  key={event.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                  <p className="mt-4 text-sm text-gray-400">Date: {event.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
