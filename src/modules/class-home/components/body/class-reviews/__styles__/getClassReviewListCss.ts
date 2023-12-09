import { Theme, css } from "@mui/material";

const getClassReviewListCss = (theme: Theme) => css`
  & > li {
    margin-bottom: ${theme.spacing(30)};
  }
`;

export default getClassReviewListCss;
