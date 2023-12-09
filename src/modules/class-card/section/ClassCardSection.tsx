/** @jsxImportSource @emotion/react */

import React from "react";
import ClassCardGrid, { ClassCardGridProps } from "../grid/ClassCardGrid";
import { useTheme } from "@mui/material";
import getClassCardSectionCss from "./getClassCardSectionCss";
import Typography from "../../../Typography/Typography";
import Button from "../../../Button/Button";

type Props = {
  title: string;
  fullSectionLink?: string;
  children: React.ReactElement<ClassCardGridProps, typeof ClassCardGrid>;
};

const ClassCardSection = (props: Props) => {
  const theme = useTheme();
  const styled = getClassCardSectionCss(theme);

  return (
    <div css={styled.root}>
      <div css={styled.classCardSectionHeader}>
        <Typography variant="h2" color="navy">
          {props.title}
        </Typography>
        {props.fullSectionLink !== undefined && (
          <Button
            href={props.fullSectionLink}
            size="small"
            variant="ghost"
            color="navy"
          >
            View All
          </Button>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default ClassCardSection;
