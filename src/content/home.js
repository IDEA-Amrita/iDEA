import React from "react";
import styled from "styled-components";

import { Navbar } from "../components";
import { Navbar as Nav } from "../subcomponents";

const Home = ({
  isLight,
  setIsLight,
  about,
  roadmap,
  team,
  projects,
  contribute,
  alumni,
  blogs,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    setIsLight((isLight) => !isLight);
  };

  const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${isLight ? "var(--bg-soft)" : "#0e0e0e"};
    color: ${isLight ? "var(--ink)" : "var(--bg-soft)"};
    position: relative;
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
          alumni={alumni}
          blogs={blogs}
          contribute={contribute}
        />
        <Nav.IconContainer
          style={{
            position: "absolute",
            top: "20px",
            right: "24px",
            margin: 0,
          }}
        >
          {isLight ? (
            <Nav.LightIcon onClick={handleClick} />
          ) : (
            <Nav.DarkIcon onClick={handleClick} />
          )}
        </Nav.IconContainer>
      </Container>
    </>
  );
};

export default Home;
