<script context="module">
  import fetch from "isomorphic-unfetch"
  export async function getFn() {
    const response = await fetch("https://zenquotes.io/api/random")
    const data = await response.json()
    return { data }
  }
</script>

<script lang="ts">
  // @ts-nocheck
  export let data: {
    q: string
    a: string
    h: string
  }
  console.log("about: ", { data })

  import Lazy from "../../lib/Lazy.svelte!mount"
  // import Quote from "../../lib/Quote.svelte!mount"
</script>

<h1>About page</h1>
<p>
  {#if data}
    {data.h}
  {:else}
    No prop
  {/if}
</p>

<p>
  This is the about page. The style of this paragraph comes from this page's
  svelte file.
</p>

<!-- <Quote /> -->
<Lazy foo="aboutProp" server={Date.now()} />

<style>
  p {
    color: cornflowerblue;
  }
</style>
