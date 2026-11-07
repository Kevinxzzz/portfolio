"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { REVEAL } from "@/lib/dom";
import { SectionLayout } from "@/layouts/SectionLayout";

import styles from "./EducationSection.module.scss";

export function EducationSection() {
  const { dict } = useLanguage();

  return (
    <SectionLayout id="education" title={dict.ui.educationTitle} intro={dict.ui.educationIntro}>
      <ul className={styles.list}>
        {dict.education.map((item, index) => {
          const order = String(index + 1).padStart(2, "0");

          return (
            <li key={item.id} className={styles.item} {...REVEAL}>
              <div className={styles.kind}>
                <span className={styles.index}>{order}</span>
                <span aria-hidden="true" className={styles.sep}>
                  —
                </span>
                <span>{item.kind}</span>
              </div>

              <div className={styles.main}>
                <h3 className={styles.course}>{item.course}</h3>
                {item.institution && (
                  <p className={styles.institution}>{item.institution}</p>
                )}
              </div>

              <div className={styles.status}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span>{item.status}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </SectionLayout>
  );
}
