import { useState } from "react";
import { Navbar } from "../byte";
import { Navbar as Nav } from "../bit";
import styled from "styled-components";

function Landing() {
  const [isLight, setIsLight] = useState(true);

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
    <Container>
      <Navbar mode={isLight}/>
      <Nav.IconContainer>
        <Nav.EmptyDivL/>
        <Nav.EmptyDivL/>
        <Nav.EmptyDivL/>
        {isLight ? (
          <Nav.LightIcon onClick={handleClick} />
        ) : (
          <Nav.DarkIcon onClick={handleClick} />
        )}
        <Nav.EmptyDivR/>
        <Nav.EmptyDivR/>
        <Nav.EmptyDivR/>
      </Nav.IconContainer>
    </Container>
  );
}

export default Landing;
