/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050F1F", // deepest background / footer
          900: "#081B33",
          800: "#0B2A4D",
          700: "#0E3B69",
          600: "#124A85",
        },
        gold: {
          200: "#F9DA8B",
          300: "#F5C451",
          400: "#F0B429",
          500: "#DDA015",
          600: "#B8860B",
          700: "#8C6508",
        },
        accent: {
          purple: "#8B6CFF",
        },
      },
      fontFamily: {
        lucidity: ["Lucidity", "serif"],
        harlow: ["Harlow Solid", "cursive"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(160deg, #050F1F 0%, #0B2A4D 45%, #124A85 100%)",
        "gold-gradient": "linear-gradient(135deg, #F5C451 0%, #DDA015 55%, #B8860B 100%)",
        "gold-gradient-vertical": "linear-gradient(180deg, #F5C451 0%, #B8860B 100%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(245,196,81,0.5), 0 8px 24px -6px rgba(184,134,11,0.45)",
        "glow-purple": "0 0 0 1px rgba(139,108,255,0.6), 0 0 20px rgba(139,108,255,0.35)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
    },
  },
  plugins: [],
};
