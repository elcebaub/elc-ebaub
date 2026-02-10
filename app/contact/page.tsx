 "use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Currently offline: later you can connect this to email, API, or Google Form
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <p className="mt-2 text-center text-gray-700">
          Reach out to EELC for any queries or information.
        </p>

        {/* Contact Info */}
        <div className="mt-8 space-y-4 text-center text-gray-800">
          <p>
            Email:{" "}
            <a
              href="mailto:elc.ebaub@gmail.com"
              className="text-blue-600 hover:underline"
            >
              elc.ebaub@gmail.com
            </a>
          </p>
          <p>
            Phone (Public Relations Officer):{" "}
            <a href="tel:+8801859215610" className="text-blue-600 hover:underline">
              01859215610
            </a>
          </p>
          <p>Address: 69-69/1, Boro Indara Moor, Chapainawabganj, Postcode-6300</p>
          <p>
            Follow us:{" "}
            <a
              href="https://www.facebook.com/elc.ebaub"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com/elc-ebaub"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="mt-8 text-center p-6 bg-green-100 text-green-800 rounded-xl">
            Thank you for contacting us! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Name */}
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

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message *</label>
              <textarea
                required
                placeholder="Write your message here..."
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
