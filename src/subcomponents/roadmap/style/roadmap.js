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
  padding: 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  cursor: pointer;

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
  font-size: 24px;
  font-family: "PP Neue Machina";
  font-style: normal;
`;

export const TextTitle = styled.p`
  font-size: 32px;
  font-family: "PP Neue Machina";
  text-decoration: uppercase;
  font-weight: bold;
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
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.backgroundColor};
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
  color: ${(props) => props.color};
  margin: 0.5%;
  display: none;
`;

export const OnHoverTitle = styled.h3`
  font-size: 32px;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: bold;
`;

export const OnHoverImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const OnHoverSubTitle = styled.h4`
  font-size: 16px;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: bold;
`;

export const OnHoverParagraph = styled.p`
  font-size: 16px;
  font-family: "PP Neue Machina";
  font-style: normal;
  margin: 0;
`;
