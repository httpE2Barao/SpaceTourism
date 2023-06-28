/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Bellefair', 'serif'],
        secondary: ['Barlow Condensed', 'sans-serif']
      },
      colors: {
        escuro: "#0B0D17",
        claro: "#D0D6F9",
        branco: "#FFFFFF",
        cinza: "#979797",
        text: "#D0D6F9",
      },
      keyframes: {
        botao_hover: "",
      }
    },
  },
  plugins: [],
}

