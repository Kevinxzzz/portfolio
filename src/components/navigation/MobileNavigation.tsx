import { SECTIONS } from "@/data/sections";
import { sectionClickHandler } from "@/lib/navigation-store";
import { useLanguage } from "@/i18n/LanguageContext";
import type { ViewId } from "@/types";

import styles from "./MobileNavigation.module.scss";

interface MobileNavigationProps {
  view: ViewId;
}

/** Thumb-reach bar of the six indices. Replaces the top links below `md`. */
export function MobileNavigation({ view }: MobileNavigationProps) {
  const { dict } = useLanguage();

  return (
    <nav aria-label="Sections" className={styles.bar}>
      <ul className={styles.list}>
        {SECTIONS.map((section) => {
          const label = dict.sections.find((s) => s.id === section.id)?.label || section.label;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={styles.link}
                aria-label={`${section.index} — ${label}`}
                aria-current={view === section.id ? "page" : undefined}
                onClick={sectionClickHandler(section.id)}
              >
                {section.index}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
