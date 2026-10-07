import type { CSSProperties } from "react";

import { sectionClickHandler } from "@/lib/navigation-store";
import { useLanguage } from "@/i18n/LanguageContext";
import { DOM_ATTR } from "@/lib/dom";
import type { SectionMeta } from "@/types";

import styles from "./CoreNode.module.scss";

interface CoreNodeProps {
  section: SectionMeta;
  order: number;
  active: boolean;
  onActiveChange: (active: boolean) => void;
}

type NodeStyle = CSSProperties & Record<"--x" | "--y" | "--i", number>;

/** A connected area of the portfolio. The link, not the wrapper, receives focus. */
export function CoreNode({ section, order, active, onActiveChange }: CoreNodeProps) {
  const { dict } = useLanguage();
  const nodeAttr = { [DOM_ATTR.node]: section.id };
  const style: NodeStyle = {
    "--x": section.position.x,
    "--y": section.position.y,
    "--i": order,
  };
  const side = section.position.x < 50 ? "left" : "right";
  
  const label = dict.sections.find((s) => s.id === section.id)?.label || section.label;

  return (
    <li
      {...nodeAttr}
      className={styles.node}
      style={style}
      data-side={side}
      data-active={active}
      onPointerEnter={() => onActiveChange(true)}
      onPointerLeave={() => onActiveChange(false)}
      onFocus={() => onActiveChange(true)}
      onBlur={() => onActiveChange(false)}
    >
      <a
        href={`#${section.id}`}
        className={styles.link}
        onClick={sectionClickHandler(section.id)}
        aria-label={`${section.index} — ${label}`}
      >
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.label} aria-hidden="true">
          <span className={styles.index}>{section.index}</span>
          <span className={styles.text}>{label}</span>
        </span>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </a>
    </li>
  );
}
