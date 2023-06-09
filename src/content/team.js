import React, { useRef, useState } from "react";
import { Generic, Navbar, Team } from "../subcomponents";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import useElementOnScreen from "../animations";
import faculty from "../data/faculty.json";
import { Socials } from "../components";
import {
  HR,
  ideation,
  internal_dev,
  curation,
  management,
  advisors,
} from "../data/team.js";

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

  const closeEveryOtherOpenedExpandableContainer = (id) => {
    switch (id) {
      case "0":
        if (icon1) {
          setIcon1(false);
          document.getElementById("1").style.display = "none";
        }
        if (icon2) {
          setIcon2(false);
          document.getElementById("2").style.display = "none";
        }
        if (icon3) {
          setIcon3(false);
          document.getElementById("3").style.display = "none";
        }
        if (icon4) {
          setIcon4(false);
          document.getElementById("4").style.display = "none";
        }
        if (icon5) {
          setIcon5(false);
          document.getElementById("5").style.display = "none";
        }
        break;
      case "1":
        if (icon0) {
          setIcon0(false);
          document.getElementById("0").style.display = "none";
        }
        if (icon2) {
          setIcon2(false);
          document.getElementById("2").style.display = "none";
        }
        if (icon3) {
          setIcon3(false);
          document.getElementById("3").style.display = "none";
        }
        if (icon4) {
          setIcon4(false);
          document.getElementById("4").style.display = "none";
        }
        if (icon5) {
          setIcon5(false);
          document.getElementById("5").style.display = "none";
        }
        break;
      case "2":
        if (icon0) {
          setIcon0(false);
          document.getElementById("0").style.display = "none";
        }
        if (icon1) {
          setIcon1(false);
          document.getElementById("1").style.display = "none";
        }
        if (icon3) {
          setIcon3(false);
          document.getElementById("3").style.display = "none";
        }
        if (icon4) {
          setIcon4(false);
          document.getElementById("4").style.display = "none";
        }
        if (icon5) {
          setIcon5(false);
          document.getElementById("5").style.display = "none";
        }
        break;
      case "3":
        if (icon0) {
          setIcon0(false);
          document.getElementById("0").style.display = "none";
        }
        if (icon1) {
          setIcon1(false);
          document.getElementById("1").style.display = "none";
        }
        if (icon2) {
          setIcon2(false);
          document.getElementById("2").style.display = "none";
        }
        if (icon4) {
          setIcon4(false);
          document.getElementById("4").style.display = "none";
        }
        if (icon5) {
          setIcon5(false);
          document.getElementById("5").style.display = "none";
        }
        break;
      case "4":
        if (icon0) {
          setIcon0(false);
          document.getElementById("0").style.display = "none";
        }
        if (icon1) {
          setIcon1(false);
          document.getElementById("1").style.display = "none";
        }
        if (icon2) {
          setIcon2(false);
          document.getElementById("2").style.display = "none";
        }
        if (icon3) {
          setIcon3(false);
          document.getElementById("3").style.display = "none";
        }
        if (icon5) {
          setIcon5(false);
          document.getElementById("5").style.display = "none";
        }
        break;
      case "5":
        if (icon0) {
          setIcon0(false);
          document.getElementById("0").style.display = "none";
        }
        if (icon1) {
          setIcon1(false);
          document.getElementById("1").style.display = "none";
        }
        if (icon2) {
          setIcon2(false);
          document.getElementById("2").style.display = "none";
        }
        if (icon3) {
          setIcon3(false);
          document.getElementById("3").style.display = "none";
        }
        if (icon4) {
          setIcon4(false);
          document.getElementById("4").style.display = "none";
        }
        break;
    }
  };

  const handleClick = (id) => {
    console.log(id);
    const element = document.getElementById(id);
    if (element.style.display === "grid") {
      element.style.display = "none";
      switch (id) {
        case "0":
          setIcon0(false);
          break;
        case "1":
          setIcon1(false);
          break;
        case "2":
          setIcon2(false);
          break;
        case "3":
          setIcon3(false);
          break;
        case "4":
          setIcon4(false);
          break;
        case "5":
          setIcon5(false);
          break;
      }
      closeEveryOtherOpenedExpandableContainer(id);
      return;
    }
    element.style.display = "grid";
    switch (id) {
      case "0":
        setIcon0(true);
        break;
      case "1":
        setIcon1(true);
        break;
      case "2":
        setIcon2(true);
        break;
      case "3":
        setIcon3(true);
        break;
      case "4":
        setIcon4(true);
        break;
      case "5":
        setIcon5(true);
        break;
    }
    closeEveryOtherOpenedExpandableContainer(id);
  };

  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <>
      <Generic>
        <Navbar.TopContainer>
          <Navbar.TimelineBarLeft>
            <Navbar.Circle
              onClick={props.about}
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
              onClick={props.contribute}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{ border: `1px solid ${props.isLight ? "#000" : "#fff"}` }}
            />
          </Navbar.TimelineBarLeft>
          <Socials isLight = {props.isLight} />
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
              {faculty.map((item, index) => {
                return (
                  <Team.MentorOuterContainer>
                    <Team.OtherTeamsSpecificInnerContainer>
                      <Team.OtherTeamsImage
                        src={item.photo}
                        ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                          objectFit: "cover"
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
                          {item.name}
                        </Team.SubTitle>
                        <Team.Designation
                          ref={ref}
                          style={{
                            opacity: onScreen ? 1 : 0,
                            translate: onScreen ? "none" : "0 2rem",
                            transition: "600ms ease-in-out",
                          }}
                        >
                          {item.designation}
                        </Team.Designation>
                      </Team.UserInfoContainer>
                    </Team.OtherTeamsSpecificInnerContainer>
                    <Team.Line
                      backgroundColor={props.isLight ? "#000" : "#fff"}
                    />
                  </Team.MentorOuterContainer>
                );
              })}
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
              {advisors.map((item, index) => {
                return (
                  <Team.OtherTeamsSpecificInnerContainer>
                    <Team.OtherTeamsImage
                      src={item.image}
                      ref={ref}
                      style={{
                        opacity: onScreen ? 1 : 0,
                        translate: onScreen ? "none" : "0 2rem",
                        transition: "600ms ease-in-out",
                        objectFit: "cover"
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
                        {item.name}
                      </Team.SubTitle>
                      <Team.Designation
                        ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}
                      >
                        {item.designation}
                      </Team.Designation>
                    </Team.UserInfoContainer>
                  </Team.OtherTeamsSpecificInnerContainer>
                );
              })}
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
              {management.map((item, index) => {
                return (
                  <Team.OtherTeamsSpecificInnerContainer>
                    <Team.OtherTeamsImage
                      src={item.image}
                      ref={ref}
                      style={{
                        opacity: onScreen ? 1 : 0,
                        translate: onScreen ? "none" : "0 2rem",
                        transition: "600ms ease-in-out",
                        objectFit: "cover"
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
                        {item.name}
                      </Team.SubTitle>
                      <Team.Designation
                        ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}
                      >
                        {item.designation}
                      </Team.Designation>
                    </Team.UserInfoContainer>
                  </Team.OtherTeamsSpecificInnerContainer>
                );
              })}
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
              {ideation.map((item, index) => {
                return (
                  <Team.OtherTeamsSpecificInnerContainer>
                    <Team.OtherTeamsImage
                      src={item.image}
                      ref={ref}
                      style={{
                        opacity: onScreen ? 1 : 0,
                        translate: onScreen ? "none" : "0 2rem",
                        transition: "600ms ease-in-out",
                        objectFit: "cover"
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
                        {item.name}
                      </Team.SubTitle>
                      <Team.Designation
                        ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}
                      >
                        {item.designation}
                      </Team.Designation>
                    </Team.UserInfoContainer>
                  </Team.OtherTeamsSpecificInnerContainer>
                );
              })}
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
              {internal_dev.map((item, index) => {
                return (
                  <Team.OtherTeamsSpecificInnerContainer>
                    <Team.OtherTeamsImage
                      src={item.image}
                      ref={ref}
                      style={{
                        opacity: onScreen ? 1 : 0,
                        translate: onScreen ? "none" : "0 2rem",
                        transition: "600ms ease-in-out",
                        objectFit: "cover"
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
                        {item.name}
                      </Team.SubTitle>
                      <Team.Designation
                        ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}
                      >
                        {item.designation}
                      </Team.Designation>
                    </Team.UserInfoContainer>
                  </Team.OtherTeamsSpecificInnerContainer>
                );
              })}
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
              {HR.map((item, index) => {
                return (
                  <Team.OtherTeamsSpecificInnerContainer>
                    <Team.OtherTeamsImage
                      src={item.image}
                      ref={ref}
                      style={{
                        opacity: onScreen ? 1 : 0,
                        translate: onScreen ? "none" : "0 2rem",
                        transition: "600ms ease-in-out",
                        objectFit: "cover"
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
                        {item.name}
                      </Team.SubTitle>
                      <Team.Designation
                        ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}
                      >
                        {item.designation}
                      </Team.Designation>
                    </Team.UserInfoContainer>
                  </Team.OtherTeamsSpecificInnerContainer>
                );
              })}
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
              {curation.map((item, index) => {
                return (
                  <Team.OtherTeamsSpecificInnerContainer>
                    <Team.OtherTeamsImage
                      src={item.image}
                      ref={ref}
                      style={{
                        opacity: onScreen ? 1 : 0,
                        translate: onScreen ? "none" : "0 2rem",
                        transition: "600ms ease-in-out",
                        objectFit: "cover"
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
                        {item.name}
                      </Team.SubTitle>
                      <Team.Designation
                        ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}
                      >
                        {item.designation}
                      </Team.Designation>
                    </Team.UserInfoContainer>
                  </Team.OtherTeamsSpecificInnerContainer>
                );
              })}
            </Team.TeamDropDownContainer>
          </Team.ExpandableSectionContainer>
        </Team.OtherTeamsContainer>
      </Generic>
    </>
  );
};

export default TeamPage;
