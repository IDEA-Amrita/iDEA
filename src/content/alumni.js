import React, { useRef, useState } from "react";
import { Alumni, Navbar } from "../subcomponents";
import { Socials } from "../components";
import { AiOutlineArrowUp } from "react-icons/ai";
import useElementOnScreen from "../animations";
import alumni from "../data/alumni";

const AlumniPage = (props) => {
  const [activeAlum, setActiveAlum] = useState(0);
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);

  const selected = alumni[activeAlum] || alumni[0];
  const defaultAlumniImage = "/images/team/user.png";

  return (
    <>
      <Alumni>
        <Navbar.TopContainer>
          <Navbar.TimelineBarLeft>
            <Navbar.Circle
              onClick={props.about}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              onClick={props.roadmap}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              onClick={props.team}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              onClick={props.projects}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              onClick={props.contribute}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              onClick={props.alumni}
              size={true}
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${
                  props.isLight ? "var(--accent-violet)" : "var(--accent-lime)"
                }`,
              }}
            />
            <Navbar.Circle
              style={{
                backgroundColor: props.isLight
                  ? "var(--accent-violet)"
                  : "var(--accent-lime)",
              }}
            />
          </Navbar.TimelineBarLeft>
          <Socials isLight={props.isLight} />
        </Navbar.TopContainer>

        <Alumni.AlumniContentContainer>
          <Alumni.AlumniListContainer>
            <Alumni.ListTitle>Alumini</Alumni.ListTitle>
            <Alumni.ListSubTitle>
              The class of every year stays in touch. Reconnect with classmates,
              share what you're building, and find each other across cities,
              careers, and decades.
            </Alumni.ListSubTitle>
            <Alumni.ListContainer>
              {alumni.map((item, index) => {
                const isActive = index === activeAlum;
                return (
                  <Alumni.ListItem
                    key={index}
                    onClick={() => setActiveAlum(index)}
                    isActive={isActive}
                  >
                    <Alumni.ListItemArrowContainer
                      color={isActive ? "var(--accent-violet)" : ""}
                    >
                      <AiOutlineArrowUp
                        style={{
                          transition: "300ms ease-in-out",
                          transform: isActive
                            ? "rotate(135deg)"
                            : "rotate(-45deg)",
                          color: isActive ? "#fff" : "var(--ink-soft)",
                        }}
                      />
                    </Alumni.ListItemArrowContainer>
                    <Alumni.ListItemName isActive={isActive}>
                      {item.name}
                    </Alumni.ListItemName>
                  </Alumni.ListItem>
                );
              })}
            </Alumni.ListContainer>
          </Alumni.AlumniListContainer>

          <Alumni.DescriptionContainer>
            <Alumni.DescriptionHeader>
              <Alumni.DescriptionHeaderImage
                src={selected.image || defaultAlumniImage}
                alt={selected.name}
              />
              <Alumni.DescriptionHeaderContent>
                <Alumni.AlumniTitle>{selected.name}</Alumni.AlumniTitle>
                <Alumni.AlumniRole>
                  {selected.role} • Batch {selected.batch}
                </Alumni.AlumniRole>
              </Alumni.DescriptionHeaderContent>
            </Alumni.DescriptionHeader>
            <Alumni.DescriptionContent>
              <Alumni.AlumniDescription>
                {selected.description}
              </Alumni.AlumniDescription>
              {selected.field && (
                <Alumni.Field>
                  <Alumni.FieldLabel>Field of Work</Alumni.FieldLabel>
                  <Alumni.FieldValue>{selected.field}</Alumni.FieldValue>
                </Alumni.Field>
              )}
              {selected.location && (
                <Alumni.Field>
                  <Alumni.FieldLabel>Current Location</Alumni.FieldLabel>
                  <Alumni.FieldValue>{selected.location}</Alumni.FieldValue>
                </Alumni.Field>
              )}
            </Alumni.DescriptionContent>
          </Alumni.DescriptionContainer>
        </Alumni.AlumniContentContainer>
      </Alumni>
    </>
  );
};

export default AlumniPage;
