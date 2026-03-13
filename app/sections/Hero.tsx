"use client";

const floatingCards = [
  { label: "Business Cards", delay: "float-0", pos: "top-[15%] left-[5%]" },
  { label: "Packaging", delay: "float-1", pos: "top-[44%] right-[2%]" },
  { label: "Labels & Tags", delay: "float-2", pos: "bottom-[22%] left-[15%]" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-svh flex items-center overflow-hidden"
      style={{ paddingTop: "calc(var(--nav-h) + 4rem)", paddingBottom: "6rem" }}
    >
      <div className="max-w-[1200px] mx-auto px-8 w-full flex items-center relative">
        {/* Background text */}
        <div
          className="hero-bg-text absolute right-[-2%] top-1/2 -translate-y-1/2 select-none pointer-events-none"
          aria-hidden
        >
          PRINT
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[600px]">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-accent" />
            <span className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-accent">
              Est. 2024 · Premium Print Studio
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-normal leading-[1.08] tracking-[-0.01em] text-ink mb-6">
            Print That
            <br />
            <em className="text-accent">Speaks for</em>
            <br />
            Your Brand.
          </h1>

          <p className="text-[1.05rem] text-gray-ink-600 max-w-[460px] mb-10 leading-[1.7] font-light">
            From business cards to full packaging solutions — we craft every print with
            precision, premium materials, and your brand's identity at the forefront.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo("services")} className="btn btn-primary">
              Explore Services
            </button>
            <button onClick={() => scrollTo("contact")} className="btn btn-outline">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Floating cards — visible on large screens */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[340px] h-[340px]">
          {/* Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-gray-ink-200 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-dashed border-gray-ink-200 rounded-full" />

          {floatingCards.map((c) => (
            <div
              key={c.label}
              className={`absolute ${c.pos} ${c.delay} bg-parchment border border-gray-ink-200 px-4 py-3 flex items-center gap-2.5 text-[0.75rem] font-medium tracking-[0.06em] uppercase shadow-md`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {c.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-12 left-8 hidden sm:flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase text-gray-ink-400">
        <span>Scroll</span>
        <div className="relative w-10 h-px bg-gray-ink-400 overflow-hidden scroll-pulse" />
      </div>
    </section>
  );
}
