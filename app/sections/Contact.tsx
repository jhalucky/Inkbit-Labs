"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface StatusState {
  type: "success" | "error" | null;
  message: string;
}

const contactInfo = [
  { label: "inkbitlabs@gmail.com" },
  { label: "+91-8076392558" },
  { label: "Mon–Fri, 9am – 6pm EST" },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<StatusState>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json()) as { success: boolean; message: string };

      if (res.ok && data.success) {
        setStatus({ type: "success", message: "✦ Message sent! We'll be in touch within 24 hours." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message ?? "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Unable to connect. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-ink">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.15] text-parchment mb-5">
              Let's Create{" "}
              <em className="text-accent">Something</em>{" "}
              Remarkable
            </h2>
            <p className="text-gray-ink-400 text-[1rem] leading-[1.7] font-light mb-10">
              Tell us about your project. Whether it's a reorder, a new idea, or a quote
              request — our team responds within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-[0.9rem] text-gray-ink-400">
                  <span className="text-accent text-[0.65rem]">◉</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-gray-ink-400">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="form-input"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-gray-ink-400">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="form-input"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-gray-ink-400">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your project or ask us anything..."
                rows={5}
                className="form-input resize-y"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn w-full text-center bg-accent border-accent text-ink hover:bg-parchment hover:border-parchment disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}
            {status.type && (
              <div
                className={`text-[0.85rem] px-4 py-3 rounded-[2px] border ${
                  status.type === "success"
                    ? "bg-accent/10 border-accent text-accent"
                    : "bg-red-500/10 border-red-500/40 text-red-400"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
