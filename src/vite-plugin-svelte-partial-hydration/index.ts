import { normalizePath, ViteDevServer } from "vite"
import { buildIdParser, IdParser } from "./utils"

export default function vitePluginSveltePartialHydration() {
  const mountFilter = /^(.+\.svelte)!mount(?:=(\w+))?$/
  const clientFilter = /^\$crown-components$/
  let server: ViteDevServer

	let requestParser: IdParser, options: any

  return {
    enforce: "pre",
    name: "vite-plugin-svelte-partial-hydration",
    configureServer(_server) {
      server = _server
    },
    
		async configResolved(config) {
			requestParser = buildIdParser(config);
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
          const resolution = await this.resolve(realPath, importer, {
            skipSelf: true,
          })
          return { id: resolution.id + "!mount" + args }
        }
      }
    },
    async load(id, ssr) {
      // console.log(`load id: ${id}`)
      
      if (id.match(clientFilter)) {
        // console.log("$CROWN-COMP - LOAD", id, ssr)
        if (server) {
          const modules = Array.from(
            server.moduleGraph.idToModuleMap.entries()
          ).filter(([key]) => key.match(mountFilter))
          const imports = modules.map(
            ([key, value]) => `
    "${key.replace("!mount", "")}": () => import("${value.url.replace(
              "!mount",
              ""
            )}")`
          )
          return {
            code: `export default { ${imports.join()} };`,
          }
        } 
          console.log("$CROWN-COMP - LOAD", id, ssr)

          return {
            code: `export default { 
              "/src/lib/Counter.svelte": () => import('/src/lib/Counter.svelte'),
              "/src/lib/Lazy.svelte": () => import('/src/lib/Lazy.svelte') 
            }`,
          }
      }
      if (ssr) {
        let matches = id.match(mountFilter)

        if (matches) {
          
          const svelteRequest = requestParser(id, !!ssr)
          const realPath = matches[1]
          // console.log('---- load', normalizePath(realPath))
          return {
            code: `
            import Component from "${realPath}";
            import { patch } from "/src/mount/utils.ts";
            export default patch(Component, "${svelteRequest ? svelteRequest.normalizedFilename.replace(
              "!mount",
              "") : realPath.replace(
              "!mount",
              ""
            )}", "")
            `,
          }
        }
      }
    },
  }
}
