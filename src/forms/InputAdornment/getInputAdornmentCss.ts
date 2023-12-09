import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";

export const {
  classes: inputAdornmentClasses,
  classNames: inputAdornmentClassNames,
} = generateEmotionClassNames("input-adornment", [
  "root",
  "top",
  "center",
  "filled",
  "standard",
  "valid",
  "invalid",
]);

const getInputAdornmentCss = (theme: Theme): SerializedStyles => css`
  margin: 0;
  height: unset;
  max-height: unset;
  align-self: stretch;
  padding: ${theme.spacing(0, 16)};

  &${inputAdornmentClassNames.top} {
    position: absolute;
    top: 0;
    right: 0;
    align-items: flex-start;
    padding-top: ${theme.spacing(12)};
  }

  &${inputAdornmentClassNames.center} {
    align-items: center;
  }

  &${inputAdornmentClassNames.standard} {
    background: unset;
  }
`;

export default getInputAdornmentCss;
