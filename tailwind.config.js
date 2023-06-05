/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // primary: "#EDEDE4",
      // secondary: "#F74906",
      // tertiary: "#554E44",
      primary: "#0D0D0D",
      secondary: "#EB5939",
      tertiary: "#554E44",
      additional: "#E5E0E0",
    },
    fontFamily: {
      NotoSerif: ["Noto Serif", "serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "nav-shadow": "20px 35px 60px -15px rgba(229,224,224)",
      },
    },
  },
  plugins: [],
};
