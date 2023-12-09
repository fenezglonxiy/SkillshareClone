import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${theme.breakpoints.up("sm")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

type ClassCardGridStyledComponents = "root";

const getClassCardGridCss = (
  theme: Theme
): Record<ClassCardGridStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
});

export default getClassCardGridCss;
