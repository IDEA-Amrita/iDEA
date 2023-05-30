import React, { useRef, useState } from "react";
import { Generic, Navbar, Contribution } from "../subcomponents";
import { FaFacebook } from "react-icons/fa";
import {
  AiOutlineArrowUp,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import useElementOnScreen from "../animations";
import { SocialsText } from "../subcomponents/navbar/styles/navbar";
import styled from "styled-components";

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${(props) => (props.isLight ? "#000" : "#fff")};
  z-index: 999;
  position: relative;
`;

const FormsContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const FormLabel = styled.label`
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0.5rem 0;
  font-style: normal;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => (props.isLight ? "#000" : "#fff")};
  outline: none;
  padding: 0.5rem 0;
  font-family: "Raleway";
  width: 100%;
  font-size: 20px;
  line-height: 23px;
  color: ${(props) => (props.isLight ? "#000" : "#fff")};
  background-color: transparent;
  font-style: normal;
`;

const FormTextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid ${(props) => (props.isLight ? "#000" : "#fff")};
  outline: none;
  padding: 0.5rem 0;
  font-family: "Raleway";
  width: 100%;
  font-size: 20px;
  line-height: 23px;
  color: ${(props) => (props.isLight ? "#000" : "#fff")};
  background-color: transparent;
  font-style: normal;
  resize: vertical;
`;

const AdditionalTextContainer = styled.div`
  display: block;
  align-items: center;
`;

const AdditionalText = styled.span`
  position: absolute;
  width: 154px;
  height: 14px;
  font-family: "Raleway";
  font-style: italic;
  font-weight: 300;
  font-size: 15px;
  line-height: 14px;
  height: 23px;
  left: 222px;
  top: 460px;
  color: #000000;
`;

const LabelNumber = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const SkillPill = styled.div`
  display: inline-block;
  background-color: ${(props) => (props.isLight ? "#000" : "#fff")};
  color: ${(props) => (props.isLight ? "#fff" : "#000")};
  border-radius: 1rem;
  padding: 0.3rem 0.7rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-family: "Raleway";
`;

const SkillPillsContainer = styled.div`
  margin-top: 0.5rem;
`;

const Contribute = (props) => {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const handleSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

const handleSkillAdd = (event) => {
  event.preventDefault();
  if (newSkill.trim() !== "") {
    setSkills([...skills, newSkill.trim()]);
    setNewSkill("");
  }
};


  const handleSkillRemove = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };
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
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
              onClick={props.roadmap}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
              onClick={props.team}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
              onClick={props.projects}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
            <Navbar.Circle
              size={true}
              style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
            />
            <Navbar.Stick
              style={{
                border: `1px solid ${props.isLight ? "#000" : "#fff"}`,
              }}
            />
          </Navbar.TimelineBarLeft>
          <Navbar.SocialsTopLeft
            style={{ backgroundColor: props.isLight ? "#000" : "#fff" }}
          >
            <SocialsText
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                transform: onScreen ? "none" : "0 2rem",
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
                transform: onScreen ? "none" : "0 2rem",
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
        <Contribution>
          <Contribution.TopRightTitleContainer>
            <Contribution.TopRightTitle
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                transform: onScreen ? "none" : "translateY(2rem)",
                transition: "1000ms ease-in-out",
              }}
            >
              Contribute
            </Contribution.TopRightTitle>
          </Contribution.TopRightTitleContainer>
          <Contribution.BodyContainer>
            <Contribution.TopMiddleText
              color={props.isLight ? "#000" : "#fff"}
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                transform: onScreen ? "none" : "translateY(2rem)",
                transition: "1000ms ease-in-out",
              }}
            >
              Contribute by being an ideator or join us and help us help
              ideators
            </Contribution.TopMiddleText>
            <div>
              <FormsContainer>
                <LeftColumn>
                  <form>
                    <FormLabel htmlFor="left-input">
                      <LabelNumber>1 &rarr;</LabelNumber>
                      What is the main objective or goal of your project idea?
                    </FormLabel>
                    <AdditionalTextContainer>
                      <AdditionalText>Make your answer brief</AdditionalText>
                    </AdditionalTextContainer>
                    <FormInput
                      type="text"
                      id="left-input"
                      isLight={props.isLight}
                      placeholder="Type your answer here..."
                    />
                    {/* Additional form fields and submit button */}
                  </form>
                </LeftColumn>
                <Divider isLight={props.isLight} />
                <RightColumn>
                  <form>
                    <FormGroup>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FormLabel htmlFor="full-name">
                          Your full legal name
                        </FormLabel>
                        <FormLabel
                          htmlFor="roll-number"
                          style={{ marginLeft: "1rem" }}
                        >
                          Amrita roll number
                        </FormLabel>
                        <FormLabel
                          htmlFor="department"
                          style={{ marginLeft: "1rem" }}
                        >
                          Department
                        </FormLabel>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FormInput
                          type="text"
                          id="full-name"
                          isLight={props.isLight}
                          placeholder="Enter your full name"
                        />
                        <FormInput
                          type="text"
                          id="roll-number"
                          isLight={props.isLight}
                          placeholder="Enter your roll number"
                          style={{ marginLeft: "1rem" }}
                        />
                        <FormInput
                          type="text"
                          id="department"
                          isLight={props.isLight}
                          placeholder="Enter your department"
                          style={{ marginLeft: "1rem" }}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <FormLabel htmlFor="skills">
                        Skills that define you
                      </FormLabel>
                      <FormInput
                        id="skills"
                        isLight={props.isLight}
                        placeholder="Describe your skills"
                        value={newSkill}
                        onChange={handleSkillChange}
                      />
                      <SkillPillsContainer>
                        {skills.map((skill, index) => (
                          <SkillPill
                            key={index}
                            isLight={props.isLight}
                            onClick={() => handleSkillRemove(skill)}
                          >
                            {skill}
                          </SkillPill>
                        ))}
                      </SkillPillsContainer>
                    </FormGroup>
                    <FormGroup>
                      <FormLabel htmlFor="contribution">
                        How do you think you can contribute to the club?
                      </FormLabel>
                      <FormInput
                        id="contribution"
                        isLight={props.isLight}
                        placeholder="Describe your contribution"
                        rows="6"
                      />
                    </FormGroup>
                    {/* Additional form fields and submit button */}
                  </form>
                </RightColumn>
              </FormsContainer>
            </div>
          </Contribution.BodyContainer>
        </Contribution>
      </Generic>
    </>
  );
};

export default Contribute;
