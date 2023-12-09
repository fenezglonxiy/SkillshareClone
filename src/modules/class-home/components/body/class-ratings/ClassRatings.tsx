/** @jsxImportSource @emotion/react */

import { Theme } from "@mui/material";
import Typography from "../../../../../Typography/Typography";
import React from "react";
import getClassRatingsCss from "./__styles__/getClassRatingsCss";
import ClassRatingSection from "./ClassRatingSection";
import ClassRatingItem from "./item/ClassRatingItem";

type Props = {
  theme: Theme;
};

const ClassRatings: React.FC<Props> = ({ theme }) => {
  const styled = getClassRatingsCss(theme);

  return (
    <div>
      <Typography variant="h3">Class Ratings</Typography>

      <div css={styled.classRatingSectionContainer}>
        <ClassRatingSection
          ratingAspect="Most Liked"
          variant="like"
          theme={theme}
        >
          <ClassRatingItem
            ratingCategory="Engaging Teacher"
            count={781}
            total={1000}
            theme={theme}
          />
          <ClassRatingItem
            ratingCategory="Actionable Steps"
            count={694}
            total={1000}
            theme={theme}
          />
          <ClassRatingItem
            ratingCategory="Helpful Examples"
            count={683}
            total={1000}
            theme={theme}
          />
        </ClassRatingSection>

        <ClassRatingSection
          ratingAspect="Expectations Met?"
          variant="expectation"
          theme={theme}
        >
          <ClassRatingItem
            ratingCategory="Exceeded!"
            count={683}
            total={1000}
            theme={theme}
          />
          <ClassRatingItem
            ratingCategory="Yes"
            count={683}
            total={1000}
            theme={theme}
          />
          <ClassRatingItem
            ratingCategory="Somewhat"
            count={683}
            total={1000}
            theme={theme}
          />
          <ClassRatingItem
            ratingCategory="Not really"
            count={683}
            total={1000}
            theme={theme}
          />
        </ClassRatingSection>
      </div>
    </div>
  );
};

export default ClassRatings;
