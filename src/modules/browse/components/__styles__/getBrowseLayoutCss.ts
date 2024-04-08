import { Theme, css } from "@mui/material";
import {
  RIGHT_COLUMN_SPACING_INLINE,
  XS_LAYOUT_CONTAINER_PADDING_INLINE,
  XXS_LAYOUT_CONTAINER_PADDING_INLINE,
} from "../constants";
import { SerializedStyles } from "@emotion/react";

const getContainerStyles = (theme: Theme) => css`
  padding: ${theme.spacing(0, XXS_LAYOUT_CONTAINER_PADDING_INLINE, 80)};

  ${theme.breakpoints.up("md")} {
    padding: ${theme.spacing(0, XS_LAYOUT_CONTAINER_PADDING_INLINE, 80)};
  }

  ${theme.breakpoints.up("md")} {
    display: grid;
    grid-template-columns: 25% 75%;
  }
`;

const getLeftColumnStyles = (theme: Theme) => css`
  ${theme.breakpoints.up("md")} {
    padding: ${theme.spacing(48, 16)};
  }
`;

const getRightColumnStyles = (theme: Theme) => css`
  & > hr {
    display: none;
    margin: ${theme.spacing(32, RIGHT_COLUMN_SPACING_INLINE, 16)};

    ${theme.breakpoints.up("md")} {
      display: block;
    }
  }
`;

const getClassCardWrapperStyles = (theme: Theme) => css`
  padding: ${theme.spacing(12, RIGHT_COLUMN_SPACING_INLINE)};
`;

const getSeeAllBtnWrapperStyles = (theme: Theme) => css`
  text-align: center;
  margin-top: ${theme.spacing(48)};
`;

type BrowseLayoutStyledComponents =
  | "container"
  | "leftColumn"
  | "rightColumn"
  | "classCardWrapper"
  | "seeAllBtnWrapper";

const getBrowseLayoutCss = (
  theme: Theme
): Record<BrowseLayoutStyledComponents, SerializedStyles> => ({
  container: getContainerStyles(theme),
  leftColumn: getLeftColumnStyles(theme),
  rightColumn: getRightColumnStyles(theme),
  classCardWrapper: getClassCardWrapperStyles(theme),
  seeAllBtnWrapper: getSeeAllBtnWrapperStyles(theme),
});

export default getBrowseLayoutCss;
