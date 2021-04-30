<script context="module">
  export function get() {
    return { myProp: 'test' }
  } 
</script>

<script lang="ts">
  // @ts-nocheck
  import Lazy from "../../lib/Lazy.svelte";
  export let myProp;
</script>

<a href="/">Home</a>
<p>About page</p>

My prop: {myProp}

<Lazy foo="aboutProp" date={Date.now()} />
