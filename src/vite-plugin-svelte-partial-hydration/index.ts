export default function vitePluginSveltePartialHydration() {
  const mountFilter = /^(.+\.svelte)!mount(?:=(\w+))?$/;

  return {
    enforce: 'pre',
    name: "vite-plugin-svelte-partial-hydration", 
    async resolveId(id, importer) {
      // console.log(id)
      let matches = id.match(mountFilter)
      
      if (matches) {
        const realPath = matches[1]
        const args = matches[2] || ""

        const resolution = await this.resolve(realPath, importer, { skipSelf: true })
        console.log("-------- resolve>", id, resolution)
  
        return {id: resolution.id + '!mount' + args}
      }
    },
    async load(id) {
      let matches = id.match(mountFilter)

      if (matches) {
        const realPath = matches[1]
        const args = matches[2] || ""
        console.log("***** matches ", matches)
        
        console.log("-------- load>", realPath, args)
        return {
          code: `
    import Component from "${realPath}";
    import { patch } from "C:/Users/Marten/Documents/Web/svelte-partial-vite/src/mount/utils.ts";
    export default patch(Component, "${realPath}", "")
          `,
        }
      }
    },
  }
}
