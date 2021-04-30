import { routes, getMatchingRoutes } from './router';
import type { SvelteComponent } from 'svelte'
import type { RenderProps } from './router';

import App from './App.svelte'
import Layout from './routes/$layout.svelte'

export async function render(
  path: string,
  manifest: any
): Promise<any> {
  const components = getMatchingRoutes(path)
  // const components: RenderProps[] = [
  //   { component: Layout, props: {}},
  //   { component: route, props: {}}
  // ]

  // const promises = components.map(component => {
  //   if (component.get) return component.get(/* args */)
  // })

  // const props = await Promise.allSettled(promises)

  // Merge components and props

  // console.log(Layout.render())
  console.log('entry-server components', components)
  
  // @ts-ignore
  const { html, css, head } = App.render({
    components
  }) 
  
  return { html, css, head }
}