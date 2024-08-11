/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#fcbf49',
        darkest: '#212529',
        darker: '#343a40',
        dark: '#495057',
        medium: '#6c757d',
        light: '#adb5bd',
        lighter: '#ced4da',
        lightest: '#dee2e6'
      },
      screens: {
        nav: '1920px',
        content: '1366px',
        xs: '450px'
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
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
};
