import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getClassRatingSectionContainerStyles = (theme: Theme) => css`
  ${theme.breakpoints.down("sm")} {
    & > *:not(:last-of-type) {
      margin-bottom: ${theme.spacing(16)};
    }
  }

  ${theme.breakpoints.up("sm")} {
    display: grid;
    grid-template-columns: 45.5% 54.5%;

    & > *:first-of-type {
      margin-right: ${theme.spacing(16)};
    }

    & > *:last-of-type {
      margin-left: ${theme.spacing(16)};
    }
  }
`;

type ClassRatingsStyledComponents = "classRatingSectionContainer";

const getClassRatingsCss = (
  theme: Theme
): Record<ClassRatingsStyledComponents, SerializedStyles> => ({
  classRatingSectionContainer: getClassRatingSectionContainerStyles(theme),
});

export default getClassRatingsCss;
