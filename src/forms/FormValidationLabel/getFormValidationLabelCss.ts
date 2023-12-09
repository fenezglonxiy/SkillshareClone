import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";

export const {
  classes: formValidationLabelClasses,
  classNames: formValidationLabelClassNames,
} = generateEmotionClassNames("formValidationLabel", ["root"]);

const getFormValidationLabelCss = (theme: Theme): SerializedStyles => css`
  &${formValidationLabelClassNames.root} {
    fill: transparent;
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: ${theme.spacing(4, 8)};
    ${theme.typography.h4}
  }
`;

export default getFormValidationLabelCss;
