import texts from "../data/texts";
import { Component, type PropsWithChildren } from "react";
import { SectionShell } from "./Layout";
import styles from "./HeroNavigation.module.css";
import { ButtonLink } from "./Button";

export default class AppErrorBoundary extends Component<
  PropsWithChildren,
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("AppErrorBoundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.failed)
      return (
        <main>
          <SectionShell className={styles.heroContent}>
            <h1>{texts.error.title}</h1>
            <p className={styles.tagline}>{texts.error.description}</p>
            <ButtonLink
              href={import.meta.env.BASE_URL}
              onClick={() => {
                window.location.reload();
              }}
            >
              {texts.error.reload}
            </ButtonLink>
            <p>
              <a href="https://github.com/IDEA-Amrita">{texts.error.github}</a>
            </p>
          </SectionShell>
        </main>
      );
    return this.props.children;
  }
}
