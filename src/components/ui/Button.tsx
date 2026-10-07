import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/utils/cn";

import styles from "./Button.module.scss";

type Variant = "solid" | "line";

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
}

type LinkProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "children"> & { href: string };

type ActionProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "children"> & { href?: undefined };

/** One component for both intents: renders `<a>` when `href` is set, `<button>` otherwise. */
export function Button(props: LinkProps | ActionProps) {
  if (props.href !== undefined) {
    const { variant = "solid", className, children, ...rest } = props;
    return (
      <a className={cn(styles.button, styles[variant], className)} {...rest}>
        <span className={styles.text}>{children}</span>
      </a>
    );
  }

  const { variant = "solid", className, children, type = "button", ...rest } = props;
  return (
    <button type={type} className={cn(styles.button, styles[variant], className)} {...rest}>
      <span className={styles.text}>{children}</span>
    </button>
  );
}
