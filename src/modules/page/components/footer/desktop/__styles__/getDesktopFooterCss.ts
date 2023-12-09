import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  background: ${theme.palette.navy};
`;

const getMainStyles = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: ${theme.spacing(32, 30, 52)};

  ${theme.breakpoints.up("md")} {
    padding: ${theme.spacing(32, 56, 52)};
  }
`;

const getListStyles = (theme: Theme) => css`
  margin-top: ${theme.spacing(23)};

  & > * {
    margin-bottom: ${theme.spacing(8)};
  }
`;

const getExpandedStyles = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(16, 0, 24)};
  margin: ${theme.spacing(0, 56)};
  border-top: 1px solid ${theme.palette.wanderGreen};

  ${theme.breakpoints.up("md")} {
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const getExpandedLinkContainerStyles = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(40)};
`;

type DesktopFooterStyledComponents =
  | "root"
  | "main"
  | "list"
  | "expanded"
  | "expandedLinkContainer";

const getDesktopFooterCss = (
  theme: Theme
): Record<DesktopFooterStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  main: getMainStyles(theme),
  list: getListStyles(theme),
  expanded: getExpandedStyles(theme),
  expandedLinkContainer: getExpandedLinkContainerStyles(theme),
});

export default getDesktopFooterCss;
