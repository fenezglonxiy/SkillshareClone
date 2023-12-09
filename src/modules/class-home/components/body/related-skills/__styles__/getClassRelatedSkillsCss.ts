import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getContainerStyles = (theme: Theme) => css`
  & > * {
    margin: ${theme.spacing(0, 12, 12, 0)} !important;
  }
`;

type ClassRelatedSkillsStyledComponents = "container";

const getClassRelatedSkillsCss = (
  theme: Theme
): Record<ClassRelatedSkillsStyledComponents, SerializedStyles> => ({
  container: getContainerStyles(theme),
});

export default getClassRelatedSkillsCss;
