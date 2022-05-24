// Allows us to dynamically import image assets
// https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
export function getAssetUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
