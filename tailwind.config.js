/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/js/**/*.js",],
  theme: {
    extend: {
      colors:{
        'color-orange':'#FF5A3C',
      },
      fontFamily: {
        headfont: ['__Nunito_Sans_601d73', '__Nunito_Sans_Fallback_601d73'],
        bodyfont:['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}

