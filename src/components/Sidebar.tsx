import { useEffect, useRef } from "react";
import isModifiedClick from "../utils/isModifiedClick";
import { sections, type SectionId } from "../config/sections";
import classNames from "../utils/classNames";
import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
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
  const reduceMotion = useReducedMotion();
  const currentIndex = sections.findIndex(({ id }) => id === activeSection);
  const itemVariants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : -8 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const list = listRef.current;
    const dot = list?.getElementsByClassName(styles.dot ?? "dot")[currentIndex] as
      | HTMLElement
      | undefined;
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
    <m.nav
      className={classNames(styles.rail, styles.chrome)}
      aria-label={label}
      data-visible={visible}
      aria-hidden={!visible}
      inert={!visible}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : -8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduceMotion ? 0 : 0.2,
            ease: "easeOut",
            staggerChildren: 0.035,
          },
        },
      }}
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
            <m.li
              className={classNames(
                styles.railItem,
                completed && styles.completedItem,
                active && styles.currentItem,
              )}
              key={section.id}
              variants={itemVariants}
            >
              <m.a
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
              </m.a>
              {index < sections.length - 1 && (
                <span className={styles.connector} aria-hidden="true" />
              )}
            </m.li>
          );
        })}
      </ul>
    </m.nav>
  );
}
