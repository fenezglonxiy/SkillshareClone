/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import getClassCardGridCss from "./getClassCardGridCss";
import React from "react";
import ClassCard, { ClassCardProps } from "../components/ClassCard";

export type ClassCardGridProps = {
  children:
    | React.ReactElement<ClassCardProps, typeof ClassCard>
    | Array<React.ReactElement<ClassCardProps, typeof ClassCard>>;
};

const ClassCardGrid = (props: ClassCardGridProps) => {
  const theme = useTheme();
  const styled = getClassCardGridCss(theme);

  return <div css={styled.root}>{props.children}</div>;
};

export default ClassCardGrid;
