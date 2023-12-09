import { SerializedStyles, css } from "@emotion/react";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";
import { Theme } from "@mui/material";

export const { classes: checkboxClasses, classNames: checkboxClassNames } =
  generateEmotionClassNames("checkbox", [
    "label",
    "labelText",
    "uncheckedIcon",
    "checkedIcon",
  ]);

const getCheckboxCss = (theme: Theme): SerializedStyles => css`
  ${checkboxClassNames.labelText} {
    ${theme.typography.body2};
  }

  ${checkboxClassNames.uncheckedIcon} {
    border: 1px solid ${theme.palette.navy};
    border-radius: 4px;
  }

  ${checkboxClassNames.checkedIcon} {
    border: 1px solid ${theme.palette.navy};
    background-color: ${theme.palette.violet};
    border-radius: 4px;
  }

  &:hover,
  &:focus {
    ${checkboxClassNames.labelText} {
      color: ${theme.palette.violet};
    }

    ${checkboxClassNames.uncheckedIcon} {
      border-color: ${theme.palette.violet};
    }
  }
`;

export default getCheckboxCss;
