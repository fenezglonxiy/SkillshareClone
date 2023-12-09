import { Theme, css } from "@mui/material";
import { CLASS_BODY_PADDING_INLINE } from "../constants";
import { SerializedStyles } from "@emotion/react";
import {
  CLASS_HOME_MAX_WIDTH,
  XXL_CLASS_HOME_PADDING_LEFT,
} from "../../constants";

const getRootStyles = (theme: Theme) => css`
  color: ${theme.palette.navy};
`;

const getClassDetailsStyles = (theme: Theme) => css`
  position: relative;
  max-width: ${CLASS_HOME_MAX_WIDTH}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  padding: ${theme.spacing(0, CLASS_BODY_PADDING_INLINE, 0)};

  ${theme.breakpoints.up("lg")} {
    flex-direction: row;
    justify-content: space-between;
  }

  ${theme.breakpoints.up("xxl")} {
    padding: ${theme.spacing(
      0,
      CLASS_BODY_PADDING_INLINE,
      0,
      XXL_CLASS_HOME_PADDING_LEFT
    )};
  }
`;

const getClassMainContentStyles = (theme: Theme) => css`
  & > *:where(:not(:last-of-type)) {
    padding-bottom: ${theme.spacing(32)};
    border-bottom: 1px solid ${theme.palette.concrete};
    margin-bottom: ${theme.spacing(32)};
  }

  & h3 {
    margin-bottom: ${theme.spacing(16)};
  }

  ${theme.breakpoints.up("lg")} {
    max-width: calc(100% - 378px);
  }

  ${theme.breakpoints.up("xxl")} {
    max-width: calc(100% - 420px);
  }
`;

const getClassReviewsWrapper = (theme: Theme) => css`
  position: relative;
  padding: ${theme.spacing(32, 0, 40)};
  background-color: ${theme.palette.white};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10000px;
    width: 10000px;
    height: 100%;
    background-color: ${theme.palette.white};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -10000px;
    width: 10000px;
    height: 100%;
    background-color: ${theme.palette.white};
  }
`;

const getClassSidebarStyles = (theme: Theme) => css`
  ${theme.breakpoints.up("lg")} {
    margin-top: ${theme.spacing(-358)};
  }

  ${theme.breakpoints.up("xxxl")} {
    margin-top: ${theme.spacing(-370)};
  }
`;

type ClassBodyStyledComponents =
  | "root"
  | "classDetails"
  | "classMainContent"
  | "classReviewsWrapper"
  | "classSidebar";

const getClassBodyCss = (
  theme: Theme
): Record<ClassBodyStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  classDetails: getClassDetailsStyles(theme),
  classMainContent: getClassMainContentStyles(theme),
  classReviewsWrapper: getClassReviewsWrapper(theme),
  classSidebar: getClassSidebarStyles(theme),
});

export default getClassBodyCss;
