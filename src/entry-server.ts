import { getMatchingRoutes } from "./router"

import App from "./App.svelte"

export async function render(path: string, manifest: any): Promise<any> {
  const components = getMatchingRoutes(path)

  if (components) {
    const componentsDefault = components.map((x) => x.default)

    const promises = components.map((component) => {
      if (component.get) {
        // console.log(component.get())

        return component.get()
      }
    })

    const props = await Promise.allSettled(promises).then((results) =>
      results.map((x) => {
        // console.log({x})

        if (x.status === "fulfilled" && !!x.value) return x.value
      })
    )
    // Merge components and props

    // @ts-ignore
    const { html, css, head } = App.render({
      ...props,
      components: componentsDefault,
    })
    return { html, css, head }
  }
  return null
}
