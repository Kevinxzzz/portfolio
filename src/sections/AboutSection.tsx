"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { REVEAL } from "@/lib/dom";
import { SectionLayout } from "@/layouts/SectionLayout";

import styles from "./AboutSection.module.scss";

export function AboutSection() {
  const { dict } = useLanguage();
  return (
    <SectionLayout id="about" title={dict.ui.aboutTitle}>
      <dl className={styles.statements}>
        {dict.aboutStatements.map((statement) => (
          <div key={statement.key} className={styles.row} {...REVEAL}>
            <dt className={styles.key}>{statement.key}</dt>
            <dd className={styles.text}>{statement.text}</dd>
          </div>
        ))}
      </dl>
    </SectionLayout>
  );
}
