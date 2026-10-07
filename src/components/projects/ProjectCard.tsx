import type { Project } from "@/types";
import { cn } from "@/utils/cn";

import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: Project;
  index: string;
  selected: boolean;
  /** Id of the element this row reveals (inline panel or the shared detail pane). */
  controls: string;
  onSelect: (id: string, source: "pointer" | "click") => void;
}

/** A typographic row, not a card: the name is the interface. */
export function ProjectCard({ project, index, selected, controls, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      className={cn(styles.row, selected && styles.selected)}
      aria-expanded={selected}
      aria-controls={controls}
      onClick={() => onSelect(project.id, "click")}
      onPointerEnter={(event) => event.pointerType === "mouse" && onSelect(project.id, "pointer")}
    >
      <span className={styles.index}>{index}</span>
      <span className={styles.name}>{project.name}</span>
      <span className={styles.kind}>{project.kind}</span>
    </button>
  );
}
