import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@api": path.resolve(__dirname, "src/shared/api"),
      "@hooks": path.resolve(__dirname, "src/shared/hooks"),
      "@types": path.resolve(__dirname, "src/shared/types"),
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
  plugins: [react()],
});
