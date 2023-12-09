import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  margin-top: ${theme.spacing(32)};
`;

const getClassCardSectionHeaderStyles = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${theme.spacing(0, 8, 16)};
`;

type ClassCardSectionStyledComponents = "root" | "classCardSectionHeader";

const getClassCardSectionCss = (
  theme: Theme
): Record<ClassCardSectionStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  classCardSectionHeader: getClassCardSectionHeaderStyles(theme),
});

export default getClassCardSectionCss;
