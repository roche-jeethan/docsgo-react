/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        dark: '#1a202c',
        light: '#f7fafc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

