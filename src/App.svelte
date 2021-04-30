<script lang="ts">
  import type { RenderProps } from "./router"
  export let components: RenderProps[]
  const [current, ...rest] = components
  console.log(components)
  
</script>

<svelte:component this={current.component} {...current.props}>
  <!-- {#if components.length > 1}
    <svelte:self components={rest} />
  {/if} -->
</svelte:component>
