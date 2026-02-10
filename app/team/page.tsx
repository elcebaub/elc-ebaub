import Image from "next/image";
import { teamMembers, Member } from "../../data/team";

export default function TeamPage() {
  const categories = ["Faculty Advisor", "Executive", "Founding Member"] as const;

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-4 py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center">Our Team</h1>
        <p className="mt-2 text-center text-gray-700">
          Meet our Faculty Advisors, Executives, and Founding Members
        </p>

        {categories.map((category) => {
          const members = teamMembers.filter((m) => m.category === category);
          return (
            <div key={category} className="mt-12">
              <h2 className="text-2xl font-semibold">{category}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {members.map((member: Member) => (
                  <div
                    key={member.id}
                    className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm text-center transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {/* Member Photo */}
                    <div className="mx-auto h-32 w-32 relative">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>

                    {/* Member Name and Role */}
                    <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                    <p className="mt-1 text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
