/** Motion tokens for GSAP. CSS counterparts live in styles/_tokens.scss. */
export const EASE = {
  out: "power3.out",
  soft: "power2.out",
  in: "power2.in",
  camera: "expo.inOut",
} as const;

export const DURATION = {
  chrome: 0.3,
  fade: 0.45,
  camera: 1.15,
  resolve: 0.85,
  reveal: 0.8,
  quick: 0.25,
} as const;

export const STAGGER = {
  reveal: 0.07,
  nodes: 0.03,
} as const;

/** How far the camera pushes towards the chosen node. */
export const ZOOM = {
  network: 4.2,
  compact: 3,
} as const;
