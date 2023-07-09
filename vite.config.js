import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/slite-clone',
  plugins: [react()],
  root: "src",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
