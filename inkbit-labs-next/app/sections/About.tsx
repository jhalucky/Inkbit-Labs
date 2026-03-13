"use client";

import { useReveal } from "../components/useReveal";

const highlights = [
  {
    icon: "◈",
    title: "Premium Print Quality",
    desc: "Every job runs through strict quality control. We use CMYK + Pantone matching to ensure color accuracy across every print run.",
  },
  {
    icon: "◎",
    title: "Fast Turnaround",
    desc: "Standard 3–5 day production with express 24hr options available. Your deadlines are our deadlines.",
  },
  {
    icon: "◐",
    title: "Custom Print Solutions",
    desc: "No template required. We work directly with your team to bring unique print concepts to life with zero compromise.",
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-32 bg-parchment">
      <div className="max-w-[1200px] mx-auto px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Text */}
          <div data-reveal className="reveal">
            <p className="section-label">About Inkbit Labs</p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.15] text-ink mb-5">
              Where Craft Meets <em className="text-accent">Precision</em>
            </h2>
            <p className="text-gray-ink-600 text-[1rem] leading-[1.75] font-light mb-4">
              Inkbit Labs was born from a belief that print is more than ink on paper — it's a
              tactile statement of your brand's values. We obsess over every detail: paper weight,
              color fidelity, finish texture, and edge precision.
            </p>
            <p className="text-gray-ink-600 text-[1rem] leading-[1.75] font-light">
              Using modern offset and digital printing machines paired with premium substrates, we
              help startups, studios, and established brands leave a lasting physical impression.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                data-reveal
                className="reveal bg-gray-ink-100 border border-gray-ink-200 p-7 hover:border-accent hover:bg-parchment hover:shadow-[0_8px_32px_rgba(200,169,110,0.1)] transition-all duration-300"
              >
                <div className="text-accent text-2xl mb-3">{h.icon}</div>
                <h3 className="font-display text-[1.2rem] font-medium mb-2">{h.title}</h3>
                <p className="text-[0.9rem] text-gray-ink-600 leading-[1.65] font-light">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
