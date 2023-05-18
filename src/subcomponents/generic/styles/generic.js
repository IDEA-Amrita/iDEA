import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: auto;
  background-color: ${(props) => props.color};
  color: ${(props) => props.color};
`;

export const InnerContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Elianto";
  font-style: normal;
  font-weight: 400;
  font-size: 180px;
  line-height: 179px;
  color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 96px;
  }

  @media (max-width: 700px) {
    font-size: 64px;
  }

  @media (max-width: 540px) {
    font-size: 48px;
  }
`;

export const ParagraphContainer = styled.div`
  width: 80%;
  text-align: justify;
  height: 100px;
  padding: 0 10%;
`;

export const Paragraph = styled.p`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  color: ${(props) => props.color};

  @media (max-width: 820px) {
    font-size: 32px;
  }

  @media (max-width: 700px) {
    font-size: 24px;
  }

  @media (max-width: 540px) {
    font-size: 16px;
  }
`;
