"use client";

import { useEffect, useRef } from "react";

const reasons = [
  {
    num: "01",
    title: "High Quality Materials",
    desc: "We source only FSC-certified, premium substrates — from 16pt card stock to archival-grade photo paper.",
  },
  {
    num: "02",
    title: "Modern Printing Machines",
    desc: "Our facility runs HP Indigo and Komori offset presses with sub-millimeter registration accuracy.",
  },
  {
    num: "03",
    title: "Affordable Pricing",
    desc: "Transparent, tiered pricing with no hidden fees. Volume discounts available for all product categories.",
  },
  {
    num: "04",
    title: "Reliable Delivery",
    desc: "Real-time order tracking, nationwide courier network, and guaranteed on-time delivery — or we reprint free.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".why-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = [...items].indexOf(entry.target as HTMLElement);
            (entry.target as HTMLElement).style.transitionDelay = `${idx * 100}ms`;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((i) => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why" className="py-32 bg-parchment">
      <div className="max-w-[1200px] mx-auto px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left */}
          <div>
            <p className="section-label">Why Inkbit Labs</p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.15] text-ink mb-5">
              The Inkbit <em className="text-accent">Difference</em>
            </h2>
            <p className="text-gray-ink-600 text-[1rem] leading-[1.75] font-light mb-8">
              We've built our reputation on consistency, quality, and genuine partnerships
              with the brands we serve. Here's what that looks like in practice.
            </p>
            <button onClick={scrollToContact} className="btn btn-primary">
              Work With Us
            </button>
          </div>

          {/* Right — numbered list */}
          <div>
            {/* First item has top border */}
            <div className="border-t border-gray-ink-200">
              {reasons.map((r) => (
                <div key={r.num} className="why-item group">
                  <span className="font-display text-[2rem] font-light text-gray-ink-200 flex-shrink-0 leading-none group-hover:text-accent transition-colors duration-300">
                    {r.num}
                  </span>
                  <div>
                    <h4 className="font-display text-[1.15rem] font-medium mb-1.5">
                      {r.title}
                    </h4>
                    <p className="text-[0.9rem] text-gray-ink-600 leading-[1.65] font-light">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
