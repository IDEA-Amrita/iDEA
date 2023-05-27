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

  let array = [
    {
      title: "Project One",
      name: "Soorya S Rajan",
      yearAndDepartment: "4th Year CSE",
      startDate: "Jan 2022",
      endDate: "Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      frameworksUsed: ["Python", "React", "Node.js", "Django", "MongoDB"],
      tags: ["Web Development", "Machine Learning", "Artificial Intelligence", "Web Development", "Machine Learning", "Artificial Intelligence"],
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
      title: "Project Two",
      name: "XYZ",
      yearAndDepartment: "1th Year CSE",
      startDate: "May 2023",
      endDate: "July 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      frameworksUsed: ["Python", "React", "Node.js", "Python", "React", "Node.js", "Python", "React", "Node.js", "Python", "React", "Node.js"],
      tags: ["Web Development", "Machine Learning", "Artificial Intelligence"],
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
      title: "Project Three",
      name: "ABC",
      yearAndDepartment: "3th Year ECE",
      startDate: "May 2023",
      endDate: "Dec 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      frameworksUsed: ["Python"],
      tags: ["Web Development", "Machine Learning", "Artificial Intelligence", "Web Development", "Machine Learning", "Artificial Intelligence", "Web Development", "Machine Learning", "Artificial Intelligence", "Web Development", "Machine Learning", "Artificial Intelligence"],
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
      title: "Project Four",
      name: "Some random name",
      yearAndDepartment: "2th Year CSE",
      startDate: "May 2023",
      endDate: "Aug 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      frameworksUsed: [],
      tags: ["Web Development", "Machine Learning", "Artificial Intelligence", "Web Development", "Machine Learning", "Artificial Intelligence"],
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
      title: "Project Five",
      name: "More random names",
      yearAndDepartment: "3th Year CSE",
      startDate: "Feb 2021",
      endDate: "Dec 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      frameworksUsed: ["Python", "React", "Node.js", "Django", "MongoDB"],
      tags: ["Web Development", "Machine Learning", "Artificial Intelligence", "Web Development", "Machine Learning", "Artificial Intelligence", "Machine Learning", "Artificial Intelligence", "Web Development", "Machine Learning", "Artificial Intelligence"],
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
    }
  ]


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
              onClick={props.contribute}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
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
        <Projects style={{
          translate: onScreen ? "none" : "0 10rem",
          opacity: onScreen ? 1 : 0,
          transition: "1000ms ease-in-out",
        }}>
          <Projects.TimeLineContainer>
            <p>
              Time line here
            </p>
          </Projects.TimeLineContainer>
          <Projects.ProjectsContentContainer>
            <Projects.DescriptionContainer>
              <Projects.DescriptionHeader>
                <Projects.DescriptionHeaderImage src={array[activeProject].imageUrl}/>
                <Projects.DescriptionHeaderContent>
                  <Projects.DescriptionTitle>
                    {array[activeProject].title}
                  </Projects.DescriptionTitle>
                  <Projects.ContributorName>
                    {`${array[activeProject].name}, ${array[activeProject].yearAndDepartment}`}
                  </Projects.ContributorName>
                  <Projects.Date>
                    {`${array[activeProject].startDate} - ${array[activeProject].endDate}`}
                  </Projects.Date>
                </Projects.DescriptionHeaderContent>
              </Projects.DescriptionHeader>
              <Projects.DescriptionContent>
                <Projects.ProjectDescription>
                  {array[activeProject].description}
                </Projects.ProjectDescription>
                {array[activeProject].frameworksUsed.length > 0 &&
                  <Projects.BuiltUsing>
                  Built Using
                </Projects.BuiltUsing>}
                <Projects.ProjectFrameworks>
                  {/*  return comma separated string*/}
                  {array[activeProject].frameworksUsed.map((item, index) => {
                    if (index === array[activeProject].frameworksUsed.length - 1) {
                      return item
                    }
                    return item + ", "
                  })}
                </Projects.ProjectFrameworks>
                <Projects.TagBubbleContainer>
                  {array[activeProject].tags.map((item, index) => {
                    return (
                      <Projects.TagBubble key={index}>
                        #{item}
                      </Projects.TagBubble>
                    )
                  })}
                </Projects.TagBubbleContainer>
              </Projects.DescriptionContent>
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
