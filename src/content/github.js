import React from "react";
import { Generic, Navbar } from "../subcomponents";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Github = (props) => {
  return (
    <>
      <Generic>
        <Navbar.TopContainer>
          <Navbar.EmptyDivL />
          <Navbar.EmptyDivL />
          <Navbar.EmptyDivL />
          <Navbar.TopTitle>
            <AiOutlineArrowDown onClick={props.down}/>
            <AiOutlineArrowUp onClick={props.up} />
          </Navbar.TopTitle>
          <Navbar.EmptyDivR />
          <Navbar.EmptyDivR />
          <Navbar.EmptyDivR />
        </Navbar.TopContainer>
        <Generic.InnerContainer>
          <Generic.Title>GitHub</Generic.Title>
        </Generic.InnerContainer>
      </Generic>
    </>
  );
};

export default Github;