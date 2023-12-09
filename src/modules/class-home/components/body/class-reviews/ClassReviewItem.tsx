/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Divider from "../../../../../Divider/Divider";
import Typography from "../../../../../Typography/Typography";
import AuthorDetails from "../../../../author-details/components/AuthorDetails";
import React from "react";
import getClassReviewItemCss from "./__styles__/getClassReviewItemCss";

type Props = {
  theme: Theme;
};

const ClassReviewItem: React.FC<Props> = ({ theme }) => {
  const styled = getClassReviewItemCss(theme);

  return (
    <li css={styled.root}>
      <AuthorDetails contribution="review" />

      <div css={styled.reviewDetails}>
        <Typography variant="body2">
          This class{" "}
          <Typography component="span" variant="captionBold" color="navy">
            exceeded
          </Typography>{" "}
          my expectations!
        </Typography>

        <Divider color="concrete" />

        <Typography variant="body2">
          We have a lot to do and think of! It's really a nice lesson! Thank
          you!
        </Typography>

        <div css={styled.timestampWrapper}>
          <Typography variant="caption">Posted 3 weeks ago</Typography>
        </div>
      </div>
    </li>
  );
};

export default ClassReviewItem;
