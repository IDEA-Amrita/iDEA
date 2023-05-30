import styled from "styled-components";

export const Container = styled.div`
  height: 80%;
  width: 80%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding-bottom: 0px;
`;

export const BodyContainer = styled.div`
  height: 100%;
  width: 80%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;


`;

export const TopMiddleText = styled.p`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${(props) => props.color};
  cursor: pointer;
  position: relative; /* Added position relative */
  z-index: 999; /* Added z-index */
  margin-top: 40px;

  @media (max-width: 820px) {
    font-size: 18px;
  }

  @media (max-width: 654px) {
    font-size: 15px;
  }

  @media (max-width: 540px) {
    font-size: 13px;
  }
`;


export const TopRightTitle = styled.h1`
  align-self: flex-end;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 940px) {
    font-size: 30px;
  }

  @media (max-width: 820px) {
    font-size: 15px;
  }

  @media (max-width: 654px) {
    font-size: 50px;
  }
`;

export const TopRightTitleContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }

  @media (max-width: 820px) {
    top: 10%;
  }

  @media (max-width: 654px) {
    top: 15%;
  }
`;

export const FormsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftColumn = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

export const RightColumn = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

export const Divider = styled.div`
  width: 1px;
  height: 100%;
  height: 100%;
`;
