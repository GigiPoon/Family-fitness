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
        'sm': '700px',
        // => @media (max-width: 700px) { ... }

        'md': '960px',
        // => @media (max-width: 960px) { ... }
      },
    },
  },
  plugins: [],
}
