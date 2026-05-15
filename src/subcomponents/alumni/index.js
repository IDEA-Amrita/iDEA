import React from "react";

import {
  Container,
  TimeLineContainer,
  AlumniContentContainer,
  AlumniListContainer,
  DescriptionContainer,
  DescriptionHeader,
  DescriptionHeaderImage,
  DescriptionHeaderContent,
  AlumniTitle,
  AlumniRole,
  DescriptionContent,
  AlumniDescription,
  Field,
  FieldLabel,
  FieldValue,
  ListTitle,
  ListSubTitle,
  ListContainer,
  ListItem,
  ListItemName,
  ListItemRole,
  ListItemArrowContainer,
} from "./styles/alumni";

export default function Alumni({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Alumni.TimeLineContainer = function AlumniTimeLineContainer({
  children,
  ...restProps
}) {
  return <TimeLineContainer {...restProps}>{children}</TimeLineContainer>;
};

Alumni.AlumniContentContainer = function ContentContainer({
  children,
  ...restProps
}) {
  return (
    <AlumniContentContainer {...restProps}>{children}</AlumniContentContainer>
  );
};

Alumni.AlumniListContainer = function AlumniListContainerComponent({
  children,
  ...restProps
}) {
  return <AlumniListContainer {...restProps}>{children}</AlumniListContainer>;
};

Alumni.DescriptionContainer = function DescriptionContainerComponent({
  children,
  ...restProps
}) {
  return <DescriptionContainer {...restProps}>{children}</DescriptionContainer>;
};

Alumni.DescriptionHeader = function DescriptionHeaderComponent({
  children,
  ...restProps
}) {
  return <DescriptionHeader {...restProps}>{children}</DescriptionHeader>;
};

Alumni.DescriptionHeaderImage = function DescriptionHeaderImageComponent({
  children,
  ...restProps
}) {
  return (
    <DescriptionHeaderImage {...restProps}>{children}</DescriptionHeaderImage>
  );
};

Alumni.DescriptionHeaderContent = function DescriptionHeaderContentComponent({
  children,
  ...restProps
}) {
  return (
    <DescriptionHeaderContent {...restProps}>
      {children}
    </DescriptionHeaderContent>
  );
};

Alumni.AlumniTitle = function AlumniTitleComponent({ children, ...restProps }) {
  return <AlumniTitle {...restProps}>{children}</AlumniTitle>;
};

Alumni.AlumniRole = function AlumniRoleComponent({ children, ...restProps }) {
  return <AlumniRole {...restProps}>{children}</AlumniRole>;
};

Alumni.DescriptionContent = function DescriptionContentComponent({
  children,
  ...restProps
}) {
  return <DescriptionContent {...restProps}>{children}</DescriptionContent>;
};

Alumni.AlumniDescription = function AlumniDescriptionComponent({
  children,
  ...restProps
}) {
  return <AlumniDescription {...restProps}>{children}</AlumniDescription>;
};

Alumni.Field = function FieldComponent({ children, ...restProps }) {
  return <Field {...restProps}>{children}</Field>;
};

Alumni.FieldLabel = function FieldLabelComponent({ children, ...restProps }) {
  return <FieldLabel {...restProps}>{children}</FieldLabel>;
};

Alumni.FieldValue = function FieldValueComponent({ children, ...restProps }) {
  return <FieldValue {...restProps}>{children}</FieldValue>;
};

Alumni.ListTitle = function ListTitleComponent({ children, ...restProps }) {
  return <ListTitle {...restProps}>{children}</ListTitle>;
};

Alumni.ListSubTitle = function ListSubTitleComponent({
  children,
  ...restProps
}) {
  return <ListSubTitle {...restProps}>{children}</ListSubTitle>;
};

Alumni.ListContainer = function ListContainerComponent({
  children,
  ...restProps
}) {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};

Alumni.ListItem = function ListItemComponent({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Alumni.ListItemName = function ListItemNameComponent({
  children,
  ...restProps
}) {
  return <ListItemName {...restProps}>{children}</ListItemName>;
};

Alumni.ListItemRole = function ListItemRoleComponent({
  children,
  ...restProps
}) {
  return <ListItemRole {...restProps}>{children}</ListItemRole>;
};

Alumni.ListItemArrowContainer = function ListItemArrowContainerComponent({
  children,
  ...restProps
}) {
  return (
    <ListItemArrowContainer {...restProps}>{children}</ListItemArrowContainer>
  );
};
