import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../../utils/generateEmotionClassNames";

export const {
  classes: formControlClasses,
  classNames: formControlClassNames,
} = generateEmotionClassNames("form-control", [
  "root",
  "formLabel",
  "formValidationLabel",
  "formStatusText",
  "formSupportText",
]);

const getFormControlCss = (theme: Theme): SerializedStyles => css`
  &${formControlClassNames.root} {
    max-width: 100%;
  }

  ${formControlClassNames.formLabel} {
    margin: ${theme.spacing(0, 0, 4)};
  }

  ${formControlClassNames.formValidationLabel} {
    max-width: 100%;
    width: max-content;
    margin: ${theme.spacing(12, 0, 0)};
  }

  ${formControlClassNames.formStatusText} {
    margin: ${theme.spacing(0, 0, 4)};
  }

  ${formControlClassNames.formSupportText} {
    margin: ${theme.spacing(4, 0, 4)};
  }
`;

export default getFormControlCss;
