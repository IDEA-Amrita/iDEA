import React, { useRef } from "react";
import { Generic, Navbar, Projects } from "../subcomponents";
import { BsArrowUpRight } from "react-icons/bs";
import useElementOnScreen from "../animations";
import { PopupButton } from "@typeform/embed-react";
import { Socials } from "../components";

const ContributePage = (props) => {
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
          <Socials isLight={props.isLight}/>
        </Navbar.TopContainer>
        <Projects>
          <Projects.BlockContainer>
            <Projects.BlockInnerContainer>
              <Projects.BlockTitle
                ref={ref}
                style={{
                  opacity: onScreen ? 1 : 0,
                  translate: onScreen ? "none" : "0 2rem",
                  transition: "1000ms ease-in-out",
                }}
              >
                Submit an Exciting Project Idea
              </Projects.BlockTitle>
              <PopupButton
                color={props.isLight ? "#fff" : "#000"}
                backgroundColor={props.isLight ? "#000" : "#fff"}
                style={{
                  width: "240px",
                  height: "64px",
                  color: props.isLight ? "#fff" : "#000",
                  backgroundColor: props.isLight ? "#000" : "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                id="WTBw9bLa"
              >
                lessgo <BsArrowUpRight style={{ marginLeft: "4%" }} />
              </PopupButton>
              <Projects.Paragraph style={{ textAlign: "center" }}>
                Ready to bring your project idea to life?
                <br />
                Share it with us at iDEA!
              </Projects.Paragraph>
              <Projects.Paragraph style={{ textAlign: "center" }}>
                We're here to fuel innovation and empower talented creators like
                you.
                <br />
                Our platform provides valuable resources and support to
                transform
                <br />
                your concept into a remarkable reality.
              </Projects.Paragraph>
            </Projects.BlockInnerContainer>
            <Projects.BlockInnerContainer>
              <Projects.AngledLine backgroundColor={props.isLight ? "#000" : "#fff"} />
            </Projects.BlockInnerContainer>
            <Projects.BlockInnerContainer>
              <Projects.Paragraph
                style={{ textAlign: "center", fontStyle: "bold" }}
              >
                Calling all dreamers, creators, and tech enthusiasts!
                <br /> Ready to turn your lightbulb moments into real-world
                wonders?
              </Projects.Paragraph>
              <Projects.Paragraph
                style={{ textAlign: "center", fontStyle: "bold" }}
              >
                As a member, you'll have the chance to enhance your professional
                profile
                <br /> and connect with like-minded peers
                <br /> Become a part of iDEA today!
              </Projects.Paragraph>
              <PopupButton
                color={props.isLight ? "#fff" : "#000"}
                backgroundColor={props.isLight ? "#000" : "#fff"}
                style={{
                  width: "240px",
                  height: "64px",
                  color: props.isLight ? "#fff" : "#000",
                  backgroundColor: props.isLight ? "#000" : "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                id="swN0M1hE"
              >
                lessgo <BsArrowUpRight style={{ marginLeft: "4%" }} />
              </PopupButton>
              <Projects.BlockTitle
                ref={ref}
                style={{
                  opacity: onScreen ? 1 : 0,
                  translate: onScreen ? "none" : "0 2rem",
                  transition: "1000ms ease-in-out",
                }}
              >
                Become a Member
              </Projects.BlockTitle>
            </Projects.BlockInnerContainer>
          </Projects.BlockContainer>
        </Projects>
      </Generic>
    </>
  );
};

export default ContributePage;
