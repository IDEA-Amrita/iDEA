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

export const AlumniContentContainer = styled.div`
  height: 90%;
  max-height: 90%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3% 2% 0 2%;
  margin-top: 5%;
  gap: 1.75rem;
`;

export const DescriptionContainer = styled.div`
  flex: 0 0 min(58%, 760px);
  max-width: min(58%, 760px);
  height: auto;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 38px 8px;
  position: relative;
  background-color: var(--card-cream);
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-nb-md);
  margin-left: auto;
  z-index: 2;

  &:after {
    position: absolute;
    background: var(--line);
    width: 110%;
    height: 1px;
    content: "";
    top: 30px;
    right: -30px;
  }

  &:before {
    position: absolute;
    background: var(--line);
    width: 110%;
    height: 1px;
    content: "";
    bottom: 30px;
    right: -30px;
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
  box-shadow: var(--shadow-nb-sm);
`;

export const DescriptionHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 100%;
  justify-content: center;
  gap: 10px;
`;

export const AlumniTitle = styled.h1`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: var(--accent-violet);
  text-transform: lowercase;
  letter-spacing: -0.015em;
  cursor: pointer;
  margin: 0;

  @media (max-width: 820px) {
    font-size: 32px;
  }
  @media (max-width: 654px) {
    font-size: 24px;
  }
`;

export const AlumniRole = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: var(--ink-soft);
  cursor: pointer;
  margin: 8px 0 0 0;

  @media (max-width: 820px) {
    font-size: 15px;
  }
  @media (max-width: 654px) {
    font-size: 13px;
  }
`;

export const AlumniListContainer = styled.div`
  height: 100%;
  flex: 0 0 min(32rem, 32%);
  max-width: min(32rem, 32%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 2%;
  overflow: visible;
`;

export const DescriptionContent = styled.div`
  margin-top: 3%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AlumniDescription = styled.p`
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

export const Field = styled.div`
  margin-top: 2%;
  padding: 1% 0;
`;

export const FieldLabel = styled.h4`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin: 0;

  @media (max-width: 820px) {
    font-size: 12px;
  }
  @media (max-width: 654px) {
    font-size: 11px;
  }
`;

export const FieldValue = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: var(--ink-soft);
  margin: 8px 0 0 0;

  @media (max-width: 820px) {
    font-size: 15px;
  }
  @media (max-width: 654px) {
    font-size: 13px;
  }
`;

export const ListTitle = styled.h1`
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
  margin: 0;

  @media (max-width: 820px) {
    font-size: 44px;
  }
  @media (max-width: 654px) {
    font-size: 32px;
  }
`;

export const ListSubTitle = styled.h2`
  margin-bottom: 0 !important;
  margin-top: 8px;
  text-align: left;
  width: 100%;
  font-family: "PP Neue Machina";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: var(--ink-soft);
  line-height: 1.5;
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;

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
  align-items: flex-start;
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
  width: 100%;
  padding: 10px 0 10px 5px;
  margin-top: 5px;
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all var(--dur-base) var(--ease-out);
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border-bottom-color: var(--accent-violet);
    padding-left: 10px;
  }
`;

export const ListItemName = styled.h3`
  font-family: "PP Neue Machina";
  font-style: normal;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => (props.isActive ? "var(--accent-violet)" : "var(--ink)")};
  margin: 0;

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

export const ListItemRole = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: var(--ink-soft);
  margin: 4px 0 0 0;
  opacity: 0.75;

  @media (max-width: 820px) {
    font-size: 13px;
  }
  @media (max-width: 654px) {
    font-size: 12px;
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
