/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

  },
 daisyui: {
    themes: ["forest","dark", "light"],
    },

  plugins: [
    require('daisyui'),
  ],
}