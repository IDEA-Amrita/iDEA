import React from 'react'

import { Container, Title, CircleStickLineMapContainer, Paragraph, Circle, ParagraphContainer, InnerContainer, Stick } from './styles/generic'

export default function Generic({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Generic.Title = function AboutTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Generic.ParagraphContainer = function AboutParagraphContainer({children, ...restProps}){
    return <ParagraphContainer {...restProps}>{children}</ParagraphContainer>
}

Generic.Paragraph = function AboutParagraph({children, ...restProps}){
    return <Paragraph {...restProps}>{children}</Paragraph>
}

Generic.Circle = function AboutCircle({children, ...restProps}){
    return <Circle {...restProps}>{children}</Circle>
}

Generic.Stick = function AboutStick({children, ...restProps}){
    return <Stick {...restProps}>{children}</Stick>
}

Generic.CircleStickLineMapContainer = function CircleStickLineMapContainer({children, ...restProps}){
    return <CircleStickLineMapContainer{...restProps}>{children}</CircleStickLineMapContainer>
}

Generic.InnerContainer = function AboutInnerContainer({children, ...restProps}){
    return <InnerContainer {...restProps}>{children}</InnerContainer>
}