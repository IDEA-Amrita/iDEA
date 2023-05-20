import {
  Container,
  AngledBoxContainer,
  InnerContainer,
  TextDate,
  TextTitle,
  OnHoverContainer,
  OnHoverImage,
  OnHoverSubTitle,
  OnHoverInnerContainer,
  OnHoverParagraph,
  OnHoverTitle,
  CrossIcon,
  MainContainer,
} from "./style/roadmap";

export default function Roadmap({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Roadmap.AngledBoxContainer = function RoadmapAngledBoxContainer({
  children,
  ...restProps
}) {
  return <AngledBoxContainer {...restProps}>{children}</AngledBoxContainer>;
};

Roadmap.TextDate = function RoadmapTextDate({ children, ...restProps }) {
  return <TextDate {...restProps}>{children}</TextDate>;
};

Roadmap.MainContainer = function RoadmapMainContainer({
  children,
  ...restProps
}) {
  return <MainContainer {...restProps}>{children}</MainContainer>;
};

Roadmap.InnerContainer = function RoadmapInnerContainer({
  children,
  ...restProps
}) {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};

Roadmap.TextTitle = function RoadmapTextTitle({ children, ...restProps }) {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

Roadmap.OnHoverContainer = function RoadmapOnHoverContainer({
  children,
  ...restProps
}) {
  return <OnHoverContainer {...restProps}>{children}</OnHoverContainer>;
};

Roadmap.OnHoverInnerContainer = function RoadmapOnHoverInnerContainer({
  children,
  ...restProps
}) {
  return (
    <OnHoverInnerContainer {...restProps}>{children}</OnHoverInnerContainer>
  );
};

Roadmap.CrossIcon = function RoadmapCrossIcon({ children, ...restProps }) {
  return <CrossIcon {...restProps}>{children}</CrossIcon>;
};

Roadmap.OnHoverTitle = function RoadmapOnHoverTitle({
  children,
  ...restProps
}) {
  return <OnHoverTitle {...restProps}>{children}</OnHoverTitle>;
};

Roadmap.OnHoverSubTitle = function RoadmapOnHoverSubTitle({
  children,
  ...restProps
}) {
  return <OnHoverSubTitle {...restProps}>{children}</OnHoverSubTitle>;
};

Roadmap.OnHoverImage = function RoadmapOnHoverImage({
  children,
  ...restProps
}) {
  return <OnHoverImage {...restProps}>{children}</OnHoverImage>;
};

Roadmap.OnHoverParagraph = function RoadmapOnHoverParagraph({
  children,
  ...restProps
}) {
  return <OnHoverParagraph {...restProps}>{children}</OnHoverParagraph>;
};
