export default function vitePluginSveltePartialHydration() {
  const mountFilter = /^(.+\.svelte)!mount(?:=(\w+))?$/
  const clientFilter = /^\$crown-components$/

  return {
    enforce: "pre",
    name: "vite-plugin-svelte-partial-hydration",
    async resolveId(id, importer, source, ssr) {
      // console.log(id)
      if (id.match(clientFilter)) {
        console.log(
          `$CROWN-COMP - RESOLVE, id: ${id}, source: ${JSON.stringify(source)}`
        )
        return id
      }
      if (ssr) {
        let matches = id.match(mountFilter)
        if (matches) {
          const realPath = matches[1]
          const args = matches[2] || ""

          const resolution = await this.resolve(realPath, importer, {
            skipSelf: true,
          })
          console.log("-------- resolve>", id, resolution.id)

          return { id: resolution.id + "!mount" + args }
        }
      }
    },
    async load(id, ssr) {
      if (id.match(clientFilter)) {
        console.log("$CROWN-COMP - LOAD", id, ssr)
        return {
          code: `
            export default {
              "./Lazy.svelte": () => import("./src/lib/Lazy.svelte")
            };
          `,
        }
      }
      if (ssr) {
        let matches = id.match(mountFilter)
        console.log(matches)

        if (matches) {
          const realPath = matches[1]
          const args = matches[2] || ""
            // const resolution = await this.resolve(realPath, importer, {
            //   skipSelf: true,
            // })
            // console.log("-------- load1>", id, importer)
            console.log("-------- load>", realPath, args)
            return {
              code: `
            import Component from "${realPath}";
            import { patch } from "/src/mount/utils.ts";
            export default patch(Component, "./Lazy.svelte", "")
            `,
            }
        }
      }
    },
  }
}
