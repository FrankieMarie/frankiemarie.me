/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#ffa7bf',
        secondary: '#e75a79',
        mediumGrey: '#97938B',
        dark: '#434343',
        background: '#010509',
      },
      boxShadow: {
        hero: 'inset 75px 0px 75px -50px #010509, inset -75px 0px 75px -50px #010509',
      },
      screens: {
        content: '1920px',
        xs: '450px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sourceCode: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
