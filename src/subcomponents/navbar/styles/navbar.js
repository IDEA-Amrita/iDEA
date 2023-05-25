import styled from "styled-components";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

export const Nav = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;
  height: auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;
  width: auto;
  height: 80vh;
`;

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialsTopLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  flex-direction: row;
  height: auto;
  width: 24%;
  padding: 1em;

  @media (max-width: 654px) {
    width: 60%;
    height: 10%;
  }

  @media (max-width: 820px) {
    width: 60%;
    height: 10%;
  }

`;

export const SocialsText = styled.p`
  color: ${(props) => props.mainColor};
  width: 50%;
  margin: 0;
  padding: 0;
  font-size: 32px;
  font-family: "Archer Gage";

  @media (max-width: 820px) {
    font-size: 24px;
  }
`;

export const TimelineBarLeft = styled.div`
  position: absolute;
  left: 4%;
  top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20%;
  height: 100%;
  width: auto;
`;

export const Circle = styled.div`
  width: ${(props) => (props.size ? "3rem" : "2rem")};
  height: ${(props) => (props.size ? "3rem" : "2rem")};
  border-radius: 50%;
  background-color: #000;
  opacity: ${(props) => (props.size ? "80%" : "50%")};
  cursor: pointer;

  @media (max-width: 820px) {
    width: ${(props) => (props.size ? "3rem" : "2rem")};
    height: ${(props) => (props.size ? "3rem" : "2rem")};
  }

  @media (max-width: 654px) {
    width: ${(props) => (props.size ? "2rem" : "1rem")};
    height: ${(props) => (props.size ? "2rem" : "1rem")};
  }
`;

export const Stick = styled.div`
  margin: 0;
  height: 16%;
  width: 1%;
  border-left: 1px solid #000;

  @media (max-width: 820px) {
    height: 20%;
  }

  @media (max-width: 654px) {
    height: 24%;
  }
`;

export const LengthStick = styled.div`
  margin: 0;
  height: 0.5%;
  width: 8%;
  border-bottom: 1px solid #000;
`;

export const SocialsTopLeftInnerContainer = styled.div`
  width: 50%;
  float: right;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  justify-content: space-evenly;
  align-items: center;
  * {
    font-size: 24px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 100px;
  font-weight: 400;
  color: ${(props) => props.color};
  font-family: "Archer Gage";
  cursor: pointer;
  font-style: normal;

  @media (max-width: 820px) {
    font-size: 64px;
  }

  @media (max-width: 654px) {
    font-size: 36px;
  }
`;
export const Link = styled.a`
  font-family: "Elianto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  text-decoration: none !important;
  color: ${(props) => props.color} !important;

  &:hover {
    color: #ff6b6b !important;
    text-decoration: underline !important;
    cursor: pointer;
  }

  @media (max-width: 820px) {
    font-size: 12px;
  }

  @media (max-width: 654px) {
    font-size: 8px;
  }
`;
export const TopTitle = styled.h1`
  font-family: "FiraCode";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  letter-spacing: 0.5em;
  color: ${(props) => props.color};

  @media (max-width: 820px) {
    font-size: 20px;
  }

  @media (max-width: 654px) {
    font-size: 15px;
  }
`;

export const BottomTitle = styled.h1`
  font-family: "FiraCode";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  color: ${(props) => props.color};

  @media (max-width: 840px) {
    font-size: 20px;
  }

  @media (max-width: 654px) {
    font-size: 15px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;
`;
export const LightIcon = styled(MdOutlineDarkMode)`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 654px) {
    width: 20px;
    height: 20px;
  }
`;
export const DarkIcon = styled(BsSun)`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 654px) {
    width: 20px;
    height: 20px;
  }
`;
export const EmptyDivLeft = styled.div`
  width: 51.583333px;

  @media (max-width: 840px) {
    width: 0;
  }

  @media (max-width: 654px) {
    width: 0;
  }
`;
export const EmptyDivRight = styled.div`
  width: 68.183333px;

  @media (max-width: 840px) {
    width: 0;
  }

  @media (max-width: 654px) {
    width: 0;
  }
`;
