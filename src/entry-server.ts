import { getMatchingRoutes } from "./router"

import App from "./App.svelte"

export async function render(path: string, manifest: any): Promise<any> {
    const components = getMatchingRoutes(path)

    if (components) {
      // const components: RenderProps[] = [
      //   { component: Layout, props: {}},
      //   { component: route, props: {}}
      // ]

      // const promises = components.map((component) => {
      //   if (component.get) return component.get(/* args */)
      // })

      // const props = await Promise.allSettled(promises)

      // Merge components and props

      // console.log(Layout.render())
      // @ts-ignore
      const { html, css, head } = App.render({
        components,
      })

      // console.log({ html })
      // console.log({ css })
      // console.log({ head })

      return { html, css, head }
    }
    return null
}
