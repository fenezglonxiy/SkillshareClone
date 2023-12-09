/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Typography from "../../../../../../Typography/Typography";
import SvgFilledHeart from "../../../../assets/SvgFilledHeart";
import React from "react";
import getClassLikedRatingItemCss from "./__styles__/getClassLikedRatingItemCss";
import { ClassRatingItemBaseProps } from "./ClassRatingItem";

export type ClassLikedRatingItemProps = ClassRatingItemBaseProps & {
  count: number;
};

const ClassLikedRatingItem: React.FC<ClassLikedRatingItemProps> = ({
  theme,
  ariaLabelledBy,
  count,
  ratingCategory,
}) => {
  const styled = getClassLikedRatingItemCss(theme);

  return (
    <li css={styled.root} aria-labelledby={ariaLabelledBy}>
      <span css={styled.likeStatWrapper}>
        <SvgFilledHeart width="14" height="14" />
        <Typography variant="captionBold" component="span">
          {count}
        </Typography>
      </span>

      <Typography variant="body2" component="span" id={ariaLabelledBy}>
        {ratingCategory}
      </Typography>
    </li>
  );
};

export default ClassLikedRatingItem;
