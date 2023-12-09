import { Theme, css } from "@mui/material";
import { PAGE_HEADER_HEIGHT, PAGE_HEADER_LOGO_WIDTH } from "../constants";
import { SerializedStyles } from "@emotion/react";

const getRootStyles = (theme: Theme) => css`
  position: relative;
  width: 100%;
  background: ${theme.palette.navy};
`;

const getRootHomePagePlacementStyles = (theme: Theme) => css`
  ${theme.breakpoints.up("md")} {
    position: absolute;
    inset: 0 auto auto 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: ${theme.zIndex.appBar};
  }
`;

const getContainerStyles = (theme: Theme) => css`
  height: ${`${PAGE_HEADER_HEIGHT}px`};
  padding: ${theme.spacing(16, 20)};

  ${theme.breakpoints.up("md")} {
    display: flex;
    align-items: center;
  }
`;

const getNavContainerStyles = (theme: Theme) => css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div:last-of-type {
    padding: ${theme.spacing(0, 9)};
  }

  ${theme.breakpoints.up("md")} {
    flex-basis: ${`calc(100% - ${PAGE_HEADER_LOGO_WIDTH}px)`};
    padding-left: 24px;
  }
`;

type PageHeaderStyledComponents =
  | "root"
  | "container"
  | "navContainer"
  | "rootHomePagePlacement";

const getPageHeaderCss = (
  theme: Theme
): Record<PageHeaderStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  container: getContainerStyles(theme),
  navContainer: getNavContainerStyles(theme),
  rootHomePagePlacement: getRootHomePagePlacementStyles(theme),
});

export default getPageHeaderCss;
