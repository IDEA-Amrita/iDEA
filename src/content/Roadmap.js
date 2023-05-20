import React, { useRef } from "react";
import { Generic, Navbar, Roadmap } from "../subcomponents";
import { FaFacebook } from "react-icons/fa";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiFillYoutube,
} from "react-icons/ai";
import useElementOnScreen from "../animations";
import { SocialsText } from "../subcomponents/navbar/styles/navbar";

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
              ref={ref}
              style={{
                width: onScreen ? "1%" : "0",
                translate: onScreen ? "none" : "0 10rem",
                transition: "2000ms ease-in-out",
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
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
            </Navbar.SocialsTopLeftInnerContainer>
          </Navbar.SocialsTopLeft>
          <Navbar.TopTitle>
            <AiOutlineArrowDown onClick={props.down} />
            <AiOutlineArrowUp onClick={props.up} />
          </Navbar.TopTitle>
        </Navbar.TopContainer>
        <Generic.InnerContainer>
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
          <Roadmap>
            <Roadmap.AngledBoxContainer backgroundColor={props.isLight ? "#000" : "#fff"} color = {props.isLight? "#fff": "#000"}>
              <Roadmap.TextDate>xy-09-2023</Roadmap.TextDate>
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
              style={{
                backgroundColor: props.isLight ? "#000" : "#fff",
                opacity: 1,
              }}
            />
          </Roadmap>
        </Generic.InnerContainer>
      </Generic>
    </>
  );
};

export default AboutPage;
