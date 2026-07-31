import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0b231e",       // Deep peacock green background tone
          green: "#113f36",      // Rich accent forest green
          emerald: "#1a4d43",    // Card & UI element background
          gold: "#c5a059",       // Primary metallic gold (Logo accurate)
          lightGold: "#dfc184",  // Soft gold highlights & borders
          darkGold: "#9a7b3c",   // Deep gold shadows
          cream: "#fbf9f5",      // Luxury paper background
          charcoal: "#181818",   // High contrast text
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(197, 160, 89, 0.15)",
        goldGlow: "0 0 25px rgba(197, 160, 89, 0.3)",
      },
      backgroundImage: {
        'gold-gradient': "linear-gradient(135deg, #dfc184 0%, #c5a059 50%, #9a7b3c 100%)",
        'card-gradient': "linear-gradient(180deg, rgba(17, 63, 54, 0.9) 0%, rgba(11, 35, 30, 0.95) 100%)",
      }
    },
  },
  plugins: [],
};

export default config;