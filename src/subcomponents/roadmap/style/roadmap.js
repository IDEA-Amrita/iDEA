import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AngledBoxContainer = styled.div`
  width: 12%;
  height: auto;
  margin: 2% 0 0 0;
  transform: rotate(-12deg);
  -webkit-transform: rotate(-12deg);
  -ms-transform: rotate(-12deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 4px;
  background-color: ${(props) =>
    props.backgroundColor || "var(--accent-violet)"};
  color: ${(props) => props.color || "#fff"};
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-nb-sm);
  cursor: pointer;
  transition: transform var(--dur-fast) var(--ease-out),
    box-shadow var(--dur-fast) var(--ease-out);

  &:hover {
    box-shadow: var(--shadow-nb-md);
  }

  &:active {
    box-shadow: none;
  }

  p {
    margin: 0;
  }
`;

export const MainContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  margin: 0;
`;

export const TextDate = styled.p`
  font-size: 13px;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  color: inherit;
  opacity: 0.75;

  @media (max-width: 1524px) {
    font-size: 12px;
  }
  @media (max-width: 1134px) {
    font-size: 11px;
  }
  @media (max-width: 1020px) {
    font-size: 10px;
  }
  @media (max-width: 920px) {
    font-size: 9px;
  }
  @media (max-width: 820px) {
    font-size: 8px;
  }
  @media (max-width: 654px) {
    font-size: 7px;
  }
`;

export const TextTitle = styled.p`
  font-size: 20px;
  font-family: "PP Neue Machina";
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0 10%;
  color: inherit;

  @media (max-width: 1524px) {
    font-size: 17px;
  }
  @media (max-width: 1343px) {
    font-size: 15px;
  }
  @media (max-width: 1134px) {
    font-size: 13px;
  }
  @media (max-width: 1020px) {
    font-size: 12px;
  }
  @media (max-width: 920px) {
    font-size: 11px;
  }
  @media (max-width: 820px) {
    font-size: 10px;
  }
  @media (max-width: 750px) {
    font-size: 9px;
  }
  @media (max-width: 654px) {
    font-size: 8px;
  }
`;

export const OnHoverContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0;
  -webkit-transition: opacity 0.4s var(--ease-out);
  -moz-transition: opacity 0.4s var(--ease-out);
  transition: opacity 0.4s var(--ease-out);
  background-color: var(--card-lavender);
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  box-shadow: var(--shadow-nb-md);

  @media (max-width: 820px) {
    height: 28%;
  }
  @media (max-width: 654px) {
    height: 24%;
  }
  @media (max-width: 540px) {
    height: 20%;
  }
`;

export const OnHoverInnerContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  padding: 3%;
`;

export const CrossIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 0;
  right: 0;
  width: 2%;
  height: auto;
  cursor: pointer;
  color: var(--ink-soft);
  margin: 0.5%;
  display: none;
  transition: color var(--dur-fast) var(--ease-out);

  &:hover {
    color: var(--accent-violet);
  }
`;

export const OnHoverTitle = styled.h3`
  font-size: 26px;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 600;
  color: var(--accent-violet);
  text-transform: lowercase;
  letter-spacing: -0.01em;

  @media (max-width: 820px) {
    font-size: 22px;
  }
  @media (max-width: 750px) {
    font-size: 18px;
  }
  @media (max-width: 654px) {
    font-size: 15px;
  }
  @media (max-width: 540px) {
    font-size: 13px;
  }
`;

export const OnHoverImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: var(--radius-md) 0 0 0;
`;

export const OnHoverSubTitle = styled.h4`
  font-size: 13px;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted);

  @media (max-width: 820px) {
    font-size: 12px;
  }
  @media (max-width: 750px) {
    font-size: 11px;
  }
  @media (max-width: 654px) {
    font-size: 10px;
  }
  @media (max-width: 540px) {
    font-size: 9px;
  }
`;

export const OnHoverParagraph = styled.p`
  font-size: 15px;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0;
  color: var(--ink-soft);

  @media (max-width: 820px) {
    font-size: 13px;
  }
  @media (max-width: 750px) {
    font-size: 12px;
  }
  @media (max-width: 654px) {
    font-size: 11px;
  }
  @media (max-width: 540px) {
    font-size: 10px;
  }
`;
