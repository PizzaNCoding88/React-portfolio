/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#EDEDE4",
      secondary: "#F74906",
      tertiary: "#554E44",
      additional: "#FFF9F9",
    },
    fontFamily: {
      NotoSerif: ["Noto Serif", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
