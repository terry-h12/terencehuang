/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        global: ["Roboto Mono", "Vazirmatn"],
      },
      colors: {
        "dracula-white": "#f8f8f2",
        "dracula-black": "#282a36",
        "dracula-purple": "#bd93f9",
        "dracula-pink": "#ff79c6",
        "dracula-orange": "#ffb86c",
        "dracula-green": "#50fa7b",
        "dracula-cyan": "#8be9fd",
      },
      margin: {
        "40%": "40%",
      },
    },
  },
  plugins: [],
};
