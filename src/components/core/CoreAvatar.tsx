import Image from "next/image";

import { getInitials } from "@/utils/initials";

import styles from "./CoreAvatar.module.scss";

interface CoreAvatarProps {
  name: string;
  alt: string;
  /** Resolved portrait path, or null when no file exists (monogram is shown). */
  photo: string | null;
}

/** The centre of the system: portrait (or monogram) inside two quiet rings. */
export function CoreAvatar({ name, alt, photo }: CoreAvatarProps) {
  return (
    <div className={styles.avatar}>
      <div className={styles.disc}>
        {photo ? (
          <Image
            src={photo}
            alt={alt}
            fill
            priority
            sizes="(max-width: 767px) 96px, 200px"
            className={styles.photo}
          />
        ) : (
          <span className={styles.monogram} role="img" aria-label={name}>
            {getInitials(name)}
          </span>
        )}
      </div>
    </div>
  );
}
