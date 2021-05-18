import { getMatchingRoutes } from "./router"

import App from "./App.svelte"

export async function render(path: string, manifest: any): Promise<any> {
  const components = getMatchingRoutes(path)
  if (components) {
    // Merge components and props
    const componentsDefault = components.map(async (component) => {
      // if component has get(), run it and add its response as props
      if (component && component.get) {
        const props = await component.get()

        return {
          props,
          component: component.default,
        }
      } else if (component) {
        // else just include the component
        return {
          component: component.default,
        }
      }
      return null
    })

    let promised = await Promise.all(componentsDefault)

    // @ts-ignore
    const { html, css, head } = App.render({
      components: promised,
    })
    return { html, css, head }
  }
  return null
}
