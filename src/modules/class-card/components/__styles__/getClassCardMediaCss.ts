import { SerializedStyles, css } from "@emotion/react";
import generateEmotionClassNames from "../../../../utils/generateEmotionClassNames";
import { Theme } from "@mui/material";

export const { classes: classMediaClasses, classNames: classMediaClassNames } =
  generateEmotionClassNames("classMedia", ["root", "playBtn"]);

const getRootStyles = () => css`
  position: relative;
  flex: 1;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const getClassBadgeWrapperStyles = (theme: Theme) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: ${theme.spacing(12)};
  background: linear-gradient(rgba(5, 5, 5, 0.6), rgba(216, 216, 216, 0));
`;

const getPlayBtnStyles = () => css`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

type ClassCardMediaStyledComponents = "root" | "classBadgeWrapper" | "playBtn";

const getClassCardMediaCss = (
  theme: Theme
): Record<ClassCardMediaStyledComponents, SerializedStyles> => ({
  root: getRootStyles(),
  classBadgeWrapper: getClassBadgeWrapperStyles(theme),
  playBtn: getPlayBtnStyles(),
});

export default getClassCardMediaCss;
