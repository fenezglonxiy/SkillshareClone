import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  min-height: 322px;
  padding: ${theme.spacing(8)};
  text-align: center;
  color: ${theme.palette.white};
  background: ${theme.palette.navy};
`;

const getLinkContainerStyles = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(15)};

  & > a:not(:last-of-type) {
    &::after {
      content: "·";
      display: inline-block;
      padding: ${theme.spacing(0, 8)};
      font-weight: bold;
    }
  }
`;

type MobileFooterStyledComponents = "root" | "linkContainer";

const getMobileFooterCss = (
  theme: Theme
): Record<MobileFooterStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  linkContainer: getLinkContainerStyles(theme),
});

export default getMobileFooterCss;
