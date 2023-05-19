import { useState, useEffect, useRef } from "react";
import { Navbar } from "../subcomponents";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CDropdownDivider,
} from "@coreui/react";

export default function Nav(props) {
  const [isLight, setIsLight] = useState(props.mode);
  const [color1, setColor1] = useState("#424242");
  const [color2, setColor2] = useState("#ff6b6b");

  return (
    <Navbar>
      <Navbar.TopContainer>
        {/* <Navbar.EmptyDivL />
        <Navbar.EmptyDivL />
        <Navbar.EmptyDivL /> */}
        <Navbar.TopTitle>
          IDEA
        </Navbar.TopTitle>
        {/* <Navbar.EmptyDivR />
        <Navbar.EmptyDivR />
        <Navbar.EmptyDivR /> */}
      </Navbar.TopContainer>
      <Navbar.Center>
        <Navbar.CenterContainer>
          <Navbar.Link color={isLight ? "#000" : "#fff"}>Home</Navbar.Link>
          <Navbar.Link color={isLight ? "#000" : "#fff"} onClick={props.about}>
            About
          </Navbar.Link>
          <Navbar.Link
            color={isLight ? "#000" : "#fff"}
            onClick={props.roadmap}
          >
            Roadmap
          </Navbar.Link>
        </Navbar.CenterContainer>
        <Navbar.TitleContainer>
          <Navbar.Title color={isLight ? color1 : color2}>i</Navbar.Title>
          <Navbar.Title color={isLight ? color1 : color2}>D</Navbar.Title>
          <Navbar.Title color={isLight ? color1 : color2}>E</Navbar.Title>
          <Navbar.Title color={isLight ? color1 : color2}>A</Navbar.Title>
        </Navbar.TitleContainer>
        <Navbar.CenterContainer>
          <Navbar.Link
            color={isLight ? "#000" : "#fff"}
            href="https://github.com/IDEA-Amrita"
            target="_blank"
          >
            GitHub
          </Navbar.Link>
          <Navbar.Link
            color={isLight ? "#000" : "#fff"}
            href="https://github.com/IDEA-Amrita"
            target="_blank"
          >
            Documentation
          </Navbar.Link>
          <Navbar.Link color={isLight ? "#000" : "#fff"}>
            <CDropdown
              dark
              variant="nav-item"
              style={{ listStyleType: "none" }}
              direction="center"
            >
              <CDropdownToggle>Socials</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">
                  <AiOutlineInstagram /> Instagram
                </CDropdownItem>
                <CDropdownItem href="#">
                  <AiOutlineTwitter /> Twitter
                </CDropdownItem>
                <CDropdownItem href="#">
                  <FaFacebook /> Facebook
                </CDropdownItem>
                <CDropdownItem href="#">
                  <AiOutlineMedium /> Medium
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </Navbar.Link>
        </Navbar.CenterContainer>
      </Navbar.Center>
      <Navbar.TopContainer>
        {/* <Navbar.EmptyDivL />
        <Navbar.EmptyDivL />
        <Navbar.EmptyDivL /> */}
        <Navbar.BottomTitle color={isLight ? "#292929" : "#fff"}>
          Watch your ideas come to life.
        </Navbar.BottomTitle>
        {/* <Navbar.EmptyDivR />
        <Navbar.EmptyDivR />
        <Navbar.EmptyDivR /> */}
      </Navbar.TopContainer>
    </Navbar>
  );
}
