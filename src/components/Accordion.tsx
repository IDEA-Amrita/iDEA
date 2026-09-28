import type { PropsWithChildren, ReactNode } from "react";
import classNames from "../utils/classNames";
import styles from "./Accordion.module.css";

interface AccordionProps extends PropsWithChildren {
  id: string;
  title: ReactNode;
  open: boolean;
  onToggle: () => void;
  className?: string;
  triggerClassName?: string;
}

export default function Accordion({
  id,
  title,
  open,
  onToggle,
  className,
  triggerClassName,
  children,
}: AccordionProps) {
  return (
    <div className={classNames(styles.accordion, className)} data-open={open}>
      <h3 className={styles.heading}>
        <button
          className={classNames(styles.trigger, triggerClassName)}
          id={`${id}-trigger`}
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
        >
          <span>{title}</span>
          <svg
            className={styles.toggleIcon}
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              x1="12"
              y1="5"
              x2="12"
              y2="19"
              className={styles.toggleVLine}
            />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </h3>
      <div
        className={styles.panel}
        data-open={open}
        id={id}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
      >
        <div className={styles.inner} inert={!open}>
          {children}
        </div>
      </div>
    </div>
  );
}
