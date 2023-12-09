import { SerializedStyles, css } from "@emotion/react";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";

export const {
  classes: formControlLabelClasses,
  classNames: formControlLabelClassNames,
} = generateEmotionClassNames("formControlLabel", ["asterisk"]);

const getFormControlLabelCss = (): SerializedStyles => css`
  ${formControlLabelClassNames.asterisk} {
    display: none;
  }
`;

export default getFormControlLabelCss;
