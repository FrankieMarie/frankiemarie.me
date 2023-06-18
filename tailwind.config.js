/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#a200ff',
        mediumGrey: '#97938B',
        dark: '#434343',
        background: '#121212',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/herobg.png')",
      },
      fontFamily: {
        calligraffiti: ['Calligraffitti', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        sourceCode: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
