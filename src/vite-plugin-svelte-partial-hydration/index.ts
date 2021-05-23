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
        return id
      }
      if (ssr) {
        let matches = id.match(mountFilter)
        // console.log({matches})
        
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
      if (id.match(clientFilter)) {
        let entries
        if (server) {
          const graph = server.moduleGraph.idToModuleMap.entries()
          entries = Array.from(graph)
            .filter(([id]) => id.match(mountFilter))
            .map(([id, meta]) => [id, meta.url])
        }
        else if (clientManifestPath) {
          console.log({clientManifestPath})
          
          try {
            let clientManifest = require(clientManifestPath)
            entries = Object.entries(clientManifest)
              .filter(([id, meta]: [string, any]) => meta.isDynamicEntry)
              .map(([id, meta]) => ['/' + id, '/' + id])
          } catch (e) {
            console.error(e)
          }
        }
        
        if (entries && entries.length) {
          console.log({entries})
          return {
            code: `
export default { 
  ${createImportStatements(entries)} 
};`,
          }
        }
        // static fallback for production, needs fix
        return `export default{
          '/src/lib/Counter.svelte': () =>import ('/src/lib/Counter.svelte'),
          '/src/lib/Quote.svelte': () =>import ('/src/lib/Quote.svelte'),
          '/src/lib/Image.svelte': () =>import ('/src/lib/Image.svelte'),
          '/src/lib/Lazy.svelte': () =>import ('/src/lib/Lazy.svelte')
        };`
      }

      if (ssr) {
        let matches = id.match(mountFilter)
        
        if (matches) {
          const svelteRequest = requestParser(id, !!ssr)
          const realPath = matches[1]
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
