import { SECTIONS } from "@/data/sections";
import { sectionClickHandler } from "@/lib/navigation-store";
import type { ViewId } from "@/types";

import { BackToCore } from "./BackToCore";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  view: ViewId;
}

/** Sticky top bar of an open section: return to core + jump to any other node. */
export function Navigation({ view }: NavigationProps) {
  return (
    <header className={styles.bar}>
      <BackToCore />

      <nav aria-label="Sections" className={styles.nav}>
        <ul className={styles.list}>
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={styles.link}
                aria-current={view === section.id ? "page" : undefined}
                onClick={sectionClickHandler(section.id)}
              >
                <span className={styles.index}>{section.index}</span>
                <span>{section.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
