/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: { min: "320px", max: "640px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
