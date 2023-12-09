import { Theme, css } from "@mui/material";

const getCommentListCss = (theme: Theme) => css`
  & > li:not(:last-of-type) {
    margin-bottom: ${theme.spacing(24)};
  }
`;

export default getCommentListCss;
