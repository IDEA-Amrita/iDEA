import {
  Container,
  Title,
  CrossedBordersContainer,
  SectionContainer,
  CrossedBorders,
  SubTitle,
  Section,
  CrossedBordersInnerContainer,
  CrossedBordersImage,
  UserInfoContainer,
  Designation,
  About,
  OtherTeamsContainer,
  OtherTeamsSpecificContainer,
  OtherTeamsTitle,
  OtherTeamsSpecificInnerContainer,
  OtherTeamsImage,
  Line,
  TeamYears,
  Paragraph,
  MentorSectionContainer,
  MentorInnerContainer,
  MentorTitle,
  MentorOuterContainer,
  ExpandableSectionContainer,
  ExpandableSection,
  ExpandableInnerContainer,
} from "./styles/team";

export default function Team({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Team.Title = function TeamTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Team.Paragraph = function TeamParagraph({ children, ...restProps }) {
  return <Paragraph {...restProps}>{children}</Paragraph>;
};

Team.SectionContainer = function TeamSectionContainer({
  children,
  ...restProps
}) {
  return <SectionContainer {...restProps}>{children}</SectionContainer>;
};

Team.MentorSectionContainer = function TeamMentorSectionContainer({
  children,
  ...restProps
}) {
  return (
    <MentorSectionContainer {...restProps}>{children}</MentorSectionContainer>
  );
};

Team.MentorOuterContainer = function TeamMentorOuterContainer({
  children,
  ...restProps
}) {
  return <MentorOuterContainer {...restProps}>{children}</MentorOuterContainer>;
};

Team.MentorInnerContainer = function TeamMentorInnerContainer({
  children,
  ...restProps
}) {
  return <MentorInnerContainer {...restProps}>{children}</MentorInnerContainer>;
};

Team.MentorTitle = function TeamMentorTitle({ children, ...restProps }) {
  return <MentorTitle {...restProps}>{children}</MentorTitle>;
};

Team.ExpandableSectionContainer = function TeamExpandableSectionContainer({
  children,
  ...restProps
}) {
  return (
    <ExpandableSectionContainer {...restProps}>
      {children}
    </ExpandableSectionContainer>
  );
};

Team.ExpandableInnerContainer = function TeamExpandableInnerContainer({
  children,
  ...restProps
}) {
  return (
    <ExpandableInnerContainer {...restProps}>
      {children}
    </ExpandableInnerContainer>
  );
};

Team.ExpandableSection = function TeamExpandableSection({
  children,
  ...restProps
}) {
  return <ExpandableSection {...restProps}>{children}</ExpandableSection>;
};

Team.CrossedBordersContainer = function TeamCrossedBordersContainer({
  children,
  ...restProps
}) {
  return (
    <CrossedBordersContainer {...restProps}>{children}</CrossedBordersContainer>
  );
};

Team.CrossedBorders = function TeamCrossedBorders({ children, ...restProps }) {
  return <CrossedBorders {...restProps}>{children}</CrossedBorders>;
};

Team.SubTitle = function TeamSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Team.Section = function TeamSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Team.CrossedBordersInnerContainer = function TeamCrossedBordersInnerContainer({
  children,
  ...restProps
}) {
  return (
    <CrossedBordersInnerContainer {...restProps}>
      {children}
    </CrossedBordersInnerContainer>
  );
};

Team.CrossedBordersImage = function TeamCrossedBordersImage({
  children,
  ...restProps
}) {
  return <CrossedBordersImage {...restProps}>{children}</CrossedBordersImage>;
};

Team.UserInfoContainer = function TeamUserInfoContainer({
  children,
  ...restProps
}) {
  return <UserInfoContainer {...restProps}>{children}</UserInfoContainer>;
};

Team.Designation = function TeamDesignation({ children, ...restProps }) {
  return <Designation {...restProps}>{children}</Designation>;
};

Team.About = function TeamAbout({ children, ...restProps }) {
  return <About {...restProps}>{children}</About>;
};

Team.OtherTeamsContainer = function TeamOtherTeamsContainer({
  children,
  ...restProps
}) {
  return <OtherTeamsContainer {...restProps}>{children}</OtherTeamsContainer>;
};

Team.OtherTeamsSpecificContainer = function TeamOtherTeamsSpecificContainer({
  children,
  ...restProps
}) {
  return (
    <OtherTeamsSpecificContainer {...restProps}>
      {children}
    </OtherTeamsSpecificContainer>
  );
};

Team.OtherTeamsTitle = function TeamOtherTeamsTitle({
  children,
  ...restProps
}) {
  return <OtherTeamsTitle {...restProps}>{children}</OtherTeamsTitle>;
};

Team.OtherTeamsSpecificInnerContainer =
  function TeamOtherTeamsSpecificInnerContainer({ children, ...restProps }) {
    return (
      <OtherTeamsSpecificInnerContainer {...restProps}>
        {children}
      </OtherTeamsSpecificInnerContainer>
    );
  };

Team.OtherTeamsImage = function TeamOtherTeamsImage({
  children,
  ...restProps
}) {
  return <OtherTeamsImage {...restProps}>{children}</OtherTeamsImage>;
};

Team.Line = function TeamLine({ children, ...restProps }) {
  return <Line {...restProps}>{children}</Line>;
};

Team.TeamYears = function TeamTeamYears({ children, ...restProps }) {
  return <TeamYears {...restProps}>{children}</TeamYears>;
};
