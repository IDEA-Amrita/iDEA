import React, {useRef, useState} from "react";
import {Generic, Navbar} from "../subcomponents";
import {FaFacebook} from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiFillYoutube,
  AiFillLinkedin, AiOutlineArrowUp,
} from "react-icons/ai";
import useElementOnScreen from "../animations";
import {SocialsText} from "../subcomponents/navbar/styles/navbar";
import Projects from "../subcomponents/projects";

const ProjectsPage = (props) => {

  const [activeProject, setActiveProject] = useState(0)

  let array = []

  for (let i = 0; i < 20; i++) {
    let testObject = {
      title: "Project 1",
      name: "Soorya S",
      yearAndDepartment: "4th Year CSE",
      startDate: "May 2023",
      endDate: "Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      frameworksUsed: ["Python", "React", "Node.js", "Django", "MongoDB"],
      tags: ["Web Development", "Machine Learning", "Artificial Intelligence"],
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
    }
    testObject.title = "Project " + (i + 1)
    array.push(testObject)
  }


  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <>
      <Generic>
        <Navbar.TopContainer>
          <Navbar.TimelineBarLeft>
            <Navbar.Circle
              style={{backgroundColor: props.isLight ? "#000" : "#fff"}}
            />
            <Navbar.Stick
              style={{border: `1px solid ${props.isLight ? "#000" : "#fff"}`}}
            />
            <Navbar.Circle
              style={{backgroundColor: props.isLight ? "#000" : "#fff"}}
              onClick={props.roadmap}
            />
            <Navbar.Stick
              style={{border: `1px solid ${props.isLight ? "#000" : "#fff"}`}}
            />
            <Navbar.Circle
              onClick={props.team}
              style={{backgroundColor: props.isLight ? "#000" : "#fff"}}
            />
            <Navbar.Stick
              style={{border: `1px solid ${props.isLight ? "#000" : "#fff"}`}}
            />
            <Navbar.Circle
              size={true}
              style={{backgroundColor: props.isLight ? "#000" : "#fff"}}
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
              style={{backgroundColor: props.isLight ? "#000" : "#fff"}}
            />
            <Navbar.Stick
              style={{border: `1px solid ${props.isLight ? "#000" : "#fff"}`}}
            />
          </Navbar.TimelineBarLeft>
          <Navbar.SocialsTopLeft
            style={{backgroundColor: props.isLight ? "#000" : "#fff"}}
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
                style={{color: props.isLight ? "#fff" : "#000"}}
              />
              <AiOutlineTwitter
                style={{color: props.isLight ? "#fff" : "#000"}}
              />
              <AiOutlineMedium
                style={{color: props.isLight ? "#fff" : "#000"}}
              />
              <FaFacebook style={{color: props.isLight ? "#fff" : "#000"}}/>
              <AiFillYoutube
                style={{color: props.isLight ? "#fff" : "#000"}}
              />
              <AiFillLinkedin
                style={{color: props.isLight ? "#fff" : "#000"}}
              />
            </Navbar.SocialsTopLeftInnerContainer>
          </Navbar.SocialsTopLeft>
        </Navbar.TopContainer>
        <Projects>
          <Projects.TimeLineContainer>
            <p>
              Time line here
            </p>
          </Projects.TimeLineContainer>
          <Projects.ProjectsContentContainer>
            <Projects.DescriptionContainer>

            </Projects.DescriptionContainer>
            <Projects.ProjectListContainer>
              <Projects.Title>
                Projects
              </Projects.Title>
              <Projects.SubTitle>
                The bread and butter of iDEA. Find more about our current and past projects.
              </Projects.SubTitle>
              <Projects.ListContainer>
                {array.map((item, index) => {
                  return (
                    <Projects.ListItem key={index} onClick={() => setActiveProject(index)}>
                      <Projects.ListItemArrowContainer color={index === activeProject ? "#E0005E" : ""}>
                        <AiOutlineArrowUp style={{
                          transition: "300ms ease-in-out",
                          transform: index === activeProject ? "rotate(135deg)" : "rotate(-45deg)",
                          color: index === activeProject ? "#FFF" : "#000",
                        }}/>
                      </Projects.ListItemArrowContainer>
                      <Projects.ListItemTitle color={index === activeProject ? "#E0005E" : ""}>
                        {item.title}
                      </Projects.ListItemTitle>
                    </Projects.ListItem>
                  )
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
