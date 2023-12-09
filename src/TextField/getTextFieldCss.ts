import { SerializedStyles, css } from "@emotion/react";
import { Theme } from "@mui/material";
import generateEmotionClassNames from "../utils/generateEmotionClassNames";

export const { classes: textFieldClasses, classNames: textFieldClassNames } =
  generateEmotionClassNames("text-field", [
    "root",
    "focused",
    "formValidationLabel",
    "formSupportText",
  ]);

const getTextFieldCss = (theme: Theme): SerializedStyles => css`
  ${textFieldClassNames.formValidationLabel} {
    margin-top: ${theme.spacing(16)};

    & + ${textFieldClassNames.root} {
      margin-top: ${theme.spacing(12)};
    }
  }

  ${textFieldClassNames.formSupportText} {
    margin: ${theme.spacing(8, 0, 0)};
  }
`;

export default getTextFieldCss;
