/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      NotoSerif: ["Noto Serif", "serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "nav-shadow": "20px 35px 60px -15px rgba(229,224,224)",
      },
      colors: {
        primary: "#0D0D0D",
        secondary: "#EB5939",
        tertiary: "#554E44",
        additional: "#E5E0E0",
      },
      keyframes: {
        glow: {
          from: { textShadow: "0 0 30px rgb(235,89,57) " },
          to: { textShadow: "0 0 50px rgb(235,89,57)" },
        },
      },
      animation: {
        glow: "glow 1.5s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
