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
  background-color: var(--card-cream);
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-nb-md);

  &:after {
    position: absolute;
    background: var(--line);
    width: 110%;
    height: 1px;
    content: "";
    top: 30px;
    left: -30px;
  }

  &:before {
    position: absolute;
    background: var(--line);
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
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
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
  height: 100%;
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
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);

  @media (max-width: 820px) {
    font-size: 12px;
  }
  @media (max-width: 654px) {
    font-size: 11px;
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
  padding: 5px 14px;
  margin: 4px;
  font-size: 13px;
  font-family: "PP Neue Machina";
  font-weight: 500;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--card-lavender);
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--radius-pill);
`;

export const DescriptionTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: var(--accent-violet);
  text-transform: lowercase;
  letter-spacing: -0.015em;
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 32px;
  }
  @media (max-width: 654px) {
    font-size: 24px;
  }
`;

export const ProjectDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.55em;
  color: var(--ink-soft);
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: 820px) {
    font-size: 15px;
  }
  @media (max-width: 654px) {
    font-size: 14px;
  }
`;

export const ContributorName = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: var(--ink-soft);
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 15px;
  }
  @media (max-width: 654px) {
    font-size: 13px;
  }
`;

export const Date = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: var(--muted);
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 12px;
  }
  @media (max-width: 654px) {
    font-size: 11px;
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
  font-weight: 400;
  font-size: 16px;
  color: var(--ink-soft);
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: 820px) {
    font-size: 15px;
  }
  @media (max-width: 654px) {
    font-size: 13px;
  }
`;

export const Title = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  width: min-content;
  color: var(--accent-violet);
  text-transform: lowercase;
  letter-spacing: -0.02em;
  line-height: 1;
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 44px;
  }
  @media (max-width: 654px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 0 !important;
  text-align: right;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: var(--ink-soft);
  line-height: 1.5;

  @media (max-width: 820px) {
    font-size: 15px;
  }
  @media (max-width: 654px) {
    font-size: 13px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
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
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all var(--dur-base) var(--ease-out);

  &:hover {
    cursor: pointer;
    border-bottom-color: var(--accent-violet);
    padding-right: 10px;
  }
`;

export const ListItemTitle = styled.h3`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.color || "var(--ink)"};

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

export const ListItemArrowContainer = styled.div`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-sm);
  background-color: ${(props) => props.color || "transparent"};
  border: 1.5px solid ${(props) => (props.color ? "var(--ink)" : "transparent")};
`;

export const Paragraph = styled.p`
  font-family: "PP Neue Machina";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7em;
  text-align: center;
  letter-spacing: 0.01em;
  color: var(--ink-soft);

  @media (max-width: 1340px) {
    font-size: 14px;
  }
  @media (max-width: 1076px) {
    font-size: 13px;
  }
  @media (max-width: 654px) {
    font-size: 12px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const BlockContainer = styled.div`
  margin-top: 8%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const BlockInnerContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonContainer = styled.div`
  width: "240px";
  height: "64px";

  @media (max-width: 820px) {
    width: "200px";
    height: "48px";
  }
  @media (max-width: 654px) {
    width: "160px";
    height: "32px";
  }
`;

export const BlockTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: var(--accent-violet);
  text-transform: lowercase;
  letter-spacing: -0.01em;
  cursor: pointer;

  @media (max-width: 1340px) {
    font-size: 26px;
  }
  @media (max-width: 1028px) {
    font-size: 24px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
  @media (max-width: 820px) {
    font-size: 18px;
  }
  @media (max-width: 654px) {
    font-size: 14px;
  }
`;

export const BlockButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--ink);
  background-color: var(--accent-lime);
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-pill);
  padding: 10px 18px;
  font-family: "PP Neue Machina";
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  width: auto;
  height: auto;
  bottom: 5%;
  right: 2%;
  box-shadow: var(--shadow-nb-sm);
  transition: transform var(--dur-fast) var(--ease-out),
    box-shadow var(--dur-fast) var(--ease-out);

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: var(--shadow-nb-md);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }

  * {
    cursor: pointer;
  }
`;

export const AngledLine = styled.div`
  height: 80%;
  width: 1.5px;
  background-color: var(--accent-violet);
  opacity: 0.25;
  margin: 3% 0;
  transform: rotate(12deg);
  -webkit-transform: rotate(12deg);
  -ms-transform: rotate(12deg);
`;
