import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/paradise-nursery-app", // Your GitHub repo name
  plugins: [react()],
});
