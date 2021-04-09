import morphdom from "morphdom";
import { attach, detach, update } from "./hydrate";

export function transformDocument(target: Document) {
  morphdom(document.documentElement, target.documentElement, {
    onNodeAdded(node) {
      if (node.nodeName === "CROWN-COMPONENT") {
        attach(node as HTMLElement);
      }
      return node;
    },
    onBeforeElUpdated(fromEl, toEl) {
      if (
        fromEl.nodeName === "CROWN-COMPONENT" &&
        toEl.nodeName === "CROWN-COMPONENT"
      ) {
        if (
          fromEl.getAttribute("data-component") ===
          toEl.getAttribute("data-component")
        ) {
          update(fromEl, toEl);
        } else {
          fromEl.parentNode.replaceChild(toEl, fromEl);
          detach(fromEl);
          attach(toEl);
        }
        // Prevent morphdom from touching the component
        return false;
      }
      return true;
    },
    onBeforeElChildrenUpdated(fromEl, toEl) {
      // Prevent morphdom from touching the component children
      return !(
        fromEl.nodeName === "CROWN-COMPONENT" &&
        toEl.nodeName === "CROWN-COMPONENT"
      );
    },
    onBeforeNodeDiscarded(node) {
      if (node.nodeName === "CROWN-COMPONENT") {
        detach(node as HTMLElement);
      }
      return true;
    },
  });
}
