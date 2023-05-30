import React from "react";

import {
  BuiltUsing,
  Container,
  ContributorName,
  Date,
  DescriptionContainer,
  DescriptionContent,
  DescriptionHeader,
  DescriptionHeaderContent,
  DescriptionHeaderImage,
  DescriptionTitle,
  ListContainer,
  ListItem,
  ListItemArrowContainer,
  ListItemTitle,
  ProjectDescription,
  ProjectFrameworks,
  ProjectListContainer,
  ProjectsContentContainer,
  SubTitle,
  TagBubble,
  TagBubbleContainer,
  TimeLineContainer,
  Title,
  BlockContainer,
  BlockInnerContainer,
  BlockTitle,
  BlockButton,
  AngledLine,
} from "./styles/projects";

export default function Projects({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Projects.TimeLineContainer = function ProjectsTimeLineContainer({
  children,
  ...restProps
}) {
  return <TimeLineContainer {...restProps}>{children}</TimeLineContainer>;
};

Projects.ProjectsContentContainer = function ContentContainer({
  children,
  ...restProps
}) {
  return (
    <ProjectsContentContainer {...restProps}>
      {children}
    </ProjectsContentContainer>
  );
};

Projects.DescriptionContainer = function ProjectDescriptionContainer({
  children,
  ...restProps
}) {
  return <DescriptionContainer {...restProps}>{children}</DescriptionContainer>;
};

Projects.ProjectListContainer = function ProjectsListContainer({
  children,
  ...restProps
}) {
  return <ProjectListContainer {...restProps}>{children}</ProjectListContainer>;
};

Projects.Title = function ProjectsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Projects.SubTitle = function ProjectsSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Projects.ListContainer = function ProjectsListContainer({
  children,
  ...restProps
}) {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};

Projects.ListItem = function ProjectsListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Projects.ListItemTitle = function ProjectsListItemTitle({
  children,
  ...restProps
}) {
  return <ListItemTitle {...restProps}>{children}</ListItemTitle>;
};

Projects.ListItemArrowContainer = function ProjectsListItemArrowContainer({
  children,
  ...restProps
}) {
  return (
    <ListItemArrowContainer {...restProps}>{children}</ListItemArrowContainer>
  );
};

Projects.DescriptionHeader = function ProjectsDescriptionHeader({
  children,
  ...restProps
}) {
  return <DescriptionHeader {...restProps}>{children}</DescriptionHeader>;
};

Projects.DescriptionContent = function ProjectsDescriptionContent({
  children,
  ...restProps
}) {
  return <DescriptionContent {...restProps}>{children}</DescriptionContent>;
};

Projects.DescriptionHeaderImage = function ProjectsDescriptionHeaderImage({
  children,
  ...restProps
}) {
  return (
    <DescriptionHeaderImage {...restProps}>{children}</DescriptionHeaderImage>
  );
};

Projects.DescriptionHeaderContent = function ProjectsDescriptionHeaderContent({
  children,
  ...restProps
}) {
  return (
    <DescriptionHeaderContent {...restProps}>
      {children}
    </DescriptionHeaderContent>
  );
};

Projects.DescriptionTitle = function ProjectsDescriptionTitle({
  children,
  ...restProps
}) {
  return <DescriptionTitle {...restProps}>{children}</DescriptionTitle>;
};

Projects.ContributorName = function ProjectsContributorName({
  children,
  ...restProps
}) {
  return <ContributorName {...restProps}>{children}</ContributorName>;
};

Projects.Date = function ProjectsDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};

Projects.ProjectDescription = function ProjectsProjectDescription({
  children,
  ...restProps
}) {
  return <ProjectDescription {...restProps}>{children}</ProjectDescription>;
};

Projects.BuiltUsing = function ProjectsBuiltUsing({ children, ...restProps }) {
  return <BuiltUsing {...restProps}>{children}</BuiltUsing>;
};

Projects.ProjectFrameworks = function ProjectsProjectFrameworks({
  children,
  ...restProps
}) {
  return <ProjectFrameworks {...restProps}>{children}</ProjectFrameworks>;
};

Projects.TagBubbleContainer = function ProjectsTagBubbleContainer({
  children,
  ...restProps
}) {
  return <TagBubbleContainer {...restProps}>{children}</TagBubbleContainer>;
};

//TagBubble
Projects.TagBubble = function ProjectsTagBubble({ children, ...restProps }) {
  return <TagBubble {...restProps}>{children}</TagBubble>;
};

Projects.BlockContainer = function ProjectsBlockContainer({
  children,
  ...restProps
}) {
  return <BlockContainer {...restProps}>{children}</BlockContainer>;
};

Projects.BlockInnerContainer = function ProjectsBlockInnerContainer({
  children,
  ...restProps
}) {
  return <BlockInnerContainer {...restProps}>{children}</BlockInnerContainer>;
};

Projects.BlockTitle = function ProjectsBlockTitle({ children, ...restProps }) {
  return <BlockTitle {...restProps}>{children}</BlockTitle>;
};

Projects.BlockButton = function ProjectsBlockButton({
  children,
  ...restProps
}) {
  return <BlockButton {...restProps}>{children}</BlockButton>;
};

Projects.AngledLine = function ProjectsAngledLine({
  children,
  ...restProps
}) {
  return <AngledLine {...restProps}>{children}</AngledLine>
}
