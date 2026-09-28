import type { Ref } from "react";
import { sections, type SectionId } from "../config/sections";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  sectionId: SectionId;
  children: string;
  id?: string;
  ref?: Ref<HTMLHeadingElement>;
}

export default function SectionTitle({
  sectionId,
  children,
  id,
  ref,
}: SectionTitleProps) {
  const position =
    sections.findIndex(({ id: section }) => section === sectionId) + 1;
  return (
    <div className={styles.composition} data-animate="title">
      <p className={styles.eyebrow}>
        {String(position).padStart(2, "0")} /{" "}
        {String(sections.length).padStart(2, "0")} ·{" "}
        {sections[position - 1]?.label}
      </p>
      <h2 className={styles.title} id={id} ref={ref}>
        {children}
      </h2>
    </div>
  );
}
