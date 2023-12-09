import { Theme, css } from "@mui/material";

const getProjectSideInfoCss = (theme: Theme) => css`
  & > div:not(:last-of-type) {
    margin-bottom: ${theme.spacing(24)};
  }
`;

export default getProjectSideInfoCss;
