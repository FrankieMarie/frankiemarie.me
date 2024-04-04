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
        darkGrey: '#39494f'
      },
      screens: {
        content: '1920px',
        xs: '450px',
      },
      fontFamily: {
        dank: ['Dank', 'monospace']
      },
      fontSize: {
        10: '.625rem',
        12: '.75rem',
        14: '.875rem',
        16: '1rem',
        18: '1.125rem',
        22: '1.375rem',
        24: '1.5rem',
        28: '1.75rem',
        32: '2rem'
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
