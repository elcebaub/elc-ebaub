import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Banner Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        {/* Banner Image */}
        <Image
          src="/banner/home-banner.jpg"
          alt="Home Banner"
          fill
          className="object-cover"
        />

        {/* Overlay: Logo + Tagline */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
          <Image
            src="/logo/logo.png"
            alt="EELC Logo"
            width={250}
            height={150}
            className="object-contain"
          />
          <p className="mt-2 text-lg md:text-2xl text-white font-semibold">
            Let's speak, learn, and grow together
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* About EELC - FIRST */}
          <Link
            href="/about"
            className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <div className="text-sm font-medium">About EELC</div>
            <div className="mt-1 text-sm text-neutral-600">
              Learn about our mission, vision, and objectives.
            </div>
            <div className="mt-4 text-sm text-neutral-900">
              Learn more{" "}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </Link>

          {/* Notice Board */}
          <Link
            href="/notices"
            className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <div className="text-sm font-medium">Notice Board</div>
            <div className="mt-1 text-sm text-neutral-600">
              Official announcements and updates.
            </div>
            <div className="mt-4 text-sm text-neutral-900">
              View notices{" "}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </Link>

          {/* Events */}
          <Link
            href="/events"
            className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <div className="text-sm font-medium">Events</div>
            <div className="mt-1 text-sm text-neutral-600">
              Upcoming sessions and past activities.
            </div>
            <div className="mt-4 text-sm text-neutral-900">
              See events{" "}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </Link>

          {/* Our Team */}
          <Link
            href="/team"
            className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <div className="text-sm font-medium">Our Team</div>
            <div className="mt-1 text-sm text-neutral-600">
              Faculty advisors, executives, and founding members.
            </div>
            <div className="mt-4 text-sm text-neutral-900">
              See committee{" "}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </Link>

          {/* Join EELC */}
          <Link
            href="/join"
            className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <div className="text-sm font-medium">Join EELC</div>
            <div className="mt-1 text-sm text-neutral-600">
              Become a member and participate in our activities.
            </div>
            <div className="mt-4 text-sm text-neutral-900">
              Join now{" "}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <div className="text-sm font-medium">Contact Us</div>
            <div className="mt-1 text-sm text-neutral-600">
              Reach out for any queries or information.
            </div>
            <div className="mt-4 text-sm text-neutral-900">
              Get in touch{" "}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
