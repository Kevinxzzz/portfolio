import { useLanguage, type Language } from "@/i18n/LanguageContext";
import { REVEAL } from "@/lib/dom";
import type { Project } from "@/types";
import { cn } from "@/utils/cn";

import styles from "./StackUsage.module.scss";

interface StackUsageProps {
  projects: Project[];
  activeTechnology: string | null;
  /** Projects that really use `activeTechnology` (derived from data/projects.ts). */
  usedBy: Project[];
}

function describe(activeTechnology: string | null, usedBy: Project[], language: Language): string {
  if (language === "en") {
    if (!activeTechnology) return "Select a technology to see where it is used.";
    if (usedBy.length === 0) return `${activeTechnology} — outside featured projects.`;
    return `${activeTechnology} — used in:`;
  }
  if (!activeTechnology) return "Selecione uma tecnologia para ver onde ela é usada.";
  if (usedBy.length === 0) return `${activeTechnology} — fora dos projetos em destaque.`;
  return `${activeTechnology} — usada em:`;
}

/** Cross-reference: projects light up when a technology they use is selected. */
export function StackUsage({ projects, activeTechnology, usedBy }: StackUsageProps) {
  const { language } = useLanguage();
  return (
    <div id="stack-usage" className={styles.usage} aria-live="polite" {...REVEAL}>
      <p className={styles.caption}>{describe(activeTechnology, usedBy, language)}</p>
      <ul className={styles.projects}>
        {projects.map((project) => (
          <li key={project.id} className={cn(styles.project, usedBy.includes(project) && styles.lit)}>
            <span className={styles.dot} aria-hidden="true" />
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
