import { Theme, css } from "@mui/material";
import {
  RIGHT_COLUMN_SPACING_INLINE,
  XS_LAYOUT_CONTAINER_PADDING_INLINE,
  XXS_LAYOUT_CONTAINER_PADDING_INLINE,
} from "../constants";
import { SerializedStyles } from "@emotion/react";

const getRootStyles = (theme: Theme) => css`
  margin: ${theme.spacing(32, -XXS_LAYOUT_CONTAINER_PADDING_INLINE)};

  ${theme.breakpoints.up("md")} {
    margin: ${theme.spacing(32, -XS_LAYOUT_CONTAINER_PADDING_INLINE)};
  }

  ${theme.breakpoints.up("md")} {
    margin: ${theme.spacing(48, RIGHT_COLUMN_SPACING_INLINE, 32)};
  }
`;

const getBackgroundWrapperStyles = (theme: Theme) => css`
  min-height: 220px;

  ${theme.breakpoints.up("md")} {
    min-height: 247px;
    border-radius: 8px;
  }
`;

const getBannerStyles = (theme: Theme) => css`
  ${getBackgroundWrapperStyles(theme)};
  background: url("/images/browse-banner-3.avif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const getOverlayStyles = (theme: Theme) => css`
  ${getBackgroundWrapperStyles(theme)};
  padding: ${theme.spacing(16)};
  color: ${theme.palette.white};
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%);

  & > h1 {
    display: none;
  }

  & > p {
    margin: ${theme.spacing(16, 0, 30)};
  }

  ${theme.breakpoints.up("md")} {
    padding: ${theme.spacing(32, 48)};

    & > h1 {
      display: block;
    }
  }
`;

type BrowseHeroStyledComponents = "root" | "banner" | "overlay";

const getBrowseHeroCss = (
  theme: Theme
): Record<BrowseHeroStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  banner: getBannerStyles(theme),
  overlay: getOverlayStyles(theme),
});

export default getBrowseHeroCss;
