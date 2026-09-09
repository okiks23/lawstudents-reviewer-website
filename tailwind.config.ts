import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F1E9D2",
        paperDark: "#E7DCBC",
        ink: "#1D2340",
        stamp: "#A32638",
        kraft: "#C9A66B",
        kraftDark: "#B08F55",
        charcoal: "#2B2B28",
        line: "#B9AE8D",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;