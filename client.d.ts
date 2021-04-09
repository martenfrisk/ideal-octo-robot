declare module "$crown-components" {
  type Modules = { [key: string]: () => Promise<any> };
  export default {} as Modules;
}

declare module "*.svelte?mount" {}
declare module "*.svelte?mount?eager" {}
declare module "*.svelte?mount?lazy" {}
