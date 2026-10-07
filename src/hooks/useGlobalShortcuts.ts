import { useEffect } from "react";

import { SECTIONS } from "@/data/sections";
import { openSection, returnToCore } from "@/lib/navigation-store";

/** 1–6 open a node, Esc returns to the core. Ignored while typing or with modifiers. */
export function useGlobalShortcuts(): void {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) return;

      if (event.key === "Escape") {
        returnToCore();
        return;
      }

      const section = SECTIONS[Number(event.key) - 1];
      if (section) openSection(section.id);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
}
