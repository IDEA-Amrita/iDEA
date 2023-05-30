import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }
`;

export const TimeLineContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ProjectsContentContainer = styled.div`
  height: 90%;
  max-height: 90%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 3%;
`;

export const DescriptionContainer = styled.div`
  margin-right: 2%;
  height: 100%;
  max-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 38px 8px;
  position: relative;
  border-left: 1px solid #b5b5b5;
  border-right: 1px solid #b5b5b5;

  &:after {
    position: absolute;
    background: #b5b5b5;
    width: 110%;
    height: 1px;
    content: "";
    top: 30px;
    left: -30px;
  }

  &:before {
    position: absolute;
    background: #b5b5b5;
    width: 110%;
    height: 1px;
    content: "";
    bottom: 30px;
    left: -30px;
  }
`;

export const DescriptionHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 35%;
`;

export const DescriptionHeaderImage = styled.img`
  width: 45%;
  height: 100%;
  object-fit: cover;
  margin-right: 10px;
`;

export const DescriptionHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DescriptionContent = styled.div`
  margin-top: 3%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75%;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BuiltUsing = styled.h2`
  margin-top: 2%;
  margin-bottom: 0;
  font-family: "PP Neue Machina", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 18px;
  }

  @media (max-width: 654px) {
    font-size: 16px;
  }
`;

export const TagBubbleContainer = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const TagBubble = styled.div`
  display: flex;
  padding: 4px 16px;
  margin: 4px;
  font-size: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  border-radius: 16px;
`;

export const DescriptionTitle = styled.h1`
  font-family: "PP Neue Machina", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 44px;
  }

  @media (max-width: 654px) {
    font-size: 32px;
  }
`;

export const ProjectDescription = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  color: ${(props) => props.color};

  @media (max-width: 820px) {
    font-size: 18px;
  }

  @media (max-width: 654px) {
    font-size: 16px;
  }

  text-align: justify;
  text-justify: inter-word;
`;

export const ContributorName = styled.h3`
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 18px;
  }

  @media (max-width: 654px) {
    font-size: 16px;
  }
`;

export const Date = styled.h4`
  font-style: normal;
  font-weight: lighter;
  font-size: 16px;
  color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 14px;
  }

  @media (max-width: 654px) {
    font-size: 12px;
  }
`;

export const ProjectListContainer = styled.div`
  height: 100%;
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProjectFrameworks = styled.p`
  padding: 0;
  margin: 0;
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  color: ${(props) => props.color};

  @media (max-width: 820px) {
    font-size: 18px;
  }

  @media (max-width: 654px) {
    font-size: 16px;
  }

  text-align: justify;
  text-justify: inter-word;
`;

export const Title = styled.h1`
  font-family: "PP Neue Machina", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  width: min-content;
  color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 48px;
  }

  @media (max-width: 654px) {
    font-size: 36px;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 0 !important;
  text-align: right;
  font-family: "PP Neue Machina", serif;
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

export const ListContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow-x: visible;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  margin-bottom: 30px;
`;

export const ListItem = styled.div`
  width: 80%;
  padding: 10px 0 10px 5px;
  margin-top: 5px;
  border-bottom: 1px solid #b5b5b5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    padding-right: 10px;
  }
`;

export const ListItemTitle = styled.h3`
  font-family: "PP Neue Machina", serif;
  font-style: normal;
  font-size: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 820px) {
    font-size: 20px;
  }

  @media (max-width: 654px) {
    font-size: 16px;
  }

  @media (max-width: 540px) {
    font-size: 14px;
  }

  color: ${(props) => (props.isActive ? "#E0005E" : props.color)};
`;

export const ListItemArrowContainer = styled.div`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => props.color};
`;

export const BlockContainer = styled.div`
  margin-top: 8%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const BlockInnerContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const BlockTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 940px) {
    font-size: 28px;
  }

  @media (max-width: 820px) {
    font-size: 20px;
  }

  @media (max-width: 654px) {
    font-size: 12px;
  }
`;

export const BlockButton = styled.button`
  width: 240px;
  height: 64px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.02);
    transition: 500ms ease-in-out;
  }
`;

export const AngledLine = styled.div`
  height: 80%;
  width: 1px;
  background-color: ${(props) => props.backgroundColor};
  margin: 3% 0;
  transform: rotate(12deg);
  -webkit-transform: rotate(12deg);
  -ms-transform: rotate(12deg);
  opacity: 0.5;
`;
