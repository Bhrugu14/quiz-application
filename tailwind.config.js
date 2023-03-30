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
        primary: "rgba(245, 119, 2, 1)",
        primaryBg: "rgba(254, 245, 232, 1)",
        primaryCard: "rgba(253, 227, 204, 1)",
        error: "rgba(200,0,0,1)",
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
