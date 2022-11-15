import React from "react";
import { Container, Title, Link, TopTitle, Nav, TopContainer, BottomTitle, TitleContainer, LightIcon, DarkIcon, IconContainer} from "./styles/navbar";


export default function Navbar({children, ...restProps}){
    return (
        <Nav {...restProps}>{children}</Nav>
    )
}

Navbar.TopContainer = function NavbarTopContainer({children, ...restProps}){
    return <TopContainer {...restProps}>{children}</TopContainer>
}

Navbar.Center = function NavbarCenter({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Navbar.TitleContainer = function NavbarTitleContainer({children, ...restProps}){
    return <TitleContainer {...restProps}>{children}</TitleContainer>
}

Navbar.Title = function NavbarTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}


Navbar.Link = function NavbarLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Navbar.TopTitle = function NavbarTopTitle({children, ...restProps}){
    return <TopTitle {...restProps}>{children}</TopTitle>
}

Navbar.BottomTitle = function NavbarBottomTitle({children, ...restProps}){
    return <BottomTitle {...restProps}>{children}</BottomTitle>
}

Navbar.IconContainer = function NavbarIconContainer({children, ...restProps}){
    return <IconContainer {...restProps}>{children}</IconContainer>
}

Navbar.LightIcon = function NavbarLightIcon({children, ...restProps}){
    return <LightIcon {...restProps}>{children}</LightIcon>
}

Navbar.DarkIcon = function NavbarDarkIcon({children, ...restProps}){
    return <DarkIcon {...restProps}>{children}</DarkIcon>
}
