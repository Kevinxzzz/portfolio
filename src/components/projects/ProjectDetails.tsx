import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";

import styles from "./ProjectDetails.module.scss";

interface ProjectDetailsProps {
  project: Project;
}

/** Summary, real features, and the stack as a connected column of layers. */
export function ProjectDetails({ project }: ProjectDetailsProps) {
  const hasLinks = Boolean(project.href || project.repository);

  return (
    <article className={styles.details} aria-label={project.name}>
      <p className={styles.kind}>{project.kind}</p>
      <p className={styles.summary}>{project.summary}</p>

      <section className={styles.block} aria-label="Características">
        <h4 className={styles.heading}>Características</h4>
        <ul className={styles.features}>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className={styles.block} aria-label="Tecnologias">
        <h4 className={styles.heading}>Tecnologias</h4>
        <ol className={styles.layers}>
          {project.layers.map((layer) => (
            <li key={layer.label} className={styles.layer}>
              <span className={styles.layerLabel}>{layer.label}</span>
              <span className={styles.layerItems}>{layer.items.join(" · ")}</span>
            </li>
          ))}
        </ol>
      </section>

      {hasLinks && (
        <div className={styles.links}>
          {project.href && (
            <Button href={project.href} target="_blank" rel="noopener noreferrer">
              View project
            </Button>
          )}
          {project.repository && (
            <Button
              href={project.repository}
              variant="line"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
