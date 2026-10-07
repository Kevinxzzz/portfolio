import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { experience, workingPractices } from "@/data/experience";
import { REVEAL } from "@/lib/dom";
import { SectionLayout } from "@/layouts/SectionLayout";

import styles from "./ExperienceSection.module.scss";

export function ExperienceSection() {
  return (
    <SectionLayout id="experience" title="Experience" intro="Trajetória profissional.">
      <ExperienceTimeline entries={experience} />

      <div className={styles.practices} {...REVEAL}>
        <h3 className={styles.heading}>Práticas de trabalho</h3>
        <ul className={styles.list}>
          {workingPractices.map((practice) => (
            <li key={practice}>{practice}</li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}
