import { SerializedStyles } from "@emotion/react";
import { Theme, css } from "@mui/material";

const getLevelBarChartStyles = (theme: Theme) => css`
  ${theme.typography.caption};

  & > span {
    display: inline-block;
    width: calc(0.4em + 2px);
    border: 1px solid ${theme.palette.charcoal};
    background: ${theme.palette.concrete};
    border-radius: 2px;
  }

  &[data-value="1"] {
    & > span:first-of-type {
      background: ${theme.palette.yellow};
    }
  }

  &[data-value="2"] {
    & > span:nth-of-type(2) {
      background: ${theme.palette.yellow};
    }
  }

  &[data-value="3"] {
    & > span:nth-of-type(3) {
      background: ${theme.palette.yellow};
    }
  }

  &[data-value="4"] {
    & > span {
      background: ${theme.palette.yellow};
    }
  }
`;

const getBeginnerBarStyles = () => css`
  height: calc(0.93em + 2px);
`;

const getIntermediateBarStyles = () => css`
  height: calc(1.46em + 2px);
`;

const getAdvancedBarStyles = () => css`
  height: calc(2em + 2px);
`;

type ClassLevelIndicatorStyledComponents =
  | "levelBarChart"
  | "beginnerBar"
  | "intermediateBar"
  | "advancedBar";

const getClassLevelIndicatorCss = (
  theme: Theme
): Record<ClassLevelIndicatorStyledComponents, SerializedStyles> => ({
  levelBarChart: getLevelBarChartStyles(theme),
  beginnerBar: getBeginnerBarStyles(),
  intermediateBar: getIntermediateBarStyles(),
  advancedBar: getAdvancedBarStyles(),
});

export default getClassLevelIndicatorCss;
