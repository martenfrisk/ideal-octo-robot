// import lazyComponents from "$crown-components";
const lazyComponents = {"./Lazy.svelte": () => import("../lib/Lazy.svelte")}
const instances = new WeakMap();

export function init() {
  document.querySelectorAll("crown-component").forEach(attach);
}

export function attach(el: HTMLElement) {
  const component = el.dataset.component;
  const props = JSON.parse(el.dataset.props);
  const promise = lazyComponents[component]();
  const instance = promise.then(
    ({ default: Component }) =>
      new Component({
        target: el,
        props,
        hydrate: true,
      })
  );

  instances.set(el, instance);
}

export function detach(el: HTMLElement) {
  const promise = instances.get(el);
  if (!promise) {
    console.error("Cant fint matching instance for ", el);
    return;
  }

  promise.then((instance) => instance.$destroy());
}

export function update(current: HTMLElement, next: HTMLElement) {
  const promise = instances.get(current);
  if (!promise) {
    console.error("Cant fint matching instance for ", current);
    return;
  }

  promise.then((instance) => instance.$set(JSON.parse(next.dataset.props)));
}
