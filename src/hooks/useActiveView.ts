import { useSyncExternalStore } from "react";

import {
  getServerViewSnapshot,
  getViewSnapshot,
  subscribeToView,
} from "@/lib/navigation-store";
import type { ViewId } from "@/types";

export function useActiveView(): ViewId {
  return useSyncExternalStore(subscribeToView, getViewSnapshot, getServerViewSnapshot);
}
