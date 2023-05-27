import React, { useRef, useState } from "react";
import { Generic, Navbar, Roadmap } from "../subcomponents";
import { FaFacebook } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import useElementOnScreen from "../animations";
import { SocialsText } from "../subcomponents/navbar/styles/navbar";
import data from "../data/roadmap.json";

const AboutPage = (props) => {
  const [containable, setContainable] = useState("");
  const [roadmapData, setRoadmapData] = useState(data);
  const [clicked, setClicked] = useState(false);
  // const onScroll = (event) => {
  //   event.preventDefault();
  //   console.log("something")
  // }

  const handleClick = (val) => {
    setClicked(true);
    const OnHoverContainer = document.querySelector(
      ".roadmap-on-hover-container"
    );
    const OnHoverTitle = document.querySelector(".roadmap-on-hover-title");
    const OnHoverSubTitle = document.querySelector(
      ".roadmap-on-hover-subtitle"
    );
    const OnHoverDescription = document.querySelector(
      ".roadmap-on-hover-paragraph"
    );
    const OnHoverImage = document.querySelector(".roadmap-on-hover-img");

    const crossIcon = document.querySelector(".roadmap-on-click-cross-icon");
    crossIcon.style.display = "block";
    OnHoverContainer.style.opacity = "1";
    OnHoverTitle.innerHTML = roadmapData[val].title;
    OnHoverSubTitle.innerHTML =
      roadmapData[val].location + " " + roadmapData[val].date;
    OnHoverDescription.innerHTML = roadmapData[val].content;
    OnHoverImage.src = roadmapData[val].image;
    //give a transition animation to the opacity
    console.log(val);
  };

  const handleCrossClick = () => {
    setClicked(false);
    const OnHoverContainer = document.querySelector(
      ".roadmap-on-hover-container"
    );
    OnHoverContainer.style.opacity = "0";
  };

  const handleHover = (val) => {
    const OnHoverContainer = document.querySelector(
      ".roadmap-on-hover-container"
    );
    const OnHoverTitle = document.querySelector(".roadmap-on-hover-title");
    const OnHoverSubTitle = document.querySelector(
      ".roadmap-on-hover-subtitle"
    );
    const OnHoverDescription = document.querySelector(
      ".roadmap-on-hover-paragraph"
    );
    const OnHoverImage = document.querySelector(".roadmap-on-hover-img");
    const crossIcon = document.querySelector(".roadmap-on-click-cross-icon");
    crossIcon.style.display = "none";

    OnHoverContainer.style.opacity = "1";
    OnHoverTitle.innerHTML = roadmapData[val].title;
    OnHoverSubTitle.innerHTML =
      roadmapData[val].location + " " + roadmapData[val].date;
    OnHoverDescription.innerHTML = roadmapData[val].content;
    OnHoverImage.src = roadmapData[val].image;
    //give a transition animation to the opacity
    console.log(val);
  };
  const handleLeave = () => {
    if (clicked) {
      return;
    }
    const OnHoverContainer = document.querySelector(
      ".roadmap-on-hover-container"
    );
    OnHoverContainer.style.opacity = "0";
  };

  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <>
      <Generic>
        <Navbar.TopContainer>
          <Navbar.TimelineBarLeft>
            <Navbar.Circle
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
              onClick={props.about}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
            <Navbar.Circle
              size={true}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              ref={ref}
              style={{
                width: onScreen ? "1%" : "0",
                translate: onScreen ? "none" : "0 10rem",
                transition: "2000ms ease-in-out",
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
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
          {/* <Navbar.TopTitle>
            <AiOutlineArrowDown onClick={props.down} />
            <AiOutlineArrowUp onClick={props.up} />
          </Navbar.TopTitle> */}
        </Navbar.TopContainer>
        <Roadmap.MainContainer>
          {/* <Generic.CircleStickLineMapContainer>
            <Generic.Circle color={"#000"} />
            <Generic.Stick color={"#000"} />
          </Generic.CircleStickLineMapContainer> */}
          <Generic.TopRightTitleContainer>
            <Generic.TopRightTitle
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "none" : "0 2rem",
                transition: "1000ms ease-in-out",
              }}
            >
              Roadmap
            </Generic.TopRightTitle>
            <Generic.TopRightMottoText
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "none" : "0 2rem",
                transition: "1000ms ease-in-out",
              }}
            >
              At iDEA, we believe in and thrive on, well defined
            </Generic.TopRightMottoText>
            <Generic.TopRightMottoText
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "none" : "0 2rem",
                transition: "1000ms ease-in-out",
                alignSelf: "flex-end",
              }}
            >
              goals
            </Generic.TopRightMottoText>
          </Generic.TopRightTitleContainer>
          <Roadmap.OnHoverContainer
            className="roadmap-on-hover-container"
            backgroundColor={props.isLight ? "#000" : "#fff"}
            color={props.isLight ? "#fff" : "#000"}
          >
            <Roadmap.OnHoverImage className="roadmap-on-hover-img" />
            <Roadmap.OnHoverInnerContainer>
              <Roadmap.OnHoverTitle className="roadmap-on-hover-title"></Roadmap.OnHoverTitle>
              <Roadmap.OnHoverSubTitle className="roadmap-on-hover-subtitle"></Roadmap.OnHoverSubTitle>
              <Roadmap.OnHoverParagraph className="roadmap-on-hover-paragraph"></Roadmap.OnHoverParagraph>
              <Roadmap.CrossIcon
                className="roadmap-on-click-cross-icon"
                onClick={handleCrossClick}
              />
            </Roadmap.OnHoverInnerContainer>
          </Roadmap.OnHoverContainer>
          <Roadmap>
            <Roadmap.AngledBoxContainer
              className="roadmap-angled-box-container"
              backgroundColor={props.isLight ? "#000" : "#fff"}
              color={props.isLight ? "#fff" : "#000"}
            >
              <Roadmap.TextDate>02-06-2023</Roadmap.TextDate>
              <Roadmap.TextTitle>INCEPTION</Roadmap.TextTitle>
            </Roadmap.AngledBoxContainer>
            <Navbar.LengthStick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 0.5,
              }}
            />
            <Navbar.Circle
              onClick={(e) => {
                e.preventDefault();
                handleClick("0");
              }}
              onMouseEnter={(e) => {
                e.preventDefault();
                handleHover("0");
              }}
              onMouseLeave={(e) => {
                e.preventDefault();
                handleLeave();
              }}
              style={{
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 1,
              }}
            />
            {containable}
            <Navbar.LengthStick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 0.5,
              }}
            />
            <Navbar.Circle
              onClick={(e) => {
                e.preventDefault();
                handleClick("1");
              }}
              onMouseEnter={(e) => {
                e.preventDefault();
                handleHover("1");
              }}
              onMouseLeave={(e) => {
                e.preventDefault();
                handleLeave();
              }}
              style={{
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 1,
              }}
            />
            <Navbar.LengthStick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 0.5,
              }}
            />
            <Navbar.Circle
              onClick={(e) => {
                e.preventDefault();
                handleClick("2");
              }}
              onMouseEnter={(e) => {
                e.preventDefault();
                handleHover("2");
              }}
              onMouseLeave={(e) => {
                e.preventDefault();
                handleLeave();
              }}
              style={{
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 1,
              }}
            />
            <Navbar.LengthStick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 0.5,
              }}
            />
            <Navbar.Circle
              onClick={(e) => {
                e.preventDefault();
                handleClick("3");
              }}
              onMouseEnter={(e) => {
                e.preventDefault();
                handleHover("3");
              }}
              onMouseLeave={(e) => {
                e.preventDefault();
                handleLeave();
              }}
              style={{
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 1,
              }}
            />
            <Navbar.LengthStick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 0.5,
              }}
            />
            <Navbar.Circle
              onClick={(e) => {
                e.preventDefault();
                handleClick("4");
              }}
              onMouseEnter={(e) => {
                e.preventDefault();
                handleHover("4");
              }}
              onMouseLeave={(e) => {
                e.preventDefault();
                handleLeave();
              }}
              style={{
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 1,
              }}
            />
            <Navbar.LengthStick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 0.5,
              }}
            />
            <Navbar.Circle
              onClick={(e) => {
                e.preventDefault();
                handleClick("5");
              }}
              onMouseEnter={(e) => {
                e.preventDefault();
                handleHover("5");
              }}
              onMouseLeave={(e) => {
                e.preventDefault();
                handleLeave();
              }}
              style={{
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 1,
              }}
            />
          </Roadmap>
        </Roadmap.MainContainer>
      </Generic>
    </>
  );
};

export default AboutPage;
