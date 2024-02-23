/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FBF5E2",
        common: "#FEFEFB",
        primary:"#E5B01A"
      },
      backgroundImage: {
        "sign-up" : "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('./src/assets/korean-food.png')",
        "sign-in" : "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('./src/assets/japanese-food.png')"
      }
    },
  },
  plugins: [],
}
