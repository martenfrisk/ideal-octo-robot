<script context="module">
  import fetch from "isomorphic-unfetch"
  export async function get() {
    const response = await fetch(
      "http://quotes.stormconsultancy.co.uk/random.json"
    )
    const data = await response.json()
    // const response = await fetch("https://zenquotes.io/api/random")
    // const data = await response.json()
    // return { data: data[0] }
    return { data }
  }
</script>

<script lang="ts">
  // @ts-nocheck
  export let data: {
    author: string
    id: number
    quote: string
    permalink: string
  }
  // import Lazy from "../../lib/Lazy.svelte!mount"
  import Quote from "../../lib/Quote.svelte!mount"
</script>

<h1>About page</h1>

<div class="showcase static">
  <h2>Static content served as HTML+CSS</h2>
  {#if data}
    <p class="quote">
      Here's a quote fetched on the server from an external API:
    </p>
    <p>
      "{data.quote}"
    </p>
    <p>- {data.author}</p>
  {/if}
</div>

<div class="showcase dynamic">
  <h2>This part has JS.</h2>
  <Quote defaultQuote={data} />
  <!-- <Lazy foo="aboutProp" server={Date.now()} /> -->
</div>

<style>
  .static {
    border: 1px solid turquoise;
  }
  .dynamic {
    border: 1px solid tomato;
  }
  .showcase {
    padding: 1rem 2rem;
    width: 50%;
    margin: 1rem auto;
  }
  .quote {
    color: darkslategray;
  }
  p {
    color: cornflowerblue;
    margin-top: 2rem;
  }
</style>
