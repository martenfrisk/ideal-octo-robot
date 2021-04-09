import Root from "./root.svelte";

export function patch(__component__, __module__, __mode__) {
  if (!(Root as any).$$render || !__component__.$$render) {
    console.log({__component__})
    
    throw new Error("Invalid SSR component");
  }

  let render = (Root as any).$$render;

  function $$render(result, props, bindings, slots) {
    return render(
      result,
      { ...props, __module__, __component__, __mode__ },
      bindings,
      slots
    );
  }

  return { ...(Root as any), $$render };
}
