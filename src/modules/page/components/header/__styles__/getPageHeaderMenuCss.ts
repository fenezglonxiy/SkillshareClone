import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getTooltipPopperStyles = (theme: Theme) => css`
  position: fixed !important;
  inset: 0 20vw 0 0 !important;
  transform: translate(0, 0) !important;

  ${theme.breakpoints.up("sm")} {
    inset: 0 50vw 0 0 !important;
  }
`;

const getTooltipStyles = (theme: Theme) => css`
  height: 100%;
  padding: ${theme.spacing(32, 24, 16)} !important;
  margin: 0 !important;
  border-radius: 0 !important;
  transition: none !important;
`;

const getNavWrapperStyles = (theme: Theme) => css`
  color: ${theme.palette.navy};
  margin-top: ${theme.spacing(32)};
`;

const getNavItemStyles = (theme: Theme) => css`
  border-bottom: 1px solid ${theme.palette.concrete};

  a {
    width: 100%;
    padding: ${theme.spacing(16, 0)};
  }
`;

type PageHeaderMenuStyledComponents =
  | "tooltip"
  | "tooltipPopper"
  | "navWrapper"
  | "navItem";

const getPageHeaderMenuCss = (
  theme: Theme
): Record<PageHeaderMenuStyledComponents, SerializedStyles> => ({
  tooltipPopper: getTooltipPopperStyles(theme),
  tooltip: getTooltipStyles(theme),
  navWrapper: getNavWrapperStyles(theme),
  navItem: getNavItemStyles(theme),
});

export default getPageHeaderMenuCss;
