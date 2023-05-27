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
`

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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 10px;
  position: relative;
  border-left: 1px solid #B5B5B5;
  border-right: 1px solid #B5B5B5;

  &:after {
    position: absolute;
    background: #B5B5B5;
    width: 110%;
    height: 1px;
    content: "";
    top: 30px;
    left: -30px;
  }

  &:before {
    position: absolute;
    background: #B5B5B5;
    width: 110%;
    height: 1px;
    content: "";
    bottom: 30px;
    left: -30px;
  }
`;

export const ProjectListContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-family: "PP Neue Machina", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  width: min-content;
  color: ${(props) => props.color || "#E0005E"};
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
`

export const ListItem = styled.div`
  width: 80%;
  padding: 10px 0 10px 5px;
  margin-top: 5px;
  border-bottom: 1px solid #B5B5B5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    padding-right: 10px;
  }
`

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

  color: ${(props) => props.isActive ? "#E0005E" : props.color};

`

export const ListItemArrowContainer = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => props.color};
`

//Left Container Widgets:

