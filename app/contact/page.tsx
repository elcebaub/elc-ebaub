"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
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
            <a
              href="tel:+8801859215610"
              className="text-blue-600 hover:underline"
            >
              01859215610
            </a>
          </p>
          <p>
            Address: 69-69/1, Boro Indara Moor, Chapainawabganj, Postcode-6300
          </p>
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
          <div className="mt-8 rounded-xl bg-green-100 p-6 text-center text-green-800">
            Thank you for contacting us! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                name="reply_to"
                required
                placeholder="example@email.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {error && (
              <p className="text-center text-sm text-red-600">{error}</p>
            )}
          </form>
        )}
      </section>
    </main>
  );
}
