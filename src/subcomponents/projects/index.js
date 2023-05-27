import React from "react";

import {
    Container,
    DescriptionContainer,
    ListContainer, ListItem, ListItemArrowContainer, ListItemTitle,
    ProjectListContainer,
    ProjectsContentContainer,
    SubTitle,
    TimeLineContainer,
    Title

} from "./styles/projects";

export default function Projects({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

Projects.TimeLineContainer = function ProjectsTimeLineContainer({children, ...restProps}) {
    return <TimeLineContainer {...restProps}>{children}</TimeLineContainer>;
}

Projects.ProjectsContentContainer = function ContentContainer({children, ...restProps}) {
    return <ProjectsContentContainer {...restProps}>{children}</ProjectsContentContainer>;
}

Projects.DescriptionContainer = function ProjectDescriptionContainer({children, ...restProps}) {
    return <DescriptionContainer {...restProps}>{children}</DescriptionContainer>;
}

Projects.ProjectListContainer = function ProjectsListContainer({children, ...restProps}) {
    return <ProjectListContainer {...restProps}>{children}</ProjectListContainer>;
}

Projects.Title = function ProjectsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
}

Projects.SubTitle = function ProjectsSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Projects.ListContainer = function ProjectsListContainer({children, ...restProps}) {
    return <ListContainer {...restProps}>{children}</ListContainer>;
}

Projects.ListItem = function ProjectsListItem({children, ...restProps}) {
    return <ListItem {...restProps}>{children}</ListItem>;
}

Projects.ListItemTitle = function ProjectsListItemTitle({children, ...restProps}) {
    return <ListItemTitle {...restProps}>{children}</ListItemTitle>;
}

Projects.ListItemArrowContainer = function ProjectsListItemArrowContainer({children, ...restProps}) {
    return <ListItemArrowContainer {...restProps}>{children}</ListItemArrowContainer>;
}



