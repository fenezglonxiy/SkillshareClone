import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../../../utils/generateEmotionClassNames";

export const {
  classes: selectOptionClasses,
  classNames: selectOptionClassNames,
} = generateEmotionClassNames("selectOption", ["container", "selected"]);

const getIconDisabledStyles = (theme: Theme) => css`
  ${selectOptionClassNames.container} {
    width: 100%;
    ${theme.typography.body2};

    & a {
      display: flex;
      align-items: center;
      height: 48px;
      padding: ${theme.spacing(0, 14)};
    }
  }

  &:hover,
  &:focus {
    background: ${theme.palette.canvas};
  }

  &${selectOptionClassNames.selected} {
    color: ${theme.palette.white};
    background: ${theme.palette.navy};
  }
`;

const getSelectOptionCss = (
  theme: Theme,
  iconDisabled: boolean
): SerializedStyles => css`
  display: flex;
  justify-content: flex-start;
  ${iconDisabled && getIconDisabledStyles(theme)};
`;

export default getSelectOptionCss;
