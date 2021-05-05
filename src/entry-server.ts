import { getMatchingRoutes } from "./router"

import App from "./App.svelte"

export async function render(path: string, manifest: any): Promise<any> {
  const components = getMatchingRoutes(path)

  if (components) {
    // Merge components and props
    const componentsDefault = components.map((component) => {
      // if component has get(), run it and add its response as props
      if (component.getFn) {
        return {
          props: (component.getFn()) || {},
          component: component.default,
        }
      } 
      // else just include the component
        return {
          component: component.default,
        }
    })

    // const promises = components.map((component) => {
    //   if (component.get) return component.get()
    // })

    // const props = await Promise.allSettled(promises).then((data) =>
    //   data.filter((x) => x.status == "fulfilled")
    // )
    
      // @ts-ignore
      const { html, css, head } = App.render({
        components: componentsDefault,
      })
      return { html, css, head }
  }
  return null
}
