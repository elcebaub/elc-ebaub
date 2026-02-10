export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        {/* Page Title */}
        <h1 className="text-4xl font-bold tracking-tight">About EELC</h1>
        <p className="mt-4 text-lg text-gray-700">
          EBAUB English Language Club (EELC) is a student-led initiative dedicated to helping
          students improve their English communication skills, build confidence, and explore
          global opportunities.
        </p>

        {/* Mission Section */}
        <div className="mt-12 text-left text-gray-700">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-2">
            The mission of the EBAUB English Language Club is to provide students with
            opportunities to improve their English language skills, enhance communication and
            leadership abilities, and engage in activities that support personal, academic, and
            professional growth.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-8 text-left text-gray-700">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-2">
            The vision of the Club is to become a leading platform at EXIM Bank Agricultural
            University Bangladesh (EBAUB) for fostering confident, skilled, and culturally aware
            students who can effectively communicate in English and contribute positively to
            society.
          </p>
        </div>

        {/* Objectives Section */}
        <div className="mt-8 text-left text-gray-700">
          <h2 className="text-2xl font-semibold">Objectives</h2>
          <ul className="mt-2 list-decimal list-inside space-y-2">
            <li>
              Organize activities that enhance reading, writing, speaking, and listening skills in English.
            </li>
            <li>
              Encourage public speaking, debates, workshops, and leadership opportunities.
            </li>
            <li>
              Promote learning, creativity, and intellectual growth through competitions, seminars, and events.
            </li>
            <li>
              Foster a collaborative and supportive environment for members.
            </li>
            <li>
              Maintain professionalism, ethical behavior, and integrity in all Club activities.
            </li>
          </ul>
        </div>

        {/* Tagline */}
        <p className="mt-12 font-semibold text-center text-gray-800 italic">
          Tagline: "Let's speak, learn, and grow together"
        </p>
      </section>
    </main>
  );
}
