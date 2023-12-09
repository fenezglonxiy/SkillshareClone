import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import { ClassExpectationMetRatingItemProps } from "../ClassExpectationMetRatingItem";

const getRootStyles = (theme: Theme) => css`
  margin-left: ${theme.spacing(10)};
`;

const getPercentageStyles = () => css`
  height: 22px;
  white-space: nowrap;
  text-align: left;
`;

const getPercentageBarStyles = (
  theme: Theme,
  percentage: ClassExpectationMetRatingItemProps["percentage"]
) => css`
  display: inline-block;
  width: calc(100% - 16px);
  height: 100%;
  background-color: ${theme.palette.white};
  border-radius: 4px;

  & > span {
    display: inline-block;
    width: ${percentage}%;
    height: 100%;
    background-color: ${theme.palette.yellow};
    border-radius: 4px;
  }
`;

const getPercentageStatStyles = (theme: Theme) => css`
  display: inline-block;
  vertical-align: top;
  margin: ${theme.spacing(2, 0, 0, 10)};
`;

type ClassExpectationMetRatingItemStyledComponents =
  | "root"
  | "percentage"
  | "percentageBar"
  | "percentageStat";

const getClassExpectationMetRatingItemCss = (
  theme: Theme,
  percentage: ClassExpectationMetRatingItemProps["percentage"]
): Record<ClassExpectationMetRatingItemStyledComponents, SerializedStyles> => ({
  root: getRootStyles(theme),
  percentage: getPercentageStyles(),
  percentageBar: getPercentageBarStyles(theme, percentage),
  percentageStat: getPercentageStatStyles(theme),
});

export default getClassExpectationMetRatingItemCss;
