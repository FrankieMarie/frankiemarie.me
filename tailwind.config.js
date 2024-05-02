/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f4a4db",
        secondary: "#bc4b98",
        tertiary: "#f7d2eb",
        background: "#1a1a1a",
        darkGrey: "#39494f",
      },
      screens: {
        content: "1920px",
        xs: "450px",
      },
      fontFamily: {
        dank: ["Dank", "monospace"],
      },
      fontSize: {
        10: ".625rem",
        12: ".75rem",
        14: ".875rem",
        16: "1rem",
        18: "1.125rem",
        22: "1.375rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
