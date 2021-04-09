
import { transformDocument } from "./morph";

export const prefetched = new Set();
export const pending = new Map();

export function preload(url) {
  if (prefetched.has(url)) {
    return;
  }

  let promise = fetch(url).then(function (response) {
    // When the page is loaded convert it to text
    return response.text();
  });

  pending.set(url, promise);
  promise.then(() => pending.delete(url));

  prefetched.add(url);
}

function getPendingResponse(url) {
  return pending.get(url);
}

export async function go(url) {
  const response = getPendingResponse(url) || fetch(url);
  window.history.pushState({}, "", url);

  const html = await (await response).text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  transformDocument(doc);
}