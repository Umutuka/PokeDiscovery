import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/PokeDiscovery/",
  plugins: [react()],
  root: "src",
});
