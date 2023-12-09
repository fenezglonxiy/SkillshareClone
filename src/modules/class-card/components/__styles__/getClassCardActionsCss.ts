import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  padding: ${theme.spacing(0, 8, 8)};
  justify-content: space-between;

  & > * {
    position: relative;
    z-index: 10;
  }
`;

const getTeacherLinkStyles = (theme: Theme) => css`
  min-width: auto;
  min-height: auto;
  padding: 0;
  ${theme.typography.caption};
  color: ${theme.palette.navy};

  &:hover,
  &:focus {
    color: ${theme.palette.violet};
  }
`;

type ClassCardActionsStyledComponents = "root" | "teacherLink";

const getClassCardActionsCss = (
  theme: Theme
): Record<ClassCardActionsStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  teacherLink: getTeacherLinkStyles(theme),
});

export default getClassCardActionsCss;
