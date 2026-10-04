import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { PageShell, SectionShell } from "../../../components/Layout";
import SectionTitle from "../../../components/SectionTitle";
import { faqItems } from "../../../data/faq";
import styles from "./FaqSection.module.css";

function FormattedAnswer({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <PageShell id="faq" aria-labelledby="faq-title">
      <SectionShell className={styles.section} aria-labelledby="faq-title">
        <div className={styles.container}>
          <div className={styles.header}>
            <SectionTitle sectionId="faq" id="faq-title">
              Frequently Asked Questions
            </SectionTitle>
            <p className={styles.subtitle}>
              Everything you need to know about joining, building, and growing
              with iDEA.
            </p>
          </div>

          <div
            className={styles.accordion}
            role="region"
            aria-label="FAQ Accordion"
          >
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const triggerId = `faq-trigger-${item.id}`;
              const panelId = `faq-panel-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={styles.item}
                  data-open={isOpen}
                  data-animate="faq-item"
                >
                  <button
                    id={triggerId}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      toggleItem(index);
                    }}
                  >
                    <div className={styles.questionContent}>
                      <span className={styles.number} aria-hidden="true">
                        {item.number}
                      </span>
                      <span className={styles.questionText}>
                        {item.question}
                      </span>
                    </div>
                    <span className={styles.iconWrapper} aria-hidden="true">
                      <FaPlus />
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={styles.answerWrapper}
                    hidden={!isOpen}
                  >
                    <div className={styles.answerInner}>
                      <p className={styles.answer}>
                        <FormattedAnswer text={item.answer} />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionShell>
    </PageShell>
  );
}
