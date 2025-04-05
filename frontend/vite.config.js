import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // ← This makes Vite listen on all interfaces
    port: 5173, // ← Ensures it matches the Docker exposed port
    strictPort: true, // ← Ensures it doesn't auto-assign a different port
  },
});
