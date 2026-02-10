"use client"; // Required for form interactivity

import { useState } from "react";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  const faculties = [
    "Faculty of Agriculture",
    "Faculty of Agricultural Economics and Rural Development",
    "Faculty of Business Administration",
    "Faculty of Law",
    "Faculty of Engineering",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Future option: send form data to email or Google Form
    // Example: create a fetch POST request to an API or Google Form endpoint
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-2xl px-4 py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center">Membership Request Form</h1>
        <p className="mt-2 text-center text-gray-700">
          Fill out the form below to request membership in EELC. We will contact you offline
          for further procedure.
        </p>

        {/* Success message */}
        {submitted ? (
          <div className="mt-8 text-center p-6 bg-green-100 text-green-800 rounded-xl">
            Thank you for submitting your request! Our team will reach out to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email *</label>
              <input
                type="email"
                required
                placeholder="example@email.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+880 1XXXXXXXXX"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Faculty */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Faculty *</label>
              <select
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your Faculty
                </option>
                {faculties.map((faculty, index) => (
                  <option key={index} value={faculty}>
                    {faculty}
                  </option>
                ))}
              </select>
            </div>

            {/* Batch */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Batch *</label>
              <input
                type="text"
                required
                placeholder="e.g., 24"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Semester */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Semester *</label>
              <input
                type="text"
                required
                placeholder="e.g., Spring 2026"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Reason to join */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Why do you want to join?</label>
              <textarea
                placeholder="Optional"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
