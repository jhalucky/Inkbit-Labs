"use client";
import Logo from "./Logo";

const links = ["Home", "About", "Services", "Contact"];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink border-t border-white/5 pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-wrap justify-between items-start gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display text-[1.4rem] font-medium text-parchment flex items-center gap-2">
              <Logo className="w-6 h-6 text-accent rounded-full" size={34} />
              Inkbit Labs
            </div>
            <p className="text-[0.85rem] text-gray-ink-600 font-light mt-1.5">
              Premium printing for brands that mean business.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 flex-wrap">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-[0.75rem] tracking-[0.1em] uppercase text-gray-ink-600 hover:text-accent transition-colors duration-300"
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-[0.75rem] text-gray-ink-600">
          <span>© {new Date().getFullYear()} Inkbit Labs. All rights reserved.</span>
          <span>Crafted with precision ✦</span>
        </div>
      </div>
    </footer>
  );
}
