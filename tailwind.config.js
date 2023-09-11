/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'heebo': ["Heebo", "Padauk"],
        'nunito': ["Nunito", "Padauk"],
      },
      colors: {
        'primary': "#0bbbcc",
        'primary-hover': "#2BCAE0",
        'secondary': "#F0FBFC",
        'text-color': "#181D38",
      }
    },
  },
  plugins: [],
}

