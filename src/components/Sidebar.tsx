import { useEffect, useRef } from "react";
import isModifiedClick from "../utils/isModifiedClick";
import { sections, type SectionId } from "../config/sections";
import classNames from "../utils/classNames";
import styles from "./Navigation.module.css";

interface SidebarProps {
  activeSection: SectionId;
  visible?: boolean;
  label?: string;
  onNavigate: (section: SectionId) => void;
}

export default function Sidebar({
  activeSection,
  visible = true,
  label = "Section navigation",
  onNavigate,
}: SidebarProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const currentIndex = sections.findIndex(({ id }) => id === activeSection);

  useEffect(() => {
    const list = listRef.current;
    const dot = list?.getElementsByClassName(styles.dot ?? "dot")[
      currentIndex
    ] as HTMLElement | undefined;
    if (!list || !dot) return;
    const update = () => {
      let x = dot.offsetWidth / 2;
      let y = dot.offsetHeight / 2;
      let el: HTMLElement | null = dot;
      while (el && el !== list) {
        x += el.offsetLeft;
        y += el.offsetTop;
        el = el.offsetParent as HTMLElement | null;
      }
      const s = list.style;
      s.setProperty("--orb-x", String(x) + "px");
      s.setProperty("--orb-y", String(y) + "px");
      if (!list.dataset.ready) {
        requestAnimationFrame(() => {
          list.dataset.ready = "1";
        });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, [currentIndex, visible]);

  return (
    <nav
      className={classNames(styles.rail, styles.chrome)}
      aria-label={label}
      data-visible={visible}
      aria-hidden={!visible}
      inert={!visible}
    >
      <p className={styles.progress}>
        {currentIndex + 1} of {sections.length}
      </p>
      <ul className={styles.railList} ref={listRef}>
        <span className={styles.activeOrb} aria-hidden="true" />
        {sections.map((section, index) => {
          const active = index === currentIndex;
          const completed = index < currentIndex;
          return (
            <li
              className={classNames(
                styles.railItem,
                completed && styles.completedItem,
                active && styles.currentItem,
              )}
              key={section.id}
            >
              <a
                className={styles.railLink}
                href={`#${section.id}`}
                aria-current={active ? "location" : undefined}
                onClick={(event) => {
                  if (isModifiedClick(event)) return;
                  event.preventDefault();
                  onNavigate(section.id);
                }}
              >
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.railLabel}>{section.label}</span>
              </a>
              {index < sections.length - 1 && (
                <span className={styles.connector} aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
