import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../../../utils/generateEmotionClassNames";
import { SelectOptionProps } from "./SelectOption";

export const {
  classes: selectOptionClasses,
  classNames: selectOptionClassNames,
} = generateEmotionClassNames("selectOption", ["selected", "container"]);

const getSelectOptionCss = (
  theme: Theme,
  props: SelectOptionProps
): SerializedStyles => css`
  display: flex;
  justify-content: flex-start;

  ${selectOptionClassNames.container} {
    width: 100%;
    ${theme.typography.body2};

    & > div:last-of-type {
      display: flex;
      align-items: center;
      height: 48px;
      padding: ${theme.spacing(0, 14)};
    }
  }

  &:hover,
  &:focus {
    background-color: ${theme.palette.canvas};
  }

  &${selectOptionClassNames.selected} {
    color: ${!props.invertedSelectedColor
      ? theme.palette.white
      : theme.palette.navy};
    background-color: ${!props.invertedSelectedColor
      ? theme.palette.navy
      : theme.palette.concrete};

    ${selectOptionClassNames.container} {
      font-weight: bold;
    }
  }
`;

export default getSelectOptionCss;
