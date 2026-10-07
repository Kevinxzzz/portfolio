import type { Project } from "@/types";

import { ProjectCard } from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails";
import styles from "./ProjectList.module.scss";

interface ProjectListProps {
  projects: Project[];
  selectedId: string | null;
  /** Accordion mode: details open inline under the selected row. */
  inline: boolean;
  onSelect: (id: string, source: "pointer" | "click") => void;
}

export const DETAIL_PANE_ID = "project-details";

export function ProjectList({ projects, selectedId, inline, onSelect }: ProjectListProps) {
  return (
    <ul className={styles.list}>
      {projects.map((project, position) => {
        const selected = project.id === selectedId;
        const panelId = inline ? `project-panel-${project.id}` : DETAIL_PANE_ID;

        return (
          <li key={project.id} className={styles.item}>
            <ProjectCard
              project={project}
              index={String(position + 1).padStart(2, "0")}
              selected={selected}
              controls={panelId}
              onSelect={onSelect}
            />
            {inline && selected && (
              <div id={panelId} className={styles.panel}>
                <ProjectDetails project={project} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
