<script lang="ts">
  import type { RenderProps } from "./router"
  export let components: RenderProps[]
  let current: RenderProps, rest: RenderProps[]
  if (components) [current, ...rest] = components
</script>

{#if current}
  <svelte:component
    this={current.component}
    {...current.props || {}}
  >
    {#if components.length}
      <svelte:self components={rest} />
    {/if}
  </svelte:component>
{/if}
