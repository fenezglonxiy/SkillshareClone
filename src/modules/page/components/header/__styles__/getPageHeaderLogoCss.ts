import { SerializedStyles } from "@emotion/react";
import { PAGE_HEADER_LOGO_HEIGHT, PAGE_HEADER_LOGO_WIDTH } from "../constants";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  position: absolute;
  top: 40%;
  left: 49.5%;
  width: ${`${PAGE_HEADER_LOGO_WIDTH}px`};
  height: ${`${PAGE_HEADER_LOGO_HEIGHT}px`};
  transform: translate(-49.5%, -40%);

  ${theme.breakpoints.up("md")} {
    position: static;
    transform: none;
  }
`;

type PageHeaderLogoStyledComponents = "root";

const getPageHeaderLogoCss = (
  theme: Theme
): Record<PageHeaderLogoStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
});

export default getPageHeaderLogoCss;
