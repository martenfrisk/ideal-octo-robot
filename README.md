# Svelte Partial Hydration with Vite

This is a proof of concept for implementing partial hydration in Svelte in the form of a Vite plugin.

## Partial hydration

Partial hydration (or partial rehydration) is an attempt to solve the "rehydration problem"*. This is when a site is rendered on the server and then "rehydrated" on the client which can cause significant delay in "Time to Interactive" (i.e. all HTML is rendered immediately but static until all JavaScript has been executed).

Ordinary hydration has a single root node and one object with data to hydrate the markup. Not only can this cause a delay in interactivity but also risks sending unused JavaScript to the client.

This implementation of partial hydration is also inspired by (and ended up looking a lot like) a concept called ["Island Architecture"](https://jasonformat.com/islands-architecture/) where static HTML (rendered server-side) is supplemented by multiple (or just one, or none) interactive, JavaScript-reliant modules.

In our final HTML, a "partial hydration" component looks like this:

```javascript
<crown-component
  id="cr-rUPgizsyjpw5UvIIxvbyh"
  data-component="/src/lib/Quote.svelte"
  data-props='{"defaultQuote":
        {
            "author":"Jamie Zawinski",
            "id":4,
            "quote":"Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems.",
            "permalink":"http://quotes.stormconsultancy.co.uk/quotes/4"
        }
    }'
>
  <button>New quote</button>
  <div>
    <p>
      "Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems."
    </p>
    <p>- Jamie Zawinski</p>
  </div>
  <!--<Quote>-->
</crown-component>
```

The "data-props" data-attribute and the markup is generated server-side whereas the interactivity is provided by the "data-component" which links to a JavaScript file.

\* More info on the rehydration problem: <https://developers.google.com/web/updates/2019/02/rendering-on-the-web#rehydration-issues>

## How it works

### 1. On the server

The Vite plugin (src/vite-plugin-svelte-partial-hydration/index.ts) runs before the official Svelte Vite plugin. It picks up any imported Svelte modules with the "!mount" argument in the "resolveId" hook. 

Then, in the "load" hook, it checks if the import contains either
1. "!mount"
in which case the file path is passed to the "patch" function (which is a modified Svelte render function), or
2. "$crown-components"
in which case the "!mount" components are passed into an array containing the file path to the relevant Svelte files. This array is used in the browser to find the appropriate file for each <crown-component>. 

### 2. In the browser

The index.html has one script file: /src/entry-client.ts, which calls the function found in /src/client/hydrate.ts. 

hydrate.ts finds every instance of <crown-component> and then
1. collects its "data-component" and looks up the relevant file path in $crown-components (in dev mode this is simply a .svelte-file but in production the .svelte-file maps to a JS-file)
2. collects any props
3. creates and hydrates a new Component using the data from step 1 and 2

## Run Locally

Clone the project

```bash
  git clone https://github.com/martenfrisk/svelte-partial-hydration-vite
```

Go to the project directory

```bash
  cd svelte-partial-hydration-vite
```

Install dependencies

```bash
  pnpm install
```

or

```bash
  npm install / yarn
```

Start the server

```bash
  pnpm dev
```

Generate production build

```bash
  pnpm dev:prod
```

## Tech Stack

**Client:** Svelte, TypeScript

**Server:** Express

**Build tool:** Vite

**Other packages used:**

- nanoid (for randomized ids used by partial components),

- compression, sirv (for SSR dev server),

- isomorphic-unfetch (fetch function on server)
