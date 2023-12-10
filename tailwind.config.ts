import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-wotfard)"],
        serif: ["var(--font-wotfard)"],
        accent: ["var(--font-lexend)"],
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: {
          DEFAULT: "#121212",
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#f0eeee",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
      },
      animation: {
        "scrolling-container": "scrolling-container 30000ms linear infinite",
      },
      keyframes: {
        "scrolling-container": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      typography: ({ theme }: any) => ({
        violet: {
          css: {
            "--tw-prose-counters": theme("colors.violet"),
            "--tw-prose-bullets": theme("colors.violet"),
            "--tw-prose-quote-borders": theme("colors.violet"),
            "--tw-prose-invert-links": theme("colors.violet"),
            "--tw-prose-invert-counters": theme("colors.violet"),
            "--tw-prose-invert-bullets": theme("colors.violet"),
            "--tw-prose-invert-quote-borders": theme("colors.violet"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
};
export default config;
