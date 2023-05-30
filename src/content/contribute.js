import React, { useRef, useState } from "react";
import { Generic, Navbar, Contribution } from "../subcomponents";
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
import styled from "styled-components";
import { Widget } from "@typeform/embed-react";



const Contribute = (props) => {
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
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
              onClick={props.roadmap}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
              onClick={props.team}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
              onClick={props.projects}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
              size={true}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
          </Navbar.TimelineBarLeft>
          <Navbar.SocialsTopLeft
            style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
          >
            <SocialsText
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                transform: onScreen ? "none" : "0 2rem",
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
                transform: onScreen ? "none" : "0 2rem",
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
        <Contribution>
          <Contribution.TopRightTitleContainer>
            <Contribution.TopRightTitle
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                transform: onScreen ? "none" : "translateY(2rem)",
                transition: "1000ms ease-in-out",
              }}
            >
              Contribute
            </Contribution.TopRightTitle>
          </Contribution.TopRightTitleContainer>
          <Contribution.BodyContainer>
            <Contribution.TopMiddleText
              color={props.isLight ? "#000" : "#fff"}
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                transform: onScreen ? "none" : "translateY(2rem)",
                transition: "1000ms ease-in-out",
              }}
            >
              Contribute by being an ideator or join us and help us help
              ideators
            </Contribution.TopMiddleText>
          </Contribution.BodyContainer>

          <Widget
            id="WTBw9bLa"
            style={{
              width: "100%",
              overflow: "hidden",
              border: "none",
            }}
            opacity={80}
            height={800}
            hidden={{
              userId: "hidden-user-id",
            }}
            onSubmit={() => {
              console.log("Form submitted!");
            }}
            hideHeaders
            disableAutoFocus
            enableSandbox
          />
        </Contribution>
      </Generic>
    </>
  );
};

export default Contribute;