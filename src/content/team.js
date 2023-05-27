import React, { useRef, useState } from "react";
import { Generic, Navbar, Team } from "../subcomponents";
import { FaFacebook } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import useElementOnScreen from "../animations";
import { SocialsText } from "../subcomponents/navbar/styles/navbar";

const TeamPage = (props) => {
  // const onScroll = (event) => {
  //   event.preventDefault();
  //   console.log("something")
  // }

  const [icon0, setIcon0] = useState(false);
  const [icon1, setIcon1] = useState(false);
  const [icon2, setIcon2] = useState(false);
  const [icon3, setIcon3] = useState(false);
  const [icon4, setIcon4] = useState(false);
  const [icon5, setIcon5] = useState(false);

  const handleClick = (id) => {
    console.log(id);
    const element = document.getElementById(id);
    if (element.style.display === "grid") {
      element.style.display = "none";
      element.children.forEach((child) => {
        child.style.visibility = "hidden";
      })
      switch (id) {
        case "0":
          setIcon0(false);
          break
        case "1":
          setIcon1(false);
          break
        case "2":
          setIcon2(false);
          break
        case "3":
          setIcon3(false);
          break
        case "4":
          setIcon4(false);
          break
        case "5":
          setIcon5(false);
          break;
      }
      return;
    }
    element.style.display = "grid";
    element.style.visibility = "visible";
    switch (id) {
      case "0":
        setIcon0(true);
        break
      case "1":
        setIcon1(true);
        break
      case "2":
        setIcon2(true);
        break
      case "3":
        setIcon3(true);
        break
      case "4":
        setIcon4(true);
        break
      case "5":
        setIcon5(true);
        break
    }
  };

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
              onClick={props.projects}
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
          <Team.TeamYears
            ref={ref}
            style={{
              opacity: onScreen ? 1 : 0,
              translate: onScreen ? "none" : "0 2rem",
              transition: "600ms ease-in-out",
            }}
          >
            2023-24
          </Team.TeamYears>
          <div style={{ alignSelf: "flex-start" }}>
            <Team.Title
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "none" : "0 2rem",
                transition: "600ms ease-in-out",
              }}
            >
              Core Team
            </Team.Title>
            <Team.Paragraph
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "none" : "0 2rem",
                transition: "600ms ease-in-out",
              }}
            >
              Running a student organisation is a piece of cake. If you have{" "}
              <br /> these people, that is!
            </Team.Paragraph>
          </div>
          <Team.MentorSectionContainer>
            <Team.MentorTitle>Faculty Mentors</Team.MentorTitle>
            <Team.MentorInnerContainer>
              <Team.MentorOuterContainer>
                <Team.OtherTeamsSpecificInnerContainer>
                  <Team.OtherTeamsImage
                    src="/images/user.png"
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  />
                  <Team.UserInfoContainer>
                    <Team.SubTitle
                      ref={ref}
                      style={{
                        opacity: onScreen ? 1 : 0,
                        translate: onScreen ? "none" : "0 2rem",
                        transition: "600ms ease-in-out",
                      }}
                    >
                      Dr. Dhanya N D
                    </Team.SubTitle>
                    <Team.Designation
                      ref={ref}
                      style={{
                        opacity: onScreen ? 1 : 0,
                        translate: onScreen ? "none" : "0 2rem",
                        transition: "600ms ease-in-out",
                      }}
                    >
                      4th year, B. Tech CSE
                    </Team.Designation>
                  </Team.UserInfoContainer>
                </Team.OtherTeamsSpecificInnerContainer>
                <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              </Team.MentorOuterContainer>
              <Team.MentorOuterContainer>
                <Team.OtherTeamsSpecificInnerContainer>
                  <Team.OtherTeamsImage
                    src="/images/user.png"
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  />
                  <Team.UserInfoContainer>
                    <Team.SubTitle
                      ref={ref}
                      style={{
                        opacity: onScreen ? 1 : 0,
                        translate: onScreen ? "none" : "0 2rem",
                        transition: "600ms ease-in-out",
                      }}
                    >
                      Dr. Guruprakash
                    </Team.SubTitle>
                    <Team.Designation
                      ref={ref}
                      style={{
                        opacity: onScreen ? 1 : 0,
                        translate: onScreen ? "none" : "0 2rem",
                        transition: "600ms ease-in-out",
                      }}
                    >
                      4th year, B. Tech CSE
                    </Team.Designation>
                  </Team.UserInfoContainer>
                </Team.OtherTeamsSpecificInnerContainer>
                <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              </Team.MentorOuterContainer>
            </Team.MentorInnerContainer>
          </Team.MentorSectionContainer>
        </Team>
        <Team.OtherTeamsContainer>
          <Team.ExpandableSectionContainer>
            <Team.ExpandableSection
              isLight={props.isLight}
              onClick={(e) => {
                e.preventDefault();
                handleClick("0");
              }}
            >
              <Team.ExpandableInnerContainer>
                ADVISORS
                {icon0 ? <BsArrowUpRight /> : <BsArrowDownRight />}
              </Team.ExpandableInnerContainer>
            </Team.ExpandableSection>
            <Team.TeamDropDownContainer isLight={props.isLight} id="0">
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
            </Team.TeamDropDownContainer>
            <Team.ExpandableSection
              isLight={props.isLight}
              onClick={(e) => {
                e.preventDefault();
                handleClick("1");
              }}
            >
              <Team.ExpandableInnerContainer>
                MANAGEMENT & OUTREACH
                {icon1 ? <BsArrowUpRight /> : <BsArrowDownRight />}
              </Team.ExpandableInnerContainer>
            </Team.ExpandableSection>
            <Team.TeamDropDownContainer isLight={props.isLight} id="1">
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
            </Team.TeamDropDownContainer>
            <Team.ExpandableSection
              isLight={props.isLight}
              onClick={(e) => {
                e.preventDefault();
                handleClick("2");
              }}
            >
              <Team.ExpandableInnerContainer>
                IDEATION
                {icon2 ? <BsArrowUpRight /> : <BsArrowDownRight />}
              </Team.ExpandableInnerContainer>
            </Team.ExpandableSection>
            <Team.TeamDropDownContainer isLight={props.isLight} id="2">
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
            </Team.TeamDropDownContainer>
            <Team.ExpandableSection
              isLight={props.isLight}
              onClick={(e) => {
                e.preventDefault();
                handleClick("3");
              }}
            >
              <Team.ExpandableInnerContainer>
                INTERNAL DEVELOPMENT
                {icon3 ? <BsArrowUpRight /> : <BsArrowDownRight />}
              </Team.ExpandableInnerContainer>
            </Team.ExpandableSection>
            <Team.TeamDropDownContainer isLight={props.isLight} id="3">
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
            </Team.TeamDropDownContainer>
            <Team.ExpandableSection
              isLight={props.isLight}
              onClick={(e) => {
                e.preventDefault();
                handleClick("4");
              }}
            >
              <Team.ExpandableInnerContainer>
                HUMAN RESOURCES
                {icon4 ? <BsArrowUpRight /> : <BsArrowDownRight />}
              </Team.ExpandableInnerContainer>
            </Team.ExpandableSection>
            <Team.TeamDropDownContainer isLight={props.isLight} id="4">
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
            </Team.TeamDropDownContainer>
            <Team.ExpandableSection
              isLight={props.isLight}
              onClick={(e) => {
                e.preventDefault();
                handleClick("5");
              }}
            >
              <Team.ExpandableInnerContainer>
                CURATION
                {icon5 ? <BsArrowUpRight /> : <BsArrowDownRight />}
              </Team.ExpandableInnerContainer>
            </Team.ExpandableSection>
            <Team.TeamDropDownContainer isLight={props.isLight} id="5">
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage
                  src="/images/user.png"
                  ref={ref}
                  style={{
                    opacity: onScreen ? 1 : 0,
                    translate: onScreen ? "none" : "0 2rem",
                    transition: "600ms ease-in-out",
                  }}
                />
                <Team.UserInfoContainer>
                  <Team.SubTitle
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    John Doe
                  </Team.SubTitle>
                  <Team.Designation
                    ref={ref}
                    style={{
                      opacity: onScreen ? 1 : 0,
                      translate: onScreen ? "none" : "0 2rem",
                      transition: "600ms ease-in-out",
                    }}
                  >
                    4th year, B. Tech CSE
                  </Team.Designation>
                </Team.UserInfoContainer>
              </Team.OtherTeamsSpecificInnerContainer>
            </Team.TeamDropDownContainer>
          </Team.ExpandableSectionContainer>
        </Team.OtherTeamsContainer>
      </Generic>
    </>
  );
};

export default TeamPage;
