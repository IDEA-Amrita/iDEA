import type { HTMLAttributes, PropsWithChildren } from "react";
import classNames from "../utils/classNames";
import styles from "./Layout.module.css";

export function PageShell({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <section className={classNames(styles.page, className)} {...props}>
      {children}
    </section>
  );
}

export function SectionShell({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <div className={classNames(styles.section, className)} {...props}>
      {children}
    </div>
  );
}
