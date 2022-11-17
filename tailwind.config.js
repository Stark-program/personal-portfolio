/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Baskerville: ["Libre Baskerville", "serif"],
        WorkSans: ["Work Sans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Calistoga: ["Calistoga", "sans-serif"],
        Candal: ["Candal", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
