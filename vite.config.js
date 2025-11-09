import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), {
      name: "copy-404",
      closeBundle() {
        fs.copyFileSync("dist/index.html", "dist/404.html");
      },
    }],
  base: "/",
});
