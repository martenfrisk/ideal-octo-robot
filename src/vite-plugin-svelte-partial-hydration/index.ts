import { normalizePath, ViteDevServer } from "vite"
import { buildIdParser, IdParser } from "./utils"

function createImportStatements(entries) {
  return entries
    .map(([id, path]) => {
      const key = id.replace("!mount", "")
      const value = path.replace("!mount", "")

      return `"${key}": () => import("${value}")`
    })
    .join()
}

export interface Options {
  clientManifestPath: string
}

export default function vitePluginSveltePartialHydration(
  { clientManifestPath }: Options = {
    clientManifestPath: "./dist/client/manifest.json",
  }
) {
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
      requestParser = buildIdParser(config)
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

          if (resolution) {
            return { id: resolution.id + "!mount" + args }
          }

          return null
        }
      }
    },
    async load(id, ssr) {
      // console.log(`load id: ${id}`)

      if (id.match(clientFilter)) {
        let entries

        console.log("$CROWN-COMP - LOAD", id, ssr)
        if (server) {
          const graph = server.moduleGraph.idToModuleMap.entries()
          entries = Array.from(graph)
            .filter(([id]) => id.match(mountFilter))
            .map(([id, meta]) => [id, meta.url])
        } else if (clientManifestPath) {
          try {
            let clientManifest = require(clientManifestPath)
            entries = Object.entries(clientManifest)
            // @ts-ignore
              .filter(([id, meta]) => meta.isDynamicEntry)
              .map(([id, meta]) => [id, id])
          } catch (e) {
            console.error(e)
          }
        }
        if (entries) {
          return {
            code: `
export default { 
  ${createImportStatements(entries)} 
};`,
          }
        }

        return `export default {}; console.error("Faild to load dynamic components");`
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
            export default patch(Component, "${
              svelteRequest
                ? svelteRequest.normalizedFilename.replace("!mount", "")
                : realPath.replace("!mount", "")
            }", "")
            `,
          }
        }
      }
    },
  }
}
