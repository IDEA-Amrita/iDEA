import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
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
  }

  &:after {
    top: -32px;
    right: 0;
    bottom: -32px;
    left: 0;
    border-width: 0 1px;
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
  top: 10%;
  left: 4%;
  font-family: "PP Neue Machina";
  opacity: 0.5;
  font-size: 16px;
  color: ${(props) => props.color};
`;
