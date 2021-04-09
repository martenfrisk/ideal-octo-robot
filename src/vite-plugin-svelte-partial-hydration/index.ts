export default function vitePluginSveltePartialHydration() {
  const mountFilter = /^(.+\.svelte)!mount(?:=(\w+))?$/
  const clientFilter = /^\$crown-components$/

  return {
    enforce: "pre",
    name: "vite-plugin-svelte-partial-hydration",
    async resolveId(id, importer, ssr) {
      // console.log(id)
      if (ssr) {
        let matches = id.match(mountFilter)
        if (matches) {
          const realPath = matches[1]
          const args = matches[2] || ""

          const resolution = await this.resolve(realPath, importer, {
            skipSelf: true,
          })
          console.log("-------- resolve>", id, resolution)

          return { id: resolution.id + "!mount" + args }
        }
      }
    },
    async load(id, ssr) {
      if (ssr) {
        let matches = id.match(mountFilter)

        if (matches) {
          const realPath = matches[1]
          const args = matches[2] || ""

          console.log("-------- load>", realPath, args)
          return {
            code: `
          import Component from "${realPath}";
          import { patch } from "C:/Users/Marten/Documents/Web/svelte-partial-vite/src/mount/utils.ts";
          export default patch(Component, "${realPath}", "")
          `,
          }
        }
      } else {
        let matches = id.match(clientFilter)
        if (matches) {
          const realPath = matches[1]
          const args = matches[2] || ""
          console.log("-------- load NOT_SSR>", realPath, args)
          return {
            code: `
           import("${realPath}");
          `,
          }
        }
      }
    },
  }
}
