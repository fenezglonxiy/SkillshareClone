import { Theme, css } from "@mui/material";

const getTabCss = (theme: Theme) => css`
  padding: 0;
  min-height: auto;
  font: inherit;
  color: ${theme.palette.violet};

  &[aria-selected="true"] {
    color: ${theme.palette.navy};
  }
`;

export default getTabCss;
