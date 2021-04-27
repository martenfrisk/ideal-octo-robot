import type { ViteDevServer } from "vite"

export default function vitePluginSveltePartialHydration() {
  const mountFilter = /^(.+\.svelte)!mount(?:=(\w+))?$/
  const clientFilter = /^\$crown-components$/
  let server: ViteDevServer

  return {
    enforce: "pre",
    name: "vite-plugin-svelte-partial-hydration",
    configureServer(_server) {
      server = _server
    },
    async resolveId(id, importer, source, ssr) {
      if (id.match(clientFilter)) {
        // console.log(`$CROWN-COMP - RESOLVE, id: ${id}, source: ${JSON.stringify(source)}`)
        return id
      }
      if (ssr) {
        let matches = id.match(mountFilter)
        if (matches) {
          const realPath = matches[1]
          const args = matches[2] || ""
          const resolution = await this.resolve(realPath, importer, { skipSelf: true, })
          return { id: resolution.id + "!mount" + args }
        }
      }
    },
    async load(id, ssr) {
      // console.log(`load id: ${id}`)

      if (id.match(clientFilter)) {
        console.log("$CROWN-COMP - LOAD", id, ssr)
        if (server) {
          const modules = Array.from(
            server.moduleGraph.idToModuleMap.entries()
          ).filter(([key]) => key.match(mountFilter))
          const imports = modules.map(
            ([key, value]) => `
    "${key.replace("!mount", "")}": () => import("${value.url.replace("!mount","")}")`
          )
          return {
            code: `export default { ${imports.join()} };`,
          }
        }
        return {
          code: `export default {};`,
        }
      }
      if (ssr) {
        let matches = id.match(mountFilter)

        if (matches) {
          const realPath = matches[1]
          // const args = matches[2] || ""
          return {
            code: `
            import Component from "${realPath}";
            import { patch } from "/src/mount/utils.ts";
            export default patch(Component, "${realPath.replace("!mount","")}", "")
            `,
          }
        }
      }
    },
  }
}
