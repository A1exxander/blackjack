import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    colors: {
      darkgreen: '#0d4a2f',     // the green — Mainly just the table
      gold:{                      // Used for most things - Outlines, buttons, highlights, text etc
        DEFAULT: "#d4af37",
        light: "#f5d86e",
      }  ,
      darkgrey: '#2e2d2d',      // dark grey — chips, overlays
      offwhite:   '#ede6d2',    // off-white — body text
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;