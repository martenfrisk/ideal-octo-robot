# Svelte Partial Hydration with Vite
## What is this?
I'm studying full-stack web development and this is my degree project. 
## Installation
`pnpm i` then `pnpm dev` or `pnpm dev:prod`.

If you're using *npm* or *yarn*, remember to edit the relavant parts of `scripts` in `package.json`.

## Status
It works... in the sense that I don't see any errors popping up. Routing has not been implemented yet.

Right now the load function returns the static location of Lazy.svelte ([line 58](https://github.com/martenfrisk/svelte-partial-hydration-vite/blob/master/src/vite-plugin-svelte-partial-hydration/index.ts#L58) of the plugin file). This should obviously be dynamic. 

## Structure
Partial hydration is implemented as a Vite plugin found under `src/vite-plugin-svelte-partial-hydration`. Most of the code is based on Jonatan's repo which uses esbuild+ estrella. SSR-server inspired by https://github.com/benmccann/vite-svelte. 

Vite uses esbuild during development and bundles the project for production using rollup. So you'll see a fairly large difference between dev (`pnpm dev`) and production (`pnpm dev:prod`). 

---

---
*Original Vite docs from @vite/create-app:*
## Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- SvelteKit is still a work-in-progress.
- It currently does not support the pure-SPA use case.
- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.
  `vite dev` and `vite build` wouldn't work in a SvelteKit environment, for example.

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-app` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
