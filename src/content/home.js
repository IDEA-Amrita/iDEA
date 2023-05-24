import React from "react";
import styled from "styled-components";

import { Navbar } from "../components";
import { Navbar as Nav } from "../subcomponents";

const Home = ({ isLight, setIsLight, about, roadmap, team, projects }) => {
  const handleClick = (event) => {
    event.preventDefault();
    setIsLight((isLight) => !isLight);
  };

  const Container = styled.div`
    height: 100vh;
    width: auto;
    background-color: ${isLight
      ? "radial-gradient(ellipse at center, #FFFFFF 0%, #F1F1F1 100%)"
      : "#000"} !important;
    color: ${isLight ? "#000" : "#fff"};
  `;

  return (
    <>
      <Container>
        <Navbar
          mode={isLight}
          about={about}
          roadmap={roadmap}
          team={team}
          projects={projects}
        />
        <Nav.IconContainer>
          {/* <Nav.EmptyDivL />
          <Nav.EmptyDivL />
          <Nav.EmptyDivL /> */}
          {isLight ? (
            <Nav.LightIcon onClick={handleClick} />
          ) : (
            <Nav.DarkIcon onClick={handleClick} />
          )}
          {/* <Nav.EmptyDivR />
          <Nav.EmptyDivR />
          <Nav.EmptyDivR /> */}
        </Nav.IconContainer>
      </Container>
    </>
  );
};

export default Home;
