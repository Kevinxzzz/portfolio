/**
 * Data-attribute hooks shared between components (markup) and the GSAP
 * transitions (behaviour). Centralised so neither side hard-codes strings.
 */
export const DOM_ATTR = {
  node: "data-node",
  wire: "data-wire",
  chrome: "data-chrome",
  slot: "data-slot",
  reveal: "data-reveal",
  heading: "data-section-heading",
} as const;

export const DOM_SELECTOR = {
  node: `[${DOM_ATTR.node}]`,
  wire: `[${DOM_ATTR.wire}]`,
  chrome: `[${DOM_ATTR.chrome}]`,
  slot: `[${DOM_ATTR.slot}]`,
  reveal: `[${DOM_ATTR.reveal}]`,
  heading: `[${DOM_ATTR.heading}]`,
} as const;

export function byAttr(attribute: string, value: string): string {
  return `[${attribute}="${value}"]`;
}

/** Spread on any block that should stagger in when its section opens: `<div {...REVEAL}>`. */
export const REVEAL = { [DOM_ATTR.reveal]: "" } as const;
