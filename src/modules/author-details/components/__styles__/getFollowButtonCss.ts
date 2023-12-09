import { css } from "@emotion/react";
import { Theme } from "@mui/material";

const getFollowButtonCss = (theme: Theme) => css`
  position: relative;
  padding: 0;
  min-width: auto;
  margin-left: ${theme.spacing(7)};
  font: inherit;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &::before {
    content: "•";
    margin-right: ${theme.spacing(7)};
  }
`;

export default getFollowButtonCss;
