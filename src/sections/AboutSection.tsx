import { aboutStatements, profile } from "@/data/profile";
import { REVEAL } from "@/lib/dom";
import { SectionLayout } from "@/layouts/SectionLayout";

import styles from "./AboutSection.module.scss";

export function AboutSection() {
  return (
    <SectionLayout id="about" title={profile.fullName}>
      <dl className={styles.statements}>
        {aboutStatements.map((statement) => (
          <div key={statement.key} className={styles.row} {...REVEAL}>
            <dt className={styles.key}>{statement.key}</dt>
            <dd className={styles.text}>{statement.text}</dd>
          </div>
        ))}
      </dl>
    </SectionLayout>
  );
}
