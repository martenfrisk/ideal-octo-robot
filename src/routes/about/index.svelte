<script context="module">
  export function get() {
    return { myProp: 'test' }
  }
</script>

<script lang="ts">
  // @ts-nocheck
  import Lazy from "../../lib/Lazy.svelte!mount";
  import Quote from "../../lib/Quote.svelte!mount";
  export let myProp
</script>

<h1>About page</h1>
<p>{myProp}</p>

<p>This is the about page. The style of this paragraph comes from this page's svelte file.</p>

<Quote />
<Lazy foo="aboutProp" server={Date.now()} />

<style>
  p {
    color: cornflowerblue;
  }
</style>