import { preload, go } from "./router";

let mouseoverTimer;
let isTouching = false;
let delayOnHover = 65;

const eventListenersOptions = {
  capture: true,
  passive: true,
};

document.addEventListener(
  "touchstart",
  touchstartListener,
  eventListenersOptions
);
document.addEventListener("touchend", touchendListener, eventListenersOptions);
document.addEventListener(
  "touchcancel",
  touchendListener,
  eventListenersOptions
);

document.addEventListener(
  "mouseover",
  mouseoverListener,
  eventListenersOptions
);

function touchstartListener(event) {
  const linkElement = event.target.closest("a");
  isTouching = true;

  if (shouldPreload(linkElement)) {
    preload(linkElement.href);
  }
}

function touchendListener() {
  isTouching = false;
}

function mouseoverListener(event) {
  const linkElement = event.target.closest("a");

  if (isTouching || !shouldPreload(linkElement)) {
    return;
  }

  linkElement.addEventListener("mouseout", mouseoutListener, {
    passive: true,
  });

  mouseoverTimer = setTimeout(() => {
    preload(linkElement.href);
    mouseoverTimer = undefined;
  }, delayOnHover);
}

function mouseoutListener(event) {
  if (
    event.relatedTarget &&
    event.target.closest("a") == event.relatedTarget.closest("a")
  ) {
    return;
  }

  if (mouseoverTimer) {
    clearTimeout(mouseoverTimer);
    mouseoverTimer = undefined;
  }
}

function shouldPreload(linkElement) {
  if (
    !linkElement?.href ||
    linkElement.protocol !== "https:" ||
    linkElement.origin !== location.origin
  ) {
    return false;
  }

  if (
    linkElement.hash &&
    linkElement.pathname + linkElement.search ===
      location.pathname + location.search
  ) {
    return false;
  }

  return true;
}

document.addEventListener("click", async function (event) {
  const link = (event.target as HTMLElement).closest("a");

  if (link) {
    event.preventDefault();
    go(link.href)
  }
});
