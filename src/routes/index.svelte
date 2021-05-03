<script lang="ts">
  // @ts-nocheck
  import { SvelteComponent } from "svelte"
  // export let name;
  import Counter from "../lib/Counter.svelte!mount"
  import Lazy from "../lib/Lazy.svelte!mount"
  export let component: SvelteComponent, componentProps: SvelteAllProps
</script>

<div>
  <h1>Hello Partial!</h1>
  <Counter />
  <Lazy server={Date.now()} foo="testProp" />
  <Lazy server={Date.now()} foo="testProp" />
  <svelte:component this={component} {...componentProps || {}} />
</div>

<style>


  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

  }
</style>
