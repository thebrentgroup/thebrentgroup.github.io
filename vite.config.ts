import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        research: resolve(__dirname, "research.html"),
        relevantPastWork: resolve(__dirname, "relevant-past-work.html"),
        messagesToFuture: resolve(__dirname, "messages-to-the-future.html"),
        roadmap: resolve(__dirname, "roadmap.html"),
      },
    },
  },
});
