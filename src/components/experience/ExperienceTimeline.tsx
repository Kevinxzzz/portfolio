import { REVEAL } from "@/lib/dom";
import type { ExperienceEntry } from "@/types";

import styles from "./ExperienceTimeline.module.scss";

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
}

/**
 * Entries hang from the section rail. Optional fields (period, organization,
 * technologies, result) are rendered only when they exist in the data.
 */
export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <ol className={styles.timeline}>
      {entries.map((entry) => (
        <li key={entry.id} className={styles.entry} {...REVEAL}>
          <p className={styles.kind}>{entry.kind}</p>

          <div className={styles.content}>
            <h3 className={styles.role}>{entry.role}</h3>

            {(entry.organization || entry.period) && (
              <p className={styles.meta}>
                {entry.organization && <span>{entry.organization}</span>}
                {entry.period && <time>{entry.period}</time>}
              </p>
            )}

            <p className={styles.summary}>{entry.summary}</p>

            {entry.responsibilities.length > 0 && (
              <ul className={styles.responsibilities}>
                {entry.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {entry.technologies && entry.technologies.length > 0 && (
              <p className={styles.technologies}>{entry.technologies.join(" · ")}</p>
            )}

            {entry.result && <p className={styles.result}>{entry.result}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
