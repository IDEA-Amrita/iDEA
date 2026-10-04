import classNames from "../utils/classNames";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navigation.module.css";

export default function Navbar({
  visible = true,
  hasRail = false,
}: {
  visible?: boolean;
  hasRail?: boolean;
}) {
  return (
    <header
      className={classNames(styles.navbar, styles.chrome)}
      data-navbar
      data-visible={visible}
      data-has-rail={hasRail}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className={styles.navBox}>
        <SocialLinks />
      </div>
      <ThemeToggle standalone />
    </header>
  );
}
