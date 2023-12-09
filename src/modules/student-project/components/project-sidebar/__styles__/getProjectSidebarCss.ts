import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import { DESKTOP_STUDENT_PROJECT_MEDIA_QUERY } from "../../constants";

const getBackgroundWrapperStyles = (theme: Theme) => css`
  background-color: ${theme.palette.canvas};
`;

const getRootStyles = (theme: Theme) => css`
  padding: ${theme.spacing(32, 16, 16)};
  overflow-y: scroll;
  height: calc(90vh + 24px);

  ${DESKTOP_STUDENT_PROJECT_MEDIA_QUERY} {
    min-width: 407px;
    padding: ${theme.spacing(24, 16, 0)};
  }
`;

const getContainerStyles = (theme: Theme) => css`
  padding: ${theme.spacing(16, 16, 128)};

  & > hr {
    margin-bottom: ${theme.spacing(16)};
  }

  & > div > p + * {
    margin: ${theme.spacing(24, 0, 16)};
  }

  ${DESKTOP_STUDENT_PROJECT_MEDIA_QUERY} {
    padding: ${theme.spacing(0, 0, 128)};
  }
`;

const getProjectSideInfoStyles = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(24)};
`;

const getProjectCommentsStyles = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(32)};
`;

type ProjectSidebarStyledComponents =
  | "backgroundWrapper"
  | "root"
  | "container"
  | "projectSideInfo"
  | "projectComments";

const getProjectSidebarCss = (
  theme: Theme
): Record<ProjectSidebarStyledComponents, SerializedStyles> => ({
  backgroundWrapper: getBackgroundWrapperStyles(theme),
  root: getRootStyles(theme),
  container: getContainerStyles(theme),
  projectSideInfo: getProjectSideInfoStyles(theme),
  projectComments: getProjectCommentsStyles(theme),
});

export default getProjectSidebarCss;
