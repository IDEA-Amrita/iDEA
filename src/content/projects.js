import React, { useRef, useState } from "react";
import { Generic, Navbar, Team } from "../subcomponents";
import { FaFacebook } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import useElementOnScreen from "../animations";
import { SocialsText } from "../subcomponents/navbar/styles/navbar";
import Projects from "../subcomponents/projects";
import projects from "../data/projects.json";

const ProjectsPage = (props) => {
  const [activeProject, setActiveProject] = useState(0);

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
              onClick={props.team}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
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
              onClick={props.contribute}
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
        </Navbar.TopContainer>
        <Projects
          style={{
            translate: onScreen ? "none" : "0 10rem",
            opacity: onScreen ? 1 : 0,
            transition: "1000ms ease-in-out",
          }}
        >
          <Projects.TimeLineContainer>
            <Team.TeamYears>2023-24</Team.TeamYears>
          </Projects.TimeLineContainer>
          <Projects.ProjectsContentContainer>
            <Projects.DescriptionContainer>
              <Projects.DescriptionHeader>
                <Projects.DescriptionHeaderImage
                  src={projects[activeProject].imageUrl}
                />
                <Projects.DescriptionHeaderContent>
                  <Projects.DescriptionTitle>
                    {projects[activeProject].title}
                  </Projects.DescriptionTitle>
                  <Projects.ContributorName>
                    {`${projects[activeProject].name}, ${projects[activeProject].yearAndDepartment}`}
                  </Projects.ContributorName>
                  <Projects.Date>
                    {`${projects[activeProject].startDate} - ${projects[activeProject].endDate}`}
                  </Projects.Date>
                </Projects.DescriptionHeaderContent>
              </Projects.DescriptionHeader>
              <Projects.DescriptionContent>
                <Projects.ProjectDescription>
                  {projects[activeProject].description}
                </Projects.ProjectDescription>
                {projects[activeProject].frameworksUsed.length > 0 && (
                  <Projects.BuiltUsing>Built Using</Projects.BuiltUsing>
                )}
                <Projects.ProjectFrameworks>
                  {/*  return comma separated string*/}
                  {projects[activeProject].frameworksUsed.map((item, index) => {
                    if (
                      index ===
                      projects[activeProject].frameworksUsed.length - 1
                    ) {
                      return item;
                    }
                    return item + ", ";
                  })}
                </Projects.ProjectFrameworks>
                <Projects.TagBubbleContainer>
                  {projects[activeProject].tags.map((item, index) => {
                    return (
                      <Projects.TagBubble
                        key={index}
                        color={props.isLight ? "#000" : "#fff"}
                        textColor={props.isLight ? "#fff" : "#000"}
                      >
                        #{item}
                      </Projects.TagBubble>
                    );
                  })}
                </Projects.TagBubbleContainer>
              </Projects.DescriptionContent>
            </Projects.DescriptionContainer>
            <Projects.ProjectListContainer>
              <Projects.Title>Projects</Projects.Title>
              <Projects.SubTitle>
                The bread and butter of iDEA. Find more about our current and
                past projects.
              </Projects.SubTitle>
              <Projects.ListContainer>
                {projects.map((item, index) => {
                  return (
                    <Projects.ListItem
                      key={index}
                      onClick={() => setActiveProject(index)}
                    >
                      <Projects.ListItemArrowContainer
                        color={
                          index === activeProject
                            ? props.isLight
                              ? "#424242"
                              : "#fff"
                            : ""
                        }
                      >
                        <AiOutlineArrowUp
                          style={{
                            transition: "300ms ease-in-out",
                            transform:
                              index === activeProject
                                ? "rotate(135deg)"
                                : "rotate(-45deg)",
                            color: props.isLight
                              ? index === activeProject
                                ? "#fff"
                                : "#000"
                              : index === activeProject
                              ? "#000"
                              : "#fff",
                          }}
                        />
                      </Projects.ListItemArrowContainer>
                      <Projects.ListItemTitle
                        color={props.isLight ? "#424242" : "#fff"}
                        style={{
                          opacity: index === activeProject ? "1" : "0.5",
                          transition: "opacity 300ms ease-in-out",
                        }}
                      >
                        {item.title}
                      </Projects.ListItemTitle>
                    </Projects.ListItem>
                  );
                })}
              </Projects.ListContainer>
            </Projects.ProjectListContainer>
          </Projects.ProjectsContentContainer>
        </Projects>
      </Generic>
    </>
  );
};

export default ProjectsPage;
