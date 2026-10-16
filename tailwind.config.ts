import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: { foreground: "hsl(var(--muted-foreground))" },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Paleta de DBO Infinity (dbo-smart-legacy-web) para su bloque
        dbo: {
          night: "oklch(0.19 0.045 262 / <alpha-value>)",
          gi: "oklch(0.72 0.19 50 / <alpha-value>)",
          ball: "oklch(0.85 0.155 82 / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // Escala tipográfica de INSECAP (DESIGN.md)
      fontSize: {
        display: ["clamp(2.25rem, 7vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        heading: ["clamp(1.75rem, 4vw, 2.5rem)", { lineHeight: "1.2" }],
        mega: ["clamp(3rem, 11vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.045em" }],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
