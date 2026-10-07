import { education } from "@/data/education";
import { REVEAL } from "@/lib/dom";
import { SectionLayout } from "@/layouts/SectionLayout";

import styles from "./EducationSection.module.scss";

export function EducationSection() {
  return (
    <SectionLayout id="education" title={education.course}>
      <p className={styles.line} {...REVEAL}>
        <span className={styles.institution}>{education.institution}</span>
        <span aria-hidden="true" className={styles.dash}>
          —
        </span>
        <span className={styles.status}>{education.status}</span>
      </p>
    </SectionLayout>
  );
}
