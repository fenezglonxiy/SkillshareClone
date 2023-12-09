import { css } from "@emotion/react";
import { Theme } from "@mui/material";

const getClassRatingSectionCss = (theme: Theme) => css`
  overflow: hidden;
  padding: ${theme.spacing(32)};
  text-align: center;
  background-color: ${theme.palette.canvas};
  border-radius: 4px;

  & > h4 {
    margin-bottom: ${theme.spacing(32)};
  }
`;

export default getClassRatingSectionCss;
