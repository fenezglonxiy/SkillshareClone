import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  position: relative;
  display: flex;
  align-items: center;
  margin: ${theme.spacing(0, 0, 32)};
  z-index: 10;
`;

const getTeacherAndClassInfoStyles = (theme: Theme) => css`
  margin: ${theme.spacing(0, 0, 0, 16)};
`;

type FeaturedTeacherLinkStyledComponents = "root" | "teacherAndClassInfo";

const getFeaturedTeacherLinkCss = (
  theme: Theme
): Record<FeaturedTeacherLinkStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  teacherAndClassInfo: getTeacherAndClassInfoStyles(theme),
});

export default getFeaturedTeacherLinkCss;
