import styles from "./StatusIndicator.module.scss";

interface StatusIndicatorProps {
  children: string;
}

export function StatusIndicator({ children }: StatusIndicatorProps) {
  return (
    <p className={styles.status}>
      <span className={styles.dot} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
