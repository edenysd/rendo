const { mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
      },
    },
  },
  plugins: [],
};
