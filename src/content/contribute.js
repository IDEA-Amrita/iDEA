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

// Add the programming languages and tools list here
const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  // Add more programming languages here
];

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

const SubmitButton = styled.button`
  border: none;
  outline: none;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.isLight ? "#000" : "#fff")};
  color: ${(props) => (props.isLight ? "#fff" : "#000")};
  font-family: "Raleway";
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${(props) => (props.isLight ? "#333" : "#ddd")};
  }
`;

const SkillPillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const SkillPill = styled.div`
  background-color: ${(props) => (props.isLight ? "#000" : "#fff")};
  color: ${(props) => (props.isLight ? "#fff" : "#000")};
  border: 1px solid ${(props) => (props.isLight ? "#000" : "#fff")};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 16px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isLight ? "#333" : "#ddd")};
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillsInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SkillInput = styled.input`
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

const SkillSuggestions = styled.div`
  position: absolute;
  background-color: ${(props) => (props.isLight ? "#f9f9f9" : "#222")};
  border-radius: 4px;
  border: 1px solid ${(props) => (props.isLight ? "#ddd" : "#444")};
  margin-top: 4px;
  width: 100%;
  max-height: 120px;
  overflow-y: auto;
  z-index: 1000;
`;

const SkillSuggestion = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isLight ? "#ddd" : "#444")};
  }
`;

const ContributionSection = styled.section`
  background-color: ${(props) => (props.isLight ? "#f9f9f9" : "#222")};
  padding: 3rem 1rem;
  color: ${(props) => (props.isLight ? "#000" : "#fff")};
`;

const FormSection = styled.section`
  padding: 3rem 1rem;
  color: ${(props) => (props.isLight ? "#000" : "#fff")};
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: ${(props) => (props.isLight ? "#000" : "#fff")};
  color: ${(props) => (props.isLight ? "#fff" : "#000")};
  border: none;
  outline: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isLight ? "#333" : "#ddd")};
  }
`;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const contribute = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [skills, setSkills] = useState([]);
  const [isSkillsSuggestionsVisible, setIsSkillsSuggestionsVisible] =
    useState(false);
  const [skillInputValue, setSkillInputValue] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const skillsInputRef = useRef();
  const skillsSuggestionsRef = useRef();

  const handleSkillsInputChange = (e) => {
    const value = e.target.value;
    setSkillInputValue(value);
    setIsSkillsSuggestionsVisible(value.trim().length > 0);
  };

  const handleSkillInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(skillInputValue);
    } else if (e.key === "Backspace" && skillInputValue === "") {
      removeSkill(skills.length - 1);
    }
  };

  const handleSkillSuggestionClick = (suggestion) => {
    addSkill(suggestion);
    skillsInputRef.current.focus();
  };

  const addSkill = (skill) => {
    if (skill.trim().length > 0 && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setSkillInputValue("");
      setIsSkillsSuggestionsVisible(false);
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    // Perform form submission logic here
  };

  const handleToggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  // Use the useElementOnScreen hook to trigger animations
  const [elementRef, isElementOnScreen] = useElementOnScreen({
    threshold: 0.1,
  });

  return (
    <>
      <Navbar>
        <Generic>
          <SocialsText>
            <a href="#">
              <AiOutlineTwitter />
            </a>
            <a href="#">
              <AiOutlineInstagram />
            </a>
            <a href="#">
              <AiOutlineMedium />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <AiFillYoutube />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
          </SocialsText>
          <div ref={elementRef}>
            <h1>
              <img
                src={isLightTheme ? "/logo_dark.png" : "/logo_light.png"}
                alt="logo"
              />
            </h1>
          </div>
          <div>
            <label htmlFor="themeSwitch">Toggle Theme:</label>
            <input
              type="checkbox"
              id="themeSwitch"
              checked={!isLightTheme}
              onChange={handleToggleTheme}
            />
          </div>
        </Generic>
      </Navbar>
      <Contribution>
        <ContributionSection isLight={isLightTheme}>
          <h2>Contribute to OpenAI</h2>
          <p>
            OpenAI is looking for talented individuals to contribute to our
            projects. If you are passionate about AI and want to be part of our
            team, fill out the form below and tell us about your skills and
            experience. We will review your contributelication and get back to you as
            soon as possible.
          </p>
        </ContributionSection>
      </Contribution>
      <FormsContainer>
        <LeftColumn>
          <FormSection isLight={isLightTheme}>
            <h3>Personal Information</h3>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="fullName">Full Name</FormLabel>
                <FormInput
                  type="text"
                  id="fullName"
                  isLight={isLightTheme}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  isLight={isLightTheme}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  isLight={isLightTheme}
                  required
                />
              </FormGroup>
            </form>
          </FormSection>
        </LeftColumn>
        <Divider isLight={isLightTheme} />
        <RightColumn>
          <FormSection isLight={isLightTheme}>
            <h3>Skills and Experience</h3>
            <form onSubmit={handleSubmit}>
              <SkillsContainer>
                <SkillsInputContainer>
                  <FormLabel htmlFor="skills">Skills</FormLabel>
                  <SkillInput
                    type="text"
                    id="skills"
                    value={skillInputValue}
                    onChange={handleSkillsInputChange}
                    onKeyDown={handleSkillInputKeyDown}
                    ref={skillsInputRef}
                    isLight={isLightTheme}
                  />
                  {isSkillsSuggestionsVisible && (
                    <SkillSuggestions
                      ref={skillsSuggestionsRef}
                      isLight={isLightTheme}
                    >
                      {programmingLanguages
                        .filter((language) =>
                          language
                            .toLowerCase()
                            .startsWith(skillInputValue.toLowerCase())
                        )
                        .map((language) => (
                          <SkillSuggestion
                            key={language}
                            onClick={() => handleSkillSuggestionClick(language)}
                          >
                            {language}
                          </SkillSuggestion>
                        ))}
                    </SkillSuggestions>
                  )}
                </SkillsInputContainer>
                <FormGroup>
                  <FormLabel htmlFor="experience">Experience</FormLabel>
                  <FormTextArea
                    id="experience"
                    rows="4"
                    isLight={isLightTheme}
                    required
                  ></FormTextArea>
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="projects">Projects</FormLabel>
                  <FormTextArea
                    id="projects"
                    rows="4"
                    isLight={isLightTheme}
                    required
                  ></FormTextArea>
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="contribution">
                    How would you like to contribute to OpenAI?
                  </FormLabel>
                  <FormTextArea
                    id="contribution"
                    rows="4"
                    isLight={isLightTheme}
                    required
                  ></FormTextArea>
                </FormGroup>
              </SkillsContainer>
              <SkillPillsContainer>
                {skills.map((skill, index) => (
                  <SkillPill
                    key={index}
                    isLight={isLightTheme}
                    onClick={() => removeSkill(index)}
                  >
                    {skill}
                  </SkillPill>
                ))}
              </SkillPillsContainer>
              <SubmitButton isLight={isLightTheme} type="submit">
                Submit
              </SubmitButton>
            </form>
          </FormSection>
        </RightColumn>
      </FormsContainer>
      <ScrollToTopButton
        isLight={isLightTheme}
        onClick={scrollToTop}
        style={{ display: isElementOnScreen ? "flex" : "none" }}
      >
        <AiOutlineArrowUp />
      </ScrollToTopButton>

    </>
  );
};

export default contribute;
