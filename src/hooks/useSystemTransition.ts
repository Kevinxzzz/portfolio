import { type RefObject, useEffect, useRef } from "react";

import { byAttr, DOM_ATTR, DOM_SELECTOR } from "@/lib/dom";
import { matches, NETWORK_QUERY } from "@/lib/media";
import {
  getOriginRatio,
  type OriginRatio,
  playEnter,
  playExit,
  playSwitch,
  type SystemElements,
} from "@/lib/transitions";
import type { SectionId, ViewId } from "@/types";

import { useReducedMotion } from "./useReducedMotion";

interface Params {
  view: ViewId;
  homeRef: RefObject<HTMLDivElement | null>;
  cameraRef: RefObject<HTMLElement | null>;
  overlayRef: RefObject<HTMLDivElement | null>;
}

/**
 * Reacts to view changes (URL hash) and plays the matching camera transition.
 * Rapid navigation completes the running timeline instantly before the next
 * one starts, so the DOM never gets stuck between two states.
 */
export function useSystemTransition({ view, homeRef, cameraRef, overlayRef }: Params): void {
  const reducedMotion = useReducedMotion();
  const previousView = useRef<ViewId>("core");
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const origin = useRef<OriginRatio>({ x: 0.5, y: 0.5 });
  const lastSection = useRef<SectionId | null>(null);

  useEffect(() => {
    const home = homeRef.current;
    const camera = cameraRef.current;
    const overlay = overlayRef.current;
    const from = previousView.current;

    if (!home || !camera || !overlay || from === view) return;
    previousView.current = view;

    timeline.current?.progress(1);

    const elements: SystemElements = { home, camera, overlay };
    const options = { elements, reducedMotion, isNetwork: matches(NETWORK_QUERY) };

    if (from === "core" && view !== "core") {
      const node = camera.querySelector<HTMLElement>(byAttr(DOM_ATTR.node, view));
      if (node) origin.current = getOriginRatio(camera, node);
      lastSection.current = view;
      timeline.current = playEnter(view, origin.current, options).eventCallback("onComplete", () =>
        focusHeading(overlay, view),
      );
    } else if (from !== "core" && view === "core") {
      timeline.current = playExit(from, origin.current, options).eventCallback("onComplete", () =>
        focusNode(camera, from),
      );
    } else if (from !== "core" && view !== "core") {
      lastSection.current = view;
      timeline.current = playSwitch(from, view, options).eventCallback("onComplete", () =>
        focusHeading(overlay, view),
      );
    }
  }, [view, reducedMotion, homeRef, cameraRef, overlayRef]);

  useEffect(() => () => void timeline.current?.kill(), []);
}

function focusHeading(overlay: HTMLElement, id: SectionId): void {
  const slot = overlay.querySelector(byAttr(DOM_ATTR.slot, id));
  slot?.querySelector<HTMLElement>(DOM_SELECTOR.heading)?.focus({ preventScroll: true });
}

function focusNode(camera: HTMLElement, id: SectionId): void {
  camera.querySelector<HTMLElement>(`${byAttr(DOM_ATTR.node, id)} a`)?.focus({ preventScroll: true });
}
