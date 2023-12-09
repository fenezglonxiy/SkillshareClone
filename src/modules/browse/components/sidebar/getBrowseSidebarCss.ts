import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getSectionStyles = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(32)};
`;

const getHeadingStyles = (theme: Theme) => css`
  padding-left: ${theme.spacing(16)};
  margin-bottom: ${theme.spacing(8)};

  & > p {
    margin-bottom: ${theme.spacing(4)};
  }
`;

const getLinkStyles = (theme: Theme) => css`
  text-align: left;
  color: ${theme.palette.navy};
  font-weight: 400;
`;

const getAllClassesLinkStyles = () => css`
  font-weight: 700;
`;

const getSelectedLinkStyles = (theme: Theme) => css`
  font-weight: 700;
  color: ${theme.palette.white} !important;
  background: ${theme.palette.navy} !important;
`;

type BrowseSidebarStyledComponents =
  | "section"
  | "heading"
  | "link"
  | "allClassesLink"
  | "selectedLink";

const getBrowseSidebarCss = (
  theme: Theme
): Record<BrowseSidebarStyledComponents, SerializedStyles> => ({
  section: getSectionStyles(theme),
  heading: getHeadingStyles(theme),
  link: getLinkStyles(theme),
  allClassesLink: getAllClassesLinkStyles(),
  selectedLink: getSelectedLinkStyles(theme),
});

export default getBrowseSidebarCss;
