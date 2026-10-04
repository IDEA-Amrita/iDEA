import texts from "../../../data/texts";
import { BsArrowUpRight } from "react-icons/bs";
import { PageShell, SectionShell } from "../../../components/Layout";
import SectionTitle from "../../../components/SectionTitle";
import TypeformButton from "../../../components/TypeformButton";
import { formIds } from "../../../config/forms";
import styles from "./ContributeSection.module.css";

export default function ContributeSection() {
  return (
    <PageShell id="contribute" aria-labelledby="contribute-title">
      <SectionShell
        className={styles.section}
        aria-labelledby="contribute-title"
      >
        <div className={styles.actions}>
          <article className={styles.action} data-animate="contribute-card">
            <div className={styles.content}>
              <SectionTitle sectionId="contribute" id="contribute-title">
                {texts.contribute.propose.title}
              </SectionTitle>
              <p className={styles.copy}>
                {texts.contribute.propose.paragraphs[0]}
              </p>
              <p className={styles.copy}>
                {texts.contribute.propose.paragraphs[1]}
              </p>
            </div>
            <TypeformButton
              formId={formIds.proposeProject}
              label={texts.contribute.propose.label}
            >
              {texts.contribute.propose.label}{" "}
              <BsArrowUpRight aria-hidden="true" />
            </TypeformButton>
          </article>
          <article className={styles.action} data-animate="contribute-card">
            <div className={styles.content}>
              <SectionTitle sectionId="contribute">
                {texts.contribute.join.title}
              </SectionTitle>
              <p className={styles.copy}>
                {texts.contribute.join.paragraphs[0]}
              </p>
              <p className={styles.copy}>
                {texts.contribute.join.paragraphs[1]}
              </p>
            </div>
            <TypeformButton
              formId={formIds.joinCommunity}
              label={texts.contribute.join.label}
            >
              {texts.contribute.join.buttonText}{" "}
              <BsArrowUpRight aria-hidden="true" />
            </TypeformButton>
          </article>
        </div>
      </SectionShell>
    </PageShell>
  );
}
