import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: auto;
  background-color: ${(props) => props.color};
  color: ${(props) => props.color};
`;

export const InnerContainer = styled.div`
  height: 80%;
  width: 40%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  align-self: flex-start;
  padding: 0 10%;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 48px;
  }

  @media (max-width: 654px) {
    font-size: 36px;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 40%;
  object-fit: cover;
  object-position: center;
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

export const TopRightTitle = styled.h1`
  align-self: flex-end;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 940px) {
    font-size: 80px;
  }

  @media (max-width: 820px) {
    font-size: 72px;
  }

  @media (max-width: 654px) {
    font-size: 48px;
  }
`;

export const TopRightMottoText = styled.p`
  font-family: "PP Neue Machina";
  font-weight: 400;
  font-size: 32px;
  color: ${(props) => props.color};

  @media (max-width: 940px) {
    font-size: 24px;
  }

  @media (max-width: 820px) {
    font-size: 16px;
  }

  @media (max-width: 654px) {
    font-size: 12px;
  }
`;

export const ParagraphContainer = styled.div`
  width: 80%;
  text-align: justify;
  height: 100px;
  // padding: 0 10%;
`;

export const Paragraph = styled.p`
  font-family: "PP Neue Machina";
  font-weight: 400;
  font-size: 24px;
  line-height: 2em;
  letter-spacing: 0.05em;
  color: ${(props) => props.color};

  @media (max-width: 960px) {
    font-size: 20px;
  }

  @media (max-width: 820px) {
    font-size: 16px;
  }

  @media (max-width: 654px) {
    font-size: 12px;
  }
`;
