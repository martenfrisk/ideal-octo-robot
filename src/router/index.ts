const modules = import.meta.globEager("../routes/**/*.{js,ts,svelte}")
// console.log({ modules })

export type RenderProps = {
  component: { render(): any }
  props: any
}

function trimPath(name: string) {
  return name
    .replace(/^\.\.\/routes/, "")
    .replace(/\.[a-z]+$/, "")
    .replace(/\/index$/, "")
}

function nameToPattern(name: string) {
  const pattern = trimPath(name)

  // TODO: Support named params

  // return new RegExp(`^${pattern}/?$`)
  return pattern
}

export const routes = new Map(
  Object.entries(modules)
    .filter(([path]) => {
      const matches = path.match(/\/([^/]+)\.[a-z]+$/)
      const name = matches && matches[1]
      return !name.startsWith("_")
    })
    .map(([path, mod]) => [nameToPattern(path), mod.default])
)

console.log({routes})


const layouts = [
  { path: "/", layout: "/$layout" },
  { path: "/about/", layout: "/about/$layout" },
]
// const layouts = [{"/"}, {"/about/"}]

export function getMatchingRoute(pathname) {
  console.log({pathname})
  
  const match = [...routes.entries()].find((x) => x[0] === pathname)
  if (match) {
    // console.log({match})
    
    return match[1]
  }
}

// path = '/' or '/about/', etc, e.g. the the current folder without the file name
function getMatchingLayouts(path, children = []) {
  console.log({ path })

  if (layouts.some(x => x.path === path)) {
    console.log("path found")

    // children = [getMatchingRoute(layouts.find((x) => x.path === path).layout), ...children]
    children = [getMatchingRoute(layouts.find((x) => x.path === path).layout), ...children]
    // console.log({children})
    
  }
  
  if (path != "/") {
    children = [getMatchingRoute(layouts.find((x) => x.path === "/").layout), ...children]
    // return getMatchingLayouts(path.replace(/[^\/]+\//, ""), children)
  }

  return children
}

export function getMatchingRoutes(pathname) {
  const nested = getMatchingLayouts(pathname)
  console.log({nested})

  const routeMatch = getMatchingRoute(pathname.replace(/\/$/, ""))
  console.log({routeMatch})
  
  return [...nested, routeMatch]
  // console.log(routes.get("/$layout"))

  // return [routes.get("/$layout"), routeMatch]
}
