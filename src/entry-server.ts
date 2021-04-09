import App from './App.svelte'

export async function render(
  url: string,
  manifest: any
): Promise<[string, string]> {
  // @ts-ignore
  return App.render({
    name: 'world'
  });
}