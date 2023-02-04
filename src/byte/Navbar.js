import { useState } from "react";
import { Navbar } from "../bit";

export default function Nav(props) {
  const [isLight, setIsLight] = useState(props.mode);
  const [color1, setColor1] = useState("#424242");
  const [color2, setColor2] = useState("#ff6b6b");

  return (
    <Navbar>
      <Navbar.TopContainer>
        <Navbar.EmptyDivL />
        <Navbar.EmptyDivL />
        <Navbar.EmptyDivL />
        <Navbar.TopTitle>IDEA</Navbar.TopTitle>
        <Navbar.EmptyDivR />
        <Navbar.EmptyDivR />
        <Navbar.EmptyDivR />
      </Navbar.TopContainer>
      <Navbar.Center>
        <Navbar.Link>Home</Navbar.Link>
        <Navbar.Link>About</Navbar.Link>
        <Navbar.Link>Roadmap</Navbar.Link>
        <Navbar.TitleContainer>
          <Navbar.Title
            color={isLight ? color1 : color2}
          >
            i
          </Navbar.Title>
          <Navbar.Title
            color={isLight ? color1 : color2}
          >
            D
          </Navbar.Title>
          <Navbar.Title
          color={isLight ? color1 : color2}
          >
            E
          </Navbar.Title>
          <Navbar.Title
            color={isLight ? color1 : color2}
          >
            A
          </Navbar.Title>
        </Navbar.TitleContainer>
        <Navbar.Link>GitHub</Navbar.Link>
        <Navbar.Link>Documentation</Navbar.Link>
        <Navbar.Link>Socials</Navbar.Link>
      </Navbar.Center>
      <Navbar.TopContainer>
        <Navbar.EmptyDivL />
        <Navbar.EmptyDivL />
        <Navbar.EmptyDivL />
        <Navbar.BottomTitle color={isLight ? "#292929" : "#fff"}>
          Watch your ideas come to life.
        </Navbar.BottomTitle>
        <Navbar.EmptyDivR />
        <Navbar.EmptyDivR />
        <Navbar.EmptyDivR />
      </Navbar.TopContainer>
    </Navbar>
  );
}
