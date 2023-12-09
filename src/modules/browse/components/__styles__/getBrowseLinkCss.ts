import { Theme, css } from "@mui/material";

const getBrowseLinkCss = (theme: Theme) => css`
  justify-content: flex-start;
  padding: ${theme.spacing(0, 0, 0, 16)};
  transition: none;
  ${theme.typography.body2Bold};

  &:focus {
    color: ${theme.palette.white};
    background-color: ${theme.palette.navy};
  }
`;

export default getBrowseLinkCss;
