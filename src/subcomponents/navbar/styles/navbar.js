import styled from "styled-components";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

export const Nav = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;
  height: 80px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;
  width: auto;
  height: 80vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  line-height: 179px;
  font-size: 180px;
  font-weight: 400;
  color: ${(props) => props.color};
  font-family: "FiraCode";
  cursor: pointer;
  font-style: normal;

  @media (max-width: 920px){
    font-size: 120px;
  }

  @media (max-width: 820px) {
    font-size: 96px;
  }

  @media (max-width: 540px) {
    font-size: 48px;
  }
`;
export const Link = styled.a`
  font-family: "Elianto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;

  &:hover {
    color: #ff6b6b;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 820px) {
    font-size: 12px;
  }

  @media (max-width: 540px) {
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

  @media (max-width: 540px) {
    font-size: 15px;
  }
`;

export const BottomTitle = styled.h1`
  font-family: "FiraCode";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  letter-spacing: 0.1em;
  color: ${(props) => props.color};

  @media (max-width: 840px) {
    font-size: 20px;
  }

  @media (max-width: 540px) {
    font-size: 15px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const LightIcon = styled(MdOutlineDarkMode)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const DarkIcon = styled(BsSun)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const EmptyDivLeft = styled.div`
  width: 51.583333px;

  @media (max-width: 840px) {
    width: 0;
  }

  @media (max-width: 540px) {
    width: 0;
  }
`;
export const EmptyDivRight = styled.div`
  width: 68.183333px;

  @media (max-width: 840px) {
    width: 0;
  }

  @media (max-width: 540px) {
    width: 0;
  }
`;
