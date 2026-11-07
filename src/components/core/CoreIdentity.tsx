import { SectionLabel } from "@/components/ui/SectionLabel";

import styles from "./CoreIdentity.module.scss";

interface CoreIdentityProps {
  name: string;
  role: string;
  cvHref?: string | null;
  downloadLabel?: string;
}

/** The page's only `h1`. Understood in seconds: who, and what. */
export function CoreIdentity({ name, role, cvHref, downloadLabel }: CoreIdentityProps) {
  return (
    <div className={styles.identity}>
      <div className={styles.tag}>
        <SectionLabel index="00" label="Core" />
      </div>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.role}>{role}</p>

      {cvHref && downloadLabel && (
        <a href={cvHref} download="Curriculo.pdf" className={styles.cvButton}>
          <svg
            className={styles.cvIcon}
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M8 2.25v7.5m0 0L5.25 7M8 9.75L10.75 7M2.75 13h10.5"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="square"
            />
          </svg>
          <span>{downloadLabel}</span>
        </a>
      )}
    </div>
  );
}
