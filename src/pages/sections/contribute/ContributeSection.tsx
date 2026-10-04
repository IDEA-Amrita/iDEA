import {
  BsArrowUpRight,
  BsCodeSlash,
  BsInstagram,
  BsLinkedin,
  BsMegaphoneFill,
  BsSendFill,
} from "react-icons/bs";
import { ButtonLink } from "../../../components/Button";
import BrandStar from "../../../components/BrandStar";
import { PageShell, SectionShell } from "../../../components/Layout";
import SectionTitle from "../../../components/SectionTitle";
import { clubContact } from "../../../config/clubContact";
import styles from "./ContributeSection.module.css";

const emailSubject = encodeURIComponent("[iDEA Proposal] <Your Project Title>");
const emailBody = encodeURIComponent(
  `Hi iDEA Team,

I would like to propose a new project idea for iDEA!

• Project Lead Name: 
• College Email: 
• Roll Number & Department: 
• Working Project Title: 
• The Problem Statement: 
• Proposed Solution & Architecture: 
• Target Tech Stack: 

Looking forward to discussing this with the core team!`,
);

const proposalMailto = `mailto:${clubContact.email}?subject=${emailSubject}&body=${emailBody}`;

export default function ContributeSection() {
  return (
    <PageShell id="contribute" aria-labelledby="contribute-title">
      <SectionShell
        className={styles.section}
        aria-labelledby="contribute-title"
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <SectionTitle sectionId="contribute" id="contribute-title">
              Get Involved & Contribute
            </SectionTitle>
            <p className={styles.subtitle}>
              Whether you want to pitch an idea, join an active project, or
              connect with fellow builders, here is how to get started.
            </p>
          </div>

          <div className={styles.actions}>
            {/* Card 1: Propose via Email Template */}
            <article className={styles.action} data-animate="contribute-card">
              <div className={styles.content}>
                <div className={styles.iconBadge} aria-hidden="true">
                  <BsSendFill />
                </div>
                <h3 className={styles.cardTitle}>Propose a Project</h3>
                <p className={styles.copy}>
                  Have an innovative product concept or research problem? Send a
                  structured proposal directly to the core team to kick off
                  review.
                </p>
              </div>
              <div className={styles.buttonGroup}>
                <ButtonLink
                  className={styles.cardButton}
                  variant="primary"
                  href={proposalMailto}
                >
                  <BrandStar /> Draft Proposal{" "}
                  <BsArrowUpRight aria-hidden="true" />
                </ButtonLink>
              </div>
            </article>

            {/* Card 2: GitHub Open Source */}
            <article className={styles.action} data-animate="contribute-card">
              <div className={styles.content}>
                <div className={styles.iconBadge} aria-hidden="true">
                  <BsCodeSlash />
                </div>
                <h3 className={styles.cardTitle}>Build on GitHub</h3>
                <p className={styles.copy}>
                  Explore our open-source repositories, pick up
                  beginner-friendly issues, or collaborate on live campus
                  software alongside fellow iDEators.
                </p>
              </div>
              <div className={styles.buttonGroup}>
                <ButtonLink
                  className={styles.cardButton}
                  variant="primary"
                  href="https://github.com/IDEA-Amrita"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BrandStar /> GitHub Org <BsArrowUpRight aria-hidden="true" />
                </ButtonLink>
              </div>
            </article>

            {/* Card 3: Check Out Our Socials */}
            <article className={styles.action} data-animate="contribute-card">
              <div className={styles.content}>
                <div className={styles.iconBadge} aria-hidden="true">
                  <BsMegaphoneFill />
                </div>
                <h3 className={styles.cardTitle}>Check Out Our Socials</h3>
                <p className={styles.copy}>
                  Follow our latest project rollouts, workshop announcements,
                  and behind-the-scenes build logs across our official channels.
                </p>
              </div>
              <div className={styles.buttonRow}>
                <ButtonLink
                  className={styles.rowButton}
                  variant="primary"
                  href="https://www.instagram.com/idea_amrita/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <BrandStar />
                  <BsInstagram aria-hidden="true" />
                </ButtonLink>
                <ButtonLink
                  className={styles.rowButton}
                  variant="primary"
                  href={clubContact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <BrandStar />
                  <BsLinkedin aria-hidden="true" />
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PREVIOUS FORM CARD TEMPLATES (Preserved for future connector reuse) */}
        {/* ------------------------------------------------------------- */}
        {/* 
        <div className={styles.actions}>
          <article className={styles.action} data-animate="contribute-card">
            <div className={styles.content}>
              <SectionTitle sectionId="contribute" id="contribute-title">
                Submit an Exciting Project Idea
              </SectionTitle>
              <p className={styles.copy}>
                Ready to bring your project idea to life? Share it with us at iDEA!
              </p>
              <p className={styles.copy}>
                We're here to fuel innovation and empower talented creators like you.
              </p>
            </div>
            <button type="button" className={styles.buttonLink}>
              Propose a project
            </button>
          </article>
          <article className={styles.action} data-animate="contribute-card">
            <div className={styles.content}>
              <SectionTitle sectionId="contribute">
                Become a Member
              </SectionTitle>
              <p className={styles.copy}>
                Calling all dreamers, creators, and tech enthusiasts!
              </p>
              <p className={styles.copy}>
                As a member, you'll have the chance to enhance your professional profile.
              </p>
            </div>
            <button type="button" className={styles.buttonLink}>
              Become a member
            </button>
          </article>
        </div> 
        */}
      </SectionShell>
    </PageShell>
  );
}
