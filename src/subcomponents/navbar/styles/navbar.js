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
  background-color: ${(props) =>
    props.backgroundColor || "var(--card-lavender)"};
  display: flex;
  align-items: center;
  flex-direction: row;
  height: auto;
  width: 24%;
  padding: 1em;
  border-right: 1.5px solid var(--ink);
  border-bottom: 1.5px solid var(--ink);
  border-bottom-right-radius: var(--radius-md);

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
  color: ${(props) => props.mainColor || "var(--accent-violet)"};
  width: 50%;
  margin: 0;
  padding: 0;
  font-size: 32px;
  font-family: "PP Neue Machina";
  font-weight: 700;
  letter-spacing: -0.02em;

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
  background-color: ${(props) =>
    props.backgroundColor || "var(--accent-violet)"};
  border: 1.5px solid var(--ink);
  opacity: ${(props) => (props.size ? "1" : "0.6")};
  cursor: pointer;
  transition: transform var(--dur-fast) var(--ease-out),
    box-shadow var(--dur-fast) var(--ease-out);

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: var(--shadow-nb-sm);
    opacity: 1;
  }

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
  border-left: 1.5px solid var(--accent-violet);
  opacity: 0.4;

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
  border-bottom: 1.5px solid var(--accent-violet);
  opacity: 0.5;
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
    font-size: 20px;
    cursor: pointer;
    color: var(--ink-soft);
    transition: color var(--dur-fast) var(--ease-out);
    &:hover {
      color: var(--accent-violet);
    }
  }
`;

export const Title = styled.h1`
  font-size: 100px;
  font-weight: 700;
  font-family: "Archer Gage";
  cursor: pointer;
  font-style: normal;
  letter-spacing: -0.01em;

  ${(props) =>
    props.gradient
      ? `
    background: linear-gradient(135deg, #6B4EFF 0%, #C850C0 55%, #FF6B9D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `
      : `color: ${props.color || "var(--accent-violet)"};`}

  @media (max-width: 820px) {
    font-size: 64px;
  }

  @media (max-width: 654px) {
    font-size: 36px;
  }
`;

export const Link = styled.a`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-decoration: none !important;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${(props) => props.color || "var(--ink-soft)"} !important;
  transition: color var(--dur-fast) var(--ease-out);

  &:hover {
    color: var(--accent-violet) !important;
    text-decoration: none !important;
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
  color: ${(props) => props.color || "var(--muted)"};

  @media (max-width: 820px) {
    font-size: 20px;
  }

  @media (max-width: 654px) {
    font-size: 15px;
  }
`;

export const BottomTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => props.color || "var(--ink-soft)"};
  letter-spacing: 0.02em;

  @media (max-width: 840px) {
    font-size: 16px;
  }

  @media (max-width: 654px) {
    font-size: 13px;
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
  color: var(--ink-soft);
  transition: color var(--dur-fast) var(--ease-out);
  &:hover {
    color: var(--accent-violet);
  }

  @media (max-width: 654px) {
    width: 20px;
    height: 20px;
  }
`;

export const DarkIcon = styled(BsSun)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: var(--accent-lime);
  transition: color var(--dur-fast) var(--ease-out);
  &:hover {
    color: var(--accent-lime-deep);
  }

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

export const CircleText = styled.p`
  width: 100%;
  position: relative;
  bottom: 100%;
  font-family: "PP Neue Machina";
  font-size: 6px;
  color: var(--ink-soft);
`;
