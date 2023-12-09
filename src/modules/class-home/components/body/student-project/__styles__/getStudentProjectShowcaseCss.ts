import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  && {
    margin-bottom: ${theme.spacing(48)};
    padding-bottom: 0;
    border-bottom: unset;
  }
`;

const getContainerStyles = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, minmax(125px, 1fr));
  gap: ${theme.spacing(32, 16)};
`;

type StudentProjectShowcaseStyledComponents = "root" | "container";

const getStudentProjectShowcaseCss = (
  theme: Theme
): Record<StudentProjectShowcaseStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  container: getContainerStyles(theme),
});

export default getStudentProjectShowcaseCss;
