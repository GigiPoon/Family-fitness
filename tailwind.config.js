/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './index.html'],
  theme: {
    extend: {
      fontFamily: {
        gothic: ["Gothic A1", "sans-serif"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'sandy': '#F0E9D8',
        'redish': '#9B3D3D',
      },
      screens: {
        '2xl': { 'max': '1535px' }, // => @media (max-width: 1535px) { ... }
        'xl': { 'max': '1279px' }, // => @media (max-width: 1279px) { ... }
        'lg': { 'max': '1023px' }, // => @media (max-width: 1023px) { ... }
        'md': { 'max': '767px' }, // => @media (max-width: 767px) { ... }
        'sm': { 'max': '639px' }, // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}
