"use client";

import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { useLanguage } from "@/i18n/LanguageContext";
import { REVEAL } from "@/lib/dom";
import { SectionLayout } from "@/layouts/SectionLayout";

import styles from "./ExperienceSection.module.scss";

export function ExperienceSection() {
  const { dict } = useLanguage();
  return (
    <SectionLayout id="experience" title={dict.ui.experienceTitle} intro={dict.ui.experienceIntro}>
      <ExperienceTimeline entries={dict.experience} />

      <div className={styles.practices} {...REVEAL}>
        <h3 className={styles.heading}>Working practices</h3>
        <ul className={styles.list}>
          {dict.workingPractices.map((practice) => (
            <li key={practice}>{practice}</li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}
