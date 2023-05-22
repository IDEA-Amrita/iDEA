import styled from "styled-components";

/* CORE TEAM */

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 12%;
  margin-top: 3%;
`;

export const Title = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

export const SectionContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Section = styled.div`
  height: 100%;
  width: 18%;
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
`;

export const UserInfoContainer = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

export const About = styled.p`
  position: relative;
  margin: 0;
  left: 4%;
  font-family: "PP Neue Machina";
  font-size: 12px;
  color: ${(props) => props.color};
`;

/* OTHER TEAMS */

export const OtherTeamsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 5%;
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
`;

export const OtherTeamsImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  margin: 0 2% 0 0;
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
    opacity: 0.5;
  }
`;
