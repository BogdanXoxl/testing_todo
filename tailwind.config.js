// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.pink["400"],
        "primary-darken": colors.pink["500"],
        secondary: colors.gray["900"],
        "secondary-light": {
          min: colors.gray["400"],
          max: colors.gray["500"],
        },
        neutral: colors.gray["800"],
      },
    },
  },
  plugins: [],
};
