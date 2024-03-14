/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#ff9999',
        tertiary: '#ffd3d3',
        background: '#111111',
      },
      screens: {
        content: '1920px',
        xs: '450px',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        dank: ['Dank', 'monospace']
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
