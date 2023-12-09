/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import React from "react";
import Typography from "../../../../../Typography/Typography";
import getClassRatingSectionCss from "./__styles__/getClassRatingSectionCss";
import { ClassRatingVariant } from "./constants";
import ClassRatingList from "./ClassRatingList";
import ClassRatingItem, { ClassRatingItemProps } from "./item/ClassRatingItem";
import ClassRatingListContext from "./ClassRatingListContext";
import useId from "../../../../../utils/useId";

type Props = {
  theme: Theme;
  ratingAspect: string;
  children: Array<
    React.ReactElement<ClassRatingItemProps, typeof ClassRatingItem>
  >;
  variant: ClassRatingVariant;
};

const ClassRatingSection: React.FC<Props> = ({
  theme,
  ratingAspect,
  children: childrenFromProps,
  variant,
}) => {
  const listId = useId() as string;
  const css = getClassRatingSectionCss(theme);

  const children = React.Children.map(childrenFromProps, (child) =>
    React.cloneElement(child, {
      variant: variant,
    })
  );

  return (
    <div css={css}>
      <Typography variant="body2Bold" id={listId} component="h4">
        {ratingAspect}
      </Typography>

      <ClassRatingList theme={theme} variant={variant} aria-labelledby={listId}>
        <ClassRatingListContext id={listId}>{children}</ClassRatingListContext>
      </ClassRatingList>
    </div>
  );
};

export default ClassRatingSection;
