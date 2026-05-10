import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  box-sizing: border-box;
`;

const WordMark = styled.h1`
  font-family: "Archer Gage", serif;
  font-weight: 400;
  font-style: normal;
  font-size: clamp(96px, 16vw, 200px);
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0 0 20px 0;
  color: var(--accent-violet);
  text-transform: lowercase;
`;

const Tagline = styled.p`
  font-family: "FiraCode", monospace;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.3em;
  color: var(--muted);
  margin: 0 0 40px 0;
  text-transform: lowercase;
`;

const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavPill = styled.a`
  font-family: "Space Grotesk", system-ui, sans-serif;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none !important;
  color: var(--ink-soft) !important;
  padding: 9px 18px;
  border: 1.5px solid var(--line);
  border-radius: var(--radius-pill);
  background: var(--bg);
  cursor: pointer;
  transition: all var(--dur-fast) var(--ease-out);

  &:hover {
    color: #5a4dff !important;
    border-color: #5a4dff;
    transform: translate(-1px, -1px);
    box-shadow: 2px 2px 0 #5a4dff;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }
`;

const CTAPill = styled.button`
  font-family: "Space Grotesk", system-ui, sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 9px 20px;
  background-color: #c6ff3d;
  color: #0e0e0e;
  border: 1.5px solid #0e0e0e;
  border-radius: var(--radius-pill);
  box-shadow: 2px 2px 0 #0e0e0e;
  cursor: pointer;
  transition: all var(--dur-fast) var(--ease-out);
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px 0 #0e0e0e;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;

export default function Nav(props) {
  const ref = useRef(null);

  return (
    <Wrapper ref={ref}>
      <WordMark>iDEA</WordMark>
      <Tagline>watch your ideas come to life.</Tagline>

      <NavRow>
        <NavPill onClick={props.about}>About</NavPill>
        <NavPill onClick={props.roadmap}>Roadmap</NavPill>
        <NavPill onClick={props.team}>Team</NavPill>
        <NavPill onClick={props.projects}>Projects</NavPill>
        <NavPill
          href="https://github.com/IDEA-Amrita"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </NavPill>
        <NavPill
          href="https://github.com/IDEA-Amrita/official-documentation"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </NavPill>
        <CTAPill onClick={props.contribute}>✱ Contribute</CTAPill>
      </NavRow>
    </Wrapper>
  );
}
