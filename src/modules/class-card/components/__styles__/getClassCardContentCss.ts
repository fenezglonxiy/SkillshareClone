import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";
import generateEmotionClassNames from "../../../../utils/generateEmotionClassNames";

export const {
  classes: classCardContentClasses,
  classNames: classCardContentClassNames,
} = generateEmotionClassNames("ClassCardContent", ["classTitle"]);

const getRootStyles = (theme: Theme, featured?: boolean) => css`
  flex: 1;
  padding: ${theme.spacing(8, 8, 0)};

  ${featured && getFeaturedRootStyles(theme)};
`;

const getFeaturedRootStyles = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacing(8, 8, 8, 16)} !important;
`;

const getClassStatsStyles = () => css`
  display: flex;
  justify-content: space-between;

  & > p {
    line-height: 24px;
  }
`;

const getClassTitleStyles = (theme: Theme, featured?: boolean) => css`
  ${!featured
    ? getNormalClassTitleStyles(theme)
    : getFeaturedClassTitleStyles(theme)}
`;

const getNormalClassTitleStyles = (theme: Theme) => css`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: ${theme.spacing(8, 0, 0)};
  height: 60px;
`;

const getFeaturedClassTitleStyles = (theme: Theme) => css`
  margin: ${theme.spacing(0, 0, 24)};

  ${theme.breakpoints.up("md")} {
    margin: ${theme.spacing(8, 0, 24)};
  }
`;

type ClassCardContentStyledComponents = "root" | "classStats" | "classTitle";

const getClassCardContentCss = (
  theme: Theme,
  featured?: boolean
): Record<ClassCardContentStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme, featured),
  classStats: getClassStatsStyles(),
  classTitle: getClassTitleStyles(theme, featured),
});

export default getClassCardContentCss;
