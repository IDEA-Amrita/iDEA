import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { useTheme } from "../providers/themeContext";
import classNames from "../utils/classNames";
import styles from "./Navigation.module.css";

interface ThemeToggleProps {
  className?: string;
  visible?: boolean;
  isHero?: boolean;
  standalone?: boolean;
}

export default function ThemeToggle({
  className,
  visible = true,
  isHero = false,
  standalone = false,
}: ThemeToggleProps = {}) {
  const { theme, setPreference } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? AiOutlineSun : AiOutlineMoon;
  const isHidden = !visible && !isHero && !standalone;

  return (
    <button
      type="button"
      className={classNames(styles.themeToggle, styles.chrome, className)}
      data-visible={visible}
      data-hero={isHero}
      data-standalone={standalone}
      aria-hidden={isHidden}
      inert={isHidden}
      aria-label={`Use ${nextTheme} theme`}
      title={`Use ${nextTheme} theme`}
      onClick={() => {
        setPreference(nextTheme);
      }}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}
