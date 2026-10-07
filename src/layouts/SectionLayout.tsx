import type { ReactNode } from "react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { DOM_ATTR, REVEAL } from "@/lib/dom";
import type { SectionId } from "@/types";
import { cn } from "@/utils/cn";
import { getSection } from "@/utils/sections";

import styles from "./SectionLayout.module.scss";

interface SectionLayoutProps {
  id: SectionId;
  title: string;
  /** Short, optional line under the title. */
  intro?: string;
  /** Oversized title, reserved for the closing statement. */
  large?: boolean;
  children: ReactNode;
}

/**
 * Shared frame of every section: label, `h2`, and the vertical rail that echoes
 * the node ↔ core connection. Sections stay visually different inside the body.
 */
export function SectionLayout({ id, title, intro, large = false, children }: SectionLayoutProps) {
  const { index, label } = getSection(id);
  const slotAttr = { [DOM_ATTR.slot]: id };
  const headingAttr = { [DOM_ATTR.heading]: "" };
  const titleId = `${id}-title`;

  return (
    <section {...slotAttr} aria-labelledby={titleId} className={styles.slot}>
      <div className={styles.frame}>
        <header className={styles.head} {...REVEAL}>
          <SectionLabel index={index} label={label} />
          <h2 id={titleId} tabIndex={-1} className={cn(styles.title, large && styles.large)}
            {...headingAttr}>
            {title}
          </h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </header>

        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
