/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        barlowSemiCondensed: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        // News Home Page Colors
        nhpSoftOrange: "hsl(35, 77%, 62%)",
        nhpSoftRed: "hsl(5, 85%, 63%)",
        nhpOffWhite: "hsl(36, 100%, 99%)",
        nhpGrayishBlue: "hsl(233, 8%, 79%)",
        nhpDarkGrayishBlue: "hsl(236, 13%, 42%)",
        nhpVeryDarkBlue: "hsl(240, 100%, 5%)",
        // Rock Paper Scissors Colors
        rpsScissorsLight: "hsl(40, 84%, 53%)",
        rpsScissorsDark: "hsl(39, 89%, 49%)",
        rpsPaperLight: "hsl(230, 89%, 65%)",
        rpsPaperDark: "hsl(230, 89%, 62%)",
        rpsRockLight: "hsl(349, 70%, 56%)",
        rpsRockDark: "hsl(349, 71%, 52%)",
        rpsLizardLight: "hsl(261, 72%, 63%)",
        rpsLizardDark: "hsl(261, 73%, 60%)",
        rpsCyanLight: "hsl(189, 58%, 57%)",
        rpsCyanDark: "hsl(189, 59%, 53%)",
        rpsBackgroundLight: "hsl(214, 47%, 23%)",
        rpsBackgroundDark: "hsl(237, 49%, 15%)",
        rpsDark: "hsl(229, 25%, 31%)",
        rpsScore: "hsl(229, 64%, 46%)",
        rpsHeader: "hsl(217, 16%, 45%)",
      },
    },
  },
  plugins: [],
};
