import gsap from "gsap";

import type { SectionId } from "@/types";

import { byAttr, DOM_ATTR, DOM_SELECTOR } from "./dom";
import { DURATION, EASE, STAGGER, ZOOM } from "./motion";

/**
 * CORE ⇄ SECTION camera transitions.
 *
 * The home "camera" is one DOM layer. To go to a section its transform-origin
 * is pinned on the chosen node and it is scaled up: the node holds its place
 * while the core is thrown off-screen, which *leads* the eye to the section.
 * The section layer then resolves from blur. Returning is the exact inverse.
 *
 * Invariants once a section is open: camera, chrome and node/wire elements
 * carry inline `opacity: 0; visibility: hidden`. Going back to the core clears
 * every inline property, so CSS is the single source of truth at rest.
 */

export interface SystemElements {
  home: HTMLElement;
  camera: HTMLElement;
  overlay: HTMLElement;
}

export interface TransitionOptions {
  elements: SystemElements;
  reducedMotion: boolean;
  isNetwork: boolean;
}

export interface OriginRatio {
  x: number;
  y: number;
}

const all = (root: ParentNode, selector: string): HTMLElement[] =>
  Array.from(root.querySelectorAll<HTMLElement>(selector));

const slotOf = (overlay: HTMLElement, id: SectionId): HTMLElement => {
  const slot = overlay.querySelector<HTMLElement>(byAttr(DOM_ATTR.slot, id));
  if (!slot) throw new Error(`Missing slot for section "${id}"`);
  return slot;
};

const revealsOf = (slot: HTMLElement): HTMLElement[] => all(slot, DOM_SELECTOR.reveal);

function showOnlySlot(overlay: HTMLElement, id: SectionId | null): void {
  all(overlay, DOM_SELECTOR.slot).forEach((slot) => {
    slot.style.display = slot.getAttribute(DOM_ATTR.slot) === id ? "block" : "none";
  });
}

/** Centre of an element expressed as a ratio of the camera box (transform-independent). */
export function getOriginRatio(camera: HTMLElement, target: HTMLElement): OriginRatio {
  const cameraBox = camera.getBoundingClientRect();
  const targetBox = target.getBoundingClientRect();

  return {
    x: (targetBox.left + targetBox.width / 2 - cameraBox.left) / cameraBox.width,
    y: (targetBox.top + targetBox.height / 2 - cameraBox.top) / cameraBox.height,
  };
}

function pinOrigin({ camera }: SystemElements, origin: OriginRatio): void {
  gsap.set(camera, {
    transformOrigin: `${origin.x * camera.offsetWidth}px ${origin.y * camera.offsetHeight}px`,
  });
}

function partition(camera: HTMLElement, id: SectionId) {
  const nodes = all(camera, DOM_SELECTOR.node);
  const wires = all(camera, DOM_SELECTOR.wire);
  const isTarget = (el: HTMLElement, attr: string) => el.getAttribute(attr) === id;

  return {
    targetWire: wires.find((el) => isTarget(el, DOM_ATTR.wire)),
    others: [
      ...nodes.filter((el) => !isTarget(el, DOM_ATTR.node)),
      ...wires.filter((el) => !isTarget(el, DOM_ATTR.wire)),
    ],
    everything: [...nodes, ...wires],
  };
}

/* ------------------------------------------------------------------ enter */

export function playEnter(
  id: SectionId,
  origin: OriginRatio,
  { elements, reducedMotion, isNetwork }: TransitionOptions,
): gsap.core.Timeline {
  const { home, camera, overlay } = elements;
  const chrome = all(home, DOM_SELECTOR.chrome);
  const slot = slotOf(overlay, id);
  const { targetWire, others } = partition(camera, id);

  showOnlySlot(overlay, id);
  overlay.scrollTop = 0;

  const tl = gsap.timeline();

  if (reducedMotion) {
    return tl
      .set(chrome, { autoAlpha: 0 }, 0)
      .to(camera, { autoAlpha: 0, duration: DURATION.quick }, 0)
      .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: DURATION.quick }, 0);
  }

  pinOrigin(elements, origin);
  targetWire?.setAttribute("data-target", "true");

  gsap.set(overlay, { autoAlpha: 0, scale: 1.06, filter: "blur(10px)", transformOrigin: "50% 35%" });
  gsap.set(revealsOf(slot), { autoAlpha: 0, y: 28 });

  return tl
    .to(chrome, { autoAlpha: 0, duration: DURATION.chrome, ease: EASE.soft }, 0)
    .to(others, { autoAlpha: 0, duration: DURATION.fade, ease: EASE.soft, stagger: STAGGER.nodes }, 0)
    .to(
      camera,
      { scale: isNetwork ? ZOOM.network : ZOOM.compact, duration: DURATION.camera, ease: EASE.camera },
      0.05,
    )
    .to(camera, { autoAlpha: 0, duration: 0.5, ease: EASE.in }, 0.68)
    .to(
      overlay,
      {
        autoAlpha: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: DURATION.resolve,
        ease: EASE.out,
        clearProps: "filter,transform",
      },
      0.62,
    )
    .to(
      revealsOf(slot),
      {
        autoAlpha: 1,
        y: 0,
        duration: DURATION.reveal,
        ease: EASE.out,
        stagger: STAGGER.reveal,
        clearProps: "transform",
      },
      0.85,
    );
}

/* ------------------------------------------------------------------- exit */

export function playExit(
  id: SectionId,
  origin: OriginRatio,
  { elements, reducedMotion, isNetwork }: TransitionOptions,
): gsap.core.Timeline {
  const { home, camera, overlay } = elements;
  const chrome = all(home, DOM_SELECTOR.chrome);
  const { everything, targetWire, others } = partition(camera, id);

  const restore = () => {
    gsap.set([camera, ...chrome, ...everything], { clearProps: "all" });
    targetWire?.removeAttribute("data-target");
    gsap.set(overlay, { clearProps: "all" });
    showOnlySlot(overlay, null);
  };

  const tl = gsap.timeline({ onComplete: restore });

  if (reducedMotion) {
    return tl
      .to(overlay, { autoAlpha: 0, duration: DURATION.quick }, 0)
      .to(camera, { autoAlpha: 1, duration: DURATION.quick }, 0)
      .to(chrome, { autoAlpha: 1, duration: DURATION.quick }, 0);
  }

  pinOrigin(elements, origin);
  gsap.set(camera, { scale: isNetwork ? ZOOM.network : ZOOM.compact, autoAlpha: 0 });

  return tl
    .to(
      overlay,
      { autoAlpha: 0, scale: 1.04, filter: "blur(8px)", duration: 0.5, ease: EASE.in, transformOrigin: "50% 35%" },
      0,
    )
    .to(camera, { autoAlpha: 1, duration: 0.5, ease: EASE.soft }, 0.12)
    .to(camera, { scale: 1, duration: DURATION.camera, ease: EASE.camera }, 0.12)
    .to(others, { autoAlpha: 1, duration: DURATION.fade, ease: EASE.soft, stagger: STAGGER.nodes }, 0.7)
    .to(chrome, { autoAlpha: 1, duration: DURATION.fade, ease: EASE.soft }, 0.8);
}

/* ----------------------------------------------------------------- switch */

export function playSwitch(
  from: SectionId,
  to: SectionId,
  { elements, reducedMotion }: TransitionOptions,
): gsap.core.Timeline {
  const { overlay } = elements;
  const fromSlot = slotOf(overlay, from);
  const toSlot = slotOf(overlay, to);
  const incoming = revealsOf(toSlot);

  const tl = gsap.timeline();

  tl.to(fromSlot, {
    autoAlpha: 0,
    y: reducedMotion ? 0 : -14,
    duration: reducedMotion ? 0.12 : 0.28,
    ease: EASE.in,
    onComplete: () => {
      gsap.set(fromSlot, { clearProps: "all" });
      showOnlySlot(overlay, to);
      overlay.scrollTop = 0;
      gsap.set(incoming, { autoAlpha: 0, y: reducedMotion ? 0 : 24 });
    },
  });

  return tl.to(incoming, {
    autoAlpha: 1,
    y: 0,
    duration: reducedMotion ? 0.2 : DURATION.reveal,
    ease: EASE.out,
    stagger: reducedMotion ? 0 : STAGGER.reveal,
    clearProps: "transform",
  });
}
