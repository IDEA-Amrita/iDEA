import React, { useRef, useState } from "react";
import { Generic, Navbar, Projects } from "../subcomponents";
import { FaFacebook } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import useElementOnScreen from "../animations";
import { SocialsText } from "../subcomponents/navbar/styles/navbar";
import projects from "../data/projects.json";

const ContributePage = (props) => {
  // const onScroll = (event) => {
  //   event.preventDefault();
  //   console.log("something")
  // }

  const [activeProject, setActiveProject] = useState(0);
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <>
      <Generic>
        <Navbar.TopContainer>
          <Navbar.TimelineBarLeft>
            <Navbar.Circle
              onClick={props.about}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
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
              size={true}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
          </Navbar.TimelineBarLeft>
          <Navbar.SocialsTopLeft
            style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
          >
            <SocialsText
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "none" : "0 2rem",
                transition: "600ms ease-in-out",
                color: props.isLight ? "#fff" : "#000",
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
              <AiOutlineInstagram
                style={{ color: props.isLight ? "#fff" : "#000" }}
              />
              <AiOutlineTwitter
                style={{ color: props.isLight ? "#fff" : "#000" }}
              />
              <AiOutlineMedium
                style={{ color: props.isLight ? "#fff" : "#000" }}
              />
              <FaFacebook style={{ color: props.isLight ? "#fff" : "#000" }} />
              <AiFillYoutube
                style={{ color: props.isLight ? "#fff" : "#000" }}
              />
              <AiFillLinkedin
                style={{ color: props.isLight ? "#fff" : "#000" }}
              />
            </Navbar.SocialsTopLeftInnerContainer>
          </Navbar.SocialsTopLeft>
        </Navbar.TopContainer>
        <Projects>
          <Projects.BlockContainer>
            <Projects.BlockInnerContainer>
              <Projects.BlockTitle>
                Submit an Exciting Project Idea
              </Projects.BlockTitle>
              <Projects.BlockButton
                color={props.isLight ? "#fff" : "#000"}
                backgroundColor={props.isLight ? "#000" : "#fff"}
              >
                lessgo <BsArrowUpRight style={{ marginLeft: "4%" }} />
              </Projects.BlockButton>
              <Generic.Paragraph style={{ textAlign: "center" }}>
                Lorem ipsum Lorem ipsum Lorem ipsum
                <br /> Lorem ipsum Lorem ipsum Lorem ipsum
                <br /> Lorem ipsum Lorem ipsum
              </Generic.Paragraph>
              <Generic.Paragraph style={{ textAlign: "center" }}>
                Lorem ipsum Lorem ipsum Lorem ipsum
                <br /> Lorem ipsum Lorem ipsum Lorem ipsum
                <br /> Lorem ipsum Lorem ipsum
              </Generic.Paragraph>
            </Projects.BlockInnerContainer>
            <Projects.BlockInnerContainer>
              <Projects.AngledLine backgroundColor={"#000"}/>
            </Projects.BlockInnerContainer>
            <Projects.BlockInnerContainer>
              <Generic.Paragraph style={{ textAlign: "center" }}>
                Lorem ipsum Lorem ipsum Lorem ipsum
                <br /> Lorem ipsum Lorem ipsum Lorem ipsum
                <br /> Lorem ipsum Lorem ipsum
              </Generic.Paragraph>
              <Generic.Paragraph style={{ textAlign: "center" }}>
                Lorem ipsum Lorem ipsum Lorem ipsum
                <br /> Lorem ipsum Lorem ipsum Lorem ipsum
                <br /> Lorem ipsum Lorem ipsum
              </Generic.Paragraph>
              <Projects.BlockButton
                color={props.isLight ? "#fff" : "#000"}
                backgroundColor={props.isLight ? "#000" : "#fff"}
              >
                lessgo <BsArrowUpRight style={{ marginLeft: "4%" }} />
              </Projects.BlockButton>
              <Projects.BlockTitle>Become a Member</Projects.BlockTitle>
            </Projects.BlockInnerContainer>
          </Projects.BlockContainer>
        </Projects>
      </Generic>
    </>
  );
};

export default ContributePage;
