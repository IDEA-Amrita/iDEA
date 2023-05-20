import { Container, AngledBoxContainer, TextDate, TextTitle } from "./style/roadmap";

export default function Roadmap ({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Roadmap.AngledBoxContainer = function RoadmapAngledBoxContainer ({children, ...restProps}) {
    return <AngledBoxContainer {...restProps}>{children}</AngledBoxContainer>
}

Roadmap.TextDate = function RoadmapTextDate ({children, ...restProps}) {
    return <TextDate {...restProps}>{children}</TextDate>
}

Roadmap.TextTitle = function RoadmapTextTitle ({children, ...restProps}) {
    return <TextTitle {...restProps}>{children}</TextTitle>
}
