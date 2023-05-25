import React from "react";

import {
  Container,
  Title,
  TopRightTitle,
  Image,
  TopRightMottoText,
  TopRightTitleContainer,
  Paragraph,
  Circle,
  ParagraphContainer,
  InnerContainer,
  Stick,
} from "./styles/generic";

export default function Generic({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Generic.Title = function AboutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Generic.ParagraphContainer = function AboutParagraphContainer({
  children,
  ...restProps
}) {
  return <ParagraphContainer {...restProps}>{children}</ParagraphContainer>;
};

Generic.Paragraph = function AboutParagraph({ children, ...restProps }) {
  return <Paragraph {...restProps}>{children}</Paragraph>;
};
Generic.Image = function AboutImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Generic.TopRightTitle = function AboutTopRightTitle({
  children,
  ...restProps
}) {
  return <TopRightTitle {...restProps}>{children}</TopRightTitle>;
};

Generic.TopRightTitleContainer = function AboutTopRightTitleContainer({
  children,
  ...restProps
}) {
  return (
    <TopRightTitleContainer {...restProps}>{children}</TopRightTitleContainer>
  );
};

Generic.TopRightMottoText = function AboutTopRightMottoText({
  children,
  ...restProps
}) {
  return <TopRightMottoText {...restProps}>{children}</TopRightMottoText>;
};

Generic.InnerContainer = function AboutInnerContainer({
  children,
  ...restProps
}) {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};
