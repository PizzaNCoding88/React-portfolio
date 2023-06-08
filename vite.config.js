import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/PizzaNCoding88/React-portfolio/tree/gh-pages",
  plugins: [react()],
});
