import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getTeacherApplicationLayoutRootStyles = (theme: Theme) => css`
  background-image: url("/images/svg/teacher-apl/scribble.svg");
  background-position: bottom 0 right 0;
  background-repeat: no-repeat;

  ${theme.breakpoints.down("md")} {
    background-size: 558px 394px;
    background-position: bottom ${theme.spacing(-48)} right 0;
  }
`;

const getTeacherApplicationLayoutContentStyles = (theme: Theme) => css`
  height: calc(100dvh - 80px);
  max-width: 580px;
  margin: 0 auto;
  padding: ${theme.spacing(0, 36)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing(16)};
  text-align: center;

  ${theme.breakpoints.up("xl")} {
    max-width: 766px;
  }
`;

const getTeacherApplicationLayoutWelcomeStyles = (theme: Theme) => css`
  ${theme.typography.body1Bold};

  ${theme.breakpoints.up("xl")} {
    ${theme.typography.h3};
  }
`;

const getTeacherApplicationLayoutThanksStyles = (theme: Theme) => css`
  ${theme.typography.h1};

  ${theme.breakpoints.up("xl")} {
    ${theme.typography.display};
  }
`;

const getTeacherApplicationLayoutAskStyles = (theme: Theme) => css`
  ${theme.breakpoints.up("xl")} {
    ${theme.typography.h3};
    font-weight: normal;
  }
`;

type TeacherApplicationLayoutStyledComponents =
  | "root"
  | "content"
  | "welcome"
  | "thanks"
  | "ask";

const getTeacherApplicationLayoutCss = (
  theme: Theme
): Record<TeacherApplicationLayoutStyledComponents, SerializedStyles> => ({
  root: getTeacherApplicationLayoutRootStyles(theme),
  content: getTeacherApplicationLayoutContentStyles(theme),
  welcome: getTeacherApplicationLayoutWelcomeStyles(theme),
  thanks: getTeacherApplicationLayoutThanksStyles(theme),
  ask: getTeacherApplicationLayoutAskStyles(theme),
});

export default getTeacherApplicationLayoutCss;
