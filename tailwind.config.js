/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        primary: '#ecfdf5', // Set the default primary background color here
      },
      backgroundColor: {
        primary: '#ecfdf5', // Applies to the body background
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'], // Set 'Lato' as the primary font
        poppins: ['Poppins', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'), // Tailwind CSS animation plugin
    require('tailwind-scrollbar-hide'), // Tailwind CSS scrollbar hiding plugin
  ],
};
