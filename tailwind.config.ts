import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base dark palette
        "il-bg":       "#111111",
        "il-card":     "#181818",
        "il-text":     "#f7f3e8",
        "il-muted":    "#b8b3a7",
        "il-border":   "#2a2a2a",
        // Pistakkio accent palette
        "il-lime":     "#b8dc16",
        "il-magenta":  "#8f0060",
        "il-violet":   "#9b10eb",
        "il-yellow":   "#ffc106",
        "il-acid":     "#f2e70c",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lora:    ["Lora", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#f7f3e8",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
