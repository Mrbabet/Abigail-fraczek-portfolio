import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Abigail-fraczek-portfolio/",
  server: {
    // Handle fallback for history API routing
    historyApiFallback: true,
  },
});
