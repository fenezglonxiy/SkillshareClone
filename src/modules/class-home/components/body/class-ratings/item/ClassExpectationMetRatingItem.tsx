/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Typography from "../../../../../../Typography/Typography";
import React from "react";
import getClassExpectationMetRatingItemCss from "./__styles__/getClassExpectationMetRatingItemCss";
import { ClassRatingItemBaseProps } from "./ClassRatingItem";

export type ClassExpectationMetRatingItemProps = ClassRatingItemBaseProps & {
  percentage: number;
};

const ClassExpectationMetRatingItem: React.FC<
  ClassExpectationMetRatingItemProps
> = ({ theme, ariaLabelledBy, ratingCategory, percentage }) => {
  const styled = getClassExpectationMetRatingItemCss(theme, percentage);

  return (
    <>
      <Typography variant="body2" component="span" id={ariaLabelledBy}>
        {ratingCategory}
      </Typography>

      <li css={styled.root} aria-labelledby={ariaLabelledBy}>
        <div css={styled.percentage}>
          <span css={styled.percentageBar}>
            <span></span>
          </span>

          <Typography
            variant="caption"
            component="span"
            css={styled.percentageStat}
          >
            {percentage}%
          </Typography>
        </div>
      </li>
    </>
  );
};

export default ClassExpectationMetRatingItem;
