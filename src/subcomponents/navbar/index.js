import React from "react";
import {
  EmptyDivLeft,
  EmptyDivRight,
  SocialsTopLeft,
  CenterContainer,
  Container,
  Title,
  Link,
  TopTitle,
  Nav,
  TopContainer,
  BottomTitle,
  TitleContainer,
  LightIcon,
  DarkIcon,
  IconContainer,
  SocialsTopLeftInnerContainer,
  TimelineBarLeft,
  Circle,
  Stick,
  SocialsText,
  LengthStick,
  CircleText
} from "./styles/navbar";

export default function Navbar({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
}

Navbar.TopContainer = function NavbarTopContainer({ children, ...restProps }) {
  return <TopContainer {...restProps}>{children}</TopContainer>;
};

Navbar.Center = function NavbarCenter({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Navbar.TitleContainer = function NavbarTitleContainer({
  children,
  ...restProps
}) {
  return <TitleContainer {...restProps}>{children}</TitleContainer>;
};

Navbar.Title = function NavbarTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Navbar.CenterContainer = function NavbarCenterContainer({
  children,
  ...restProps
}) {
  return <CenterContainer {...restProps}>{children}</CenterContainer>;
};

Navbar.SocialsTopLeft = function NavbarSocialsTopLeft({
  children,
  ...restProps
}) {
  return <SocialsTopLeft {...restProps}>{children}</SocialsTopLeft>;
};

Navbar.SocialsTopLeftInnerContainer =
  function NavbarSocialsTopLeftInnerContainer({ children, ...restProps }) {
    return (
      <SocialsTopLeftInnerContainer {...restProps}>
        {children}
      </SocialsTopLeftInnerContainer>
    );
  };

Navbar.TimelineBarLeft = function NavbarTimelineBarLeft({
  children,
  ...restProps
}) {
  return <TimelineBarLeft {...restProps}>{children}</TimelineBarLeft>;
};

Navbar.Circle = function NavbarCircle({ children, ...restProps }) {
  return <Circle {...restProps}>{children}</Circle>;
};
Navbar.Stick = function NavbarStick({ children, ...restProps }) {
  return <Stick {...restProps}>{children}</Stick>;
};
Navbar.LengthStick = function NavbarLengthStick({ children, ...restProps }) {
  return <LengthStick {...restProps}>{children}</LengthStick>;
};

Navbar.Link = function NavbarLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Navbar.TopTitle = function NavbarTopTitle({ children, ...restProps }) {
  return <TopTitle {...restProps}>{children}</TopTitle>;
};

Navbar.BottomTitle = function NavbarBottomTitle({ children, ...restProps }) {
  return <BottomTitle {...restProps}>{children}</BottomTitle>;
};

Navbar.SocialsText = function NavbarSocialsText({ children, ...restProps }) {
  return <SocialsText {...restProps}>{children}</SocialsText>;
};

Navbar.IconContainer = function NavbarIconContainer({
  children,
  ...restProps
}) {
  return <IconContainer {...restProps}>{children}</IconContainer>;
};

Navbar.LightIcon = function NavbarLightIcon({ children, ...restProps }) {
  return <LightIcon {...restProps}>{children}</LightIcon>;
};

Navbar.DarkIcon = function NavbarDarkIcon({ children, ...restProps }) {
  return <DarkIcon {...restProps}>{children}</DarkIcon>;
};

Navbar.EmptyDivL = function NavbarEmptyDiv({ children, ...restProps }) {
  return <EmptyDivLeft {...restProps}>{children}</EmptyDivLeft>;
};

Navbar.EmptyDivR = function NavbarEmptyDiv({ children, ...restProps }) {
  return <EmptyDivRight {...restProps}>{children}</EmptyDivRight>;
};

Navbar.CircleText = function NavbarCircleText({ children, ...restProps }) {
  return <CircleText {...restProps}>{children}</CircleText>;
}
