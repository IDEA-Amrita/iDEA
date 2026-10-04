import classNames from "../utils/classNames";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navigation.module.css";

export default function Navbar({ visible = true }: { visible?: boolean }) {
  return (
    <header
      className={classNames(styles.navbar, styles.chrome)}
      data-navbar
      data-visible={visible}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className={styles.navGroup}>
        <div className={styles.navBox}>
          <SocialLinks />
        </div>
        <ThemeToggle standalone />
      </div>
    </header>
  );
}
