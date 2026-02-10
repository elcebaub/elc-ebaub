import { notices } from "../../data/notices";

export default function NoticesPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-4 py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center">Notices</h1>
        <p className="mt-2 text-center text-gray-700">
          Stay updated with official club announcements and updates.
        </p>

        {/* Notices Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold">{notice.title}</h2>
              <p className="mt-2 text-gray-600">{notice.description}</p>
              <p className="mt-4 text-sm text-gray-400">Date: {notice.date}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
