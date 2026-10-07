"use client";

import { useState } from "react";

import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { DETAIL_PANE_ID, ProjectList } from "@/components/projects/ProjectList";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SectionLayout } from "@/layouts/SectionLayout";
import { SPLIT_QUERY } from "@/lib/media";
import { useLanguage } from "@/i18n/LanguageContext";

import styles from "./ProjectsSection.module.scss";

export function ProjectsSection() {
  const { dict } = useLanguage();
  const split = useMediaQuery(SPLIT_QUERY);
  const [selectedId, setSelectedId] = useState<string | null>(dict.projects[0]?.id ?? null);

  // The split view always shows something; the accordion may be fully closed.
  const selected = dict.projects.find((project) => project.id === selectedId) ?? (split ? dict.projects[0] : undefined);

  const handleSelect = (id: string, source: "pointer" | "click") => {
    setSelectedId((current) => (source === "click" && !split && current === id ? null : id));
  };

  return (
    <SectionLayout id="projects" title={dict.ui.projectsTitle} intro={dict.ui.projectsIntro}>
      <div className={styles.layout}>
        <ProjectList
          projects={dict.projects}
          selectedId={selected?.id ?? null}
          inline={!split}
          onSelect={handleSelect}
        />

        {split && (
          <aside id={DETAIL_PANE_ID} className={styles.pane} aria-label={dict.ui.projectDetails}>
            {dict.projects.map((project) => {
              const isSelected = project.id === (selected?.id ?? dict.projects[0]?.id);
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
