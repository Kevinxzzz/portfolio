import { DOM_ATTR } from "@/lib/dom";
import { CORE_POSITION } from "@/data/sections";
import type { SectionMeta } from "@/types";

import styles from "./CoreConnections.module.scss";

interface CoreConnectionProps {
  section: SectionMeta;
  active: boolean;
}

/** One hairline from the core to a node. Coordinates are percentages of the stage. */
export function CoreConnection({ section, active }: CoreConnectionProps) {
  const wireAttr = { [DOM_ATTR.wire]: section.id };

  return (
    <line
      {...wireAttr}
      className={styles.wire}
      data-active={active}
      x1={CORE_POSITION.x}
      y1={CORE_POSITION.y}
      x2={section.position.x}
      y2={section.position.y}
    />
  );
}
