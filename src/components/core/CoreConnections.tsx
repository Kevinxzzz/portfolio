import { SECTIONS } from "@/data/sections";
import type { SectionId } from "@/types";

import { CoreConnection } from "./CoreConnection";
import styles from "./CoreConnections.module.scss";

interface CoreConnectionsProps {
  activeId: SectionId | null;
}

export function CoreConnections({ activeId }: CoreConnectionsProps) {
  return (
    <svg
      className={styles.canvas}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {SECTIONS.map((section) => (
        <CoreConnection key={section.id} section={section} active={activeId === section.id} />
      ))}
    </svg>
  );
}
