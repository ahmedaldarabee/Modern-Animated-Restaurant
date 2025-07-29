/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        lightYellow: "#f6d876",
        wight2: "#fffbf2",
        darkGreen: "#05ab54",
        dark: "#1e1e1e"
      },

      fontFamily: {
        sans: ["Poppins","sans-serif"],
        league: ["League Gothic","sans-serif"],
      },

      container: {
        center: true,
        padding: {
          default: "1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        }
      }
    },
    
  },
  plugins: [],
}