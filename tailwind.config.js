/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        pulse_finite: "pulse 1s ease-in-out 1s",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        primary: "rgb(14 116 144)",
        primaryBg: "rgb(236 254 255)",
        primaryCard: "rgb(165 243 252)",
        error: "#450a0a",
        success: "#14532d",
        lineColor: "rgba(252, 185, 94, 1)",
        greyOut: "rgba(146, 144, 142, 1)",
        background: "rgba(250, 250, 250, 1)",
        white: "rgba(255, 255, 255, 1)",
        title: "rgba(56, 33, 12, 1)",
        loading: "rgba(150, 150, 150, 0.5)",
      },
    },
  },
  plugins: [],
};
