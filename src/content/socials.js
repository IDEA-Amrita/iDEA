import React from "react";
import { Generic, Navbar } from "../subcomponents";
import { AiOutlineArrowUp } from "react-icons/ai";

const Socials = (props) => {
  return (
    <>
      <Generic>
        <Navbar.TopContainer>
          <Navbar.EmptyDivL />
          <Navbar.EmptyDivL />
          <Navbar.EmptyDivL />
          <Navbar.TopTitle>
            <AiOutlineArrowUp onClick={props.up}/>
          </Navbar.TopTitle>
          <Navbar.EmptyDivR />
          <Navbar.EmptyDivR />
          <Navbar.EmptyDivR />
        </Navbar.TopContainer>
        <Generic.InnerContainer>
          <Generic.Title>Socials</Generic.Title>
        </Generic.InnerContainer>
      </Generic>
    </>
  );
};

export default Socials;
