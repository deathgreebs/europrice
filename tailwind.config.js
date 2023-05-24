/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'html': '#3b82f680',
      },
      fontFamily: {
        'pt-sans-caption': ['PT Sans Caption', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'proxima-nova': ['Proxima Nova', 'sans-serif'],
        'gotham': ['Gotham', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

