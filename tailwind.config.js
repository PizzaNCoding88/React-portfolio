/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      SingatureF: "var(--signature-f)",
      PrimaryF: "var(--primary-f)",
      SecondaryF: "var(--secondary-f)",
    },
    extend: {
      boxShadow: {
        "nav-shadow": "20px 35px 60px -15px rgba(229,224,224)",
        "3xl":
          "0px 1px 2px 0px rgba(235, 89, 57, .3),1px 2px 4px 0px rgba(235, 89, 57, .3),2px 3px 8px 0px rgba(235, 89, 57, .3),2px 3px 16px 0px rgba(235, 89, 57, .3);",
        "projects-shadow": "0px 0px 5px 0px rgba(229, 224, 224, 0.3)",
      },
      colors: {
        primary: "#0D0D0D",
        secondary: "#EB5939",
        tertiary: "#554E44",
        additional: "#E5E0E0",
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        glow: {
          from: { textShadow: "0 0 30px rgb(235,89,57) " },
          to: { textShadow: "0 0 80px rgb(235,89,57)" },
        },
      },
      animation: {
        glow: "glow 1.5s ease-in-out infinite alternate",
        fadeIn: "fadeIn_1s_ease-in-out",
        fade: "fade_2s_ease-in-our",
      },
      backgroundImage: {
        bgImg: "url('../public/assets/project-1.webp')",
      },
    },
  },
  plugins: [],
};
