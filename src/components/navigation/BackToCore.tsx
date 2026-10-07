"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { returnToCore } from "@/lib/navigation-store";

import styles from "./BackToCore.module.scss";

/** Always-visible way home: runs the inverse of the camera transition. */
export function BackToCore() {
  const { dict } = useLanguage();
  return (
    <button type="button" className={styles.back} onClick={returnToCore}>
      <span className={styles.arrow} aria-hidden="true">
        ←
      </span>
      <span>{dict.ui.backToCore}</span>
      <kbd className={styles.key} aria-hidden="true">
        Esc
      </kbd>
    </button>
  );
}
