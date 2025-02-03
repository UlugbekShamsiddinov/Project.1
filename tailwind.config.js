/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#000000', // Asosiy qora rang
        lightBackground: '#FFFFFF', // Light mode fon rangi
      }
    },
  },
  plugins: [],
  darkMode: "class"

}