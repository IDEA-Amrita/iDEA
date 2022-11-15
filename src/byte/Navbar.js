import { useState } from "react";
import { Navbar } from "../bit";

export default function Nav(props) {
  const [isLight , setIsLight] = useState(props.mode)
  const [color1, setColor1] = useState("#424242");
  const [color2, setColor2] = useState("#424242");
  const [color3, setColor3] = useState("#424242");
  const [color4, setColor4] = useState("#424242");


  return (
    <Navbar >
      <Navbar.TopContainer>
        <Navbar.TopTitle>IDEA</Navbar.TopTitle>
      </Navbar.TopContainer>
      <Navbar.Center>
        <Navbar.Link>Home</Navbar.Link>
        <Navbar.Link>About</Navbar.Link>
        <Navbar.Link>Roadmap</Navbar.Link>
        <Navbar.TitleContainer>
          <Navbar.Title
            onMouseEnter={(event) => {
              event.preventDefault();
              setColor1("#ff6b6b");
            }}
            onMouseLeave={(event) => {
              event.preventDefault();
              setColor1("#424242");
            }}
            color={color1}
          >
            I
          </Navbar.Title>
          <Navbar.Title
            onMouseEnter={(event) => {
              event.preventDefault();
              setColor2("#ff6b6b");
            }}
            onMouseLeave={(event) => {
              event.preventDefault();
              setColor2("#424242");
            }}
            color={color2}
          >
            d
          </Navbar.Title>
          <Navbar.Title
            onMouseEnter={(event) => {
              event.preventDefault();
              setColor3("#ff6b6b");
            }}
            onMouseLeave={(event) => {
              event.preventDefault();
              setColor3("#424242");
            }}
            color={color3}
          >
            e
          </Navbar.Title>
          <Navbar.Title
            onMouseEnter={(event) => {
              event.preventDefault();
              setColor4("#ff6b6b");
            }}
            onMouseLeave={(event) => {
              event.preventDefault();
              setColor4("#424242");
            }}
            color={color4}
          >
            a
          </Navbar.Title>
        </Navbar.TitleContainer>
        <Navbar.Link>GitHub</Navbar.Link>
        <Navbar.Link>Documentation</Navbar.Link>
        <Navbar.Link>Socials</Navbar.Link>
      </Navbar.Center>
      <Navbar.TopContainer>
        <Navbar.BottomTitle color={isLight ? "#292929" : "#fff"}>Watch your ideas come to life.</Navbar.BottomTitle>
      </Navbar.TopContainer>
    </Navbar>
  );
}
