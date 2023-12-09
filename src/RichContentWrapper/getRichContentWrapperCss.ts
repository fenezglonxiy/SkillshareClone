import { css } from "@emotion/react";
import { Theme } from "@mui/material";

const getRichContentWrapperCss = (theme: Theme) => css`
  ${theme.typography.body2};
  line-height: 150%;
  word-wrap: break-word;

  & > p:not(:last-of-type) {
    margin-bottom: ${theme.spacing(15)};
  }
`;

export default getRichContentWrapperCss;
