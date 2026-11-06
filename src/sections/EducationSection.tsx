"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { REVEAL } from "@/lib/dom";
import { SectionLayout } from "@/layouts/SectionLayout";

import styles from "./EducationSection.module.scss";

export function EducationSection() {
  const { dict } = useLanguage();
  return (
    <SectionLayout id="education" title={dict.education.course} intro={dict.ui.educationIntro}>
      <p className={styles.line} {...REVEAL}>
        <span className={styles.institution}>{dict.education.institution}</span>
        <span aria-hidden="true" className={styles.dash}>
          —
        </span>
        <span className={styles.status}>{dict.education.status}</span>
      </p>
    </SectionLayout>
  );
}
