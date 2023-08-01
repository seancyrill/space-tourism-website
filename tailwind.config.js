/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        satelite: "satelite 10s linear infinite",
        pageLoad: "pageLoad 3s linear",
      },
      keyframes: {
        satelite: {
          "0%, 100%": {
            transform: "translateY(5%) rotate(5deg)",
            filter: "brightness(110%)",
          },
          "50%": {
            transform: "translateY(-5%) rotate(-5deg)",
            filter: "brightness(90%)",
          },
        },
        pageLoad: {
          "0%": {
            filter: "brightness(0%)",
          },
          "75%": {
            filter: "brightness(120%)",
          },
          "100%": {
            filter: "brightness(100%)",
          },
        },
      },
      fontFamily: {
        emphasis: ["Bellefair"],
        body: ["Barlow Condensed"],
      },
    },
  },
  plugins: [],
};
