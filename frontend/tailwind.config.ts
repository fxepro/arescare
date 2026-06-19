import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

/**
 * TOKEN LAYER — the single source of truth for raw design values.
 * Each hex / size appears exactly once here. Components compose these tokens;
 * pages reference token *names*, never raw values. See docs/design-system.md.
 *
 * Brand palette (friendly · playful · comforting):
 *   blush  #FFF6FB · pink #FFD6E8 · sky #7FD6FF · mint #6FE3B4 · slate #2B4A66
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1350px" },
    },
    extend: {
      colors: {
        // brand — derived from sky blue #7FD6FF; 300 is the source pastel,
        // 600+ are deepened so white-on-brand passes contrast for CTAs/links.
        brand: {
          50: "#ECF7FE",
          100: "#CFEBFC",
          200: "#A6DBFA",
          300: "#7FD6FF",
          400: "#46BBEE",
          500: "#1E9FDC",
          600: "#0B7FB8",
          700: "#0A6796",
          800: "#0B5276",
          900: "#0C3F5A",
          950: "#082A3D",
        },
        // accent — derived from mint #6FE3B4; secondary accent / success.
        accent: {
          50: "#E7FBF2",
          100: "#C6F4E1",
          200: "#9DEACB",
          300: "#6FE3B4",
          400: "#3FD09A",
          500: "#21B884",
          600: "#169A6E",
          700: "#137E5B",
          800: "#0F5F47",
          900: "#0E4D3A",
          950: "#08312A",
        },
        // navy — deep slate #2B4A66; dark sections, footer, banner gradients.
        navy: {
          700: "#34597A",
          800: "#2B4A66",
          900: "#213A50",
          950: "#162838",
        },
        // blush — soft pink tints from #FFD6E8 over the #FFF6FB page background.
        blush: {
          50: "#FFF6FB",
          100: "#FFEAF3",
          200: "#FFD6E8",
          300: "#FFB8D4",
          500: "#F178A6",
        },
        // sand — cool light tints for alternating section bands.
        sand: {
          50: "#F4FBFE",
          100: "#EAF6FC",
          200: "#DCEFF8",
        },
        // ink — neutral slate scale for text, borders, neutral surfaces.
        ink: {
          50: "#F4F6F8",
          100: "#E9EDF1",
          200: "#D7DEE6",
          300: "#B9C4CF",
          400: "#8A99A8",
          500: "#647688",
          600: "#4B5C6B",
          700: "#374653",
          800: "#25313B",
          900: "#161F27",
          950: "#0C131A",
        },
        cream: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      // Type scale — 16px hard floor. text-sm / text-xs collapse to 16px so
      // code can never drop below the floor. Change a size here, once.
      fontSize: {
        xs: ["1rem", { lineHeight: "1.5rem" }],
        sm: ["1rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.5rem", { lineHeight: "1.4" }],
        "2xl": ["1.75rem", { lineHeight: "1.3" }],
        "3xl": ["2rem", { lineHeight: "1.2" }],
        "4xl": ["2.25rem", { lineHeight: "1.15" }],
        "5xl": ["3rem", { lineHeight: "1.08" }],
        "6xl": ["3.375rem", { lineHeight: "1.05" }],
        "7xl": ["3.75rem", { lineHeight: "1.02" }],
      },
      boxShadow: {
        soft: "0 2px 12px rgba(43, 74, 102, 0.08)",
        lift: "0 18px 50px rgba(43, 74, 102, 0.16)",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [typography],
};

export default config;
