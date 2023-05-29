import {
  Container,
  TopMiddleText,
  TopRightTitle,
  TopRightTitleContainer,
  BodyContainer,
  FormsContainer,
  LeftColumn,
  RightColumn,
  Divider,
} from "./styles/Contribution";

export default function Contribution({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contribution.TopMiddleText = function ContributionTopMiddleText({
  children,
  ...restProps
}) {
  return <TopMiddleText {...restProps}>{children}</TopMiddleText>;
};
;
Contribution.TopRightTitle = function ContributionTopRightTitle({
  children,
  ...restProps
}) {
  return <TopRightTitle {...restProps}>{children}</TopRightTitle>;
};

Contribution.TopRightTitleContainer =  function ContributionTopRightTitleContainer({ children, ...restProps }) {
    return (
      <TopRightTitleContainer {...restProps}>{children}</TopRightTitleContainer>
    );
  };


Contribution.BodyContainer = function ContributionBodyContainer({
  children,
  ...restProps
}) {
  return (
    <BodyContainer {...restProps}>{children}</BodyContainer>
  );
};

Contribution.FormsContainer = function ContributionFormsContainer({
  children,
  ...restProps
}) {
  return <FormsContainer {...restProps}>{children}</FormsContainer>;
};

Contribution.LeftColumn = function ContributionLeftColumn({
  children,
  ...restProps
}) {
  return <LeftColumn {...restProps}>{children}</LeftColumn>;
};

Contribution.RightColumn = function ContributionRightColumn({
  children,
  ...restProps
}) {
  return <RightColumn {...restProps}>{children}</RightColumn>;
};

Contribution.Divider = function ContributionFormsDivider({
  children,
  ...restProps
}) {
  return <Divider {...restProps}>{children}</Divider>;
};

