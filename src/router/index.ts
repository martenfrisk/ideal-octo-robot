const modules = import.meta.globEager("../routes/**/*.{js,ts,svelte}")
console.log({ modules })

export type RenderProps = {
  component: { render(): any }
  props: any
}

function trimPath(name: string) {
  return name
    .replace(/^\.\.\/routes/, "")
    .replace(/\.[a-z]+$/, "")
    .replace(/\/$/, "")
    .replace(/\/index$/, "")
}

function nameToPattern(name: string) {
  const pattern = trimPath(name)

  // TODO: Support named params

  return new RegExp(`^${pattern}/?$`)
}

export const routes = new Map(
  Object.entries(modules)
    .filter(([path]) => {
      const matches = path.match(/\/([^/]+)\.[a-z]+$/)
      const name = matches && matches[1]
      return !name.startsWith("$") && !name.startsWith("_")
    })
    .map(([path, mod]) => [nameToPattern(path), mod.default])
)

const layouts = [
  { path: "/", layout: "../routes/$layout.svelte" /* layout component */ },
  { path: "/about/", layout: "../routes/about/$layout.svelte" },
]
console.log(routes)

export function getMatchingRoute(pathname) {
  // if (pathname.match(/\//)) {
  //   console.log('abc', pathname)

  // }
  console.log("pathname: ", pathname)
  
  const match = [...routes.entries()].find(([pattern]) =>
  pathname.match(pattern)
  )
  if (match) {
    console.log({match})
    return match[1]
  }
}

// {
//   '../routes/$layout.svelte': { default: [Object], [Symbol(Symbol.toStringTag)]: 'Module' },
//   '../routes/data.json.ts': { get: [Getter], [Symbol(Symbol.toStringTag)]: 'Module' },
//   '../routes/index.svelte': { default: [Object], [Symbol(Symbol.toStringTag)]: 'Module' },
//   '../routes/about/index.svelte': {
//     default: [Object],
//     get: [Getter],
//     [Symbol(Symbol.toStringTag)]: 'Module'
//   }
// }

// path = '/' or '/about/', etc, e.g. the the current folder without the file name
function getMatchingLayouts(path, children = []) {
  // console.log({ children })

  if (layouts.some(x => x.path == path)) {
    children = [layouts.find(x => x.path == path).layout, ...children]
  }

  // if (path != "/") {
  //   return getMatchingLayouts(path.replace(/[^\/]+\//, ""), children)
  // }

  return children
}

export function getMatchingRoutes(pathname) {
  if (pathname !== "/service-worker.js") {
    // console.log({ pathname })
    const nested = getMatchingLayouts(pathname)
    // console.log({ nested })

      return [...nested, getMatchingRoute(pathname)]
    // return getMatchingRoute(pathname)
  }
}
