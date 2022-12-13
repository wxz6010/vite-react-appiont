import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import autoAppoint from "./src/plugins/auto-appoint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), autoAppoint()],
  server: {
    port: 3000,
  },
});
