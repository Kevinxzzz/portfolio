import { REVEAL } from "@/lib/dom";
import type { StackGroup as StackGroupData } from "@/types";

import styles from "./StackGroup.module.scss";
import { TechnologyItem } from "./TechnologyItem";

interface StackGroupProps {
  group: StackGroupData;
  activeTechnology: string | null;
  onSelect: (name: string | null) => void;
}

/** A function-based group of technologies (Frontend, Backend, …). */
export function StackGroup({ group, activeTechnology, onSelect }: StackGroupProps) {
  return (
    <div className={styles.group} {...REVEAL}>
      <h3 className={styles.label}>{group.label}</h3>
      <ul>
        {group.items.map((name) => (
          <li key={name} className={styles.row}>
            <TechnologyItem name={name} active={activeTechnology === name} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
}
