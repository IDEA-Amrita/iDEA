import type { PropsWithChildren, ReactNode } from "react";
import styles from "./Accordion.module.css";

interface AccordionProps extends PropsWithChildren {
  id: string;
  title: ReactNode;
  open: boolean;
  onToggle: () => void;
}

export default function Accordion({
  id,
  title,
  open,
  onToggle,
  children,
}: AccordionProps) {
  return (
    <div className={styles.accordion} data-open={open}>
      <h3 className={styles.heading}>
        <button
          className={styles.trigger}
          id={`${id}-trigger`}
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
        >
          <span>{title}</span>
          <svg
            className={styles.chevron}
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
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
