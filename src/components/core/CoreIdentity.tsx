import { SectionLabel } from "@/components/ui/SectionLabel";

import styles from "./CoreIdentity.module.scss";

interface CoreIdentityProps {
  name: string;
  role: string;
}

/** The page's only `h1`. Understood in seconds: who, and what. */
export function CoreIdentity({ name, role }: CoreIdentityProps) {
  return (
    <div className={styles.identity}>
      <div className={styles.tag}>
        <SectionLabel index="00" label="Core" />
      </div>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.role}>{role}</p>
    </div>
  );
}
