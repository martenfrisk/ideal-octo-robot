<script lang="ts">
  import type { RenderProps } from "./router"
  export let components: RenderProps[]
  let current, rest
  if (components) [current, ...rest] = components
</script>

<svelte:component this={current}>
  {#if components.length}
      <svelte:self components={rest} />
    {/if}
</svelte:component>
