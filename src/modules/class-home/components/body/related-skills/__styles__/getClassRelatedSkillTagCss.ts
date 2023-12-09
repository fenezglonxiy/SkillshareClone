import { css } from "@emotion/react";
import { Theme } from "@mui/material";

const getClassRelatedSkillTagCss = (theme: Theme) => css`
  border-color: ${theme.palette.concrete};

  &:hover,
  &:focus {
    background-color: initial;
    color: inherit;
  }
`;

export default getClassRelatedSkillTagCss;
