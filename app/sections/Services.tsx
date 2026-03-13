"use client";

import { useReveal } from "../components/useReveal";

const services = [
  {
    icon: "▣",
    title: "Business Cards",
    desc: "Matte, gloss, soft-touch, foil — premium card stock that makes your first impression unforgettable.",
  },
  {
    icon: "◫",
    title: "Product Tags",
    desc: "Hang tags, swing tags, and price labels crafted with clean typography and durable materials for retail use.",
  },
  {
    icon: "⬡",
    title: "Labels & Stickers",
    desc: "Custom die-cut stickers, waterproof labels, and vinyl adhesives for packaging, branding, and marketing.",
  },
  {
    icon: "▤",
    title: "Flyers & Brochures",
    desc: "Tri-fold, bi-fold, or flat — high-impact marketing print that communicates your offer with clarity.",
  },
  {
    icon: "⬢",
    title: "Packaging Prints",
    desc: "Boxes, sleeves, pouches, and wraps — structural and surface printing for product packaging that sells.",
  },
  {
    icon: "✦",
    title: "Custom Print Orders",
    desc: "Have something unique in mind? We'll scope, prototype, and execute entirely bespoke print projects.",
    cta: true,
  },
];

export default function Services() {
  const ref = useReveal();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-32 bg-gray-ink-100">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">What We Print</p>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.15] text-ink mb-4">
            Our <em className="text-accent">Services</em>
          </h2>
          <p className="text-gray-ink-600 max-w-[500px] mx-auto font-light">
            Everything your brand needs, printed to perfection.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-ink-200 divide-y divide-x divide-gray-ink-200"
          style={{ gap: 0 }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              data-reveal
              className={`reveal service-card relative p-10 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:z-10 ${
                s.cta ? "bg-ink" : "bg-parchment"
              }`}
            >
              <span
                className={`block text-[1.8rem] mb-5 ${
                  s.cta ? "text-accent" : "text-accent"
                }`}
              >
                {s.icon}
              </span>
              <h3
                className={`font-display text-[1.3rem] font-medium mb-3 ${
                  s.cta ? "text-parchment" : "text-ink"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`text-[0.9rem] leading-[1.65] font-light ${
                  s.cta ? "text-gray-ink-400" : "text-gray-ink-600"
                }`}
              >
                {s.desc}
              </p>
              {s.cta && (
                <button
                  onClick={scrollToContact}
                  className="mt-4 text-[0.8rem] font-medium tracking-[0.06em] text-accent hover:tracking-[0.12em] transition-all duration-300"
                >
                  Start a conversation →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
