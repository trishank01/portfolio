/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

    theme: {
      extend: {
        colors: {
          "dark-green": "#2D565A",
          "light-white": "rgba(255 , 255 , 255 , 0.19)",
          'color-body': '#b6cbce',
          'color-heading':'#eef3db',
          'color-base':'#033f47',
          'color-base2':'#022a30',
          'color-brand':'#e0f780',
          'color-brand2':'#deff58'
        },
        width : {

        }
      },
    },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}