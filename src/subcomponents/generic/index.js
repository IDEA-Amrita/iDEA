import React from 'react'

import { Container, Title, Paragraph, ParagraphContainer, InnerContainer } from './styles/generic'

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

Generic.InnerContainer = function AboutInnerContainer({children, ...restProps}){
    return <InnerContainer {...restProps}>{children}</InnerContainer>
}