import React, { useRef } from "react";
import { Generic, Navbar } from "../subcomponents";
import { FaFacebook } from "react-icons/fa";
import {
  AiOutlineArrowUp,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import useElementOnScreen from "../animations";
import { SocialsText } from "../subcomponents/navbar/styles/navbar";
import about from "../data/about.json";
import { Socials } from "../components";

const AboutPage = (props) => {
  // const onScroll = (event) => {
  //   event.preventDefault();
  //   console.log("something")
  // }

  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <>
      <Generic>
        <Navbar.TopContainer>
          <Navbar.TimelineBarLeft>
            <Navbar.Circle
              size={true}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              ref={ref}
              style={{
                width: onScreen ? "1%" : "0",
                translate: onScreen ? "none" : "0 10rem",
                transition: "1000ms ease-in-out",
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
              onClick={props.roadmap}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
            <Navbar.Circle
              onClick={props.team}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
            <Navbar.Circle
              onClick={props.projects}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
            <Navbar.Circle
              onClick={props.contribute}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
          </Navbar.TimelineBarLeft>
          <Socials isLight = {props.isLight}/>
          <Navbar.TopTitle>
            {/* <AiOutlineArrowDown onClick={props.down} /> */}
            <AiOutlineArrowUp
              onClick={props.up}
              style={{ cursor: "pointer" }}
            />
          </Navbar.TopTitle>
        </Navbar.TopContainer>
        <Generic.InnerContainer>
          {/* <Generic.CircleStickLineMapContainer>
            <Generic.Circle color={"#000"} />
            <Generic.Stick color={"#000"} />
          </Generic.CircleStickLineMapContainer> */}
          <Generic.Title
            ref={ref}
            style={{
              opacity: onScreen ? 1 : 0,
              translate: onScreen ? "none" : "0 2rem",
              transition: "1000ms ease-in-out",
            }}
          >
            About
          </Generic.Title>
          <Generic.ParagraphContainer>
            <Generic.Paragraph
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "none" : "0 2rem",
                transition: "1000ms ease-in-out",
              }}
            >
              {about.content}
            </Generic.Paragraph>
          </Generic.ParagraphContainer>
        </Generic.InnerContainer>
        <Generic.Image src="/images/frame.png" />
      </Generic>
    </>
  );
};

export default AboutPage;
