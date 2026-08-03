import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dropShadow: {
          '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        },
        // Paleta derivada da identidade Gordinho Lanches
        ember: {
          DEFAULT: "#C41E1E", // vermelho brasa — cor de assinatura
          dark: "#7A0F0F",
          light: "#E23F3F",
        },
        char: {
          DEFAULT: "#0B0A08", // preto carvão — fundo base
          soft: "#141210",
          card: "#1B1815",
        },
        gold: {
          DEFAULT: "#E8A93A", // amarelo mostarda/dourado — queijo, brilho
          light: "#F4C766",
        },
        cream: "#F3ECD9", // branco quente — texto sobre fundo escuro
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "radial-ember":
          "radial-gradient(circle at 50% 30%, rgba(196,30,30,0.35), transparent 60%)",
        "grain": "url('/images/grain.png')",
      },
      boxShadow: {
        glow: "0 0 60px rgba(232,169,58,0.25)",
        "glow-red": "0 0 80px rgba(196,30,30,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1.5deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        steam: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.6" },
          "100%": { transform: "translateY(-120px) scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        steam: "steam 3.5s ease-in infinite",
      },
    },
  },
  plugins: [],
};
export default config;
