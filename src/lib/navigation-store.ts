import type { MouseEvent } from "react";

import type { SectionId, ViewId } from "@/types";
import { viewFromHash } from "@/utils/sections";

/**
 * Tiny external store: the current view lives in the URL hash (`#projects`),
 * so deep links and the browser's back/forward buttons drive the very same
 * transitions as the UI.
 *
 * History model: entering the system from the core pushes ONE entry; moving
 * between sections replaces it. "Return to core" therefore equals Back.
 */
type Listener = () => void;

const HISTORY_MARKER = { portfolio: true } as const;
const listeners = new Set<Listener>();
let popstateAttached = false;

function emit(): void {
  listeners.forEach((listener) => listener());
}

function hasMarker(): boolean {
  return (window.history.state as { portfolio?: boolean } | null)?.portfolio === true;
}

export function subscribeToView(listener: Listener): () => void {
  listeners.add(listener);

  if (!popstateAttached) {
    window.addEventListener("popstate", emit);
    popstateAttached = true;
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("popstate", emit);
      popstateAttached = false;
    }
  };
}

export function getViewSnapshot(): ViewId {
  return viewFromHash(window.location.hash);
}

export function getServerViewSnapshot(): ViewId {
  return "core";
}

export function openSection(id: SectionId): void {
  if (getViewSnapshot() === id) return;

  if (getViewSnapshot() === "core") {
    window.history.pushState(HISTORY_MARKER, "", `#${id}`);
  } else {
    window.history.replaceState(window.history.state, "", `#${id}`);
  }
  emit();
}

function isPlainLeftClick(event: MouseEvent): boolean {
  return event.button === 0 && !(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey);
}

/** onClick for `<a href="#id">`: plain clicks run the transition, modified clicks keep native behaviour. */
export function sectionClickHandler(id: SectionId) {
  return (event: MouseEvent<HTMLElement>): void => {
    if (!isPlainLeftClick(event)) return;
    event.preventDefault();
    openSection(id);
  };
}

export function returnToCore(): void {
  if (getViewSnapshot() === "core") return;

  if (hasMarker()) {
    window.history.back(); // popstate -> emit
    return;
  }

  window.history.replaceState(null, "", window.location.pathname + window.location.search);
  emit();
}
