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
  return (
    <>
      <Navbar.SocialsTopLeft
        style={{ backgroundColor: isLight ? "#000" : "#fff" }}
      >
        <SocialsText
          ref={ref}
          style={{
            opacity: onScreen ? 1 : 0,
            translate: onScreen ? "none" : "0 2rem",
            transition: "600ms ease-in-out",
            color: isLight ? "#fff" : "#000",
          }}
        >
          iDEA
        </SocialsText>
        <Navbar.SocialsTopLeftInnerContainer
          ref={ref}
          style={{
            opacity: onScreen ? 1 : 0,
            translate: onScreen ? "none" : "0 2rem",
            transition: "600ms ease-in-out",
          }}
        >
          <AiOutlineMail
            onClick={() => window.open("mailto:ideatech@cb.amrita.edu")}
            style={{ color: isLight ? "#fff" : "#000" }}
          />
          <AiOutlineInstagram
            onClick={() =>
              window.open("https://www.instagram.com/idea_amrita/")
            }
            style={{ color: isLight ? "#fff" : "#000" }}
          />
          <AiOutlineTwitter style={{ color: isLight ? "#fff" : "#000" }} />
          <AiFillLinkedin style={{ color: isLight ? "#fff" : "#000" }} />
          <AiOutlineMedium style={{ color: isLight ? "#fff" : "#000" }} />
          <AiFillGithub
            onClick={() => window.open("https://github.com/IDEA-Amrita")}
            style={{ color: isLight ? "#fff" : "#000" }}
          />
        </Navbar.SocialsTopLeftInnerContainer>
      </Navbar.SocialsTopLeft>
    </>
  );
};

export default Socials;
