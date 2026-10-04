import texts from "../data/texts";
import BrandStar from "./BrandStar";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { clubContact, type ClubContact } from "../config/clubContact";
import { sections } from "../config/sections";
import { socialLinks } from "../config/socialLinks";
import { ButtonLink } from "./Button";
import styles from "./Footer.module.css";

const socialIcons = {
  email: AiOutlineMail,
  linkedin: AiOutlineLinkedin,
  instagram: AiOutlineInstagram,
  github: AiFillGithub,
};

export default function Footer({
  contact = clubContact,
}: {
  contact?: ClubContact;
}) {
  return (
    <footer className={styles.footer}>
      <section className={styles.callout} aria-labelledby="footer-callout">
        <div>
          <p className={styles.calloutKicker}>{texts.footer.kicker}</p>
          <h2 className={styles.calloutTitle} id="footer-callout">
            {texts.footer.callout}
          </h2>
        </div>
        <ButtonLink href="#contribute" variant="primary">
          <BrandStar /> {texts.footer.join}
        </ButtonLink>
      </section>
      <div className={styles.content}>
        <div className={styles.brand}>
          <p className={styles.wordmark}>
            iDEA
            <BrandStar />
          </p>
          <p className={styles.description}>{texts.footer.description}</p>
        </div>
        <nav className={styles.explore} aria-label="Footer navigation">
          <p className={styles.heading}>{texts.footer.explore}</p>
          <ul className={styles.footerList}>
            {sections.map((section) => (
              <li key={section.id}>
                <a className={styles.footerLink} href={`#${section.id}`}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.connect}>
          <p className={styles.heading}>{texts.footer.connect}</p>
          <address className={styles.address}>
            <p className={styles.contactText}>
              {contact.institution}
              <br />
              {contact.location}
            </p>
          </address>
          <ul className={styles.socialIcons}>
            {socialLinks.map(({ id, label, href, external }) => {
              const Icon = socialIcons[id];
              return (
                <li key={id}>
                  <a
                    className={styles.socialIconLink}
                    href={href}
                    aria-label={label}
                    title={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className={styles.footerList}>
            {contact.phone && (
              <li>
                <a
                  className={styles.footerLink}
                  href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                >
                  {contact.phone}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} iDEA · Amrita Vishwa Vidyapeetham
        </p>
      </div>
    </footer>
  );
}
