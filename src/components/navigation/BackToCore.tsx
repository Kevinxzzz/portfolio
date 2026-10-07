"use client";

import { returnToCore } from "@/lib/navigation-store";

import styles from "./BackToCore.module.scss";

/** Always-visible way home: runs the inverse of the camera transition. */
export function BackToCore() {
  return (
    <button type="button" className={styles.back} onClick={returnToCore}>
      <span className={styles.arrow} aria-hidden="true">
        ←
      </span>
      <span>Return to core</span>
      <kbd className={styles.key} aria-hidden="true">
        Esc
      </kbd>
    </button>
  );
}
