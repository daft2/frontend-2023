/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        nhpSoftOrange: "hsl(35, 77%, 62%)",
        nhpSoftRed: "hsl(5, 85%, 63%)",
        nhpOffWhite: "hsl(36, 100%, 99%)",
        nhpGrayishBlue: "hsl(233, 8%, 79%)",
        nhpDarkGrayishBlue: "hsl(236, 13%, 42%)",
        nhpVeryDarkBlue: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
