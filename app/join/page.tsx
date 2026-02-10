 "use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    faculty: "",
    batch: "",
    semester: "",
    reason: "",
  });

  const faculties = [
    "Faculty of Agriculture",
    "Faculty of Agricultural Economics and Rural Development",
    "Faculty of Business Administration",
    "Faculty of Law",
    "Faculty of Engineering",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          faculty: formData.faculty,
          batch: formData.batch,
          semester: formData.semester,
          reason: formData.reason || "N/A",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="text-4xl font-bold text-center">Membership Request Form</h1>
        <p className="mt-2 text-center text-gray-700">
          Fill out the form below to request membership in EELC. We will contact you offline
          for further procedure.
        </p>

        {submitted ? (
          <div className="mt-8 text-center p-6 bg-green-100 text-green-800 rounded-xl">
            Thank you for submitting your request! Our team will reach out to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Full Name */}
            <input
              name="full_name"
              required
              placeholder="Your full name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />

            {/* Phone */}
            <input
              name="phone"
              required
              placeholder="+880 1XXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />

            {/* Faculty */}
            <select
              name="faculty"
              required
              value={formData.faculty}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            >
              <option value="">Select your Faculty</option>
              {faculties.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>

            {/* Batch */}
            <input
              name="batch"
              required
              placeholder="e.g., 24"
              value={formData.batch}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />

            {/* Semester */}
            <input
              name="semester"
              required
              placeholder="e.g., Spring 2026"
              value={formData.semester}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />

            {/* Reason */}
            <textarea
              name="reason"
              placeholder="Optional"
              rows={4}
              value={formData.reason}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
 