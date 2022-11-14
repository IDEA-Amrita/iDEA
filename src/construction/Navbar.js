import { useState } from "react";
import { Navbar } from "../pieces";

export default function Nav() {

  const [isLight, setIsLight] = useState(true);
  const handleClick = (event) => {
    event.preventDefault();
    setIsLight((isLight) => !isLight);
  }
  return (
    <Navbar>
      <Navbar.TopContainer>
        <Navbar.TopTitle>IDEA</Navbar.TopTitle>
      </Navbar.TopContainer>
      <Navbar.Center>
        <Navbar.Link>Home</Navbar.Link>
        <Navbar.Link>About</Navbar.Link>
        <Navbar.Link>Roadmap</Navbar.Link>
        <Navbar.Title>Idea</Navbar.Title>
        <Navbar.Link>GitHub</Navbar.Link>
        <Navbar.Link>Documentation</Navbar.Link>
        <Navbar.Link>Socials</Navbar.Link>
      </Navbar.Center>
      <Navbar.TopContainer>
        <Navbar.BottomTitle>Watch your ideas come to life.</Navbar.BottomTitle>
      </Navbar.TopContainer>
      <Navbar.IconContainer>
        {
            isLight ? (
                <Navbar.LightIcon onClick={handleClick} />
            ) : (
                <Navbar.DarkIcon onClick={handleClick} />
            )
        }
      </Navbar.IconContainer>
    </Navbar>
  );
}
