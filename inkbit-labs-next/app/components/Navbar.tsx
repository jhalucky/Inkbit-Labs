"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-xl border-b border-gray-ink-200"
          : "bg-parchment/90 backdrop-blur-sm border-b border-transparent"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center gap-8">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="font-display text-2xl font-medium text-ink flex items-center gap-1.5 tracking-wide flex-shrink-0"
        >
          <span className="text-accent text-base">✦</span>
          Inkbit Labs
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 ml-auto list-none">
          {navLinks.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => scrollTo(l.href)}
                className="nav-link text-[0.8rem] font-normal tracking-[0.08em] uppercase text-gray-ink-600 hover:text-ink transition-colors duration-300"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          className="hidden md:block text-[0.75rem] font-medium tracking-widest uppercase px-5 py-2.5 bg-ink text-parchment border border-ink rounded-[2px] transition-all duration-300 hover:bg-accent hover:border-accent hover:text-ink flex-shrink-0"
        >
          Get a Quote
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className={`md:hidden ml-auto flex flex-col gap-[5px] p-1 ${menuOpen ? "hamburger-open" : ""}`}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-parchment border-b border-gray-ink-200 px-8 py-6">
          <ul className="list-none flex flex-col gap-5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="text-[0.85rem] tracking-[0.08em] uppercase text-gray-ink-600 hover:text-ink transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo("#contact")}
                className="text-[0.85rem] tracking-[0.08em] uppercase text-accent font-medium"
              >
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
