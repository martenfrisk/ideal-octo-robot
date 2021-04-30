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
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

  }
</style>
