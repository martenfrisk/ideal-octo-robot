"use strict";
var __defProp = Object.defineProperty;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __assign = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
Object.defineProperty(exports, "__esModule", {value: true});
exports[Symbol.toStringTag] = "Module";
var internal = require("svelte/internal");
require("svelte");
var nonSecure = require("nanoid/non-secure");
var $layout_svelte_svelte_type_style_lang = 'main.svelte-1jp74qy{background-color:lightgray;text-align:center;padding:1em;margin:0 auto}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\r\n      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}';
const css$2 = {
  code: 'main.svelte-1jp74qy{background-color:lightgray;text-align:center;padding:1em;margin:0 auto}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\r\n      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}',
  map: '{"version":3,"file":"$layout.svelte","sources":["$layout.svelte"],"sourcesContent":["<nav><a href=\\"/\\">Home</a><a href=\\"/about/\\">About</a></nav>\\r\\n\\r\\n<main>\\r\\n\\r\\n  <slot>foo</slot>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n  main {\\r\\n    background-color: lightgray;\\r\\n    text-align: center;\\r\\n    padding: 1em;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n  :root {\\r\\n    font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen,\\r\\n      Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AAQE,IAAI,eAAC,CAAC,AACJ,gBAAgB,CAAE,SAAS,CAC3B,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AACD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC;MACzE,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAChE,CAAC"}'
};
const $layout = internal.create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="${"svelte-1jp74qy"}"><a href="${"/"}" class="${"svelte-1jp74qy"}">Home</a><a href="${"/about/"}" class="${"svelte-1jp74qy"}">About</a></nav>

<main class="${"svelte-1jp74qy"}">${slots.default ? slots.default({}) : `foo`}
</main>`;
});
var __glob_0_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: $layout
});
function get() {
}
var __glob_0_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get
});
var Counter_svelte_svelte_type_style_lang = "button.svelte-1c7643s{font-family:inherit;font-size:inherit;padding:1em 2em;color:#ff3e00;background-color:rgba(255, 62, 0, 0.1);border-radius:2em;border:2px solid rgba(255, 62, 0, 0);outline:none;width:200px;font-variant-numeric:tabular-nums;cursor:pointer}button.svelte-1c7643s:focus{border:2px solid #ff3e00}button.svelte-1c7643s:active{background-color:rgba(255, 62, 0, 0.2)}";
const css$1 = {
  code: "button.svelte-1c7643s{font-family:inherit;font-size:inherit;padding:1em 2em;color:#ff3e00;background-color:rgba(255, 62, 0, 0.1);border-radius:2em;border:2px solid rgba(255, 62, 0, 0);outline:none;width:200px;font-variant-numeric:tabular-nums;cursor:pointer}button.svelte-1c7643s:focus{border:2px solid #ff3e00}button.svelte-1c7643s:active{background-color:rgba(255, 62, 0, 0.2)}",
  map: '{"version":3,"file":"Counter.svelte","sources":["Counter.svelte"],"sourcesContent":["<script lang=\\"ts\\">let count = 0;\\r\\nconst increment = () => {\\r\\n    count += 1;\\r\\n};\\r\\n</script>\\n\\n<button on:click={increment}>\\n  Clicks: {count}\\n</button>\\n\\n<style>\\n  button {\\n    font-family: inherit;\\n    font-size: inherit;\\n    padding: 1em 2em;\\n    color: #ff3e00;\\n    background-color: rgba(255, 62, 0, 0.1);\\n    border-radius: 2em;\\n    border: 2px solid rgba(255, 62, 0, 0);\\n    outline: none;\\n    width: 200px;\\n    font-variant-numeric: tabular-nums;\\n    cursor: pointer;\\n  }\\n\\n  button:focus {\\n    border: 2px solid #ff3e00;\\n  }\\n\\n  button:active {\\n    background-color: rgba(255, 62, 0, 0.2);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAWE,MAAM,eAAC,CAAC,AACN,WAAW,CAAE,OAAO,CACpB,SAAS,CAAE,OAAO,CAClB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACvC,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACrC,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,oBAAoB,CAAE,YAAY,CAClC,MAAM,CAAE,OAAO,AACjB,CAAC,AAED,qBAAM,MAAM,AAAC,CAAC,AACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,AAC3B,CAAC,AAED,qBAAM,OAAO,AAAC,CAAC,AACb,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AACzC,CAAC"}'
};
const Counter$1 = internal.create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  $$result.css.add(css$1);
  return `<button class="${"svelte-1c7643s"}">Clicks: ${internal.escape(count)}
</button>`;
});
const Root = internal.create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = internal.compute_rest_props($$props, ["__module__", "__component__", "__mode__", "key"]);
  let {__module__} = $$props;
  let {__component__} = $$props;
  let {__mode__} = $$props;
  let {key = "cr-" + nonSecure.nanoid()} = $$props;
  if ($$props.__module__ === void 0 && $$bindings.__module__ && __module__ !== void 0)
    $$bindings.__module__(__module__);
  if ($$props.__component__ === void 0 && $$bindings.__component__ && __component__ !== void 0)
    $$bindings.__component__(__component__);
  if ($$props.__mode__ === void 0 && $$bindings.__mode__ && __mode__ !== void 0)
    $$bindings.__mode__(__mode__);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  return `<crown-component${internal.add_attribute("id", key, 0)}${internal.add_attribute("data-component", __module__, 0)}${internal.add_attribute("data-mode", __mode__ || void 0, 0)}${internal.add_attribute("data-props", JSON.stringify($$restProps), 0)}>${internal.validate_component(__component__ || internal.missing_component, "svelte:component").$$render($$result, Object.assign($$restProps), {}, {
    default: () => `${slots.default ? slots.default({}) : ``}`
  })}</crown-component>`;
});
function patch(__component__, __module__, __mode__) {
  if (!Root.$$render || !__component__.$$render) {
    console.log({__component__});
    throw new Error("Invalid SSR component");
  }
  let render2 = Root.$$render;
  function $$render(result, props, bindings, slots) {
    return render2(result, __assign(__assign({}, props), {__module__, __component__, __mode__}), bindings, slots);
  }
  return __assign(__assign({}, Root), {$$render});
}
var Counter = patch(Counter$1, "/src/lib/Counter.svelte", "");
const Lazy$1 = internal.create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {foo} = $$props, {server} = $$props;
  const client = Date.now();
  if ($$props.foo === void 0 && $$bindings.foo && foo !== void 0)
    $$bindings.foo(foo);
  if ($$props.server === void 0 && $$bindings.server && server !== void 0)
    $$bindings.server(server);
  return `<p>${internal.escape(foo)}</p>
<p>Server: ${internal.escape(server)}</p>
<p>Client: ${internal.escape(client)}</p>`;
});
var Lazy = patch(Lazy$1, "/src/lib/Lazy.svelte", "");
var index_svelte_svelte_type_style_lang = "h1.svelte-4sfasj{color:#ff3e00;text-transform:uppercase;font-size:4rem;font-weight:100;line-height:1.1;margin:2rem auto;max-width:14rem}@media(min-width: 480px){h1.svelte-4sfasj{max-width:none}}";
const css = {
  code: "h1.svelte-4sfasj{color:#ff3e00;text-transform:uppercase;font-size:4rem;font-weight:100;line-height:1.1;margin:2rem auto;max-width:14rem}@media(min-width: 480px){h1.svelte-4sfasj{max-width:none}}",
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { SvelteComponent } from \\"svelte\\";\\r\\nimport Counter from \\"../lib/Counter.svelte!mount\\";\\r\\nimport Lazy from \\"../lib/Lazy.svelte!mount\\";\\r\\nexport let component, componentProps;\\r\\n</script>\\r\\n\\r\\n<div>\\r\\n  <h1>Hello Partial!</h1>\\r\\n  <Counter />\\r\\n  <Lazy server={Date.now()} foo=\\"testProp\\" />\\r\\n  <Lazy server={Date.now()} foo=\\"testProp\\" />\\r\\n  <svelte:component this={component} {...componentProps || {}} />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  h1 {\\r\\n    color: #ff3e00;\\r\\n    text-transform: uppercase;\\r\\n    font-size: 4rem;\\r\\n    font-weight: 100;\\r\\n    line-height: 1.1;\\r\\n    margin: 2rem auto;\\r\\n    max-width: 14rem;\\r\\n  }\\r\\n\\r\\n  @media (min-width: 480px) {\\r\\n    h1 {\\r\\n      max-width: none;\\r\\n    }\\r\\n\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAeE,EAAE,cAAC,CAAC,AACF,KAAK,CAAE,OAAO,CACd,cAAc,CAAE,SAAS,CACzB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,SAAS,CAAE,KAAK,AAClB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,cAAC,CAAC,AACF,SAAS,CAAE,IAAI,AACjB,CAAC,AAEH,CAAC"}'
};
const Routes = internal.create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {component} = $$props, {componentProps} = $$props;
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.componentProps === void 0 && $$bindings.componentProps && componentProps !== void 0)
    $$bindings.componentProps(componentProps);
  $$result.css.add(css);
  return `<div><h1 class="${"svelte-4sfasj"}">Hello Partial!</h1>
  ${internal.validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
  ${internal.validate_component(Lazy, "Lazy").$$render($$result, {server: Date.now(), foo: "testProp"}, {}, {})}
  ${internal.validate_component(Lazy, "Lazy").$$render($$result, {server: Date.now(), foo: "testProp"}, {}, {})}
  ${internal.validate_component(component || internal.missing_component, "svelte:component").$$render($$result, Object.assign(componentProps || {}), {}, {})}
</div>`;
});
var __glob_0_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Routes
});
const About = internal.create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${"/"}">Home</a>
<p>About page</p>
${internal.validate_component(Lazy$1, "Lazy").$$render($$result, {foo: "aboutProp", date: Date.now()}, {}, {})}`;
});
var __glob_0_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: About
});
const modules = {"../routes/$layout.svelte": __glob_0_0, "../routes/data.json.ts": __glob_0_1, "../routes/index.svelte": __glob_0_2, "../routes/about/index.svelte": __glob_0_3};
console.log(modules);
function trimPath(name) {
  return name.replace(/^\.\.\/routes/, "").replace(/\.[a-z]+$/, "").replace(/\/$/, "").replace(/\/index$/, "");
}
function nameToPattern(name) {
  const pattern = trimPath(name);
  return new RegExp(`^${pattern}/?$`);
}
const routes = new Map(Object.entries(modules).filter(([path]) => {
  const matches = path.match(/\/([^/]+)\.[a-z]+$/);
  const name = matches && matches[1];
  return !name.startsWith("$") && !name.startsWith("_");
}).map(([path, mod]) => [nameToPattern(path), mod.default]));
function getMatchingRoute(pathname) {
  console.log("pathname: ", pathname);
  console.log(routes);
  const match = [...routes.entries()].find(([pattern]) => pathname.match(pattern));
  if (match) {
    return match[1];
  }
}
const App = internal.create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {components} = $$props;
  const [current, ...rest] = components;
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  return `${internal.validate_component(current.component || internal.missing_component, "svelte:component").$$render($$result, Object.assign(current.props), {}, {
    default: () => `${components.length ? `${internal.validate_component(App, "svelte:self").$$render($$result, {components: rest}, {}, {})}` : ``}`
  })}`;
});
async function render(path, manifest) {
  const route = getMatchingRoute(path);
  const components = [
    {component: $layout, props: {}},
    {component: route, props: {}}
  ];
  const {html, css: css2, head} = App.render({
    components
  });
  return {html, css: css2, head};
}
exports.render = render;
