import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";
import { CLASS_BODY_PADDING_INLINE } from "../constants";
import {
  CLASS_HOME_MAX_WIDTH,
  XXL_CLASS_HOME_PADDING_LEFT,
} from "../../constants";

const getRootStyles = (theme: Theme) => css`
  margin: ${theme.spacing(0, -CLASS_BODY_PADDING_INLINE)};
  background: ${theme.palette.violet};
  text-align: center;

  ${theme.breakpoints.up("xs")} {
    text-align: left;
  }

  ${theme.breakpoints.up("lg")} {
    margin: 0;
  }
`;

const getAuthPromoBannerDetailsStyles = (theme: Theme) => css`
  position: relative;
  max-width: ${CLASS_HOME_MAX_WIDTH}px;
  margin: 0 auto;
  padding: ${theme.spacing(48, CLASS_BODY_PADDING_INLINE, 52)};

  ${theme.breakpoints.up("lg")} {
    padding: ${theme.spacing(48, 0, 52, 24)};
  }

  ${theme.breakpoints.up("xxl")} {
    padding: ${theme.spacing(48, 0, 52, XXL_CLASS_HOME_PADDING_LEFT)};
  }
`;

const getScribbleStyles = (theme: Theme) => css`
  display: none;
  position: absolute;
  width: 100%;
  z-index: 1;

  & > svg {
    position: absolute;
    right: 0;
    transform: translate(18%, -17%);
  }

  ${theme.breakpoints.up("lg")} {
    display: block;
  }

  ${theme.breakpoints.up("xxl")} {
    & > svg {
      transform: translate(4%, -18%);
    }
  }

  ${theme.breakpoints.up("xxxl")} {
    & > svg {
      transform: translate(5px, -16%);
    }
  }
`;

const getBlurbContainerStyles = (theme: Theme) => css`
  ${theme.breakpoints.up("xs")} {
    display: flex;
    justify-content: space-between;
  }

  ${theme.breakpoints.up("lg")} {
    max-width: 54%;
  }

  ${theme.breakpoints.up("xxl")} {
    max-width: 60%;
  }
`;

const getBlurbStyles = (theme: Theme) => css`
  max-width: 272px;
  margin-top: ${theme.spacing(32)};
  margin-inline: auto;

  ${theme.breakpoints.up("xs")} {
    max-width: 160px;
    margin-inline: 0;
  }

  ${theme.breakpoints.up("xxl")} {
    max-width: 200px;
  }
`;

const getDividerStyles = (theme: Theme) => css`
  max-width: 32px;
  margin-inline: auto;
  margin-bottom: ${theme.spacing(16)};

  ${theme.breakpoints.up("xs")} {
    margin-inline: 0;
  }
`;

type AuthPromoBannerStyledComponents =
  | "root"
  | "authPromoBannerDetails"
  | "scribble"
  | "blurbContainer"
  | "blurb"
  | "divider";

const getAuthPromoBannerCss = (
  theme: Theme
): Record<AuthPromoBannerStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  authPromoBannerDetails: getAuthPromoBannerDetailsStyles(theme),
  scribble: getScribbleStyles(theme),
  blurbContainer: getBlurbContainerStyles(theme),
  blurb: getBlurbStyles(theme),
  divider: getDividerStyles(theme),
});

export default getAuthPromoBannerCss;
