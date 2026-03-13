const items = [
  "Business Cards",
  "Product Tags",
  "Labels & Stickers",
  "Flyers & Brochures",
  "Packaging Prints",
  "Custom Solutions",
];

export default function Marquee() {
  const doubled = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="bg-ink text-parchment py-4 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-[0.75rem] font-light tracking-[0.15em] uppercase px-7">
              {item}
            </span>
            <span className="text-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
