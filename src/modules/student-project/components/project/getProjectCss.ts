import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = (theme: Theme) => css`
  padding: ${theme.spacing(24, 24, 0)};
  overflow-y: scroll;
`;

const getCopyProjectLinkBtnWrapperStyles = (theme: Theme) => css`
  text-align: right;
  margin-bottom: ${theme.spacing(24)};
`;

const getProjectStyles = (theme: Theme) => css`
  padding-bottom: ${theme.spacing(88)};
`;

const getProjectTitleStyles = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(12)};
`;

const getProjectThumbnailStyles = (theme: Theme) => css`
  width: 100%;
  margin-bottom: ${theme.spacing(50)};
`;

const getProjectContentWrapper = (theme: Theme) => css`
  ${theme.typography.body1};
`;

type ProjectStyledComponents =
  | "root"
  | "copyProjectLinkBtnWrapper"
  | "project"
  | "projectTitle"
  | "projectThumbnail"
  | "projectContentWrapper";

const getProjectCss = (
  theme: Theme
): Record<ProjectStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  copyProjectLinkBtnWrapper: getCopyProjectLinkBtnWrapperStyles(theme),
  project: getProjectStyles(theme),
  projectTitle: getProjectTitleStyles(theme),
  projectThumbnail: getProjectThumbnailStyles(theme),
  projectContentWrapper: getProjectContentWrapper(theme),
});

export default getProjectCss;
