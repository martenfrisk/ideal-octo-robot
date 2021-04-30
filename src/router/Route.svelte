<script lang="ts">
  import type { RenderProps } from '.';
  export let tree: RenderProps[];
  const [current, ...rest] = tree;
</script>

<svelte:component this={current.component} {...current.props}>
  {#if rest.length}
    <svelte:self tree={rest} />
  {/if}
</svelte:component>