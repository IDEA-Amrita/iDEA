import React, { useRef } from "react";
import { Generic, Navbar, Team } from "../subcomponents";
import { FaFacebook } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import useElementOnScreen from "../animations";
import { SocialsText } from "../subcomponents/navbar/styles/navbar";

const TeamPage = (props) => {
  // const onScroll = (event) => {
  //   event.preventDefault();
  //   console.log("something")
  // }

  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <>
      <Generic>
        <Navbar.TopContainer>
          <Navbar.TimelineBarLeft>
            <Navbar.Circle
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
            <Navbar.Circle
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
              onClick={props.roadmap}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
            <Navbar.Circle
              size={true}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              ref={ref}
              style={{
                width: onScreen ? "1%" : "0",
                translate: onScreen ? "none" : "0 10rem",
                transition: "1000ms ease-in-out",
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
            <Navbar.Circle
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
          </Navbar.TimelineBarLeft>
          <Navbar.SocialsTopLeft
            style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
          >
            <SocialsText
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "none" : "0 2rem",
                transition: "600ms ease-in-out",
                color: props.isLight ? "#fff" : "#000",
              }}
            >
              iDEA
            </SocialsText>
            <Navbar.SocialsTopLeftInnerContainer
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "none" : "0 2rem",
                transition: "600ms ease-in-out",
              }}
            >
              <AiOutlineInstagram
                style={{ color: props.isLight ? "#fff" : "#000" }}
              />
              <AiOutlineTwitter
                style={{ color: props.isLight ? "#fff" : "#000" }}
              />
              <AiOutlineMedium
                style={{ color: props.isLight ? "#fff" : "#000" }}
              />
              <FaFacebook style={{ color: props.isLight ? "#fff" : "#000" }} />
              <AiFillYoutube
                style={{ color: props.isLight ? "#fff" : "#000" }}
              />
              <AiFillLinkedin
                style={{ color: props.isLight ? "#fff" : "#000" }}
              />
            </Navbar.SocialsTopLeftInnerContainer>
          </Navbar.SocialsTopLeft>
          {/* <Navbar.TopTitle>
            <AiOutlineArrowDown onClick={props.down} />
            <AiOutlineArrowUp onClick={props.up} style={{cursor: "pointer"}}/>
          </Navbar.TopTitle> */}
        </Navbar.TopContainer>
        <Team>
          <Team.Title>Core Team</Team.Title>
          <Generic.Paragraph>
            Running a student organisation is a piece of cake. If you have{" "}
            <br /> these people, that is!
          </Generic.Paragraph>
          <Team.SectionContainer>
            <Team.Section>
              <Team.SubTitle>Lead</Team.SubTitle>
              <Team.CrossedBordersContainer>
                <Team.CrossedBorders>
                    <Team.CrossedBordersInnerContainer>
                        <Team.CrossedBordersImage src="/images/user.png" />
                        <Team.UserInfoContainer>
                            <Team.SubTitle>Name of the Person</Team.SubTitle>
                            <Team.Designation>4th year, B. Tech CSE</Team.Designation>
                            <Team.About>5 words they chose to go here</Team.About>
                        </Team.UserInfoContainer>
                    </Team.CrossedBordersInnerContainer>
                </Team.CrossedBorders>
              </Team.CrossedBordersContainer>
            </Team.Section>
            <Team.Section>
              <Team.SubTitle>Co-Lead</Team.SubTitle>
              <Team.CrossedBordersContainer>
                <Team.CrossedBorders>
                    <Team.CrossedBordersInnerContainer>
                        <Team.CrossedBordersImage src="/images/user.png" />
                        <Team.UserInfoContainer>
                            <Team.SubTitle>Name of the Person</Team.SubTitle>
                            <Team.Designation>4th year, B. Tech CSE</Team.Designation>
                            <Team.About>5 words they chose to go here</Team.About>
                        </Team.UserInfoContainer>
                    </Team.CrossedBordersInnerContainer>
                </Team.CrossedBorders>
              </Team.CrossedBordersContainer>
            </Team.Section>
            <Team.Section>
              <Team.SubTitle>Outreach Lead</Team.SubTitle>
              <Team.CrossedBordersContainer>
                <Team.CrossedBorders>
                    <Team.CrossedBordersInnerContainer>
                        <Team.CrossedBordersImage src="/images/user.png" />
                        <Team.UserInfoContainer>
                            <Team.SubTitle>Name of the Person</Team.SubTitle>
                            <Team.Designation>4th year, B. Tech CSE</Team.Designation>
                            <Team.About>5 words they chose to go here</Team.About>
                        </Team.UserInfoContainer>
                    </Team.CrossedBordersInnerContainer>
                </Team.CrossedBorders>
              </Team.CrossedBordersContainer>
            </Team.Section>
          </Team.SectionContainer>
        </Team>
      </Generic>
    </>
  );
};

export default TeamPage;
