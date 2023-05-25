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
          <Generic.Paragraph
            ref={ref}
            style={{
              opacity: onScreen ? 1 : 0,
              translate: onScreen ? "none" : "0 2rem",
              transition: "600ms ease-in-out",
            }}
          >
            Running a student organisation is a piece of cake. If you have{" "}
            <br /> these people, that is!
          </Generic.Paragraph>
          <Team.SectionContainer>
            <Team.Section>
              <Team.SubTitle
                ref={ref}
                style={{
                  opacity: onScreen ? 1 : 0,
                  translate: onScreen ? "none" : "0 2rem",
                  transition: "600ms ease-in-out",
                }}
              >
                Lead
              </Team.SubTitle>
              <Team.CrossedBordersContainer>
                <Team.CrossedBorders onScreen={onScreen}>
                  <Team.CrossedBordersInnerContainer>
                    <Team.CrossedBordersImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
                      <Team.About
                        ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}
                      >
                        5 words they chose to go here
                      </Team.About>
                    </Team.UserInfoContainer>
                  </Team.CrossedBordersInnerContainer>
                </Team.CrossedBorders>
              </Team.CrossedBordersContainer>
            </Team.Section>
            <Team.Section>
              <Team.SubTitle
                ref={ref}
                style={{
                  opacity: onScreen ? 1 : 0,
                  translate: onScreen ? "none" : "0 2rem",
                  transition: "600ms ease-in-out",
                }}
              >
                Co-Lead
              </Team.SubTitle>
              <Team.CrossedBordersContainer>
                <Team.CrossedBorders onScreen={onScreen}>
                  <Team.CrossedBordersInnerContainer>
                    <Team.CrossedBordersImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
                      <Team.About
                        ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}
                      >
                        5 words they chose to go here
                      </Team.About>
                    </Team.UserInfoContainer>
                  </Team.CrossedBordersInnerContainer>
                </Team.CrossedBorders>
              </Team.CrossedBordersContainer>
            </Team.Section>
            <Team.Section>
              <Team.SubTitle
                ref={ref}
                style={{
                  opacity: onScreen ? 1 : 0,
                  translate: onScreen ? "none" : "0 2rem",
                  transition: "600ms ease-in-out",
                }}
              >
                Outreach Lead
              </Team.SubTitle>
              <Team.CrossedBordersContainer>
                <Team.CrossedBorders onScreen={onScreen}>
                  <Team.CrossedBordersInnerContainer>
                    <Team.CrossedBordersImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
                      <Team.About
                        ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}
                      >
                        5 words they chose to go here
                      </Team.About>
                    </Team.UserInfoContainer>
                  </Team.CrossedBordersInnerContainer>
                </Team.CrossedBorders>
              </Team.CrossedBordersContainer>
            </Team.Section>
          </Team.SectionContainer>
          <Team.OtherTeamsContainer>
            <Team.OtherTeamsSpecificContainer>
              <Team.OtherTeamsTitle
                ref={ref}
                style={{
                  opacity: onScreen ? 1 : 0,
                  translate: onScreen ? "none" : "0 2rem",
                  transition: "600ms ease-in-out",
                  paddingBottom: "5%",
                }}
              >
                HR
              </Team.OtherTeamsTitle>
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png"ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }} />
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
            </Team.OtherTeamsSpecificContainer>
            <Team.OtherTeamsSpecificContainer>
              <Team.OtherTeamsTitle
                ref={ref}
                style={{
                  opacity: onScreen ? 1 : 0,
                  translate: onScreen ? "none" : "0 2rem",
                  transition: "600ms ease-in-out",
                  paddingBottom: "5%",
                }}
              >
                Ideation
              </Team.OtherTeamsTitle>
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png"ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
            </Team.OtherTeamsSpecificContainer>
            <Team.OtherTeamsSpecificContainer>
              <Team.OtherTeamsTitle
                ref={ref}
                style={{
                  opacity: onScreen ? 1 : 0,
                  translate: onScreen ? "none" : "0 2rem",
                  transition: "600ms ease-in-out",
                  paddingBottom: "5%",
                }}
              >
                Curation
              </Team.OtherTeamsTitle>
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png"ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }} />
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }} />
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png"ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }} />
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
            </Team.OtherTeamsSpecificContainer>
            <Team.OtherTeamsSpecificContainer>
              <Team.OtherTeamsTitle
                ref={ref}
                style={{
                  opacity: onScreen ? 1 : 0,
                  translate: onScreen ? "none" : "0 2rem",
                  transition: "600ms ease-in-out",
                  paddingBottom: "5%",
                }}
              >
                Internal Dev
              </Team.OtherTeamsTitle>
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
              <Team.OtherTeamsSpecificInnerContainer>
                <Team.OtherTeamsImage src="/images/user.png" ref={ref}
                        style={{
                          opacity: onScreen ? 1 : 0,
                          translate: onScreen ? "none" : "0 2rem",
                          transition: "600ms ease-in-out",
                        }}/>
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
              <Team.Line backgroundColor={props.isLight ? "#000" : "#fff"} />
            </Team.OtherTeamsSpecificContainer>
          </Team.OtherTeamsContainer>
        </Team>
      </Generic>
    </>
  );
};

export default TeamPage;
