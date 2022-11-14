import styled from "styled-components";
import {BsFillMoonStarsFill, BsSun} from "react-icons/bs";

//centered navbar

export const Nav = styled.div`
  height: 100vh;
  width: auto;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: 80px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 80vh;
  margin: 0 80px;
`;
export const Title = styled.h1`
  line-height: 179px;
  font-size: 175px;
  font-weight: 400;
  color: #424242;
  font-family: "PP Neue Machina";
  cursor: pointer;
  font-style: normal;
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
`;
export const TopTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  letter-spacing: 0.5em;
  color: #292929;
`;

export const BottomTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  letter-spacing: 0.1em;
  color: #292929;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LightIcon = styled(BsFillMoonStarsFill)`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;
export const DarkIcon = styled(BsSun)`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;
