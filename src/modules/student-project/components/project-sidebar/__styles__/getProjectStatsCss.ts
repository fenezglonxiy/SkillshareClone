import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getRootStyles = () => css`
  display: flex;
  align-items: center;
`;

const getLikeProjectButtonStyles = (theme: Theme) => css`
  padding: ${theme.spacing(8)};
  color: ${theme.palette.violet};
  border: 1px solid ${theme.palette.violet};
  border-radius: 100%;
`;

const getProjectStatsInfoStyles = (theme: Theme) => css`
  margin-left: ${theme.spacing(16)};
  ${theme.typography.caption};

  & > span {
    display: inline-block;

    &:nth-of-type(2) {
      &::before,
      &::after {
        content: "•";
        margin-inline: ${theme.spacing(4)};
      }
    }
  }
`;

type ProjectStatsStyledComponents =
  | "root"
  | "likeProjectButton"
  | "projectStatsInfo";

const getProjectStatsCss = (
  theme: Theme
): Record<ProjectStatsStyledComponents, SerializedStyles> => ({
  root: getRootStyles(),
  likeProjectButton: getLikeProjectButtonStyles(theme),
  projectStatsInfo: getProjectStatsInfoStyles(theme),
});

export default getProjectStatsCss;
