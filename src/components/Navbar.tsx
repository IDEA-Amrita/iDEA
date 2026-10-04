import classNames from "../utils/classNames";
import SocialLinks from "./SocialLinks";
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
      <SocialLinks />
    </header>
  );
}
