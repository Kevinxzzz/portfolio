import { REDUCED_MOTION_QUERY } from "@/lib/media";

import { useMediaQuery } from "./useMediaQuery";

export function useReducedMotion(): boolean {
  return useMediaQuery(REDUCED_MOTION_QUERY);
}
