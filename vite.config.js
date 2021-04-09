import { defineConfig } from "vite"
import svelte from "@sveltejs/vite-plugin-svelte"
// import partial from "./src/plugin/src"
import partial from "./src/vite-plugin-svelte-partial-hydration"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    plugins: [
      svelte(),
      partial(),
    ],
  },
  plugins: [
    svelte(),
    partial(),
  ],
})
