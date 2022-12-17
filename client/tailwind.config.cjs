/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "global": ["Roboto Mono", "Vazirmatn"],
      },
      colors: {
        "dracula-white": "#f8f8f2",
        "dracula-black" : "#282a36",
      },
    },
  },
  plugins: [],
}
