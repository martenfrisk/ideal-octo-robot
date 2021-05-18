import { defineConfig } from "vite"
import svelte from "@sveltejs/vite-plugin-svelte"
// import partial from "./src/plugin/src"
import partial from "./src/vite-plugin-svelte-partial-hydration"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  return {
    plugins: [partial(), svelte()],
    build: {
      manifest: true,
      minify: isProduction ? true : false,
      // rollupOptions: {
      //   external: !isProduction && ["/assets/manifest.json"],
      // },
    },
  }
})
