/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        basewhite: "#ffffff",
        baseorange: "#ffb858",
        basegrey0: "#191e1f",
        basegrey1: "#232828",
      },
    },
  },
  plugins: [],
};
