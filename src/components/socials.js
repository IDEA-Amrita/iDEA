import React, { useRef } from "react";
import { Navbar } from "../subcomponents";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { SocialsText } from "../subcomponents/navbar/styles/navbar";
import useElementOnScreen from "../animations";

const Socials = ({ isLight }) => {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);

  const bgColor = isLight ? "var(--card-lavender)" : "#1a1a2e";
  const textColor = isLight ? "var(--accent-violet)" : "var(--accent-lime)";
  const iconColor = isLight ? "var(--ink-soft)" : "#9090a0";

  return (
    <>
      <Navbar.SocialsTopLeft style={{ backgroundColor: bgColor }}>
        <SocialsText
          ref={ref}
          style={{
            opacity: onScreen ? 1 : 0,
            translate: onScreen ? "none" : "0 1.5rem",
            transition: "600ms ease-in-out",
            color: textColor,
          }}
        >
          iDEA
        </SocialsText>
        <Navbar.SocialsTopLeftInnerContainer
          ref={ref}
          style={{
            opacity: onScreen ? 1 : 0,
            translate: onScreen ? "none" : "0 1.5rem",
            transition: "700ms ease-in-out",
          }}
        >
          <AiOutlineMail
            onClick={() => window.open("mailto:ideatech@cb.amrita.edu")}
            style={{ color: iconColor }}
          />
          <AiOutlineInstagram
            onClick={() =>
              window.open("https://www.instagram.com/idea_amrita/")
            }
            style={{ color: iconColor }}
          />
          <AiOutlineTwitter style={{ color: iconColor }} />
          <AiFillLinkedin style={{ color: iconColor }} />
          <AiOutlineMedium style={{ color: iconColor }} />
          <AiFillGithub
            onClick={() => window.open("https://github.com/IDEA-Amrita")}
            style={{ color: iconColor }}
          />
        </Navbar.SocialsTopLeftInnerContainer>
      </Navbar.SocialsTopLeft>
    </>
  );
};

export default Socials;
