import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    animation: {
      "ping-large": "ping-laarger 1s ease-in-out infinite",
      "move-left": "move-left 1s linear infinite",
      "move-right": "move-right 1s linear infinite",

    },
    keyframes: {
      "ping-laarger": {
        "75%, 100%": {
          transform: "scale(3)",
          opacity: "0",
        },
      },
      "move-left": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
      "move-right": {
        "0%": { transform: "translateX(-50%)" },
        "100%": { transform: "translateX(0%)" },
      },
    },
  },
  plugins: [],
} satisfies Config;
