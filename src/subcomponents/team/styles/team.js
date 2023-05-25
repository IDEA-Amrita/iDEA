import styled from "styled-components";

/* CORE TEAM */

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  font-weight: 400;
  font-size: 48px;
  color: ${(props) => props.color};
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
    border: solid ${(props) => props.color};
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
  font-weight: 400;
  font-size: 24px;
  color: ${(props) => props.color};


  @media (max-width: 820px) {
    font-size: 20px;
  }

  @media (max-width: 654px) {
    font-size: 16px;
  }

  @media (max-width: 540px) {
    font-size: 14px;
  }
`;
export const Designation = styled.h2`
  position: relative;
  left: 4%;
  margin-bottom: 0 !important;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.color};

  @media (max-width: 820px) {
    font-size: 14px;
  }

  @media (max-width: 654px) {
    font-size: 12px;
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
  font-size: 16px;
  opacity: 0.7 !important;
  color: ${(props) => props.color};

  @media (max-width: 820px) {
    font-size: 14px;
  }

  @media (max-width: 654px) {
    font-size: 12px;
  }

  @media (max-width: 540px) {
    font-size: 10px;
  }
`;

/* OTHER TEAMS */

export const OtherTeamsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 5%;

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
  background-color: ${(props) => props.backgroundColor};
  margin: 3% 0;
`;

export const OtherTeamsTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  margin: 1% 0;
  opacity: 0.5;
  color: ${(props) => props.color};

  @media (max-width: 820px) {
    font-size: 16px;
  }

  @media (max-width: 654px) {
    font-size: 12px;
  }

  @media (max-width: 540px) {
    font-size: 10px;
  }
`;

export const OtherTeamsImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  margin: 0 2% 0 0;

  @media (max-width: 820px) {
    height: 48px;
    width: 48px;
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
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  color: ${(props) => props.color};
  cursor: pointer;
  &:hover {
    opacity: 0.5 !important;
  }
`;
