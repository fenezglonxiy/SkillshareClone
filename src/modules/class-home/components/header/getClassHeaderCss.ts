import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";
import {
  CLASS_HOME_MAX_WIDTH,
  XXL_CLASS_HOME_PADDING_LEFT,
} from "../constants";

const getRootStyles = (theme: Theme) => css`
  background: ${theme.palette.navy};
`;

const getContainerStyles = (theme: Theme) => css`
  max-width: ${CLASS_HOME_MAX_WIDTH}px;
  margin: 0 auto;

  ${theme.breakpoints.up("lg")} {
    display: flex;
    padding: ${theme.spacing(40, 26, 95)};
  }

  ${theme.breakpoints.up("xl")} {
    padding: ${theme.spacing(58, 26, 54)};
  }

  ${theme.breakpoints.up("xxl")} {
    padding: ${theme.spacing(58, XXL_CLASS_HOME_PADDING_LEFT, 54)};
  }
`;

const getVideoPlayerWrapperStyles = (theme: Theme) => css`
  min-width: 375px;
  aspect-ratio: 16/9;
  background-color: ${theme.palette.black};
`;

const getClassTitleContainerStyles = (theme: Theme) => css`
  flex: 1;
  padding: ${theme.spacing(24, 0, 24, 16)};

  ${theme.breakpoints.up("xs")} {
    padding: ${theme.spacing(24, 0, 32, 32)};
  }

  ${theme.breakpoints.up("lg")} {
    padding: ${theme.spacing(0, 0, 0, 40)};
  }
`;

const getClassTitleStyles = (theme: Theme) => css`
  ${theme.typography.h3};
  margin: ${theme.spacing(8, 0, 12)};

  ${theme.breakpoints.up("xs")} {
    ${theme.typography.h1};
  }
`;

const getClassBadgeWrapperStyles = (
  theme: Theme,
  classBadge?: "staffPick" | "original"
) => css`
  ${theme.breakpoints.up("lg")} {
    margin: ${theme.spacing(4, 0, 0)};

    ${classBadge === "staffPick" && `height: 18px;`};
    ${classBadge === "original" && `height: 22px;`};
  }
`;

const getClassBadgeStyles = (theme: Theme) => css`
  ${theme.breakpoints.up("lg")} {
    width: 100%;
    height: 100%;
  }
`;

const getTeacherLinkContainerStyles = () => css`
  display: flex;
  align-items: center;
`;

const getTeacherAvatarStyles = (theme: Theme) => css`
  display: none;
  width: 32px;
  height: 32px;

  ${theme.breakpoints.up("lg")} {
    display: block;
    margin: ${theme.spacing(0, 12, 0, 0)};
  }
`;

type ClassHeaderStyledComponents =
  | "root"
  | "container"
  | "videoPlayerWrapper"
  | "classTitleContainer"
  | "classTitle"
  | "classBadge"
  | "classBadgeWrapper"
  | "teacherLinkContainer"
  | "teacherAvatar";

const getClassHeaderCss = (
  theme: Theme,
  classBadge?: "staffPick" | "original"
): Record<ClassHeaderStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  container: getContainerStyles(theme),
  videoPlayerWrapper: getVideoPlayerWrapperStyles(theme),
  classTitleContainer: getClassTitleContainerStyles(theme),
  classTitle: getClassTitleStyles(theme),
  classBadgeWrapper: getClassBadgeWrapperStyles(theme, classBadge),
  classBadge: getClassBadgeStyles(theme),
  teacherLinkContainer: getTeacherLinkContainerStyles(),
  teacherAvatar: getTeacherAvatarStyles(theme),
});

export default getClassHeaderCss;
