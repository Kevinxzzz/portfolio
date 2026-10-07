import styles from "./SectionLabel.module.scss";

interface SectionLabelProps {
  index: string;
  label: string;
}

/** `03 — PROJECTS`: the index is the only accent element. */
export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <p className={styles.label}>
      <span className={styles.index}>{index}</span>
      <span aria-hidden="true" className={styles.dash}>
        —
      </span>
      <span>{label}</span>
    </p>
  );
}
