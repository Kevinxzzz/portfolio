import type { SectionMeta } from "@/types";

/**
 * Sections of the system and where their node sits on the stage (percent).
 * Positions are intentionally irregular so the network reads as composed
 * rather than as a template. Labels sit on the outer side of each node, so
 * keep nodes with `x < 50` away from the left edge and `x > 50` from the right.
 */
export const SECTIONS: readonly SectionMeta[] = [
  { id: "about", index: "01", label: "About", position: { x: 20, y: 19 } },
  { id: "stack", index: "02", label: "Stack", position: { x: 77, y: 13 } },
  { id: "projects", index: "03", label: "Projects", position: { x: 90, y: 49 } },
  { id: "experience", index: "04", label: "Experience", position: { x: 83, y: 85 } },
  { id: "education", index: "05", label: "Education", position: { x: 17, y: 89 } },
  { id: "contact", index: "06", label: "Contact", position: { x: 9, y: 57 } },
] as const;

export const CORE_POSITION = { x: 50, y: 50 } as const;
