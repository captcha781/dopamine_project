/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1920px"
    },
    extend: {
      fontFamily: {
        Lato: ['Lato',"sans-serif"]
      },
      colors: {

      },
      fontSize:{
        ultra: "10em"
      }
    },
  },
  plugins: [],
};