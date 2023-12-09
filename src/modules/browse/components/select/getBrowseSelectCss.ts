import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getSelectStyles = (theme: Theme) => css`
  padding: ${theme.spacing(24, 0)} !important;
  font-size: 36px !important;
  line-height: 44px !important;

  ${theme.breakpoints.up("md")} {
    padding: ${theme.spacing(28, 0)} !important;
  }
`;

type BrowseSelectStyledComponents = "select";

const getBrowseSelectCss = (
  theme: Theme
): Record<BrowseSelectStyledComponents, SerializedStyles> => ({
  select: getSelectStyles(theme),
});

export default getBrowseSelectCss;
