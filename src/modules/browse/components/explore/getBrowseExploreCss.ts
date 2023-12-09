import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import { RIGHT_COLUMN_SPACING_INLINE } from "../constants";

const getRootStyles = (theme: Theme) => css`
  padding: ${theme.spacing(0, RIGHT_COLUMN_SPACING_INLINE)};
  margin: ${theme.spacing(64, 0, 32)};

  & > h2 {
    margin-bottom: ${theme.spacing(24)};
  }
`;

type BrowseExploreStyledComponents = "root";

const getBrowseExploreCss = (
  theme: Theme
): Record<BrowseExploreStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
});

export default getBrowseExploreCss;
