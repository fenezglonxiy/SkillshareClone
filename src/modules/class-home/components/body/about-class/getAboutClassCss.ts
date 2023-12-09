import { Theme, css } from "@mui/material";

const getAboutClassCss = (theme: Theme) => css`
  max-height: 240px;
  color: ${theme.palette.navy};
`;

export default getAboutClassCss;
