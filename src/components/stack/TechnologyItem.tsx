import { cn } from "@/utils/cn";

import styles from "./TechnologyItem.module.scss";

interface TechnologyItemProps {
  name: string;
  active: boolean;
  onSelect: (name: string | null) => void;
}

/**
 * A technology. Hover (mouse), focus (keyboard) and click (touch / Safari, which
 * does not focus buttons) all select it — no pinned state to get stuck.
 */
export function TechnologyItem({ name, active, onSelect }: TechnologyItemProps) {
  return (
    <button
      type="button"
      className={cn(styles.item, active && styles.active)}
      aria-describedby="stack-usage"
      onPointerEnter={(event) => event.pointerType === "mouse" && onSelect(name)}
      onPointerLeave={(event) => event.pointerType === "mouse" && onSelect(null)}
      onFocus={() => onSelect(name)}
      onBlur={() => onSelect(null)}
      onClick={() => onSelect(name)}
    >
      <span className={styles.dot} aria-hidden="true" />
      <span>{name}</span>
    </button>
  );
}
