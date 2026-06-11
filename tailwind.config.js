/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-hero",
    "bg-game",
    "bg-red-gradient",
    "bg-red",
    "bg-promotion",
    "bg-card",
    "bg-cards",
    "bg-card-img",
    "bg-choose",
    "bg-payment",
    "bg-payment-card",
    "border-gold-400",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        red: {
          100: "#D93A52",
          500: "#D00927",
          600: "#661313",
          900: "#34020A",
        },
        gold: {
          100: "#F5EDCB",
          200: "#43320F",
          300: "#EEC15924",
          400: "#FFE09A",
          500: "#524635",
        },
        gray: {
          100: "#F5F3F0",
          200: "#D1D5DB",
          300: "#C5CBD7",
          400: "#B1BCCE",
          800: "#DBD9DB",
          900: "#9CA3AF",
        },
      },
      backgroundImage: {
        hero: "url('/images/background/hero.webp')",
        game: "url('/images/background/games.webp')",
        promotion: "url('/images/background/promotion.webp')",
        card: "url('/images/background/card-bg.webp')",
        cards: "url('/images/background/cards-bg.webp')",
        choose: "url('/images/background/choose.webp')",
        "payment-card": "url('/images/background/payment-card.webp')",
        "card-img": "url('/images/background/card.webp')",
        "gradient-white-red":
          "linear-gradient(90deg, #FFFFFF 0%, #D00927 100%)",
        "gradient-white": "linear-gradient(90deg, #F5EDCB 34%, #43320F 100%)",
        "gradient-white-highlight":
          "linear-gradient(90deg, #1E2C35 0%, #FEFEFE 52%, #000000 100%)",
        "gradient-grey":
          "linear-gradient(90deg, rgba(21, 24, 30, 0.7) 0%, rgba(21, 24, 30, 0) 100%)",
        "red-gradient":
          "linear-gradient(90deg,#D00927 0%, #FFFFFF 48%, #D00927 100%)",
      },
    },
  },
  plugins: [],
};
