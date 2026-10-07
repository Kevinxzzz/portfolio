"use client";

import { useState } from "react";

import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { DETAIL_PANE_ID, ProjectList } from "@/components/projects/ProjectList";
import { projects } from "@/data/projects";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SectionLayout } from "@/layouts/SectionLayout";
import { SPLIT_QUERY } from "@/lib/media";

import styles from "./ProjectsSection.module.scss";

export function ProjectsSection() {
  const split = useMediaQuery(SPLIT_QUERY);
  const [selectedId, setSelectedId] = useState<string | null>(projects[0]?.id ?? null);

  // The split view always shows something; the accordion may be fully closed.
  const selected = projects.find((project) => project.id === selectedId) ?? (split ? projects[0] : undefined);

  const handleSelect = (id: string, source: "pointer" | "click") => {
    setSelectedId((current) => (source === "click" && !split && current === id ? null : id));
  };

  return (
    <SectionLayout id="projects" title="Projects" intro="Projetos em destaque.">
      <div className={styles.layout}>
        <ProjectList
          projects={projects}
          selectedId={selected?.id ?? null}
          inline={!split}
          onSelect={handleSelect}
        />

        {split && (
          <aside id={DETAIL_PANE_ID} className={styles.pane} aria-label="Detalhes do projeto">
            {projects.map((project) => {
              const isSelected = project.id === (selected?.id ?? projects[0]?.id);
              return (
                <div
                  key={project.id}
                  className={styles.paneItem}
                  data-selected={isSelected}
                  aria-hidden={!isSelected}
                >
                  <ProjectDetails project={project} />
                </div>
              );
            })}
          </aside>
        )}
      </div>
    </SectionLayout>
  );
}
