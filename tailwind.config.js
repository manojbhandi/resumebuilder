/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#404653",
        textSecondary: "#404653",
        mutedRed: "#EB5757",
        textHeading: "#000112",
        whiteSmoke:'#F9F9F9',
        safronMango:'#F9C068'
      },
      boxShadow: {
        "custom-1": "0px 0px 1px 0px #21252914",
        "custom-2": "0px 2px 2px 0px #2125290F",
      },
    },
  },
  plugins: [],
};
