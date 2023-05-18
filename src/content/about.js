import React from "react";
import { Generic, Navbar } from "../subcomponents";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const AboutPage = (props) => {
  return (
    <>
      <Generic>
        <Navbar.TopContainer>
          <Navbar.EmptyDivL />
          <Navbar.EmptyDivL />
          <Navbar.EmptyDivL />
          <Navbar.TopTitle>
            <AiOutlineArrowDown onClick={props.down} />
            <AiOutlineArrowUp onClick={props.up} />
          </Navbar.TopTitle>
          <Navbar.EmptyDivR />
          <Navbar.EmptyDivR />
          <Navbar.EmptyDivR />
        </Navbar.TopContainer>
        <Generic.InnerContainer>
          {/* <Generic.CircleStickLineMapContainer>
            <Generic.Circle color={"#000"} />
            <Generic.Stick color={"#000"} />
          </Generic.CircleStickLineMapContainer> */}
          <Generic.Title>About</Generic.Title>
          <Generic.ParagraphContainer>
            <Generic.Paragraph>
              iDEA is a student driven community that aims to brings{" "}
              <u>ideas</u> to life. It hopes to achieve this by helping students
              develop and showcase their ideas through community driver support.
            </Generic.Paragraph>
          </Generic.ParagraphContainer>
        </Generic.InnerContainer>
      </Generic>
    </>
  );
};

export default AboutPage;
