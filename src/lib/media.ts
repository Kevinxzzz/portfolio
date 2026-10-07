/** Keep NETWORK_QUERY in sync with `$network-min-*` in styles/_mixins.scss. */
export const NETWORK_QUERY = "(min-width: 768px) and (min-height: 640px)";
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
export const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
export const DESKTOP_QUERY = "(min-width: 1024px)";
/** Projects switch from accordion to list + detail pane. Keep in sync with `$split` in ProjectsSection styles. */
export const SPLIT_QUERY = "(min-width: 900px)";

export function matches(query: string): boolean {
  return typeof window !== "undefined" && window.matchMedia(query).matches;
}
