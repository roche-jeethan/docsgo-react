/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        dark: '#000',
        light: '#fff',
      },
      backgroundImage: theme => ({
        'light-theme': "url('/src/assets/light-theme.svg')",
        'dark-theme': "url('/src/assets/dark-theme.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

