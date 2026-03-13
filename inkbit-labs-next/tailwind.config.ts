import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0d0d0d",
        parchment: "#fafaf8",
        "gray-ink": {
          100: "#f4f4f0",
          200: "#e8e8e2",
          400: "#b0afa8",
          600: "#6b6a62",
        },
        accent: {
          DEFAULT: "#c8a96e",
          dark: "#a8884e",
          pale: "#f5ede0",
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "float-0": "floatCard 4s ease-in-out infinite 0s",
        "float-1": "floatCard 4s ease-in-out infinite 1.3s",
        "float-2": "floatCard 4s ease-in-out infinite 2.6s",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatCard: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scrollPulse: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
