<script>
  import { nanoid } from "nanoid/non-secure";
  export let __module__;
  export let __component__;
  export let __mode__;
  export let key = "cr-" + nanoid();
</script>

<crown-component
  id={key}
  data-component={__module__}
  data-mode={__mode__ || undefined}
  data-props={JSON.stringify($$restProps)}>
  <svelte:component this={__component__} {...$$restProps}>
    <slot />
  </svelte:component>
</crown-component>
