import styled from "styled-components";

/* CORE TEAM */

export const Container = styled.div`
  height: auto;
  width: 84%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 12%;
  margin-top: 8%;

  @media (max-width: 1288px) {
    margin-top: 10%;
  }
  @media (max-width: 1000px) {
    margin-top: 12%;
  }
  @media (max-width: 820px) {
    margin-top: 16%;
  }
  @media (max-width: 654px) {
    margin-top: 24%;
  }
`;

export const Title = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  color: var(--accent-violet);
  text-transform: lowercase;
  letter-spacing: -0.015em;
  cursor: pointer;

  @media (max-width: 960px) {
    font-size: 36px;
  }
  @media (max-width: 820px) {
    font-size: 32px;
  }
  @media (max-width: 654px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.55em;
  letter-spacing: 0.01em;
  color: var(--ink-soft);
  cursor: pointer;

  @media (max-width: 960px) {
    font-size: 15px;
  }
  @media (max-width: 820px) {
    font-size: 13px;
  }
  @media (max-width: 654px) {
    font-size: 11px;
  }
`;

export const MentorSectionContainer = styled.div`
  height: auto;
  width: 44%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MentorTitle = styled.h1`
  align-self: flex-start;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  cursor: pointer;

  @media (max-width: 960px) {
    font-size: 12px;
  }
  @media (max-width: 820px) {
    font-size: 11px;
  }
  @media (max-width: 654px) {
    font-size: 10px;
  }
`;

export const MentorOuterContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 2%;
`;

export const MentorInnerContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;

  &:nth-child(1) {
    margin: 0 5% 0 0;
  }

  @media (max-width: 1364px) {
    flex-direction: column;
    margin: 0 0 2% 0;
  }
`;

export const SectionContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Section = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 0 0 4%;

  &:nth-child(1) {
    margin: 0 !important;
  }
`;

export const CrossedBordersContainer = styled.div`
  height: auto;
  width: auto;
`;

export const CrossedBorders = styled.div`
  position: relative;
  padding: 4% 0;
  height: 100%;
  &:before,
  &:after {
    content: "";
    position: absolute;
    border: solid var(--accent-violet);
  }

  &:before {
    top: 0;
    right: -16px;
    bottom: 0;
    left: -16px;
    border-width: 1px 0;
    translate: ${(props) => (props.onScreen ? "none" : "4rem 0")};
    transition: 1500ms ease-in-out;
  }

  &:after {
    top: -32px;
    right: 0;
    bottom: -32px;
    left: 0;
    border-width: 0 1px;
    translate: ${(props) => (props.onScreen ? "none" : "0 4rem")};
    transition: 1500ms ease-in-out;
  }
`;

export const CrossedBordersInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CrossedBordersImage = styled.img`
  height: 96px;
  width: 96px;
  border-radius: 50%;
  margin: 0 2%;
  border: 1.5px solid var(--ink);

  @media (max-width: 820px) {
    height: 64px;
    width: 64px;
  }
  @media (max-width: 654px) {
    height: 48px;
    width: 48px;
  }
`;

export const UserInfoContainer = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2%;
`;

export const SubTitle = styled.h2`
  position: relative;
  left: 4%;
  margin-bottom: 0 !important;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: var(--ink) !important;

  @media (max-width: 820px) {
    font-size: 15px;
  }
  @media (max-width: 654px) {
    font-size: 12px;
  }
  @media (max-width: 540px) {
    font-size: 10px;
  }
`;

export const Designation = styled.h2`
  position: relative;
  left: 4%;
  margin-right: 0 !important;
  margin-bottom: 0 !important;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: var(--muted) !important;

  @media (max-width: 820px) {
    font-size: 12px;
  }
  @media (max-width: 654px) {
    font-size: 11px;
  }
  @media (max-width: 540px) {
    font-size: 10px;
  }
`;

export const About = styled.p`
  position: relative;
  margin: 0;
  left: 4%;
  font-family: "PP Neue Machina";
  font-size: 14px;
  color: var(--ink-soft);
  opacity: 0.75;

  @media (max-width: 820px) {
    font-size: 13px;
  }
  @media (max-width: 654px) {
    font-size: 12px;
  }
  @media (max-width: 540px) {
    font-size: 11px;
  }
`;

/* OTHER TEAMS */

export const ExpandableSectionContainer = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExpandableSection = styled.div`
  height: 12%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2%;
  background-color: var(--card-cream);
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-nb-sm);
  cursor: pointer;
  margin-bottom: 0.1%;
  transition: transform var(--dur-fast) var(--ease-out),
    box-shadow var(--dur-fast) var(--ease-out);

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-nb-md);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;

export const TeamDropDownContainer = styled.div`
  height: 24%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  padding-right: 0 !important;
  background-color: var(--card-lavender);
  border: 1.5px solid var(--line);
  border-radius: var(--radius-sm);
  * {
    margin-left: 5%;
  }
  display: none;
`;

export const ExpandableInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "PP Neue Machina";
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink);
`;

export const OtherTeamsContainer = styled.div`
  height: 64%;
  width: 84%;
  display: flex;
  flex-direction: column;
  margin: 5% 0 0 12% !important;

  @media (max-width: 654px) {
    margin-top: 10%;
  }
`;

export const OtherTeamsSpecificContainer = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 4%;

  &:nth-child(1) {
    margin: 0 !important;
  }
`;

export const OtherTeamsSpecificInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--line);
  margin: 3% 0;
`;

export const OtherTeamsTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 1% 0;
  color: var(--muted);

  @media (max-width: 820px) {
    font-size: 12px;
  }
  @media (max-width: 654px) {
    font-size: 11px;
  }
  @media (max-width: 540px) {
    font-size: 10px;
  }
`;

export const OtherTeamsImage = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  margin: 0 2% 0 0;
  border: 1px solid var(--line);
  object-fit: cover;

  @media (max-width: 820px) {
    height: 44px;
    width: 44px;
  }
  @media (max-width: 654px) {
    height: 32px;
    width: 32px;
  }
  @media (max-width: 540px) {
    height: 24px;
    width: 24px;
  }
`;

export const TeamYears = styled.h2`
  position: absolute;
  right: 5%;
  top: 5%;
  font-family: "PP Neue Machina";
  font-weight: 500;
  font-style: normal;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  cursor: pointer;

  &:hover {
    color: var(--accent-violet);
  }
`;
