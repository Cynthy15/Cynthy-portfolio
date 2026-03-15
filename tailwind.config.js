/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
        sans: ['"DM Sans"', "sans-serif"],
      },
      colors: {
        navy: {
          950: "#04080F",
          900: "#070D18",
          800: "#0C1525",
          700: "#111E30",
          600: "#172540",
          500: "#1E304F",
        },
        mint: {
          DEFAULT: "#3ECFA0",
          dim:     "#2AA87E",
          glow:    "#3ECFA044",
          bright:  "#7FFFD4",
        },
        sky: {
          DEFAULT: "#4AAFEB",
          dim:     "#3490C4",
          glow:    "#4AAFEB33",
        },
        lemon: {
          DEFAULT: "#F5E642",
          dim:     "#C4B830",
        },
        rose: {
          port: "#FF7EB3",
          dim:  "#D45E90",
        },
        grid: "rgba(62,207,160,0.04)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(62,207,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(62,207,160,0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(62,207,160,0.12) 0%, transparent 70%)",
        "card-shine":
          "linear-gradient(135deg, rgba(62,207,160,0.06) 0%, transparent 50%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        mint:    "0 0 20px rgba(62,207,160,0.25), 0 0 60px rgba(62,207,160,0.08)",
        sky:     "0 0 20px rgba(74,175,235,0.2)",
        card:    "0 1px 0 rgba(255,255,255,0.04) inset, 0 -1px 0 rgba(0,0,0,0.3) inset",
        "card-hover": "0 0 0 1px rgba(62,207,160,0.3), 0 4px 24px rgba(62,207,160,0.08)",
      },
      keyframes: {
        blink:   { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        fadeUp:  { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        scan:    { from: { backgroundPosition: "0 0" }, to: { backgroundPosition: "0 100%" } },
        pulse:   { "0%,100%": { opacity: "0.6" }, "50%": { opacity: "1" } },
        flicker: { "0%,100%": { opacity: "1" }, "92%": { opacity: "1" }, "93%": { opacity: "0.4" }, "95%": { opacity: "1" }, "96%": { opacity: "0.6" }, "98%": { opacity: "1" } },
        glow:    { "0%,100%": { boxShadow: "0 0 8px rgba(62,207,160,0.3)" }, "50%": { boxShadow: "0 0 20px rgba(62,207,160,0.6), 0 0 40px rgba(62,207,160,0.2)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        typeIn:  { from: { width: "0" }, to: { width: "100%" } },
      },
      animation: {
        blink:   "blink 1s step-end infinite",
        fadeUp:  "fadeUp 0.6s ease both",
        pulse:   "pulse 3s ease-in-out infinite",
        flicker: "flicker 8s linear infinite",
        glow:    "glow 2s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
