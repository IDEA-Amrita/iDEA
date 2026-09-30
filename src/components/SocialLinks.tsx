import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { socialLinks } from "../config/socialLinks";
import styles from "./Navigation.module.css";

const SOCIAL_ICONS = {
  email: AiOutlineMail,
  linkedin: AiOutlineLinkedin,
  instagram: AiOutlineInstagram,
  github: AiFillGithub,
} as const;

export default function SocialLinks() {
  return (
    <nav className={styles.socialPanel} aria-label="Club links">
      <a className={styles.brandName} href="#home" aria-label="iDEA home">
        iDEA
      </a>
      <div className={styles.socialLinks}>
        {socialLinks.map(({ id, label, href, external }) => {
          const Icon = SOCIAL_ICONS[id];
          return (
            <a
              key={id}
              className={styles.socialLink}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              <Icon aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
